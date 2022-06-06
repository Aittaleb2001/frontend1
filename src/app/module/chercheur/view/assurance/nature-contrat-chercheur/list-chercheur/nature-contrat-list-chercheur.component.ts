import {Component, OnInit} from '@angular/core';
import {NatureContratService} from 'src/app/controller/service/NatureContrat.service';
import {NatureContratVo} from 'src/app/controller/model/NatureContrat.model';
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
  selector: 'app-nature-contrat-list-chercheur',
  templateUrl: './nature-contrat-list-chercheur.component.html',
  styleUrls: ['./nature-contrat-list-chercheur.component.css']
})
export class NatureContratListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'NatureContrat';


    constructor(private datePipe: DatePipe, private natureContratService: NatureContratService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadNatureContrats();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadNatureContrats(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('NatureContrat', 'list');
        isPermistted ? this.natureContratService.findAll().subscribe(natureContrats => this.natureContrats = natureContrats,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.natureContratService.findByCriteria(this.searchNatureContrat).subscribe(natureContrats=>{
            
            this.natureContrats = natureContrats;
           // this.searchNatureContrat = new NatureContratVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
        ];
    }
    
    public async editNatureContrat(natureContrat: NatureContratVo){
        const isPermistted = await this.roleService.isPermitted('NatureContrat', 'edit');
         if(isPermistted){
          this.natureContratService.findByIdWithAssociatedList(natureContrat).subscribe(res => {
           this.selectedNatureContrat = res;
            this.editNatureContratDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewNatureContrat(natureContrat: NatureContratVo){
        const isPermistted = await this.roleService.isPermitted('NatureContrat', 'view');
        if(isPermistted){
           this.natureContratService.findByIdWithAssociatedList(natureContrat).subscribe(res => {
           this.selectedNatureContrat = res;
            this.viewNatureContratDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateNatureContrat(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedNatureContrat = new NatureContratVo();
            this.createNatureContratDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteNatureContrat(natureContrat: NatureContratVo){
       const isPermistted = await this.roleService.isPermitted('NatureContrat', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Nature contrat) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.natureContratService.delete(natureContrat).subscribe(status=>{
                          if(status > 0){
                          const position = this.natureContrats.indexOf(natureContrat);
                          position > -1 ? this.natureContrats.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Nature contrat Supprimé',
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


public async duplicateNatureContrat(natureContrat: NatureContratVo) {

     this.natureContratService.findByIdWithAssociatedList(natureContrat).subscribe(
	 res => {
	       this.initDuplicateNatureContrat(res);
	       this.selectedNatureContrat = res;
	       this.selectedNatureContrat.id = null;
            this.createNatureContratDialog = true;

});

	}

	initDuplicateNatureContrat(res: NatureContratVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.natureContrats.map(e => {
    return {
                    'Libelle': e.libelle ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchNatureContrat.libelle ? this.searchNatureContrat.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get natureContrats() : Array<NatureContratVo> {
           return this.natureContratService.natureContrats;
       }
    set natureContrats(value: Array<NatureContratVo>) {
        this.natureContratService.natureContrats = value;
       }

    get natureContratSelections() : Array<NatureContratVo> {
           return this.natureContratService.natureContratSelections;
       }
    set natureContratSelections(value: Array<NatureContratVo>) {
        this.natureContratService.natureContratSelections = value;
       }
   
     


    get selectedNatureContrat() : NatureContratVo {
           return this.natureContratService.selectedNatureContrat;
       }
    set selectedNatureContrat(value: NatureContratVo) {
        this.natureContratService.selectedNatureContrat = value;
       }
    
    get createNatureContratDialog() :boolean {
           return this.natureContratService.createNatureContratDialog;
       }
    set createNatureContratDialog(value: boolean) {
        this.natureContratService.createNatureContratDialog= value;
       }
    
    get editNatureContratDialog() :boolean {
           return this.natureContratService.editNatureContratDialog;
       }
    set editNatureContratDialog(value: boolean) {
        this.natureContratService.editNatureContratDialog= value;
       }
    get viewNatureContratDialog() :boolean {
           return this.natureContratService.viewNatureContratDialog;
       }
    set viewNatureContratDialog(value: boolean) {
        this.natureContratService.viewNatureContratDialog = value;
       }
       
     get searchNatureContrat() : NatureContratVo {
        return this.natureContratService.searchNatureContrat;
       }
    set searchNatureContrat(value: NatureContratVo) {
        this.natureContratService.searchNatureContrat = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
