import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {TypeSinistreVo} from '../model/TypeSinistre.model';


@Injectable({
  providedIn: 'root'
})
export class TypeSinistreService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/typeSinistre/';
        })
    }
     private _typeSinistres: Array<TypeSinistreVo> ;
     private _selectedTypeSinistre: TypeSinistreVo;
     private _typeSinistreSelections: Array<TypeSinistreVo>;
     private _createTypeSinistreDialog: boolean;
     private _editTypeSinistreDialog: boolean;
     private _viewTypeSinistreDialog: boolean;
     public editTypeSinistre$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTypeSinistre: TypeSinistreVo ;

    // methods

    public findAll(){
     return this.http.get<Array<TypeSinistreVo>>(this.API);
    }

    public save(): Observable<TypeSinistreVo> {
         return this.http.post<TypeSinistreVo>(this.API, this.selectedTypeSinistre);
    }

    delete(typeSinistre: TypeSinistreVo) {
         return this.http.delete<number>(this.API + 'id/' + typeSinistre.id);
    }


    public edit(): Observable<TypeSinistreVo> {
        return this.http.put<TypeSinistreVo>(this.API, this.selectedTypeSinistre);
    }


     public findByCriteria(typeSinistre:TypeSinistreVo):Observable<Array<TypeSinistreVo>>{
           return this.http.post<Array<TypeSinistreVo>>(this.API +'search', typeSinistre);
    }

   public findByIdWithAssociatedList(typeSinistre:TypeSinistreVo):Observable<TypeSinistreVo>{
         return this.http.get<TypeSinistreVo>(this.API + 'detail/id/' +typeSinistre.id);
    }

    // getters and setters


    get typeSinistres(): Array<TypeSinistreVo> {
    if(this._typeSinistres==null){
    this._typeSinistres=new Array<TypeSinistreVo>();
    }
return this._typeSinistres;
       }

    set typeSinistres(value: Array<TypeSinistreVo>) {
        this._typeSinistres = value;
       }

    get selectedTypeSinistre(): TypeSinistreVo {
    if(this._selectedTypeSinistre==null){
    this._selectedTypeSinistre=new TypeSinistreVo();
    }
           return this._selectedTypeSinistre;
       }

    set selectedTypeSinistre(value: TypeSinistreVo) {
        this._selectedTypeSinistre = value;
       }

    get typeSinistreSelections(): Array<TypeSinistreVo> {
    if(this._typeSinistreSelections==null){
    this._typeSinistreSelections=new Array<TypeSinistreVo>();
    }
        return this._typeSinistreSelections;
       }


    set typeSinistreSelections(value: Array<TypeSinistreVo>) {
        this._typeSinistreSelections = value;
       }

    get createTypeSinistreDialog(): boolean {
        return this._createTypeSinistreDialog;
       }

    set createTypeSinistreDialog(value: boolean) {
        this._createTypeSinistreDialog = value;
       }

    get editTypeSinistreDialog(): boolean {
        return this._editTypeSinistreDialog;
       }

    set editTypeSinistreDialog(value: boolean) {
        this._editTypeSinistreDialog = value;
       }

    get viewTypeSinistreDialog(): boolean {
        return this._viewTypeSinistreDialog;
       }

    set viewTypeSinistreDialog(value: boolean) {
        this._viewTypeSinistreDialog = value;
       }

     get searchTypeSinistre(): TypeSinistreVo {
     if(this._searchTypeSinistre==null){
    this._searchTypeSinistre=new TypeSinistreVo();
    }
        return this._searchTypeSinistre;
    }

    set searchTypeSinistre(value: TypeSinistreVo) {
        this._searchTypeSinistre = value;
       }

}
