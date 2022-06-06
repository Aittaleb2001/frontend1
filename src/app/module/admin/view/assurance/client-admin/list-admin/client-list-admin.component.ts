import {Component, OnInit} from '@angular/core';
import {ClientService} from 'src/app/controller/service/Client.service';
import {ClientVo} from 'src/app/controller/model/Client.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import { TypeClientService } from 'src/app/controller/service/TypeClient.service';

import {ClientSininstreVo} from 'src/app/controller/model/ClientSininstre.model';
import {VehiculeVo} from 'src/app/controller/model/Vehicule.model';
import {TypeClientVo} from 'src/app/controller/model/TypeClient.model';
import {ContratVo} from 'src/app/controller/model/Contrat.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import { ExportService } from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-client-list-admin',
  templateUrl: './client-list-admin.component.html',
  styleUrls: ['./client-list-admin.component.css']
})
export class ClientListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Client';
    typeClients :Array<TypeClientVo>;


    constructor(private datePipe: DatePipe, private clientService: ClientService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
        , private typeClientService: TypeClientService
) { }

    ngOnInit() : void {
      this.loadClients();
      this.initExport();
      this.initCol();
      this.loadTypeClient();
    }
    
    // methods
      public async loadClients(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Client', 'list');
        isPermistted ? this.clientService.findAll().subscribe(clients => this.clients = clients,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.clientService.findByCriteria(this.searchClient).subscribe(clients=>{
            
            this.clients = clients;
           // this.searchClient = new ClientVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'reference', header: 'Reference'},
                            {field: 'cin', header: 'Cin'},
                            {field: 'nom', header: 'Nom'},
                            {field: 'prenom', header: 'Prenom'},
                            {field: 'activite', header: 'Activite'},
                            {field: 'adresse', header: 'Adresse'},
                            {field: 'datedeNaissance', header: 'Datede naissance'},
                            {field: 'numTelephone', header: 'Num telephone'},
                        {field: 'typeClient?.libelle', header: 'Type client'},
        ];
    }
    
    public async editClient(client: ClientVo){
        const isPermistted = await this.roleService.isPermitted('Client', 'edit');
         if(isPermistted){
          this.clientService.findByIdWithAssociatedList(client).subscribe(res => {
           this.selectedClient = res;
            this.selectedClient.datedeNaissance = new Date(client.datedeNaissance);
            this.editClientDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewClient(client: ClientVo){
        const isPermistted = await this.roleService.isPermitted('Client', 'view');
        if(isPermistted){
           this.clientService.findByIdWithAssociatedList(client).subscribe(res => {
           this.selectedClient = res;
            this.selectedClient.datedeNaissance = new Date(client.datedeNaissance);
            this.viewClientDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateClient(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedClient = new ClientVo();
            this.createClientDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteClient(client: ClientVo){
       const isPermistted = await this.roleService.isPermitted('Client', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Client) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.clientService.delete(client).subscribe(status=>{
                          if(status > 0){
                          const position = this.clients.indexOf(client);
                          position > -1 ? this.clients.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Client Supprimé',
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

public async loadTypeClient(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Client', 'list');
    isPermistted ? this.typeClientService.findAll().subscribe(typeClients => this.typeClients = typeClients,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateClient(client: ClientVo) {

     this.clientService.findByIdWithAssociatedList(client).subscribe(
	 res => {
	       this.initDuplicateClient(res);
	       this.selectedClient = res;
	       this.selectedClient.id = null;
            this.createClientDialog = true;

});

	}

	initDuplicateClient(res: ClientVo) {
        if (res.clientSininstresVo != null) {
             res.clientSininstresVo.forEach(d => { d.clientVo = null; d.id = null; });
                }
        if (res.vehiculeVo != null) {
             res.vehiculeVo.forEach(d => { d.clientVo = null; d.id = null; });
                }
        if (res.contratVo != null) {
             res.contratVo.forEach(d => { d.clientVo = null; d.id = null; });
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
    this.exportData = this.clients.map(e => {
    return {
                    'Reference': e.reference ,
                    'Cin': e.cin ,
                    'Nom': e.nom ,
                    'Prenom': e.prenom ,
                    'Activite': e.activite ,
                    'Adresse': e.adresse ,
                    'Datede naissance': this.datePipe.transform(e.datedeNaissance , 'dd-MM-yyyy'),
                    'Num telephone': e.numTelephone ,
            'Type client': e.typeClientVo?.libelle ,
     }
      });

      this.criteriaData = [{
            'Reference': this.searchClient.reference ? this.searchClient.reference : environment.emptyForExport ,
            'Cin': this.searchClient.cin ? this.searchClient.cin : environment.emptyForExport ,
            'Nom': this.searchClient.nom ? this.searchClient.nom : environment.emptyForExport ,
            'Prenom': this.searchClient.prenom ? this.searchClient.prenom : environment.emptyForExport ,
            'Activite': this.searchClient.activite ? this.searchClient.activite : environment.emptyForExport ,
            'Adresse': this.searchClient.adresse ? this.searchClient.adresse : environment.emptyForExport ,
            'Datede naissance Min': this.searchClient.datedeNaissanceMin ? this.datePipe.transform(this.searchClient.datedeNaissanceMin , this.dateFormat) : environment.emptyForExport ,
            'Datede naissance Max': this.searchClient.datedeNaissanceMax ? this.datePipe.transform(this.searchClient.datedeNaissanceMax , this.dateFormat) : environment.emptyForExport ,
            'Num telephone Min': this.searchClient.numTelephoneMin ? this.searchClient.numTelephoneMin : environment.emptyForExport ,
            'Num telephone Max': this.searchClient.numTelephoneMax ? this.searchClient.numTelephoneMax : environment.emptyForExport ,
        'Type client': this.searchClient.typeClientVo?.libelle ? this.searchClient.typeClientVo?.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get clients() : Array<ClientVo> {
           return this.clientService.clients;
       }
    set clients(value: Array<ClientVo>) {
        this.clientService.clients = value;
       }

    get clientSelections() : Array<ClientVo> {
           return this.clientService.clientSelections;
       }
    set clientSelections(value: Array<ClientVo>) {
        this.clientService.clientSelections = value;
       }
   
     


    get selectedClient() : ClientVo {
           return this.clientService.selectedClient;
       }
    set selectedClient(value: ClientVo) {
        this.clientService.selectedClient = value;
       }
    
    get createClientDialog() :boolean {
           return this.clientService.createClientDialog;
       }
    set createClientDialog(value: boolean) {
        this.clientService.createClientDialog= value;
       }
    
    get editClientDialog() :boolean {
           return this.clientService.editClientDialog;
       }
    set editClientDialog(value: boolean) {
        this.clientService.editClientDialog= value;
       }
    get viewClientDialog() :boolean {
           return this.clientService.viewClientDialog;
       }
    set viewClientDialog(value: boolean) {
        this.clientService.viewClientDialog = value;
       }
       
     get searchClient() : ClientVo {
        return this.clientService.searchClient;
       }
    set searchClient(value: ClientVo) {
        this.clientService.searchClient = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
