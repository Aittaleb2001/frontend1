import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {ClientSininstreVo} from '../model/ClientSininstre.model';
import {SinistreVo} from '../model/Sinistre.model';
import {QuittanceIndemniserVo} from '../model/QuittanceIndemniser.model';
import {ClientVo} from '../model/Client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientSininstreService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/clientSininstre/';
        })
    }
     private _clientSininstres: Array<ClientSininstreVo> ;
     private _selectedClientSininstre: ClientSininstreVo;
     private _clientSininstreSelections: Array<ClientSininstreVo>;
     private _createClientSininstreDialog: boolean;
     private _editClientSininstreDialog: boolean;
     private _viewClientSininstreDialog: boolean;
     public editClientSininstre$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchClientSininstre: ClientSininstreVo ;

    // methods

    public findAll(){
     return this.http.get<Array<ClientSininstreVo>>(this.API);
    }

    public save(): Observable<ClientSininstreVo> {
           return this.http.post<ClientSininstreVo>(this.API, {...this.selectedClientSininstre,dateSinistre: moment(this.selectedClientSininstre.dateSinistre).format("YYYY-MM-DD")});
    }

    delete(clientSininstre: ClientSininstreVo) {
         return this.http.delete<number>(this.API + 'id/' + clientSininstre.id);
    }


    public edit(): Observable<ClientSininstreVo> {
        return this.http.put<ClientSininstreVo>(this.API, this.selectedClientSininstre);
    }


     public findByCriteria(clientSininstre:ClientSininstreVo):Observable<Array<ClientSininstreVo>>{
           return this.http.post<Array<ClientSininstreVo>>(this.API +'search', clientSininstre);
    }

   public findByIdWithAssociatedList(clientSininstre:ClientSininstreVo):Observable<ClientSininstreVo>{
         return this.http.get<ClientSininstreVo>(this.API + 'detail/id/' +clientSininstre.id);
    }

    // getters and setters


    get clientSininstres(): Array<ClientSininstreVo> {
    if(this._clientSininstres==null){
    this._clientSininstres=new Array<ClientSininstreVo>();
    }
return this._clientSininstres;
       }

    set clientSininstres(value: Array<ClientSininstreVo>) {
        this._clientSininstres = value;
       }

    get selectedClientSininstre(): ClientSininstreVo {
    if(this._selectedClientSininstre==null){
    this._selectedClientSininstre=new ClientSininstreVo();
    }
           return this._selectedClientSininstre;
       }

    set selectedClientSininstre(value: ClientSininstreVo) {
        this._selectedClientSininstre = value;
       }

    get clientSininstreSelections(): Array<ClientSininstreVo> {
    if(this._clientSininstreSelections==null){
    this._clientSininstreSelections=new Array<ClientSininstreVo>();
    }
        return this._clientSininstreSelections;
       }


    set clientSininstreSelections(value: Array<ClientSininstreVo>) {
        this._clientSininstreSelections = value;
       }

    get createClientSininstreDialog(): boolean {
        return this._createClientSininstreDialog;
       }

    set createClientSininstreDialog(value: boolean) {
        this._createClientSininstreDialog = value;
       }

    get editClientSininstreDialog(): boolean {
        return this._editClientSininstreDialog;
       }

    set editClientSininstreDialog(value: boolean) {
        this._editClientSininstreDialog = value;
       }

    get viewClientSininstreDialog(): boolean {
        return this._viewClientSininstreDialog;
       }

    set viewClientSininstreDialog(value: boolean) {
        this._viewClientSininstreDialog = value;
       }

     get searchClientSininstre(): ClientSininstreVo {
     if(this._searchClientSininstre==null){
    this._searchClientSininstre=new ClientSininstreVo();
    }
        return this._searchClientSininstre;
    }

    set searchClientSininstre(value: ClientSininstreVo) {
        this._searchClientSininstre = value;
       }

}
