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
  selector: 'app-agent-create-chercheur',
  templateUrl: './agent-create-chercheur.component.html',
  styleUrls: ['./agent-create-chercheur.component.css']
})
export class AgentCreateChercheurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validAgentReference = true;




constructor(private datePipe: DatePipe, private agentService: AgentService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}



ngOnInit(): void {

}




private setValidation(value: boolean){
    this.validAgentReference = value;
    }


public save(){
  this.submitted = true;
  this.validateForm();
  if (this.errorMessages.length === 0) {
        this.saveWithShowOption(false);
  } else {
        this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Merci de corrigé les erreurs sur le formulaire'});
  }
}

public saveWithShowOption(showList: boolean){
     this.agentService.save().subscribe(agent=>{
       this.agents.push({...agent});
       this.createAgentDialog = false;
       this.submitted = false;
       this.selectedAgent = new AgentVo();


    } , error =>{
        console.log(error);
    });
}

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




















hideCreateDialog(){
    this.createAgentDialog  = false;
    this.setValidation(true);
}

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

   get createAgentDialog(): boolean {
           return this.agentService.createAgentDialog;

       }
    set createAgentDialog(value: boolean) {
        this.agentService.createAgentDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatCreate;
    }

    get dateFormatColumn(){
            return environment.dateFormatCreate;
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
