import {Component, OnInit} from '@angular/core';
import {SinistreService} from 'src/app/controller/service/Sinistre.service';
import {SinistreVo} from 'src/app/controller/model/Sinistre.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import { TypeSinistreService } from 'src/app/controller/service/TypeSinistre.service';
import { ClientService } from 'src/app/controller/service/Client.service';

import {TypeSinistreVo} from 'src/app/controller/model/TypeSinistre.model';
import {ClientVo} from 'src/app/controller/model/Client.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import { ExportService } from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-sinistre-list-admin',
  templateUrl: './sinistre-list-admin.component.html',
  styleUrls: ['./sinistre-list-admin.component.css']
})
export class SinistreListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Sinistre';
    typeSinistres :Array<TypeSinistreVo>;
    clients :Array<ClientVo>;


    constructor(private datePipe: DatePipe, private sinistreService: SinistreService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
        , private typeSinistreService: TypeSinistreService
        , private clientService: ClientService
) { }

    ngOnInit() : void {
      this.loadSinistres();
      this.initExport();
      this.initCol();
      this.loadTypeSinistre();
      this.loadClient();
    }
    
    // methods
      public async loadSinistres(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Sinistre', 'list');
        isPermistted ? this.sinistreService.findAll().subscribe(sinistres => this.sinistres = sinistres,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.sinistreService.findByCriteria(this.searchSinistre).subscribe(sinistres=>{
            
            this.sinistres = sinistres;
           // this.searchSinistre = new SinistreVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'reference', header: 'Reference'},
                            {field: 'description', header: 'Description'},
                            {field: 'cause', header: 'Cause'},
                            {field: 'objet', header: 'Objet'},
                        {field: 'typeSinistre?.libelle', header: 'Type sinistre'},
                        {field: 'client?.cin', header: 'Client'},
        ];
    }
    
    public async editSinistre(sinistre: SinistreVo){
        const isPermistted = await this.roleService.isPermitted('Sinistre', 'edit');
         if(isPermistted){
          this.sinistreService.findByIdWithAssociatedList(sinistre).subscribe(res => {
           this.selectedSinistre = res;
            this.editSinistreDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewSinistre(sinistre: SinistreVo){
        const isPermistted = await this.roleService.isPermitted('Sinistre', 'view');
        if(isPermistted){
           this.sinistreService.findByIdWithAssociatedList(sinistre).subscribe(res => {
           this.selectedSinistre = res;
            this.viewSinistreDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateSinistre(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedSinistre = new SinistreVo();
            this.createSinistreDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteSinistre(sinistre: SinistreVo){
       const isPermistted = await this.roleService.isPermitted('Sinistre', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Sinistre) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.sinistreService.delete(sinistre).subscribe(status=>{
                          if(status > 0){
                          const position = this.sinistres.indexOf(sinistre);
                          position > -1 ? this.sinistres.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Sinistre Supprimé',
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

public async loadTypeSinistre(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Sinistre', 'list');
    isPermistted ? this.typeSinistreService.findAll().subscribe(typeSinistres => this.typeSinistres = typeSinistres,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadClient(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Sinistre', 'list');
    isPermistted ? this.clientService.findAll().subscribe(clients => this.clients = clients,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateSinistre(sinistre: SinistreVo) {

     this.sinistreService.findByIdWithAssociatedList(sinistre).subscribe(
	 res => {
	       this.initDuplicateSinistre(res);
	       this.selectedSinistre = res;
	       this.selectedSinistre.id = null;
            this.createSinistreDialog = true;

});

	}

	initDuplicateSinistre(res: SinistreVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.sinistres.map(e => {
    return {
                    'Reference': e.reference ,
                    'Description': e.description ,
                    'Cause': e.cause ,
                    'Objet': e.objet ,
            'Type sinistre': e.typeSinistreVo?.libelle ,
            'Client': e.clientVo?.cin ,
     }
      });

      this.criteriaData = [{
            'Reference': this.searchSinistre.reference ? this.searchSinistre.reference : environment.emptyForExport ,
            'Description': this.searchSinistre.description ? this.searchSinistre.description : environment.emptyForExport ,
            'Cause': this.searchSinistre.cause ? this.searchSinistre.cause : environment.emptyForExport ,
            'Objet': this.searchSinistre.objet ? this.searchSinistre.objet : environment.emptyForExport ,
        'Type sinistre': this.searchSinistre.typeSinistreVo?.libelle ? this.searchSinistre.typeSinistreVo?.libelle : environment.emptyForExport ,
        'Client': this.searchSinistre.clientVo?.cin ? this.searchSinistre.clientVo?.cin : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get sinistres() : Array<SinistreVo> {
           return this.sinistreService.sinistres;
       }
    set sinistres(value: Array<SinistreVo>) {
        this.sinistreService.sinistres = value;
       }

    get sinistreSelections() : Array<SinistreVo> {
           return this.sinistreService.sinistreSelections;
       }
    set sinistreSelections(value: Array<SinistreVo>) {
        this.sinistreService.sinistreSelections = value;
       }
   
     


    get selectedSinistre() : SinistreVo {
           return this.sinistreService.selectedSinistre;
       }
    set selectedSinistre(value: SinistreVo) {
        this.sinistreService.selectedSinistre = value;
       }
    
    get createSinistreDialog() :boolean {
           return this.sinistreService.createSinistreDialog;
       }
    set createSinistreDialog(value: boolean) {
        this.sinistreService.createSinistreDialog= value;
       }
    
    get editSinistreDialog() :boolean {
           return this.sinistreService.editSinistreDialog;
       }
    set editSinistreDialog(value: boolean) {
        this.sinistreService.editSinistreDialog= value;
       }
    get viewSinistreDialog() :boolean {
           return this.sinistreService.viewSinistreDialog;
       }
    set viewSinistreDialog(value: boolean) {
        this.sinistreService.viewSinistreDialog = value;
       }
       
     get searchSinistre() : SinistreVo {
        return this.sinistreService.searchSinistre;
       }
    set searchSinistre(value: SinistreVo) {
        this.sinistreService.searchSinistre = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
