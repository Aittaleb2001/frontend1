import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {GarantieVo} from '../model/Garantie.model';


@Injectable({
  providedIn: 'root'
})
export class GarantieService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/garantie/';
        })
    }
     private _garanties: Array<GarantieVo> ;
     private _selectedGarantie: GarantieVo;
     private _garantieSelections: Array<GarantieVo>;
     private _createGarantieDialog: boolean;
     private _editGarantieDialog: boolean;
     private _viewGarantieDialog: boolean;
     public editGarantie$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchGarantie: GarantieVo ;

    // methods

    public findAll(){
     return this.http.get<Array<GarantieVo>>(this.API);
    }

    public save(): Observable<GarantieVo> {
         return this.http.post<GarantieVo>(this.API, this.selectedGarantie);
    }

    delete(garantie: GarantieVo) {
         return this.http.delete<number>(this.API + 'id/' + garantie.id);
    }


    public edit(): Observable<GarantieVo> {
        return this.http.put<GarantieVo>(this.API, this.selectedGarantie);
    }


     public findByCriteria(garantie:GarantieVo):Observable<Array<GarantieVo>>{
           return this.http.post<Array<GarantieVo>>(this.API +'search', garantie);
    }

   public findByIdWithAssociatedList(garantie:GarantieVo):Observable<GarantieVo>{
         return this.http.get<GarantieVo>(this.API + 'detail/id/' +garantie.id);
    }

    // getters and setters


    get garanties(): Array<GarantieVo> {
    if(this._garanties==null){
    this._garanties=new Array<GarantieVo>();
    }
return this._garanties;
       }

    set garanties(value: Array<GarantieVo>) {
        this._garanties = value;
       }

    get selectedGarantie(): GarantieVo {
    if(this._selectedGarantie==null){
    this._selectedGarantie=new GarantieVo();
    }
           return this._selectedGarantie;
       }

    set selectedGarantie(value: GarantieVo) {
        this._selectedGarantie = value;
       }

    get garantieSelections(): Array<GarantieVo> {
    if(this._garantieSelections==null){
    this._garantieSelections=new Array<GarantieVo>();
    }
        return this._garantieSelections;
       }


    set garantieSelections(value: Array<GarantieVo>) {
        this._garantieSelections = value;
       }

    get createGarantieDialog(): boolean {
        return this._createGarantieDialog;
       }

    set createGarantieDialog(value: boolean) {
        this._createGarantieDialog = value;
       }

    get editGarantieDialog(): boolean {
        return this._editGarantieDialog;
       }

    set editGarantieDialog(value: boolean) {
        this._editGarantieDialog = value;
       }

    get viewGarantieDialog(): boolean {
        return this._viewGarantieDialog;
       }

    set viewGarantieDialog(value: boolean) {
        this._viewGarantieDialog = value;
       }

     get searchGarantie(): GarantieVo {
     if(this._searchGarantie==null){
    this._searchGarantie=new GarantieVo();
    }
        return this._searchGarantie;
    }

    set searchGarantie(value: GarantieVo) {
        this._searchGarantie = value;
       }

}
