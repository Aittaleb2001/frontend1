import {Component, OnInit, Input} from '@angular/core';
import {AgentService} from 'src/app/controller/service/Agent.service';
import {AgentVo} from 'src/app/controller/model/Agent.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-agent-edit-gestionnaire',
  templateUrl: './agent-edit-gestionnaire.component.html',
  styleUrls: ['./agent-edit-gestionnaire.component.css']
})
export class AgentEditGestionnaireComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validAgentReference = true;




constructor(private datePipe: DatePipe, private agentService: AgentService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}


// methods
ngOnInit(): void {

}




private setValidation(value : boolean){
    this.validAgentReference = value;
    }


public edit(){
  this.submitted = true;
  this.validateForm();
  if (this.errorMessages.length === 0) {
        this.editWithShowOption(false);
  } else {
        this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Merci de corrigé les erreurs sur le formulaire'});
  }
}

public editWithShowOption(showList: boolean){
     this.agentService.edit().subscribe(agent=>{
     const myIndex = this.agents.findIndex(e => e.id === this.selectedAgent.id);
     this.agents[myIndex] = this.selectedAgent;
     this.editAgentDialog = false;
     this.submitted = false;
     this.selectedAgent = new AgentVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateAgentReference();

    }

private validateAgentReference(){
        if (this.stringUtilService.isEmpty(this.selectedAgent.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validAgentReference = false;
        } else {
            this.validAgentReference = true;
        }
    }



















//openPopup
// methods

hideEditDialog(){
    this.editAgentDialog  = false;
    this.setValidation(true);
}

// getters and setters

get agents(): Array<AgentVo> {
    return this.agentService.agents;
       }
set agents(value: Array<AgentVo>) {
        this.agentService.agents = value;
       }

 get selectedAgent(): AgentVo {
           return this.agentService.selectedAgent;
       }
    set selectedAgent(value: AgentVo) {
        this.agentService.selectedAgent = value;
       }

   get editAgentDialog(): boolean {
           return this.agentService.createAgentDialog;

       }
    set editAgentDialog(value: boolean) {
        this.agentService.createAgentDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatEdit;
     }

     get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }




    get errorMessages(): string[] {
    return this._errorMessages;
    }

    set errorMessages(value: string[]) {
    this._errorMessages = value;
    }

    get validAgentReference(): boolean {
    return this._validAgentReference;
    }

    set validAgentReference(value: boolean) {
    this._validAgentReference = value;
    }

}
