import {Component, OnInit} from '@angular/core';
import {ContratGarantieService} from 'src/app/controller/service/ContratGarantie.service';
import {ContratGarantieVo} from 'src/app/controller/model/ContratGarantie.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import { ContratService } from 'src/app/controller/service/Contrat.service';
import { GarantieService } from 'src/app/controller/service/Garantie.service';

import {GarantieVo} from 'src/app/controller/model/Garantie.model';
import {ContratVo} from 'src/app/controller/model/Contrat.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import { ExportService } from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-contrat-garantie-list-gestionnaire',
  templateUrl: './contrat-garantie-list-gestionnaire.component.html',
  styleUrls: ['./contrat-garantie-list-gestionnaire.component.css']
})
export class ContratGarantieListGestionnaireComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'ContratGarantie';
    contrats :Array<ContratVo>;
    garanties :Array<GarantieVo>;


    constructor(private datePipe: DatePipe, private contratGarantieService: ContratGarantieService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
        , private contratService: ContratService
        , private garantieService: GarantieService
) { }

    ngOnInit() : void {
      this.loadContratGaranties();
      this.initExport();
      this.initCol();
      this.loadContrat();
      this.loadGarantie();
    }
    
    // methods
      public async loadContratGaranties(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ContratGarantie', 'list');
        isPermistted ? this.contratGarantieService.findAll().subscribe(contratGaranties => this.contratGaranties = contratGaranties,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.contratGarantieService.findByCriteria(this.searchContratGarantie).subscribe(contratGaranties=>{
            
            this.contratGaranties = contratGaranties;
           // this.searchContratGarantie = new ContratGarantieVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                        {field: 'contrat?.numAttestation', header: 'Contrat'},
                        {field: 'garantie?.libelle', header: 'Garantie'},
        ];
    }
    
    public async editContratGarantie(contratGarantie: ContratGarantieVo){
        const isPermistted = await this.roleService.isPermitted('ContratGarantie', 'edit');
         if(isPermistted){
          this.contratGarantieService.findByIdWithAssociatedList(contratGarantie).subscribe(res => {
           this.selectedContratGarantie = res;
            this.editContratGarantieDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewContratGarantie(contratGarantie: ContratGarantieVo){
        const isPermistted = await this.roleService.isPermitted('ContratGarantie', 'view');
        if(isPermistted){
           this.contratGarantieService.findByIdWithAssociatedList(contratGarantie).subscribe(res => {
           this.selectedContratGarantie = res;
            this.viewContratGarantieDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateContratGarantie(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedContratGarantie = new ContratGarantieVo();
            this.createContratGarantieDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteContratGarantie(contratGarantie: ContratGarantieVo){
       const isPermistted = await this.roleService.isPermitted('ContratGarantie', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Contrat garantie) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.contratGarantieService.delete(contratGarantie).subscribe(status=>{
                          if(status > 0){
                          const position = this.contratGaranties.indexOf(contratGarantie);
                          position > -1 ? this.contratGaranties.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Contrat garantie Supprimé',
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
    const isPermistted = await this.roleService.isPermitted('ContratGarantie', 'list');
    isPermistted ? this.contratService.findAll().subscribe(contrats => this.contrats = contrats,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadGarantie(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('ContratGarantie', 'list');
    isPermistted ? this.garantieService.findAll().subscribe(garanties => this.garanties = garanties,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateContratGarantie(contratGarantie: ContratGarantieVo) {

     this.contratGarantieService.findByIdWithAssociatedList(contratGarantie).subscribe(
	 res => {
	       this.initDuplicateContratGarantie(res);
	       this.selectedContratGarantie = res;
	       this.selectedContratGarantie.id = null;
            this.createContratGarantieDialog = true;

});

	}

	initDuplicateContratGarantie(res: ContratGarantieVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.contratGaranties.map(e => {
    return {
            'Contrat': e.contratVo?.numAttestation ,
            'Garantie': e.garantieVo?.libelle ,
     }
      });

      this.criteriaData = [{
        'Contrat': this.searchContratGarantie.contratVo?.numAttestation ? this.searchContratGarantie.contratVo?.numAttestation : environment.emptyForExport ,
        'Garantie': this.searchContratGarantie.garantieVo?.libelle ? this.searchContratGarantie.garantieVo?.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get contratGaranties() : Array<ContratGarantieVo> {
           return this.contratGarantieService.contratGaranties;
       }
    set contratGaranties(value: Array<ContratGarantieVo>) {
        this.contratGarantieService.contratGaranties = value;
       }

    get contratGarantieSelections() : Array<ContratGarantieVo> {
           return this.contratGarantieService.contratGarantieSelections;
       }
    set contratGarantieSelections(value: Array<ContratGarantieVo>) {
        this.contratGarantieService.contratGarantieSelections = value;
       }
   
     


    get selectedContratGarantie() : ContratGarantieVo {
           return this.contratGarantieService.selectedContratGarantie;
       }
    set selectedContratGarantie(value: ContratGarantieVo) {
        this.contratGarantieService.selectedContratGarantie = value;
       }
    
    get createContratGarantieDialog() :boolean {
           return this.contratGarantieService.createContratGarantieDialog;
       }
    set createContratGarantieDialog(value: boolean) {
        this.contratGarantieService.createContratGarantieDialog= value;
       }
    
    get editContratGarantieDialog() :boolean {
           return this.contratGarantieService.editContratGarantieDialog;
       }
    set editContratGarantieDialog(value: boolean) {
        this.contratGarantieService.editContratGarantieDialog= value;
       }
    get viewContratGarantieDialog() :boolean {
           return this.contratGarantieService.viewContratGarantieDialog;
       }
    set viewContratGarantieDialog(value: boolean) {
        this.contratGarantieService.viewContratGarantieDialog = value;
       }
       
     get searchContratGarantie() : ContratGarantieVo {
        return this.contratGarantieService.searchContratGarantie;
       }
    set searchContratGarantie(value: ContratGarantieVo) {
        this.contratGarantieService.searchContratGarantie = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
