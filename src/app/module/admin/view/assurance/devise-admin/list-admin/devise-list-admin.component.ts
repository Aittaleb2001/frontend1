import {Component, OnInit} from '@angular/core';
import {DeviseService} from 'src/app/controller/service/Devise.service';
import {DeviseVo} from 'src/app/controller/model/Devise.model';
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
  selector: 'app-devise-list-admin',
  templateUrl: './devise-list-admin.component.html',
  styleUrls: ['./devise-list-admin.component.css']
})
export class DeviseListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Devise';


    constructor(private datePipe: DatePipe, private deviseService: DeviseService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadDevises();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadDevises(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Devise', 'list');
        isPermistted ? this.deviseService.findAll().subscribe(devises => this.devises = devises,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.deviseService.findByCriteria(this.searchDevise).subscribe(devises=>{
            
            this.devises = devises;
           // this.searchDevise = new DeviseVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'reference', header: 'Reference'},
                            {field: 'unite', header: 'Unite'},
        ];
    }
    
    public async editDevise(devise: DeviseVo){
        const isPermistted = await this.roleService.isPermitted('Devise', 'edit');
         if(isPermistted){
          this.deviseService.findByIdWithAssociatedList(devise).subscribe(res => {
           this.selectedDevise = res;
            this.editDeviseDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewDevise(devise: DeviseVo){
        const isPermistted = await this.roleService.isPermitted('Devise', 'view');
        if(isPermistted){
           this.deviseService.findByIdWithAssociatedList(devise).subscribe(res => {
           this.selectedDevise = res;
            this.viewDeviseDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateDevise(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedDevise = new DeviseVo();
            this.createDeviseDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteDevise(devise: DeviseVo){
       const isPermistted = await this.roleService.isPermitted('Devise', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Devise) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.deviseService.delete(devise).subscribe(status=>{
                          if(status > 0){
                          const position = this.devises.indexOf(devise);
                          position > -1 ? this.devises.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Devise Supprimé',
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


public async duplicateDevise(devise: DeviseVo) {

     this.deviseService.findByIdWithAssociatedList(devise).subscribe(
	 res => {
	       this.initDuplicateDevise(res);
	       this.selectedDevise = res;
	       this.selectedDevise.id = null;
            this.createDeviseDialog = true;

});

	}

	initDuplicateDevise(res: DeviseVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.devises.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Reference': e.reference ,
                    'Unite': e.unite ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchDevise.libelle ? this.searchDevise.libelle : environment.emptyForExport ,
            'Reference': this.searchDevise.reference ? this.searchDevise.reference : environment.emptyForExport ,
            'Unite': this.searchDevise.unite ? this.searchDevise.unite : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get devises() : Array<DeviseVo> {
           return this.deviseService.devises;
       }
    set devises(value: Array<DeviseVo>) {
        this.deviseService.devises = value;
       }

    get deviseSelections() : Array<DeviseVo> {
           return this.deviseService.deviseSelections;
       }
    set deviseSelections(value: Array<DeviseVo>) {
        this.deviseService.deviseSelections = value;
       }
   
     


    get selectedDevise() : DeviseVo {
           return this.deviseService.selectedDevise;
       }
    set selectedDevise(value: DeviseVo) {
        this.deviseService.selectedDevise = value;
       }
    
    get createDeviseDialog() :boolean {
           return this.deviseService.createDeviseDialog;
       }
    set createDeviseDialog(value: boolean) {
        this.deviseService.createDeviseDialog= value;
       }
    
    get editDeviseDialog() :boolean {
           return this.deviseService.editDeviseDialog;
       }
    set editDeviseDialog(value: boolean) {
        this.deviseService.editDeviseDialog= value;
       }
    get viewDeviseDialog() :boolean {
           return this.deviseService.viewDeviseDialog;
       }
    set viewDeviseDialog(value: boolean) {
        this.deviseService.viewDeviseDialog = value;
       }
       
     get searchDevise() : DeviseVo {
        return this.deviseService.searchDevise;
       }
    set searchDevise(value: DeviseVo) {
        this.deviseService.searchDevise = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
