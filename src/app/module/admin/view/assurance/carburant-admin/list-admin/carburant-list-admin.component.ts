import {Component, OnInit} from '@angular/core';
import {CarburantService} from 'src/app/controller/service/Carburant.service';
import {CarburantVo} from 'src/app/controller/model/Carburant.model';
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
  selector: 'app-carburant-list-admin',
  templateUrl: './carburant-list-admin.component.html',
  styleUrls: ['./carburant-list-admin.component.css']
})
export class CarburantListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Carburant';


    constructor(private datePipe: DatePipe, private carburantService: CarburantService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadCarburants();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadCarburants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Carburant', 'list');
        isPermistted ? this.carburantService.findAll().subscribe(carburants => this.carburants = carburants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.carburantService.findByCriteria(this.searchCarburant).subscribe(carburants=>{
            
            this.carburants = carburants;
           // this.searchCarburant = new CarburantVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
        ];
    }
    
    public async editCarburant(carburant: CarburantVo){
        const isPermistted = await this.roleService.isPermitted('Carburant', 'edit');
         if(isPermistted){
          this.carburantService.findByIdWithAssociatedList(carburant).subscribe(res => {
           this.selectedCarburant = res;
            this.editCarburantDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewCarburant(carburant: CarburantVo){
        const isPermistted = await this.roleService.isPermitted('Carburant', 'view');
        if(isPermistted){
           this.carburantService.findByIdWithAssociatedList(carburant).subscribe(res => {
           this.selectedCarburant = res;
            this.viewCarburantDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateCarburant(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedCarburant = new CarburantVo();
            this.createCarburantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteCarburant(carburant: CarburantVo){
       const isPermistted = await this.roleService.isPermitted('Carburant', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Carburant) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.carburantService.delete(carburant).subscribe(status=>{
                          if(status > 0){
                          const position = this.carburants.indexOf(carburant);
                          position > -1 ? this.carburants.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Carburant Supprimé',
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


public async duplicateCarburant(carburant: CarburantVo) {

     this.carburantService.findByIdWithAssociatedList(carburant).subscribe(
	 res => {
	       this.initDuplicateCarburant(res);
	       this.selectedCarburant = res;
	       this.selectedCarburant.id = null;
            this.createCarburantDialog = true;

});

	}

	initDuplicateCarburant(res: CarburantVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.carburants.map(e => {
    return {
                    'Libelle': e.libelle ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchCarburant.libelle ? this.searchCarburant.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get carburants() : Array<CarburantVo> {
           return this.carburantService.carburants;
       }
    set carburants(value: Array<CarburantVo>) {
        this.carburantService.carburants = value;
       }

    get carburantSelections() : Array<CarburantVo> {
           return this.carburantService.carburantSelections;
       }
    set carburantSelections(value: Array<CarburantVo>) {
        this.carburantService.carburantSelections = value;
       }
   
     


    get selectedCarburant() : CarburantVo {
           return this.carburantService.selectedCarburant;
       }
    set selectedCarburant(value: CarburantVo) {
        this.carburantService.selectedCarburant = value;
       }
    
    get createCarburantDialog() :boolean {
           return this.carburantService.createCarburantDialog;
       }
    set createCarburantDialog(value: boolean) {
        this.carburantService.createCarburantDialog= value;
       }
    
    get editCarburantDialog() :boolean {
           return this.carburantService.editCarburantDialog;
       }
    set editCarburantDialog(value: boolean) {
        this.carburantService.editCarburantDialog= value;
       }
    get viewCarburantDialog() :boolean {
           return this.carburantService.viewCarburantDialog;
       }
    set viewCarburantDialog(value: boolean) {
        this.carburantService.viewCarburantDialog = value;
       }
       
     get searchCarburant() : CarburantVo {
        return this.carburantService.searchCarburant;
       }
    set searchCarburant(value: CarburantVo) {
        this.carburantService.searchCarburant = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
