import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {SinistreVo} from '../model/Sinistre.model';
import {TypeSinistreVo} from '../model/TypeSinistre.model';
import {ClientVo} from '../model/Client.model';


@Injectable({
  providedIn: 'root'
})
export class SinistreService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/sinistre/';
        })
    }
     private _sinistres: Array<SinistreVo> ;
     private _selectedSinistre: SinistreVo;
     private _sinistreSelections: Array<SinistreVo>;
     private _createSinistreDialog: boolean;
     private _editSinistreDialog: boolean;
     private _viewSinistreDialog: boolean;
     public editSinistre$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchSinistre: SinistreVo ;

    // methods

    public findAll(){
     return this.http.get<Array<SinistreVo>>(this.API);
    }

    public save(): Observable<SinistreVo> {
         return this.http.post<SinistreVo>(this.API, this.selectedSinistre);
    }

    delete(sinistre: SinistreVo) {
         return this.http.delete<number>(this.API + 'id/' + sinistre.id);
    }


    public edit(): Observable<SinistreVo> {
        return this.http.put<SinistreVo>(this.API, this.selectedSinistre);
    }


     public findByCriteria(sinistre:SinistreVo):Observable<Array<SinistreVo>>{
           return this.http.post<Array<SinistreVo>>(this.API +'search', sinistre);
    }

   public findByIdWithAssociatedList(sinistre:SinistreVo):Observable<SinistreVo>{
         return this.http.get<SinistreVo>(this.API + 'detail/id/' +sinistre.id);
    }

    // getters and setters


    get sinistres(): Array<SinistreVo> {
    if(this._sinistres==null){
    this._sinistres=new Array<SinistreVo>();
    }
return this._sinistres;
       }

    set sinistres(value: Array<SinistreVo>) {
        this._sinistres = value;
       }

    get selectedSinistre(): SinistreVo {
    if(this._selectedSinistre==null){
    this._selectedSinistre=new SinistreVo();
    }
           return this._selectedSinistre;
       }

    set selectedSinistre(value: SinistreVo) {
        this._selectedSinistre = value;
       }

    get sinistreSelections(): Array<SinistreVo> {
    if(this._sinistreSelections==null){
    this._sinistreSelections=new Array<SinistreVo>();
    }
        return this._sinistreSelections;
       }


    set sinistreSelections(value: Array<SinistreVo>) {
        this._sinistreSelections = value;
       }

    get createSinistreDialog(): boolean {
        return this._createSinistreDialog;
       }

    set createSinistreDialog(value: boolean) {
        this._createSinistreDialog = value;
       }

    get editSinistreDialog(): boolean {
        return this._editSinistreDialog;
       }

    set editSinistreDialog(value: boolean) {
        this._editSinistreDialog = value;
       }

    get viewSinistreDialog(): boolean {
        return this._viewSinistreDialog;
       }

    set viewSinistreDialog(value: boolean) {
        this._viewSinistreDialog = value;
       }

     get searchSinistre(): SinistreVo {
     if(this._searchSinistre==null){
    this._searchSinistre=new SinistreVo();
    }
        return this._searchSinistre;
    }

    set searchSinistre(value: SinistreVo) {
        this._searchSinistre = value;
       }

}
