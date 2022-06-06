import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {AgentVo} from '../model/Agent.model';


@Injectable({
  providedIn: 'root'
})
export class AgentService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/agent/';
        })
    }
     private _agents: Array<AgentVo> ;
     private _selectedAgent: AgentVo;
     private _agentSelections: Array<AgentVo>;
     private _createAgentDialog: boolean;
     private _editAgentDialog: boolean;
     private _viewAgentDialog: boolean;
     public editAgent$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchAgent: AgentVo ;
     private _switchChercheurDialog: boolean;

    // methods

    public findAll(){
     return this.http.get<Array<AgentVo>>(this.API);
    }

    public save(): Observable<AgentVo> {
           return this.http.post<AgentVo>(this.API, {...this.selectedAgent,updatedAt: moment(this.selectedAgent.updatedAt).format("YYYY-MM-DD")});
    }

    delete(agent: AgentVo) {
         return this.http.delete<number>(this.API + 'id/' + agent.id);
    }


    public edit(): Observable<AgentVo> {
        return this.http.put<AgentVo>(this.API, this.selectedAgent);
    }


     public findByCriteria(agent:AgentVo):Observable<Array<AgentVo>>{
           return this.http.post<Array<AgentVo>>(this.API +'search', agent);
    }

   public findByIdWithAssociatedList(agent:AgentVo):Observable<AgentVo>{
         return this.http.get<AgentVo>(this.API + 'detail/id/' +agent.id);
    }

    // getters and setters


    get agents(): Array<AgentVo> {
    if(this._agents==null){
    this._agents=new Array<AgentVo>();
    }
return this._agents;
       }

    set agents(value: Array<AgentVo>) {
        this._agents = value;
       }

    get selectedAgent(): AgentVo {
    if(this._selectedAgent==null){
    this._selectedAgent=new AgentVo();
    }
           return this._selectedAgent;
       }

    set selectedAgent(value: AgentVo) {
        this._selectedAgent = value;
       }

    get agentSelections(): Array<AgentVo> {
    if(this._agentSelections==null){
    this._agentSelections=new Array<AgentVo>();
    }
        return this._agentSelections;
       }


    set agentSelections(value: Array<AgentVo>) {
        this._agentSelections = value;
       }

    get createAgentDialog(): boolean {
        return this._createAgentDialog;
       }

    set createAgentDialog(value: boolean) {
        this._createAgentDialog = value;
       }

    get editAgentDialog(): boolean {
        return this._editAgentDialog;
       }

    set editAgentDialog(value: boolean) {
        this._editAgentDialog = value;
       }

    get viewAgentDialog(): boolean {
        return this._viewAgentDialog;
       }

    set viewAgentDialog(value: boolean) {
        this._viewAgentDialog = value;
       }

     get searchAgent(): AgentVo {
     if(this._searchAgent==null){
    this._searchAgent=new AgentVo();
    }
        return this._searchAgent;
    }

    set searchAgent(value: AgentVo) {
        this._searchAgent = value;
       }

   get switchChercheurDialog(): boolean {
    return this._switchChercheurDialog;
    }

    set switchChercheurDialog(value: boolean) {
    this._switchChercheurDialog = value;
    }
}
