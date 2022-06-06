import {Component, OnInit} from '@angular/core';
import {AdminService} from 'src/app/controller/service/Admin.service';
import {AdminVo} from 'src/app/controller/model/Admin.model';
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
  selector: 'app-admin-list-chercheur',
  templateUrl: './admin-list-chercheur.component.html',
  styleUrls: ['./admin-list-chercheur.component.css']
})
export class AdminListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Admin';
     yesOrNoCredentialsNonExpired :any[] =[];
     yesOrNoEnabled :any[] =[];
     yesOrNoAccountNonExpired :any[] =[];
     yesOrNoAccountNonLocked :any[] =[];
     yesOrNoPasswordChanged :any[] =[];


    constructor(private datePipe: DatePipe, private adminService: AdminService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadAdmins();
      this.initExport();
      this.initCol();
    this.yesOrNoCredentialsNonExpired =  [{label: 'CredentialsNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoEnabled =  [{label: 'Enabled', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonExpired =  [{label: 'AccountNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonLocked =  [{label: 'AccountNonLocked', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoPasswordChanged =  [{label: 'PasswordChanged', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }
    
    // methods
      public async loadAdmins(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Admin', 'list');
        isPermistted ? this.adminService.findAll().subscribe(admins => this.admins = admins,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.adminService.findByCriteria(this.searchAdmin).subscribe(admins=>{
            
            this.admins = admins;
           // this.searchAdmin = new AdminVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'numeroMatricule', header: 'Numero matricule'},
                            {field: 'emailPrincipale', header: 'Email principale'},
                            {field: 'formationEnManagement', header: 'Formation en management'},
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
    
    public async editAdmin(admin: AdminVo){
        const isPermistted = await this.roleService.isPermitted('Admin', 'edit');
         if(isPermistted){
          this.adminService.findByIdWithAssociatedList(admin).subscribe(res => {
           this.selectedAdmin = res;
            this.selectedAdmin.createdAt = new Date(admin.createdAt);
            this.selectedAdmin.updatedAt = new Date(admin.updatedAt);
            this.editAdminDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewAdmin(admin: AdminVo){
        const isPermistted = await this.roleService.isPermitted('Admin', 'view');
        if(isPermistted){
           this.adminService.findByIdWithAssociatedList(admin).subscribe(res => {
           this.selectedAdmin = res;
            this.selectedAdmin.createdAt = new Date(admin.createdAt);
            this.selectedAdmin.updatedAt = new Date(admin.updatedAt);
            this.viewAdminDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateAdmin(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedAdmin = new AdminVo();
            this.createAdminDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteAdmin(admin: AdminVo){
       const isPermistted = await this.roleService.isPermitted('Admin', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Admin) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.adminService.delete(admin).subscribe(status=>{
                          if(status > 0){
                          const position = this.admins.indexOf(admin);
                          position > -1 ? this.admins.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Admin Supprimé',
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


public async duplicateAdmin(admin: AdminVo) {

     this.adminService.findByIdWithAssociatedList(admin).subscribe(
	 res => {
	       this.initDuplicateAdmin(res);
	       this.selectedAdmin = res;
	       this.selectedAdmin.id = null;
            this.createAdminDialog = true;

});

	}

	initDuplicateAdmin(res: AdminVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.admins.map(e => {
    return {
                    'Numero matricule': e.numeroMatricule ,
                    'Email principale': e.emailPrincipale ,
                   // 'Formation en management': e.formationEnManagement ,
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
            'Numero matricule': this.searchAdmin.numeroMatricule ? this.searchAdmin.numeroMatricule : environment.emptyForExport ,
            'Email principale': this.searchAdmin.emailPrincipale ? this.searchAdmin.emailPrincipale : environment.emptyForExport ,
           // 'Formation en management': this.searchAdmin.formationEnManagement ? this.searchAdmin.formationEnManagement : environment.emptyForExport ,
            'Role': this.searchAdmin.role ? this.searchAdmin.role : environment.emptyForExport ,
            'Credentials non expired': this.searchAdmin.credentialsNonExpired ? (this.searchAdmin.credentialsNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Enabled': this.searchAdmin.enabled ? (this.searchAdmin.enabled ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non expired': this.searchAdmin.accountNonExpired ? (this.searchAdmin.accountNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non locked': this.searchAdmin.accountNonLocked ? (this.searchAdmin.accountNonLocked ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Password changed': this.searchAdmin.passwordChanged ? (this.searchAdmin.passwordChanged ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Created at Min': this.searchAdmin.createdAtMin ? this.datePipe.transform(this.searchAdmin.createdAtMin , this.dateFormat) : environment.emptyForExport ,
            'Created at Max': this.searchAdmin.createdAtMax ? this.datePipe.transform(this.searchAdmin.createdAtMax , this.dateFormat) : environment.emptyForExport ,
            'Updated at Min': this.searchAdmin.updatedAtMin ? this.datePipe.transform(this.searchAdmin.updatedAtMin , this.dateFormat) : environment.emptyForExport ,
            'Updated at Max': this.searchAdmin.updatedAtMax ? this.datePipe.transform(this.searchAdmin.updatedAtMax , this.dateFormat) : environment.emptyForExport ,
            'Username': this.searchAdmin.username ? this.searchAdmin.username : environment.emptyForExport ,
            'Password': this.searchAdmin.password ? this.searchAdmin.password : environment.emptyForExport ,
            'Prenom': this.searchAdmin.prenom ? this.searchAdmin.prenom : environment.emptyForExport ,
            'Nom': this.searchAdmin.nom ? this.searchAdmin.nom : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get admins() : Array<AdminVo> {
           return this.adminService.admins;
       }
    set admins(value: Array<AdminVo>) {
        this.adminService.admins = value;
       }

    get adminSelections() : Array<AdminVo> {
           return this.adminService.adminSelections;
       }
    set adminSelections(value: Array<AdminVo>) {
        this.adminService.adminSelections = value;
       }
   
     


    get selectedAdmin() : AdminVo {
           return this.adminService.selectedAdmin;
       }
    set selectedAdmin(value: AdminVo) {
        this.adminService.selectedAdmin = value;
       }
    
    get createAdminDialog() :boolean {
           return this.adminService.createAdminDialog;
       }
    set createAdminDialog(value: boolean) {
        this.adminService.createAdminDialog= value;
       }
    
    get editAdminDialog() :boolean {
           return this.adminService.editAdminDialog;
       }
    set editAdminDialog(value: boolean) {
        this.adminService.editAdminDialog= value;
       }
    get viewAdminDialog() :boolean {
           return this.adminService.viewAdminDialog;
       }
    set viewAdminDialog(value: boolean) {
        this.adminService.viewAdminDialog = value;
       }
       
     get searchAdmin() : AdminVo {
        return this.adminService.searchAdmin;
       }
    set searchAdmin(value: AdminVo) {
        this.adminService.searchAdmin = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
