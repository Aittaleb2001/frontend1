import {Component, OnInit} from '@angular/core';
import {QuittanceIndemniserService} from 'src/app/controller/service/QuittanceIndemniser.service';
import {QuittanceIndemniserVo} from 'src/app/controller/model/QuittanceIndemniser.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import { DeviseService } from 'src/app/controller/service/Devise.service';

import {DeviseVo} from 'src/app/controller/model/Devise.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import { ExportService } from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-quittance-indemniser-list-agent',
  templateUrl: './quittance-indemniser-list-agent.component.html',
  styleUrls: ['./quittance-indemniser-list-agent.component.css']
})
export class QuittanceIndemniserListAgentComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'QuittanceIndemniser';
    devises :Array<DeviseVo>;


    constructor(private datePipe: DatePipe, private quittanceIndemniserService: QuittanceIndemniserService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
        , private deviseService: DeviseService
) { }

    ngOnInit() : void {
      this.loadQuittanceIndemnisers();
      this.initExport();
      this.initCol();
      this.loadDevise();
    }
    
    // methods
      public async loadQuittanceIndemnisers(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('QuittanceIndemniser', 'list');
        isPermistted ? this.quittanceIndemniserService.findAll().subscribe(quittanceIndemnisers => this.quittanceIndemnisers = quittanceIndemnisers,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.quittanceIndemniserService.findByCriteria(this.searchQuittanceIndemniser).subscribe(quittanceIndemnisers=>{
            
            this.quittanceIndemnisers = quittanceIndemnisers;
           // this.searchQuittanceIndemniser = new QuittanceIndemniserVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'reference', header: 'Reference'},
                            {field: 'dateReception', header: 'Date reception'},
                            {field: 'dateAjout', header: 'Date ajout'},
                            {field: 'objet', header: 'Objet'},
                            {field: 'libelle', header: 'Libelle'},
                        {field: 'devise?.libelle', header: 'Devise'},
        ];
    }
    
    public async editQuittanceIndemniser(quittanceIndemniser: QuittanceIndemniserVo){
        const isPermistted = await this.roleService.isPermitted('QuittanceIndemniser', 'edit');
         if(isPermistted){
          this.quittanceIndemniserService.findByIdWithAssociatedList(quittanceIndemniser).subscribe(res => {
           this.selectedQuittanceIndemniser = res;
            this.selectedQuittanceIndemniser.dateReception = new Date(quittanceIndemniser.dateReception);
            this.selectedQuittanceIndemniser.dateAjout = new Date(quittanceIndemniser.dateAjout);
            this.editQuittanceIndemniserDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewQuittanceIndemniser(quittanceIndemniser: QuittanceIndemniserVo){
        const isPermistted = await this.roleService.isPermitted('QuittanceIndemniser', 'view');
        if(isPermistted){
           this.quittanceIndemniserService.findByIdWithAssociatedList(quittanceIndemniser).subscribe(res => {
           this.selectedQuittanceIndemniser = res;
            this.selectedQuittanceIndemniser.dateReception = new Date(quittanceIndemniser.dateReception);
            this.selectedQuittanceIndemniser.dateAjout = new Date(quittanceIndemniser.dateAjout);
            this.viewQuittanceIndemniserDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateQuittanceIndemniser(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedQuittanceIndemniser = new QuittanceIndemniserVo();
            this.createQuittanceIndemniserDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteQuittanceIndemniser(quittanceIndemniser: QuittanceIndemniserVo){
       const isPermistted = await this.roleService.isPermitted('QuittanceIndemniser', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Quittance indemniser) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.quittanceIndemniserService.delete(quittanceIndemniser).subscribe(status=>{
                          if(status > 0){
                          const position = this.quittanceIndemnisers.indexOf(quittanceIndemniser);
                          position > -1 ? this.quittanceIndemnisers.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Quittance indemniser Supprimé',
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

public async loadDevise(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('QuittanceIndemniser', 'list');
    isPermistted ? this.deviseService.findAll().subscribe(devises => this.devises = devises,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateQuittanceIndemniser(quittanceIndemniser: QuittanceIndemniserVo) {

     this.quittanceIndemniserService.findByIdWithAssociatedList(quittanceIndemniser).subscribe(
	 res => {
	       this.initDuplicateQuittanceIndemniser(res);
	       this.selectedQuittanceIndemniser = res;
	       this.selectedQuittanceIndemniser.id = null;
            this.createQuittanceIndemniserDialog = true;

});

	}

	initDuplicateQuittanceIndemniser(res: QuittanceIndemniserVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.quittanceIndemnisers.map(e => {
    return {
                    'Reference': e.reference ,
                    'Date reception': this.datePipe.transform(e.dateReception , 'dd-MM-yyyy'),
                    'Date ajout': this.datePipe.transform(e.dateAjout , 'dd-MM-yyyy'),
                    'Objet': e.objet ,
                    'Libelle': e.libelle ,
            'Devise': e.deviseVo?.libelle ,
     }
      });

      this.criteriaData = [{
            'Reference': this.searchQuittanceIndemniser.reference ? this.searchQuittanceIndemniser.reference : environment.emptyForExport ,
            'Date reception Min': this.searchQuittanceIndemniser.dateReceptionMin ? this.datePipe.transform(this.searchQuittanceIndemniser.dateReceptionMin , this.dateFormat) : environment.emptyForExport ,
            'Date reception Max': this.searchQuittanceIndemniser.dateReceptionMax ? this.datePipe.transform(this.searchQuittanceIndemniser.dateReceptionMax , this.dateFormat) : environment.emptyForExport ,
            'Date ajout Min': this.searchQuittanceIndemniser.dateAjoutMin ? this.datePipe.transform(this.searchQuittanceIndemniser.dateAjoutMin , this.dateFormat) : environment.emptyForExport ,
            'Date ajout Max': this.searchQuittanceIndemniser.dateAjoutMax ? this.datePipe.transform(this.searchQuittanceIndemniser.dateAjoutMax , this.dateFormat) : environment.emptyForExport ,
            'Objet': this.searchQuittanceIndemniser.objet ? this.searchQuittanceIndemniser.objet : environment.emptyForExport ,
            'Libelle': this.searchQuittanceIndemniser.libelle ? this.searchQuittanceIndemniser.libelle : environment.emptyForExport ,
        'Devise': this.searchQuittanceIndemniser.deviseVo?.libelle ? this.searchQuittanceIndemniser.deviseVo?.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get quittanceIndemnisers() : Array<QuittanceIndemniserVo> {
           return this.quittanceIndemniserService.quittanceIndemnisers;
       }
    set quittanceIndemnisers(value: Array<QuittanceIndemniserVo>) {
        this.quittanceIndemniserService.quittanceIndemnisers = value;
       }

    get quittanceIndemniserSelections() : Array<QuittanceIndemniserVo> {
           return this.quittanceIndemniserService.quittanceIndemniserSelections;
       }
    set quittanceIndemniserSelections(value: Array<QuittanceIndemniserVo>) {
        this.quittanceIndemniserService.quittanceIndemniserSelections = value;
       }
   
     


    get selectedQuittanceIndemniser() : QuittanceIndemniserVo {
           return this.quittanceIndemniserService.selectedQuittanceIndemniser;
       }
    set selectedQuittanceIndemniser(value: QuittanceIndemniserVo) {
        this.quittanceIndemniserService.selectedQuittanceIndemniser = value;
       }
    
    get createQuittanceIndemniserDialog() :boolean {
           return this.quittanceIndemniserService.createQuittanceIndemniserDialog;
       }
    set createQuittanceIndemniserDialog(value: boolean) {
        this.quittanceIndemniserService.createQuittanceIndemniserDialog= value;
       }
    
    get editQuittanceIndemniserDialog() :boolean {
           return this.quittanceIndemniserService.editQuittanceIndemniserDialog;
       }
    set editQuittanceIndemniserDialog(value: boolean) {
        this.quittanceIndemniserService.editQuittanceIndemniserDialog= value;
       }
    get viewQuittanceIndemniserDialog() :boolean {
           return this.quittanceIndemniserService.viewQuittanceIndemniserDialog;
       }
    set viewQuittanceIndemniserDialog(value: boolean) {
        this.quittanceIndemniserService.viewQuittanceIndemniserDialog = value;
       }
       
     get searchQuittanceIndemniser() : QuittanceIndemniserVo {
        return this.quittanceIndemniserService.searchQuittanceIndemniser;
       }
    set searchQuittanceIndemniser(value: QuittanceIndemniserVo) {
        this.quittanceIndemniserService.searchQuittanceIndemniser = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
