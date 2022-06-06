import {Component, OnInit} from '@angular/core';
import {QuittancePrimeService} from 'src/app/controller/service/QuittancePrime.service';
import {QuittancePrimeVo} from 'src/app/controller/model/QuittancePrime.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import { ContratService } from 'src/app/controller/service/Contrat.service';

import {ContratVo} from 'src/app/controller/model/Contrat.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import { ExportService } from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-quittance-prime-list-admin',
  templateUrl: './quittance-prime-list-admin.component.html',
  styleUrls: ['./quittance-prime-list-admin.component.css']
})
export class QuittancePrimeListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'QuittancePrime';
    contrats :Array<ContratVo>;


    constructor(private datePipe: DatePipe, private quittancePrimeService: QuittancePrimeService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
        , private contratService: ContratService
) { }

    ngOnInit() : void {
      this.loadQuittancePrimes();
      this.initExport();
      this.initCol();
      this.loadContrat();
    }
    
    // methods
      public async loadQuittancePrimes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('QuittancePrime', 'list');
        isPermistted ? this.quittancePrimeService.findAll().subscribe(quittancePrimes => this.quittancePrimes = quittancePrimes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.quittancePrimeService.findByCriteria(this.searchQuittancePrime).subscribe(quittancePrimes=>{
            
            this.quittancePrimes = quittancePrimes;
           // this.searchQuittancePrime = new QuittancePrimeVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'primeNette', header: 'Prime nette'},
                            {field: 'taxe', header: 'Taxe'},
                            {field: 'accessoires', header: 'Accessoires'},
                            {field: 'totalTtc', header: 'Total ttc'},
                            {field: 'totalQuittance', header: 'Total quittance'},
                            {field: 'totalPaye', header: 'Total paye'},
                            {field: 'rest', header: 'Rest'},
                        {field: 'contrat?.numAttestation', header: 'Contrat'},
        ];
    }
    
    public async editQuittancePrime(quittancePrime: QuittancePrimeVo){
        const isPermistted = await this.roleService.isPermitted('QuittancePrime', 'edit');
         if(isPermistted){
          this.quittancePrimeService.findByIdWithAssociatedList(quittancePrime).subscribe(res => {
           this.selectedQuittancePrime = res;
            this.editQuittancePrimeDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewQuittancePrime(quittancePrime: QuittancePrimeVo){
        const isPermistted = await this.roleService.isPermitted('QuittancePrime', 'view');
        if(isPermistted){
           this.quittancePrimeService.findByIdWithAssociatedList(quittancePrime).subscribe(res => {
           this.selectedQuittancePrime = res;
            this.viewQuittancePrimeDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateQuittancePrime(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedQuittancePrime = new QuittancePrimeVo();
            this.createQuittancePrimeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteQuittancePrime(quittancePrime: QuittancePrimeVo){
       const isPermistted = await this.roleService.isPermitted('QuittancePrime', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Quittance prime) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.quittancePrimeService.delete(quittancePrime).subscribe(status=>{
                          if(status > 0){
                          const position = this.quittancePrimes.indexOf(quittancePrime);
                          position > -1 ? this.quittancePrimes.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Quittance prime Supprimé',
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

public async loadContrat(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('QuittancePrime', 'list');
    isPermistted ? this.contratService.findAll().subscribe(contrats => this.contrats = contrats,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateQuittancePrime(quittancePrime: QuittancePrimeVo) {

     this.quittancePrimeService.findByIdWithAssociatedList(quittancePrime).subscribe(
	 res => {
	       this.initDuplicateQuittancePrime(res);
	       this.selectedQuittancePrime = res;
	       this.selectedQuittancePrime.id = null;
            this.createQuittancePrimeDialog = true;

});

	}

	initDuplicateQuittancePrime(res: QuittancePrimeVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.quittancePrimes.map(e => {
    return {
                    'Prime nette': e.primeNette ,
                    'Taxe': e.taxe ,
                    'Accessoires': e.accessoires ,
                    'Total ttc': e.totalTtc ,
                    'Total quittance': e.totalQuittance ,
                    'Total paye': e.totalPaye ,
                    'Rest': e.rest ,
            'Contrat': e.contratVo?.numAttestation ,
     }
      });

      this.criteriaData = [{
            'Prime nette Min': this.searchQuittancePrime.primeNetteMin ? this.searchQuittancePrime.primeNetteMin : environment.emptyForExport ,
            'Prime nette Max': this.searchQuittancePrime.primeNetteMax ? this.searchQuittancePrime.primeNetteMax : environment.emptyForExport ,
            'Taxe Min': this.searchQuittancePrime.taxeMin ? this.searchQuittancePrime.taxeMin : environment.emptyForExport ,
            'Taxe Max': this.searchQuittancePrime.taxeMax ? this.searchQuittancePrime.taxeMax : environment.emptyForExport ,
            'Accessoires': this.searchQuittancePrime.accessoires ? this.searchQuittancePrime.accessoires : environment.emptyForExport ,
            'Total ttc Min': this.searchQuittancePrime.totalTtcMin ? this.searchQuittancePrime.totalTtcMin : environment.emptyForExport ,
            'Total ttc Max': this.searchQuittancePrime.totalTtcMax ? this.searchQuittancePrime.totalTtcMax : environment.emptyForExport ,
            'Total quittance Min': this.searchQuittancePrime.totalQuittanceMin ? this.searchQuittancePrime.totalQuittanceMin : environment.emptyForExport ,
            'Total quittance Max': this.searchQuittancePrime.totalQuittanceMax ? this.searchQuittancePrime.totalQuittanceMax : environment.emptyForExport ,
            'Total paye Min': this.searchQuittancePrime.totalPayeMin ? this.searchQuittancePrime.totalPayeMin : environment.emptyForExport ,
            'Total paye Max': this.searchQuittancePrime.totalPayeMax ? this.searchQuittancePrime.totalPayeMax : environment.emptyForExport ,
            'Rest Min': this.searchQuittancePrime.restMin ? this.searchQuittancePrime.restMin : environment.emptyForExport ,
            'Rest Max': this.searchQuittancePrime.restMax ? this.searchQuittancePrime.restMax : environment.emptyForExport ,
        'Contrat': this.searchQuittancePrime.contratVo?.numAttestation ? this.searchQuittancePrime.contratVo?.numAttestation : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get quittancePrimes() : Array<QuittancePrimeVo> {
           return this.quittancePrimeService.quittancePrimes;
       }
    set quittancePrimes(value: Array<QuittancePrimeVo>) {
        this.quittancePrimeService.quittancePrimes = value;
       }

    get quittancePrimeSelections() : Array<QuittancePrimeVo> {
           return this.quittancePrimeService.quittancePrimeSelections;
       }
    set quittancePrimeSelections(value: Array<QuittancePrimeVo>) {
        this.quittancePrimeService.quittancePrimeSelections = value;
       }
   
     


    get selectedQuittancePrime() : QuittancePrimeVo {
           return this.quittancePrimeService.selectedQuittancePrime;
       }
    set selectedQuittancePrime(value: QuittancePrimeVo) {
        this.quittancePrimeService.selectedQuittancePrime = value;
       }
    
    get createQuittancePrimeDialog() :boolean {
           return this.quittancePrimeService.createQuittancePrimeDialog;
       }
    set createQuittancePrimeDialog(value: boolean) {
        this.quittancePrimeService.createQuittancePrimeDialog= value;
       }
    
    get editQuittancePrimeDialog() :boolean {
           return this.quittancePrimeService.editQuittancePrimeDialog;
       }
    set editQuittancePrimeDialog(value: boolean) {
        this.quittancePrimeService.editQuittancePrimeDialog= value;
       }
    get viewQuittancePrimeDialog() :boolean {
           return this.quittancePrimeService.viewQuittancePrimeDialog;
       }
    set viewQuittancePrimeDialog(value: boolean) {
        this.quittancePrimeService.viewQuittancePrimeDialog = value;
       }
       
     get searchQuittancePrime() : QuittancePrimeVo {
        return this.quittancePrimeService.searchQuittancePrime;
       }
    set searchQuittancePrime(value: QuittancePrimeVo) {
        this.quittancePrimeService.searchQuittancePrime = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
