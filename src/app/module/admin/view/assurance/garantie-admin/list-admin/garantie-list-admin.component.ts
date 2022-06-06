import {Component, OnInit} from '@angular/core';
import {GarantieService} from 'src/app/controller/service/Garantie.service';
import {GarantieVo} from 'src/app/controller/model/Garantie.model';
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
  selector: 'app-garantie-list-admin',
  templateUrl: './garantie-list-admin.component.html',
  styleUrls: ['./garantie-list-admin.component.css']
})
export class GarantieListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Garantie';


    constructor(private datePipe: DatePipe, private garantieService: GarantieService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadGaranties();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadGaranties(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Garantie', 'list');
        isPermistted ? this.garantieService.findAll().subscribe(garanties => this.garanties = garanties,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.garantieService.findByCriteria(this.searchGarantie).subscribe(garanties=>{
            
            this.garanties = garanties;
           // this.searchGarantie = new GarantieVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
        ];
    }
    
    public async editGarantie(garantie: GarantieVo){
        const isPermistted = await this.roleService.isPermitted('Garantie', 'edit');
         if(isPermistted){
          this.garantieService.findByIdWithAssociatedList(garantie).subscribe(res => {
           this.selectedGarantie = res;
            this.editGarantieDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewGarantie(garantie: GarantieVo){
        const isPermistted = await this.roleService.isPermitted('Garantie', 'view');
        if(isPermistted){
           this.garantieService.findByIdWithAssociatedList(garantie).subscribe(res => {
           this.selectedGarantie = res;
            this.viewGarantieDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateGarantie(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedGarantie = new GarantieVo();
            this.createGarantieDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteGarantie(garantie: GarantieVo){
       const isPermistted = await this.roleService.isPermitted('Garantie', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Garantie) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.garantieService.delete(garantie).subscribe(status=>{
                          if(status > 0){
                          const position = this.garanties.indexOf(garantie);
                          position > -1 ? this.garanties.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Garantie Supprimé',
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


public async duplicateGarantie(garantie: GarantieVo) {

     this.garantieService.findByIdWithAssociatedList(garantie).subscribe(
	 res => {
	       this.initDuplicateGarantie(res);
	       this.selectedGarantie = res;
	       this.selectedGarantie.id = null;
            this.createGarantieDialog = true;

});

	}

	initDuplicateGarantie(res: GarantieVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.garanties.map(e => {
    return {
                    'Libelle': e.libelle ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchGarantie.libelle ? this.searchGarantie.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get garanties() : Array<GarantieVo> {
           return this.garantieService.garanties;
       }
    set garanties(value: Array<GarantieVo>) {
        this.garantieService.garanties = value;
       }

    get garantieSelections() : Array<GarantieVo> {
           return this.garantieService.garantieSelections;
       }
    set garantieSelections(value: Array<GarantieVo>) {
        this.garantieService.garantieSelections = value;
       }
   
     


    get selectedGarantie() : GarantieVo {
           return this.garantieService.selectedGarantie;
       }
    set selectedGarantie(value: GarantieVo) {
        this.garantieService.selectedGarantie = value;
       }
    
    get createGarantieDialog() :boolean {
           return this.garantieService.createGarantieDialog;
       }
    set createGarantieDialog(value: boolean) {
        this.garantieService.createGarantieDialog= value;
       }
    
    get editGarantieDialog() :boolean {
           return this.garantieService.editGarantieDialog;
       }
    set editGarantieDialog(value: boolean) {
        this.garantieService.editGarantieDialog= value;
       }
    get viewGarantieDialog() :boolean {
           return this.garantieService.viewGarantieDialog;
       }
    set viewGarantieDialog(value: boolean) {
        this.garantieService.viewGarantieDialog = value;
       }
       
     get searchGarantie() : GarantieVo {
        return this.garantieService.searchGarantie;
       }
    set searchGarantie(value: GarantieVo) {
        this.garantieService.searchGarantie = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
