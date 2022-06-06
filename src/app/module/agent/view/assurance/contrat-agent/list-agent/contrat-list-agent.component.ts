import {Component, OnInit} from '@angular/core';
import {ContratService} from 'src/app/controller/service/Contrat.service';
import {ContratVo} from 'src/app/controller/model/Contrat.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import { QuittancePrimeService } from 'src/app/controller/service/QuittancePrime.service';
import { NatureContratService } from 'src/app/controller/service/NatureContrat.service';
import { VehiculeService } from 'src/app/controller/service/Vehicule.service';
import { ClientService } from 'src/app/controller/service/Client.service';

import {VehiculeVo} from 'src/app/controller/model/Vehicule.model';
import {NatureContratVo} from 'src/app/controller/model/NatureContrat.model';
import {QuittancePrimeVo} from 'src/app/controller/model/QuittancePrime.model';
import {ClientVo} from 'src/app/controller/model/Client.model';
import {ContratGarantieVo} from 'src/app/controller/model/ContratGarantie.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import { ExportService } from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-contrat-list-agent',
  templateUrl: './contrat-list-agent.component.html',
  styleUrls: ['./contrat-list-agent.component.css']
})
export class ContratListAgentComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Contrat';
    quittancePrimes :Array<QuittancePrimeVo>;
    natureContrats :Array<NatureContratVo>;
    vehicules :Array<VehiculeVo>;
    clients :Array<ClientVo>;


    constructor(private datePipe: DatePipe, private contratService: ContratService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
        , private quittancePrimeService: QuittancePrimeService
        , private natureContratService: NatureContratService
        , private vehiculeService: VehiculeService
        , private clientService: ClientService
) { }

    ngOnInit() : void {
      this.loadContrats();
      this.initExport();
      this.initCol();
      this.loadQuittancePrime();
      this.loadNatureContrat();
      this.loadVehicule();
      this.loadClient();
    }
    
    // methods
      public async loadContrats(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Contrat', 'list');
        isPermistted ? this.contratService.findAll().subscribe(contrats => this.contrats = contrats,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.contratService.findByCriteria(this.searchContrat).subscribe(contrats=>{
            
            this.contrats = contrats;
           // this.searchContrat = new ContratVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'numPolice', header: 'Num police'},
                            {field: 'numAttestation', header: 'Num attestation'},
                            {field: 'dateEffet', header: 'Date effet'},
                            {field: 'dateEcheance', header: 'Date echeance'},
                            {field: 'dateSignature', header: 'Date signature'},
                            {field: 'periode', header: 'Periode'},
                        {field: 'quittancePrime?.id', header: 'Quittance prime'},
                        {field: 'natureContrat?.libelle', header: 'Nature contrat'},
                        {field: 'vehicule?.reference', header: 'Vehicule'},
                        {field: 'client?.cin', header: 'Client'},
        ];
    }
    
    public async editContrat(contrat: ContratVo){
        const isPermistted = await this.roleService.isPermitted('Contrat', 'edit');
         if(isPermistted){
          this.contratService.findByIdWithAssociatedList(contrat).subscribe(res => {
           this.selectedContrat = res;
            this.selectedContrat.dateEffet = new Date(contrat.dateEffet);
            this.selectedContrat.dateEcheance = new Date(contrat.dateEcheance);
            this.selectedContrat.dateSignature = new Date(contrat.dateSignature);
            this.editContratDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewContrat(contrat: ContratVo){
        const isPermistted = await this.roleService.isPermitted('Contrat', 'view');
        if(isPermistted){
           this.contratService.findByIdWithAssociatedList(contrat).subscribe(res => {
           this.selectedContrat = res;
            this.selectedContrat.dateEffet = new Date(contrat.dateEffet);
            this.selectedContrat.dateEcheance = new Date(contrat.dateEcheance);
            this.selectedContrat.dateSignature = new Date(contrat.dateSignature);
            this.viewContratDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateContrat(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedContrat = new ContratVo();
            this.createContratDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteContrat(contrat: ContratVo){
       const isPermistted = await this.roleService.isPermitted('Contrat', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Contrat) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.contratService.delete(contrat).subscribe(status=>{
                          if(status > 0){
                          const position = this.contrats.indexOf(contrat);
                          position > -1 ? this.contrats.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Contrat Supprimé',
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

public async loadQuittancePrime(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Contrat', 'list');
    isPermistted ? this.quittancePrimeService.findAll().subscribe(quittancePrimes => this.quittancePrimes = quittancePrimes,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadNatureContrat(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Contrat', 'list');
    isPermistted ? this.natureContratService.findAll().subscribe(natureContrats => this.natureContrats = natureContrats,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadVehicule(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Contrat', 'list');
    isPermistted ? this.vehiculeService.findAll().subscribe(vehicules => this.vehicules = vehicules,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadClient(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Contrat', 'list');
    isPermistted ? this.clientService.findAll().subscribe(clients => this.clients = clients,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateContrat(contrat: ContratVo) {

     this.contratService.findByIdWithAssociatedList(contrat).subscribe(
	 res => {
	       this.initDuplicateContrat(res);
	       this.selectedContrat = res;
	       this.selectedContrat.id = null;
            this.createContratDialog = true;

});

	}

	initDuplicateContrat(res: ContratVo) {
        if (res.contratGarantiesVo != null) {
             res.contratGarantiesVo.forEach(d => { d.contratVo = null; d.id = null; });
                }


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.contrats.map(e => {
    return {
                    'Num police': e.numPolice ,
                    'Num attestation': e.numAttestation ,
                    'Date effet': this.datePipe.transform(e.dateEffet , 'dd-MM-yyyy'),
                    'Date echeance': this.datePipe.transform(e.dateEcheance , 'dd-MM-yyyy'),
                    'Date signature': this.datePipe.transform(e.dateSignature , 'dd-MM-yyyy'),
                    'Periode': e.periode ,
            'Quittance prime': e.quittancePrimeVo?.id ,
            'Nature contrat': e.natureContratVo?.libelle ,
            'Vehicule': e.vehiculeVo?.reference ,
            'Client': e.clientVo?.cin ,
     }
      });

      this.criteriaData = [{
            'Num police': this.searchContrat.numPolice ? this.searchContrat.numPolice : environment.emptyForExport ,
            'Num attestation': this.searchContrat.numAttestation ? this.searchContrat.numAttestation : environment.emptyForExport ,
            'Date effet Min': this.searchContrat.dateEffetMin ? this.datePipe.transform(this.searchContrat.dateEffetMin , this.dateFormat) : environment.emptyForExport ,
            'Date effet Max': this.searchContrat.dateEffetMax ? this.datePipe.transform(this.searchContrat.dateEffetMax , this.dateFormat) : environment.emptyForExport ,
            'Date echeance Min': this.searchContrat.dateEcheanceMin ? this.datePipe.transform(this.searchContrat.dateEcheanceMin , this.dateFormat) : environment.emptyForExport ,
            'Date echeance Max': this.searchContrat.dateEcheanceMax ? this.datePipe.transform(this.searchContrat.dateEcheanceMax , this.dateFormat) : environment.emptyForExport ,
            'Date signature Min': this.searchContrat.dateSignatureMin ? this.datePipe.transform(this.searchContrat.dateSignatureMin , this.dateFormat) : environment.emptyForExport ,
            'Date signature Max': this.searchContrat.dateSignatureMax ? this.datePipe.transform(this.searchContrat.dateSignatureMax , this.dateFormat) : environment.emptyForExport ,
            'Periode': this.searchContrat.periode ? this.searchContrat.periode : environment.emptyForExport ,
        'Quittance prime': this.searchContrat.quittancePrimeVo?.id ? this.searchContrat.quittancePrimeVo?.id : environment.emptyForExport ,
        'Nature contrat': this.searchContrat.natureContratVo?.libelle ? this.searchContrat.natureContratVo?.libelle : environment.emptyForExport ,
        'Vehicule': this.searchContrat.vehiculeVo?.reference ? this.searchContrat.vehiculeVo?.reference : environment.emptyForExport ,
        'Client': this.searchContrat.clientVo?.cin ? this.searchContrat.clientVo?.cin : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get contrats() : Array<ContratVo> {
           return this.contratService.contrats;
       }
    set contrats(value: Array<ContratVo>) {
        this.contratService.contrats = value;
       }

    get contratSelections() : Array<ContratVo> {
           return this.contratService.contratSelections;
       }
    set contratSelections(value: Array<ContratVo>) {
        this.contratService.contratSelections = value;
       }
   
     


    get selectedContrat() : ContratVo {
           return this.contratService.selectedContrat;
       }
    set selectedContrat(value: ContratVo) {
        this.contratService.selectedContrat = value;
       }
    
    get createContratDialog() :boolean {
           return this.contratService.createContratDialog;
       }
    set createContratDialog(value: boolean) {
        this.contratService.createContratDialog= value;
       }
    
    get editContratDialog() :boolean {
           return this.contratService.editContratDialog;
       }
    set editContratDialog(value: boolean) {
        this.contratService.editContratDialog= value;
       }
    get viewContratDialog() :boolean {
           return this.contratService.viewContratDialog;
       }
    set viewContratDialog(value: boolean) {
        this.contratService.viewContratDialog = value;
       }
       
     get searchContrat() : ContratVo {
        return this.contratService.searchContrat;
       }
    set searchContrat(value: ContratVo) {
        this.contratService.searchContrat = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
