import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {ContratGarantieVo} from '../model/ContratGarantie.model';
import {GarantieVo} from '../model/Garantie.model';
import {ContratVo} from '../model/Contrat.model';


@Injectable({
  providedIn: 'root'
})
export class ContratGarantieService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/contratGarantie/';
        })
    }
     private _contratGaranties: Array<ContratGarantieVo> ;
     private _selectedContratGarantie: ContratGarantieVo;
     private _contratGarantieSelections: Array<ContratGarantieVo>;
     private _createContratGarantieDialog: boolean;
     private _editContratGarantieDialog: boolean;
     private _viewContratGarantieDialog: boolean;
     public editContratGarantie$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchContratGarantie: ContratGarantieVo ;

    // methods

    public findAll(){
     return this.http.get<Array<ContratGarantieVo>>(this.API);
    }

    public save(): Observable<ContratGarantieVo> {
         return this.http.post<ContratGarantieVo>(this.API, this.selectedContratGarantie);
    }

    delete(contratGarantie: ContratGarantieVo) {
         return this.http.delete<number>(this.API + 'id/' + contratGarantie.id);
    }


    public edit(): Observable<ContratGarantieVo> {
        return this.http.put<ContratGarantieVo>(this.API, this.selectedContratGarantie);
    }


     public findByCriteria(contratGarantie:ContratGarantieVo):Observable<Array<ContratGarantieVo>>{
           return this.http.post<Array<ContratGarantieVo>>(this.API +'search', contratGarantie);
    }

   public findByIdWithAssociatedList(contratGarantie:ContratGarantieVo):Observable<ContratGarantieVo>{
         return this.http.get<ContratGarantieVo>(this.API + 'detail/id/' +contratGarantie.id);
    }

    // getters and setters


    get contratGaranties(): Array<ContratGarantieVo> {
    if(this._contratGaranties==null){
    this._contratGaranties=new Array<ContratGarantieVo>();
    }
return this._contratGaranties;
       }

    set contratGaranties(value: Array<ContratGarantieVo>) {
        this._contratGaranties = value;
       }

    get selectedContratGarantie(): ContratGarantieVo {
    if(this._selectedContratGarantie==null){
    this._selectedContratGarantie=new ContratGarantieVo();
    }
           return this._selectedContratGarantie;
       }

    set selectedContratGarantie(value: ContratGarantieVo) {
        this._selectedContratGarantie = value;
       }

    get contratGarantieSelections(): Array<ContratGarantieVo> {
    if(this._contratGarantieSelections==null){
    this._contratGarantieSelections=new Array<ContratGarantieVo>();
    }
        return this._contratGarantieSelections;
       }


    set contratGarantieSelections(value: Array<ContratGarantieVo>) {
        this._contratGarantieSelections = value;
       }

    get createContratGarantieDialog(): boolean {
        return this._createContratGarantieDialog;
       }

    set createContratGarantieDialog(value: boolean) {
        this._createContratGarantieDialog = value;
       }

    get editContratGarantieDialog(): boolean {
        return this._editContratGarantieDialog;
       }

    set editContratGarantieDialog(value: boolean) {
        this._editContratGarantieDialog = value;
       }

    get viewContratGarantieDialog(): boolean {
        return this._viewContratGarantieDialog;
       }

    set viewContratGarantieDialog(value: boolean) {
        this._viewContratGarantieDialog = value;
       }

     get searchContratGarantie(): ContratGarantieVo {
     if(this._searchContratGarantie==null){
    this._searchContratGarantie=new ContratGarantieVo();
    }
        return this._searchContratGarantie;
    }

    set searchContratGarantie(value: ContratGarantieVo) {
        this._searchContratGarantie = value;
       }

}
