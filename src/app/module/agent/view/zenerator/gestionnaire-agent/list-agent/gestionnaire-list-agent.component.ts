import {Component, OnInit} from '@angular/core';
import {GestionnaireService} from 'src/app/controller/service/Gestionnaire.service';
import {GestionnaireVo} from 'src/app/controller/model/Gestionnaire.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import { ExportService } from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-gestionnaire-list-agent',
  templateUrl: './gestionnaire-list-agent.component.html',
  styleUrls: ['./gestionnaire-list-agent.component.css']
})
export class GestionnaireListAgentComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Gestionnaire';
     yesOrNoCredentialsNonExpired :any[] =[];
     yesOrNoEnabled :any[] =[];
     yesOrNoAccountNonExpired :any[] =[];
     yesOrNoAccountNonLocked :any[] =[];
     yesOrNoPasswordChanged :any[] =[];


    constructor(private datePipe: DatePipe, private gestionnaireService: GestionnaireService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadGestionnaires();
      this.initExport();
      this.initCol();
    this.yesOrNoCredentialsNonExpired =  [{label: 'CredentialsNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoEnabled =  [{label: 'Enabled', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonExpired =  [{label: 'AccountNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonLocked =  [{label: 'AccountNonLocked', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoPasswordChanged =  [{label: 'PasswordChanged', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }
    
    // methods
      public async loadGestionnaires(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Gestionnaire', 'list');
        isPermistted ? this.gestionnaireService.findAll().subscribe(gestionnaires => this.gestionnaires = gestionnaires,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.gestionnaireService.findByCriteria(this.searchGestionnaire).subscribe(gestionnaires=>{
            
            this.gestionnaires = gestionnaires;
           // this.searchGestionnaire = new GestionnaireVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'reference', header: 'Reference'},
                            {field: 'numeroTelephone', header: 'Numero telephone'},
                            {field: 'email', header: 'Email'},
                            {field: 'role', header: 'Role'},
                            {field: 'credentialsNonExpired', header: 'Credentials non expired'},
                            {field: 'enabled', header: 'Enabled'},
                            {field: 'accountNonExpired', header: 'Account non expired'},
                            {field: 'accountNonLocked', header: 'Account non locked'},
                            {field: 'passwordChanged', header: 'Password changed'},
                            {field: 'createdAt', header: 'Created at'},
                            {field: 'updatedAt', header: 'Updated at'},
                            {field: 'username', header: 'Username'},
                            {field: 'password', header: 'Password'},
                            {field: 'prenom', header: 'Prenom'},
                            {field: 'nom', header: 'Nom'},
        ];
    }
    
    public async editGestionnaire(gestionnaire: GestionnaireVo){
        const isPermistted = await this.roleService.isPermitted('Gestionnaire', 'edit');
         if(isPermistted){
          this.gestionnaireService.findByIdWithAssociatedList(gestionnaire).subscribe(res => {
           this.selectedGestionnaire = res;
            this.selectedGestionnaire.createdAt = new Date(gestionnaire.createdAt);
            this.selectedGestionnaire.updatedAt = new Date(gestionnaire.updatedAt);
            this.editGestionnaireDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewGestionnaire(gestionnaire: GestionnaireVo){
        const isPermistted = await this.roleService.isPermitted('Gestionnaire', 'view');
        if(isPermistted){
           this.gestionnaireService.findByIdWithAssociatedList(gestionnaire).subscribe(res => {
           this.selectedGestionnaire = res;
            this.selectedGestionnaire.createdAt = new Date(gestionnaire.createdAt);
            this.selectedGestionnaire.updatedAt = new Date(gestionnaire.updatedAt);
            this.viewGestionnaireDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateGestionnaire(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedGestionnaire = new GestionnaireVo();
            this.createGestionnaireDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteGestionnaire(gestionnaire: GestionnaireVo){
       const isPermistted = await this.roleService.isPermitted('Gestionnaire', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Gestionnaire) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.gestionnaireService.delete(gestionnaire).subscribe(status=>{
                          if(status > 0){
                          const position = this.gestionnaires.indexOf(gestionnaire);
                          position > -1 ? this.gestionnaires.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Gestionnaire Supprimé',
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


public async duplicateGestionnaire(gestionnaire: GestionnaireVo) {

     this.gestionnaireService.findByIdWithAssociatedList(gestionnaire).subscribe(
	 res => {
	       this.initDuplicateGestionnaire(res);
	       this.selectedGestionnaire = res;
	       this.selectedGestionnaire.id = null;
            this.createGestionnaireDialog = true;

});

	}

	initDuplicateGestionnaire(res: GestionnaireVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.gestionnaires.map(e => {
    return {
                    'Reference': e.reference ,
                    'Numero telephone': e.numeroTelephone ,
                    'Email': e.email ,
                    'Role': e.role ,
                    'Credentials non expired': e.credentialsNonExpired? 'Vrai' : 'Faux' ,
                    'Enabled': e.enabled? 'Vrai' : 'Faux' ,
                    'Account non expired': e.accountNonExpired? 'Vrai' : 'Faux' ,
                    'Account non locked': e.accountNonLocked? 'Vrai' : 'Faux' ,
                    'Password changed': e.passwordChanged? 'Vrai' : 'Faux' ,
                    'Created at': this.datePipe.transform(e.createdAt , 'dd-MM-yyyy'),
                    'Updated at': this.datePipe.transform(e.updatedAt , 'dd-MM-yyyy'),
                    'Username': e.username ,
                    'Password': e.password ,
                    'Prenom': e.prenom ,
                    'Nom': e.nom ,
     }
      });

      this.criteriaData = [{
            'Reference': this.searchGestionnaire.reference ? this.searchGestionnaire.reference : environment.emptyForExport ,
            'Numero telephone Min': this.searchGestionnaire.numeroTelephoneMin ? this.searchGestionnaire.numeroTelephoneMin : environment.emptyForExport ,
            'Numero telephone Max': this.searchGestionnaire.numeroTelephoneMax ? this.searchGestionnaire.numeroTelephoneMax : environment.emptyForExport ,
            'Email': this.searchGestionnaire.email ? this.searchGestionnaire.email : environment.emptyForExport ,
            'Role': this.searchGestionnaire.role ? this.searchGestionnaire.role : environment.emptyForExport ,
            'Credentials non expired': this.searchGestionnaire.credentialsNonExpired ? (this.searchGestionnaire.credentialsNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Enabled': this.searchGestionnaire.enabled ? (this.searchGestionnaire.enabled ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non expired': this.searchGestionnaire.accountNonExpired ? (this.searchGestionnaire.accountNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non locked': this.searchGestionnaire.accountNonLocked ? (this.searchGestionnaire.accountNonLocked ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Password changed': this.searchGestionnaire.passwordChanged ? (this.searchGestionnaire.passwordChanged ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Created at Min': this.searchGestionnaire.createdAtMin ? this.datePipe.transform(this.searchGestionnaire.createdAtMin , this.dateFormat) : environment.emptyForExport ,
            'Created at Max': this.searchGestionnaire.createdAtMax ? this.datePipe.transform(this.searchGestionnaire.createdAtMax , this.dateFormat) : environment.emptyForExport ,
            'Updated at Min': this.searchGestionnaire.updatedAtMin ? this.datePipe.transform(this.searchGestionnaire.updatedAtMin , this.dateFormat) : environment.emptyForExport ,
            'Updated at Max': this.searchGestionnaire.updatedAtMax ? this.datePipe.transform(this.searchGestionnaire.updatedAtMax , this.dateFormat) : environment.emptyForExport ,
            'Username': this.searchGestionnaire.username ? this.searchGestionnaire.username : environment.emptyForExport ,
            'Password': this.searchGestionnaire.password ? this.searchGestionnaire.password : environment.emptyForExport ,
            'Prenom': this.searchGestionnaire.prenom ? this.searchGestionnaire.prenom : environment.emptyForExport ,
            'Nom': this.searchGestionnaire.nom ? this.searchGestionnaire.nom : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get gestionnaires() : Array<GestionnaireVo> {
           return this.gestionnaireService.gestionnaires;
       }
    set gestionnaires(value: Array<GestionnaireVo>) {
        this.gestionnaireService.gestionnaires = value;
       }

    get gestionnaireSelections() : Array<GestionnaireVo> {
           return this.gestionnaireService.gestionnaireSelections;
       }
    set gestionnaireSelections(value: Array<GestionnaireVo>) {
        this.gestionnaireService.gestionnaireSelections = value;
       }
   
     


    get selectedGestionnaire() : GestionnaireVo {
           return this.gestionnaireService.selectedGestionnaire;
       }
    set selectedGestionnaire(value: GestionnaireVo) {
        this.gestionnaireService.selectedGestionnaire = value;
       }
    
    get createGestionnaireDialog() :boolean {
           return this.gestionnaireService.createGestionnaireDialog;
       }
    set createGestionnaireDialog(value: boolean) {
        this.gestionnaireService.createGestionnaireDialog= value;
       }
    
    get editGestionnaireDialog() :boolean {
           return this.gestionnaireService.editGestionnaireDialog;
       }
    set editGestionnaireDialog(value: boolean) {
        this.gestionnaireService.editGestionnaireDialog= value;
       }
    get viewGestionnaireDialog() :boolean {
           return this.gestionnaireService.viewGestionnaireDialog;
       }
    set viewGestionnaireDialog(value: boolean) {
        this.gestionnaireService.viewGestionnaireDialog = value;
       }
       
     get searchGestionnaire() : GestionnaireVo {
        return this.gestionnaireService.searchGestionnaire;
       }
    set searchGestionnaire(value: GestionnaireVo) {
        this.gestionnaireService.searchGestionnaire = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
