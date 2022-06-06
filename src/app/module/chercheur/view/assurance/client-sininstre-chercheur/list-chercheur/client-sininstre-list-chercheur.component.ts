import {Component, OnInit} from '@angular/core';
import {ClientSininstreService} from 'src/app/controller/service/ClientSininstre.service';
import {ClientSininstreVo} from 'src/app/controller/model/ClientSininstre.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import { ClientService } from 'src/app/controller/service/Client.service';
import { SinistreService } from 'src/app/controller/service/Sinistre.service';
import { QuittanceIndemniserService } from 'src/app/controller/service/QuittanceIndemniser.service';

import {SinistreVo} from 'src/app/controller/model/Sinistre.model';
import {QuittanceIndemniserVo} from 'src/app/controller/model/QuittanceIndemniser.model';
import {ClientVo} from 'src/app/controller/model/Client.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import { ExportService } from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-client-sininstre-list-chercheur',
  templateUrl: './client-sininstre-list-chercheur.component.html',
  styleUrls: ['./client-sininstre-list-chercheur.component.css']
})
export class ClientSininstreListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'ClientSininstre';
    clients :Array<ClientVo>;
    sinistres :Array<SinistreVo>;
    quittanceIndemnisers :Array<QuittanceIndemniserVo>;


    constructor(private datePipe: DatePipe, private clientSininstreService: ClientSininstreService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
        , private clientService: ClientService
        , private sinistreService: SinistreService
        , private quittanceIndemniserService: QuittanceIndemniserService
) { }

    ngOnInit() : void {
      this.loadClientSininstres();
      this.initExport();
      this.initCol();
      this.loadClient();
      this.loadSinistre();
      this.loadQuittanceIndemniser();
    }
    
    // methods
      public async loadClientSininstres(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ClientSininstre', 'list');
        isPermistted ? this.clientSininstreService.findAll().subscribe(clientSininstres => this.clientSininstres = clientSininstres,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.clientSininstreService.findByCriteria(this.searchClientSininstre).subscribe(clientSininstres=>{
            
            this.clientSininstres = clientSininstres;
           // this.searchClientSininstre = new ClientSininstreVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'ref', header: 'Ref'},
                            {field: 'numPolice', header: 'Num police'},
                            {field: 'dateSinistre', header: 'Date sinistre'},
                            {field: 'responsabilite', header: 'Responsabilite'},
                            {field: 'numOrdre', header: 'Num ordre'},
                            {field: 'refReglement', header: 'Ref reglement'},
                            {field: 'montantExpertise', header: 'Montant expertise'},
                            {field: 'montantIndemniser', header: 'Montant indemniser'},
                        {field: 'client?.cin', header: 'Client'},
                        {field: 'sinistre?.reference', header: 'Sinistre'},
                        {field: 'quittanceIndemniser?.reference', header: 'Quittance indemniser'},
        ];
    }
    
    public async editClientSininstre(clientSininstre: ClientSininstreVo){
        const isPermistted = await this.roleService.isPermitted('ClientSininstre', 'edit');
         if(isPermistted){
          this.clientSininstreService.findByIdWithAssociatedList(clientSininstre).subscribe(res => {
           this.selectedClientSininstre = res;
            this.selectedClientSininstre.dateSinistre = new Date(clientSininstre.dateSinistre);
            this.editClientSininstreDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewClientSininstre(clientSininstre: ClientSininstreVo){
        const isPermistted = await this.roleService.isPermitted('ClientSininstre', 'view');
        if(isPermistted){
           this.clientSininstreService.findByIdWithAssociatedList(clientSininstre).subscribe(res => {
           this.selectedClientSininstre = res;
            this.selectedClientSininstre.dateSinistre = new Date(clientSininstre.dateSinistre);
            this.viewClientSininstreDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateClientSininstre(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedClientSininstre = new ClientSininstreVo();
            this.createClientSininstreDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteClientSininstre(clientSininstre: ClientSininstreVo){
       const isPermistted = await this.roleService.isPermitted('ClientSininstre', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Client sininstre) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.clientSininstreService.delete(clientSininstre).subscribe(status=>{
                          if(status > 0){
                          const position = this.clientSininstres.indexOf(clientSininstre);
                          position > -1 ? this.clientSininstres.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Client sininstre Supprimé',
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

public async loadClient(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('ClientSininstre', 'list');
    isPermistted ? this.clientService.findAll().subscribe(clients => this.clients = clients,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadSinistre(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('ClientSininstre', 'list');
    isPermistted ? this.sinistreService.findAll().subscribe(sinistres => this.sinistres = sinistres,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadQuittanceIndemniser(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('ClientSininstre', 'list');
    isPermistted ? this.quittanceIndemniserService.findAll().subscribe(quittanceIndemnisers => this.quittanceIndemnisers = quittanceIndemnisers,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateClientSininstre(clientSininstre: ClientSininstreVo) {

     this.clientSininstreService.findByIdWithAssociatedList(clientSininstre).subscribe(
	 res => {
	       this.initDuplicateClientSininstre(res);
	       this.selectedClientSininstre = res;
	       this.selectedClientSininstre.id = null;
            this.createClientSininstreDialog = true;

});

	}

	initDuplicateClientSininstre(res: ClientSininstreVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.clientSininstres.map(e => {
    return {
                    'Ref': e.ref ,
                    'Num police': e.numPolice ,
                    'Date sinistre': this.datePipe.transform(e.dateSinistre , 'dd-MM-yyyy'),
                    'Responsabilite': e.responsabilite ,
                    'Num ordre': e.numOrdre ,
                    'Ref reglement': e.refReglement ,
                    'Montant expertise': e.montantExpertise ,
                    'Montant indemniser': e.montantIndemniser ,
                    'Observation': e.observation ,
            'Client': e.clientVo?.cin ,
            'Sinistre': e.sinistreVo?.reference ,
            'Quittance indemniser': e.quittanceIndemniserVo?.reference ,
     }
      });

      this.criteriaData = [{
            'Ref': this.searchClientSininstre.ref ? this.searchClientSininstre.ref : environment.emptyForExport ,
            'Num police': this.searchClientSininstre.numPolice ? this.searchClientSininstre.numPolice : environment.emptyForExport ,
            'Date sinistre Min': this.searchClientSininstre.dateSinistreMin ? this.datePipe.transform(this.searchClientSininstre.dateSinistreMin , this.dateFormat) : environment.emptyForExport ,
            'Date sinistre Max': this.searchClientSininstre.dateSinistreMax ? this.datePipe.transform(this.searchClientSininstre.dateSinistreMax , this.dateFormat) : environment.emptyForExport ,
            'Responsabilite': this.searchClientSininstre.responsabilite ? this.searchClientSininstre.responsabilite : environment.emptyForExport ,
            'Num ordre Min': this.searchClientSininstre.numOrdreMin ? this.searchClientSininstre.numOrdreMin : environment.emptyForExport ,
            'Num ordre Max': this.searchClientSininstre.numOrdreMax ? this.searchClientSininstre.numOrdreMax : environment.emptyForExport ,
            'Ref reglement': this.searchClientSininstre.refReglement ? this.searchClientSininstre.refReglement : environment.emptyForExport ,
            'Montant expertise Min': this.searchClientSininstre.montantExpertiseMin ? this.searchClientSininstre.montantExpertiseMin : environment.emptyForExport ,
            'Montant expertise Max': this.searchClientSininstre.montantExpertiseMax ? this.searchClientSininstre.montantExpertiseMax : environment.emptyForExport ,
            'Montant indemniser Min': this.searchClientSininstre.montantIndemniserMin ? this.searchClientSininstre.montantIndemniserMin : environment.emptyForExport ,
            'Montant indemniser Max': this.searchClientSininstre.montantIndemniserMax ? this.searchClientSininstre.montantIndemniserMax : environment.emptyForExport ,
            'Observation': this.searchClientSininstre.observation ? this.searchClientSininstre.observation : environment.emptyForExport ,
        'Client': this.searchClientSininstre.clientVo?.cin ? this.searchClientSininstre.clientVo?.cin : environment.emptyForExport ,
        'Sinistre': this.searchClientSininstre.sinistreVo?.reference ? this.searchClientSininstre.sinistreVo?.reference : environment.emptyForExport ,
        'Quittance indemniser': this.searchClientSininstre.quittanceIndemniserVo?.reference ? this.searchClientSininstre.quittanceIndemniserVo?.reference : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get clientSininstres() : Array<ClientSininstreVo> {
           return this.clientSininstreService.clientSininstres;
       }
    set clientSininstres(value: Array<ClientSininstreVo>) {
        this.clientSininstreService.clientSininstres = value;
       }

    get clientSininstreSelections() : Array<ClientSininstreVo> {
           return this.clientSininstreService.clientSininstreSelections;
       }
    set clientSininstreSelections(value: Array<ClientSininstreVo>) {
        this.clientSininstreService.clientSininstreSelections = value;
       }
   
     


    get selectedClientSininstre() : ClientSininstreVo {
           return this.clientSininstreService.selectedClientSininstre;
       }
    set selectedClientSininstre(value: ClientSininstreVo) {
        this.clientSininstreService.selectedClientSininstre = value;
       }
    
    get createClientSininstreDialog() :boolean {
           return this.clientSininstreService.createClientSininstreDialog;
       }
    set createClientSininstreDialog(value: boolean) {
        this.clientSininstreService.createClientSininstreDialog= value;
       }
    
    get editClientSininstreDialog() :boolean {
           return this.clientSininstreService.editClientSininstreDialog;
       }
    set editClientSininstreDialog(value: boolean) {
        this.clientSininstreService.editClientSininstreDialog= value;
       }
    get viewClientSininstreDialog() :boolean {
           return this.clientSininstreService.viewClientSininstreDialog;
       }
    set viewClientSininstreDialog(value: boolean) {
        this.clientSininstreService.viewClientSininstreDialog = value;
       }
       
     get searchClientSininstre() : ClientSininstreVo {
        return this.clientSininstreService.searchClientSininstre;
       }
    set searchClientSininstre(value: ClientSininstreVo) {
        this.clientSininstreService.searchClientSininstre = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
