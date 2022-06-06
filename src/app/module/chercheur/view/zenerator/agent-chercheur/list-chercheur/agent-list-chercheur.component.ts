import {Component, OnInit} from '@angular/core';
import {AgentService} from 'src/app/controller/service/Agent.service';
import {AgentVo} from 'src/app/controller/model/Agent.model';
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
  selector: 'app-agent-list-chercheur',
  templateUrl: './agent-list-chercheur.component.html',
  styleUrls: ['./agent-list-chercheur.component.css']
})
export class AgentListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Agent';
     yesOrNoCredentialsNonExpired :any[] =[];
     yesOrNoEnabled :any[] =[];
     yesOrNoAccountNonExpired :any[] =[];
     yesOrNoAccountNonLocked :any[] =[];
     yesOrNoPasswordChanged :any[] =[];


    constructor(private datePipe: DatePipe, private agentService: AgentService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadAgents();
      this.initExport();
      this.initCol();
    this.yesOrNoCredentialsNonExpired =  [{label: 'CredentialsNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoEnabled =  [{label: 'Enabled', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonExpired =  [{label: 'AccountNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonLocked =  [{label: 'AccountNonLocked', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoPasswordChanged =  [{label: 'PasswordChanged', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }
    
    // methods
      public async loadAgents(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Agent', 'list');
        isPermistted ? this.agentService.findAll().subscribe(agents => this.agents = agents,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.agentService.findByCriteria(this.searchAgent).subscribe(agents=>{
            
            this.agents = agents;
           // this.searchAgent = new AgentVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'reference', header: 'Reference'},
                            {field: 'createdAt', header: 'Created at'},
                            {field: 'updatedAt', header: 'Updated at'},
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
    
    public async editAgent(agent: AgentVo){
        const isPermistted = await this.roleService.isPermitted('Agent', 'edit');
         if(isPermistted){
          this.agentService.findByIdWithAssociatedList(agent).subscribe(res => {
           this.selectedAgent = res;
            this.selectedAgent.createdAt = new Date(agent.createdAt);
            this.selectedAgent.updatedAt = new Date(agent.updatedAt);
            this.selectedAgent.createdAt = new Date(agent.createdAt);
            this.selectedAgent.updatedAt = new Date(agent.updatedAt);
            this.editAgentDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewAgent(agent: AgentVo){
        const isPermistted = await this.roleService.isPermitted('Agent', 'view');
        if(isPermistted){
           this.agentService.findByIdWithAssociatedList(agent).subscribe(res => {
           this.selectedAgent = res;
            this.selectedAgent.createdAt = new Date(agent.createdAt);
            this.selectedAgent.updatedAt = new Date(agent.updatedAt);
            this.selectedAgent.createdAt = new Date(agent.createdAt);
            this.selectedAgent.updatedAt = new Date(agent.updatedAt);
            this.viewAgentDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateAgent(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedAgent = new AgentVo();
            this.createAgentDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteAgent(agent: AgentVo){
       const isPermistted = await this.roleService.isPermitted('Agent', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Agent) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.agentService.delete(agent).subscribe(status=>{
                          if(status > 0){
                          const position = this.agents.indexOf(agent);
                          position > -1 ? this.agents.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Agent Supprimé',
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


public async duplicateAgent(agent: AgentVo) {

     this.agentService.findByIdWithAssociatedList(agent).subscribe(
	 res => {
	       this.initDuplicateAgent(res);
	       this.selectedAgent = res;
	       this.selectedAgent.id = null;
            this.createAgentDialog = true;

});

	}

	initDuplicateAgent(res: AgentVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.agents.map(e => {
    return {
                    'Reference': e.reference ,
                    'Created at': this.datePipe.transform(e.createdAt , 'dd-MM-yyyy'),
                    'Updated at': this.datePipe.transform(e.updatedAt , 'dd-MM-yyyy'),
                    'Role': e.role ,
                    'Credentials non expired': e.credentialsNonExpired? 'Vrai' : 'Faux' ,
                    'Enabled': e.enabled? 'Vrai' : 'Faux' ,
                    'Account non expired': e.accountNonExpired? 'Vrai' : 'Faux' ,
                    'Account non locked': e.accountNonLocked? 'Vrai' : 'Faux' ,
                    'Password changed': e.passwordChanged? 'Vrai' : 'Faux' ,
                    //'Created at': this.datePipe.transform(e.createdAt , 'dd-MM-yyyy'),
                    //'Updated at': this.datePipe.transform(e.updatedAt , 'dd-MM-yyyy'),
                    'Username': e.username ,
                    'Password': e.password ,
                    'Prenom': e.prenom ,
                    'Nom': e.nom ,
     }
      });

      this.criteriaData = [{
            'Reference': this.searchAgent.reference ? this.searchAgent.reference : environment.emptyForExport ,
            'Created at Min': this.searchAgent.createdAtMin ? this.datePipe.transform(this.searchAgent.createdAtMin , this.dateFormat) : environment.emptyForExport ,
            'Created at Max': this.searchAgent.createdAtMax ? this.datePipe.transform(this.searchAgent.createdAtMax , this.dateFormat) : environment.emptyForExport ,
            'Updated at Min': this.searchAgent.updatedAtMin ? this.datePipe.transform(this.searchAgent.updatedAtMin , this.dateFormat) : environment.emptyForExport ,
            'Updated at Max': this.searchAgent.updatedAtMax ? this.datePipe.transform(this.searchAgent.updatedAtMax , this.dateFormat) : environment.emptyForExport ,
            'Role': this.searchAgent.role ? this.searchAgent.role : environment.emptyForExport ,
            'Credentials non expired': this.searchAgent.credentialsNonExpired ? (this.searchAgent.credentialsNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Enabled': this.searchAgent.enabled ? (this.searchAgent.enabled ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non expired': this.searchAgent.accountNonExpired ? (this.searchAgent.accountNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non locked': this.searchAgent.accountNonLocked ? (this.searchAgent.accountNonLocked ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Password changed': this.searchAgent.passwordChanged ? (this.searchAgent.passwordChanged ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            //'Created at Min': this.searchAgent.createdAtMin ? this.datePipe.transform(this.searchAgent.createdAtMin , this.dateFormat) : environment.emptyForExport ,
            //'Created at Max': this.searchAgent.createdAtMax ? this.datePipe.transform(this.searchAgent.createdAtMax , this.dateFormat) : environment.emptyForExport ,
            //'Updated at Min': this.searchAgent.updatedAtMin ? this.datePipe.transform(this.searchAgent.updatedAtMin , this.dateFormat) : environment.emptyForExport ,
            //'Updated at Max': this.searchAgent.updatedAtMax ? this.datePipe.transform(this.searchAgent.updatedAtMax , this.dateFormat) : environment.emptyForExport ,
            'Username': this.searchAgent.username ? this.searchAgent.username : environment.emptyForExport ,
            'Password': this.searchAgent.password ? this.searchAgent.password : environment.emptyForExport ,
            'Prenom': this.searchAgent.prenom ? this.searchAgent.prenom : environment.emptyForExport ,
            'Nom': this.searchAgent.nom ? this.searchAgent.nom : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get agents() : Array<AgentVo> {
           return this.agentService.agents;
       }
    set agents(value: Array<AgentVo>) {
        this.agentService.agents = value;
       }

    get agentSelections() : Array<AgentVo> {
           return this.agentService.agentSelections;
       }
    set agentSelections(value: Array<AgentVo>) {
        this.agentService.agentSelections = value;
       }
   
     


    get selectedAgent() : AgentVo {
           return this.agentService.selectedAgent;
       }
    set selectedAgent(value: AgentVo) {
        this.agentService.selectedAgent = value;
       }
    
    get createAgentDialog() :boolean {
           return this.agentService.createAgentDialog;
       }
    set createAgentDialog(value: boolean) {
        this.agentService.createAgentDialog= value;
       }
    
    get editAgentDialog() :boolean {
           return this.agentService.editAgentDialog;
       }
    set editAgentDialog(value: boolean) {
        this.agentService.editAgentDialog= value;
       }
    get viewAgentDialog() :boolean {
           return this.agentService.viewAgentDialog;
       }
    set viewAgentDialog(value: boolean) {
        this.agentService.viewAgentDialog = value;
       }
       
     get searchAgent() : AgentVo {
        return this.agentService.searchAgent;
       }
    set searchAgent(value: AgentVo) {
        this.agentService.searchAgent = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
