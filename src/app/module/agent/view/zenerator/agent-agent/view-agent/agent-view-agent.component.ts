import {Component, OnInit} from '@angular/core';
import {AgentService} from 'src/app/controller/service/Agent.service';
import {AgentVo} from 'src/app/controller/model/Agent.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-agent-view-agent',
  templateUrl: './agent-view-agent.component.html',
  styleUrls: ['./agent-view-agent.component.css']
})
export class AgentViewAgentComponent implements OnInit {


constructor(private datePipe: DatePipe, private agentService: AgentService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewAgentDialog  = false;
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

   get viewAgentDialog(): boolean {
           return this.agentService.viewAgentDialog;

       }
    set viewAgentDialog(value: boolean) {
        this.agentService.viewAgentDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
