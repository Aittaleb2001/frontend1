import {Component, OnInit} from '@angular/core';
import {TypeSinistreService} from 'src/app/controller/service/TypeSinistre.service';
import {TypeSinistreVo} from 'src/app/controller/model/TypeSinistre.model';
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
  selector: 'app-type-sinistre-list-gestionnaire',
  templateUrl: './type-sinistre-list-gestionnaire.component.html',
  styleUrls: ['./type-sinistre-list-gestionnaire.component.css']
})
export class TypeSinistreListGestionnaireComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'TypeSinistre';


    constructor(private datePipe: DatePipe, private typeSinistreService: TypeSinistreService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadTypeSinistres();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadTypeSinistres(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TypeSinistre', 'list');
        isPermistted ? this.typeSinistreService.findAll().subscribe(typeSinistres => this.typeSinistres = typeSinistres,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.typeSinistreService.findByCriteria(this.searchTypeSinistre).subscribe(typeSinistres=>{
            
            this.typeSinistres = typeSinistres;
           // this.searchTypeSinistre = new TypeSinistreVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
        ];
    }
    
    public async editTypeSinistre(typeSinistre: TypeSinistreVo){
        const isPermistted = await this.roleService.isPermitted('TypeSinistre', 'edit');
         if(isPermistted){
          this.typeSinistreService.findByIdWithAssociatedList(typeSinistre).subscribe(res => {
           this.selectedTypeSinistre = res;
            this.editTypeSinistreDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewTypeSinistre(typeSinistre: TypeSinistreVo){
        const isPermistted = await this.roleService.isPermitted('TypeSinistre', 'view');
        if(isPermistted){
           this.typeSinistreService.findByIdWithAssociatedList(typeSinistre).subscribe(res => {
           this.selectedTypeSinistre = res;
            this.viewTypeSinistreDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateTypeSinistre(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedTypeSinistre = new TypeSinistreVo();
            this.createTypeSinistreDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteTypeSinistre(typeSinistre: TypeSinistreVo){
       const isPermistted = await this.roleService.isPermitted('TypeSinistre', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Type sinistre) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.typeSinistreService.delete(typeSinistre).subscribe(status=>{
                          if(status > 0){
                          const position = this.typeSinistres.indexOf(typeSinistre);
                          position > -1 ? this.typeSinistres.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Type sinistre Supprimé',
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


public async duplicateTypeSinistre(typeSinistre: TypeSinistreVo) {

     this.typeSinistreService.findByIdWithAssociatedList(typeSinistre).subscribe(
	 res => {
	       this.initDuplicateTypeSinistre(res);
	       this.selectedTypeSinistre = res;
	       this.selectedTypeSinistre.id = null;
            this.createTypeSinistreDialog = true;

});

	}

	initDuplicateTypeSinistre(res: TypeSinistreVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.typeSinistres.map(e => {
    return {
                    'Libelle': e.libelle ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchTypeSinistre.libelle ? this.searchTypeSinistre.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get typeSinistres() : Array<TypeSinistreVo> {
           return this.typeSinistreService.typeSinistres;
       }
    set typeSinistres(value: Array<TypeSinistreVo>) {
        this.typeSinistreService.typeSinistres = value;
       }

    get typeSinistreSelections() : Array<TypeSinistreVo> {
           return this.typeSinistreService.typeSinistreSelections;
       }
    set typeSinistreSelections(value: Array<TypeSinistreVo>) {
        this.typeSinistreService.typeSinistreSelections = value;
       }
   
     


    get selectedTypeSinistre() : TypeSinistreVo {
           return this.typeSinistreService.selectedTypeSinistre;
       }
    set selectedTypeSinistre(value: TypeSinistreVo) {
        this.typeSinistreService.selectedTypeSinistre = value;
       }
    
    get createTypeSinistreDialog() :boolean {
           return this.typeSinistreService.createTypeSinistreDialog;
       }
    set createTypeSinistreDialog(value: boolean) {
        this.typeSinistreService.createTypeSinistreDialog= value;
       }
    
    get editTypeSinistreDialog() :boolean {
           return this.typeSinistreService.editTypeSinistreDialog;
       }
    set editTypeSinistreDialog(value: boolean) {
        this.typeSinistreService.editTypeSinistreDialog= value;
       }
    get viewTypeSinistreDialog() :boolean {
           return this.typeSinistreService.viewTypeSinistreDialog;
       }
    set viewTypeSinistreDialog(value: boolean) {
        this.typeSinistreService.viewTypeSinistreDialog = value;
       }
       
     get searchTypeSinistre() : TypeSinistreVo {
        return this.typeSinistreService.searchTypeSinistre;
       }
    set searchTypeSinistre(value: TypeSinistreVo) {
        this.typeSinistreService.searchTypeSinistre = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
