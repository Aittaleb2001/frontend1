import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {GestionnaireVo} from '../model/Gestionnaire.model';


@Injectable({
  providedIn: 'root'
})
export class GestionnaireService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/gestionnaire/';
        })
    }
     private _gestionnaires: Array<GestionnaireVo> ;
     private _selectedGestionnaire: GestionnaireVo;
     private _gestionnaireSelections: Array<GestionnaireVo>;
     private _createGestionnaireDialog: boolean;
     private _editGestionnaireDialog: boolean;
     private _viewGestionnaireDialog: boolean;
     public editGestionnaire$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchGestionnaire: GestionnaireVo ;
     private _switchChercheurDialog: boolean;

    // methods

    public findAll(){
     return this.http.get<Array<GestionnaireVo>>(this.API);
    }

    public save(): Observable<GestionnaireVo> {
           return this.http.post<GestionnaireVo>(this.API, {...this.selectedGestionnaire,updatedAt: moment(this.selectedGestionnaire.updatedAt).format("YYYY-MM-DD")});
    }

    delete(gestionnaire: GestionnaireVo) {
         return this.http.delete<number>(this.API + 'id/' + gestionnaire.id);
    }


    public edit(): Observable<GestionnaireVo> {
        return this.http.put<GestionnaireVo>(this.API, this.selectedGestionnaire);
    }


     public findByCriteria(gestionnaire:GestionnaireVo):Observable<Array<GestionnaireVo>>{
           return this.http.post<Array<GestionnaireVo>>(this.API +'search', gestionnaire);
    }

   public findByIdWithAssociatedList(gestionnaire:GestionnaireVo):Observable<GestionnaireVo>{
         return this.http.get<GestionnaireVo>(this.API + 'detail/id/' +gestionnaire.id);
    }

    // getters and setters


    get gestionnaires(): Array<GestionnaireVo> {
    if(this._gestionnaires==null){
    this._gestionnaires=new Array<GestionnaireVo>();
    }
return this._gestionnaires;
       }

    set gestionnaires(value: Array<GestionnaireVo>) {
        this._gestionnaires = value;
       }

    get selectedGestionnaire(): GestionnaireVo {
    if(this._selectedGestionnaire==null){
    this._selectedGestionnaire=new GestionnaireVo();
    }
           return this._selectedGestionnaire;
       }

    set selectedGestionnaire(value: GestionnaireVo) {
        this._selectedGestionnaire = value;
       }

    get gestionnaireSelections(): Array<GestionnaireVo> {
    if(this._gestionnaireSelections==null){
    this._gestionnaireSelections=new Array<GestionnaireVo>();
    }
        return this._gestionnaireSelections;
       }


    set gestionnaireSelections(value: Array<GestionnaireVo>) {
        this._gestionnaireSelections = value;
       }

    get createGestionnaireDialog(): boolean {
        return this._createGestionnaireDialog;
       }

    set createGestionnaireDialog(value: boolean) {
        this._createGestionnaireDialog = value;
       }

    get editGestionnaireDialog(): boolean {
        return this._editGestionnaireDialog;
       }

    set editGestionnaireDialog(value: boolean) {
        this._editGestionnaireDialog = value;
       }

    get viewGestionnaireDialog(): boolean {
        return this._viewGestionnaireDialog;
       }

    set viewGestionnaireDialog(value: boolean) {
        this._viewGestionnaireDialog = value;
       }

     get searchGestionnaire(): GestionnaireVo {
     if(this._searchGestionnaire==null){
    this._searchGestionnaire=new GestionnaireVo();
    }
        return this._searchGestionnaire;
    }

    set searchGestionnaire(value: GestionnaireVo) {
        this._searchGestionnaire = value;
       }

   get switchChercheurDialog(): boolean {
    return this._switchChercheurDialog;
    }

    set switchChercheurDialog(value: boolean) {
    this._switchChercheurDialog = value;
    }
}
