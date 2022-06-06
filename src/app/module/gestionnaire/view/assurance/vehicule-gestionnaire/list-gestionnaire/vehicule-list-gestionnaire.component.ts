import {Component, OnInit} from '@angular/core';
import {VehiculeService} from 'src/app/controller/service/Vehicule.service';
import {VehiculeVo} from 'src/app/controller/model/Vehicule.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import { CarburantService } from 'src/app/controller/service/Carburant.service';
import { TypeVehiculeService } from 'src/app/controller/service/TypeVehicule.service';
import { ClientService } from 'src/app/controller/service/Client.service';
import { ContratService } from 'src/app/controller/service/Contrat.service';
import { MarqueService } from 'src/app/controller/service/Marque.service';

import {MarqueVo} from 'src/app/controller/model/Marque.model';
import {TypeVehiculeVo} from 'src/app/controller/model/TypeVehicule.model';
import {CarburantVo} from 'src/app/controller/model/Carburant.model';
import {ClientVo} from 'src/app/controller/model/Client.model';
import {ContratVo} from 'src/app/controller/model/Contrat.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import { ExportService } from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-vehicule-list-gestionnaire',
  templateUrl: './vehicule-list-gestionnaire.component.html',
  styleUrls: ['./vehicule-list-gestionnaire.component.css']
})
export class VehiculeListGestionnaireComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Vehicule';
    carburants :Array<CarburantVo>;
    typeVehicules :Array<TypeVehiculeVo>;
    clients :Array<ClientVo>;
    contrats :Array<ContratVo>;
    marques :Array<MarqueVo>;


    constructor(private datePipe: DatePipe, private vehiculeService: VehiculeService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
        , private carburantService: CarburantService
        , private typeVehiculeService: TypeVehiculeService
        , private clientService: ClientService
        , private contratService: ContratService
        , private marqueService: MarqueService
) { }

    ngOnInit() : void {
      this.loadVehicules();
      this.initExport();
      this.initCol();
      this.loadCarburant();
      this.loadTypeVehicule();
      this.loadClient();
      this.loadContrat();
      this.loadMarque();
    }
    
    // methods
      public async loadVehicules(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Vehicule', 'list');
        isPermistted ? this.vehiculeService.findAll().subscribe(vehicules => this.vehicules = vehicules,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.vehiculeService.findByCriteria(this.searchVehicule).subscribe(vehicules=>{
            
            this.vehicules = vehicules;
           // this.searchVehicule = new VehiculeVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'reference', header: 'Reference'},
                            {field: 'codeVerification', header: 'Code verification'},
                            {field: 'matricule', header: 'Matricule'},
                            {field: 'cylindree', header: 'Cylindree'},
                            {field: 'version', header: 'Version'},
                            {field: 'poidsEncharge', header: 'Poids encharge'},
                            {field: 'nombrePlaces', header: 'Nombre places'},
                            {field: 'puissanceFiscale', header: 'Puissance fiscale'},
                        {field: 'carburant?.libelle', header: 'Carburant'},
                        {field: 'typeVehicule?.libelle', header: 'Type vehicule'},
                        {field: 'client?.cin', header: 'Client'},
                        {field: 'contrat?.numAttestation', header: 'Contrat'},
                        {field: 'marque?.libelle', header: 'Marque'},
        ];
    }
    
    public async editVehicule(vehicule: VehiculeVo){
        const isPermistted = await this.roleService.isPermitted('Vehicule', 'edit');
         if(isPermistted){
          this.vehiculeService.findByIdWithAssociatedList(vehicule).subscribe(res => {
           this.selectedVehicule = res;
            this.editVehiculeDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewVehicule(vehicule: VehiculeVo){
        const isPermistted = await this.roleService.isPermitted('Vehicule', 'view');
        if(isPermistted){
           this.vehiculeService.findByIdWithAssociatedList(vehicule).subscribe(res => {
           this.selectedVehicule = res;
            this.viewVehiculeDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateVehicule(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedVehicule = new VehiculeVo();
            this.createVehiculeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteVehicule(vehicule: VehiculeVo){
       const isPermistted = await this.roleService.isPermitted('Vehicule', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Vehicule) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.vehiculeService.delete(vehicule).subscribe(status=>{
                          if(status > 0){
                          const position = this.vehicules.indexOf(vehicule);
                          position > -1 ? this.vehicules.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Vehicule Supprimé',
                        life: 3000
                    });
                                     }

                    },error=>console.log(error))
                             }
                     });
              }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'Problème de permission'
              });
             }
    }

public async loadCarburant(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Vehicule', 'list');
    isPermistted ? this.carburantService.findAll().subscribe(carburants => this.carburants = carburants,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadTypeVehicule(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Vehicule', 'list');
    isPermistted ? this.typeVehiculeService.findAll().subscribe(typeVehicules => this.typeVehicules = typeVehicules,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadClient(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Vehicule', 'list');
    isPermistted ? this.clientService.findAll().subscribe(clients => this.clients = clients,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadContrat(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Vehicule', 'list');
    isPermistted ? this.contratService.findAll().subscribe(contrats => this.contrats = contrats,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadMarque(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Vehicule', 'list');
    isPermistted ? this.marqueService.findAll().subscribe(marques => this.marques = marques,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateVehicule(vehicule: VehiculeVo) {

     this.vehiculeService.findByIdWithAssociatedList(vehicule).subscribe(
	 res => {
	       this.initDuplicateVehicule(res);
	       this.selectedVehicule = res;
	       this.selectedVehicule.id = null;
            this.createVehiculeDialog = true;

});

	}

	initDuplicateVehicule(res: VehiculeVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.vehicules.map(e => {
    return {
                    'Reference': e.reference ,
                    'Code verification': e.codeVerification ,
                    'Matricule': e.matricule ,
                    'Cylindree': e.cylindree ,
                    'Version': e.version ,
                    'Poids encharge': e.poidsEncharge ,
                    'Nombre places': e.nombrePlaces ,
                    'Puissance fiscale': e.puissanceFiscale ,
            'Carburant': e.carburantVo?.libelle ,
            'Type vehicule': e.typeVehiculeVo?.libelle ,
            'Client': e.clientVo?.cin ,
            'Contrat': e.contratVo?.numAttestation ,
            'Marque': e.marqueVo?.libelle ,
     }
      });

      this.criteriaData = [{
            'Reference': this.searchVehicule.reference ? this.searchVehicule.reference : environment.emptyForExport ,
            'Code verification': this.searchVehicule.codeVerification ? this.searchVehicule.codeVerification : environment.emptyForExport ,
            'Matricule': this.searchVehicule.matricule ? this.searchVehicule.matricule : environment.emptyForExport ,
            'Cylindree Min': this.searchVehicule.cylindreeMin ? this.searchVehicule.cylindreeMin : environment.emptyForExport ,
            'Cylindree Max': this.searchVehicule.cylindreeMax ? this.searchVehicule.cylindreeMax : environment.emptyForExport ,
            'Version': this.searchVehicule.version ? this.searchVehicule.version : environment.emptyForExport ,
            'Poids encharge Min': this.searchVehicule.poidsEnchargeMin ? this.searchVehicule.poidsEnchargeMin : environment.emptyForExport ,
            'Poids encharge Max': this.searchVehicule.poidsEnchargeMax ? this.searchVehicule.poidsEnchargeMax : environment.emptyForExport ,
            'Nombre places Min': this.searchVehicule.nombrePlacesMin ? this.searchVehicule.nombrePlacesMin : environment.emptyForExport ,
            'Nombre places Max': this.searchVehicule.nombrePlacesMax ? this.searchVehicule.nombrePlacesMax : environment.emptyForExport ,
            'Puissance fiscale': this.searchVehicule.puissanceFiscale ? this.searchVehicule.puissanceFiscale : environment.emptyForExport ,
        'Carburant': this.searchVehicule.carburantVo?.libelle ? this.searchVehicule.carburantVo?.libelle : environment.emptyForExport ,
        'Type vehicule': this.searchVehicule.typeVehiculeVo?.libelle ? this.searchVehicule.typeVehiculeVo?.libelle : environment.emptyForExport ,
        'Client': this.searchVehicule.clientVo?.cin ? this.searchVehicule.clientVo?.cin : environment.emptyForExport ,
        'Contrat': this.searchVehicule.contratVo?.numAttestation ? this.searchVehicule.contratVo?.numAttestation : environment.emptyForExport ,
        'Marque': this.searchVehicule.marqueVo?.libelle ? this.searchVehicule.marqueVo?.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get vehicules() : Array<VehiculeVo> {
           return this.vehiculeService.vehicules;
       }
    set vehicules(value: Array<VehiculeVo>) {
        this.vehiculeService.vehicules = value;
       }

    get vehiculeSelections() : Array<VehiculeVo> {
           return this.vehiculeService.vehiculeSelections;
       }
    set vehiculeSelections(value: Array<VehiculeVo>) {
        this.vehiculeService.vehiculeSelections = value;
       }
   
     


    get selectedVehicule() : VehiculeVo {
           return this.vehiculeService.selectedVehicule;
       }
    set selectedVehicule(value: VehiculeVo) {
        this.vehiculeService.selectedVehicule = value;
       }
    
    get createVehiculeDialog() :boolean {
           return this.vehiculeService.createVehiculeDialog;
       }
    set createVehiculeDialog(value: boolean) {
        this.vehiculeService.createVehiculeDialog= value;
       }
    
    get editVehiculeDialog() :boolean {
           return this.vehiculeService.editVehiculeDialog;
       }
    set editVehiculeDialog(value: boolean) {
        this.vehiculeService.editVehiculeDialog= value;
       }
    get viewVehiculeDialog() :boolean {
           return this.vehiculeService.viewVehiculeDialog;
       }
    set viewVehiculeDialog(value: boolean) {
        this.vehiculeService.viewVehiculeDialog = value;
       }
       
     get searchVehicule() : VehiculeVo {
        return this.vehiculeService.searchVehicule;
       }
    set searchVehicule(value: VehiculeVo) {
        this.vehiculeService.searchVehicule = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
