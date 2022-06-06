import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {DeviseVo} from '../model/Devise.model';


@Injectable({
  providedIn: 'root'
})
export class DeviseService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/devise/';
        })
    }
     private _devises: Array<DeviseVo> ;
     private _selectedDevise: DeviseVo;
     private _deviseSelections: Array<DeviseVo>;
     private _createDeviseDialog: boolean;
     private _editDeviseDialog: boolean;
     private _viewDeviseDialog: boolean;
     public editDevise$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDevise: DeviseVo ;

    // methods

    public findAll(){
     return this.http.get<Array<DeviseVo>>(this.API);
    }

    public save(): Observable<DeviseVo> {
         return this.http.post<DeviseVo>(this.API, this.selectedDevise);
    }

    delete(devise: DeviseVo) {
         return this.http.delete<number>(this.API + 'id/' + devise.id);
    }


    public edit(): Observable<DeviseVo> {
        return this.http.put<DeviseVo>(this.API, this.selectedDevise);
    }


     public findByCriteria(devise:DeviseVo):Observable<Array<DeviseVo>>{
           return this.http.post<Array<DeviseVo>>(this.API +'search', devise);
    }

   public findByIdWithAssociatedList(devise:DeviseVo):Observable<DeviseVo>{
         return this.http.get<DeviseVo>(this.API + 'detail/id/' +devise.id);
    }

    // getters and setters


    get devises(): Array<DeviseVo> {
    if(this._devises==null){
    this._devises=new Array<DeviseVo>();
    }
return this._devises;
       }

    set devises(value: Array<DeviseVo>) {
        this._devises = value;
       }

    get selectedDevise(): DeviseVo {
    if(this._selectedDevise==null){
    this._selectedDevise=new DeviseVo();
    }
           return this._selectedDevise;
       }

    set selectedDevise(value: DeviseVo) {
        this._selectedDevise = value;
       }

    get deviseSelections(): Array<DeviseVo> {
    if(this._deviseSelections==null){
    this._deviseSelections=new Array<DeviseVo>();
    }
        return this._deviseSelections;
       }


    set deviseSelections(value: Array<DeviseVo>) {
        this._deviseSelections = value;
       }

    get createDeviseDialog(): boolean {
        return this._createDeviseDialog;
       }

    set createDeviseDialog(value: boolean) {
        this._createDeviseDialog = value;
       }

    get editDeviseDialog(): boolean {
        return this._editDeviseDialog;
       }

    set editDeviseDialog(value: boolean) {
        this._editDeviseDialog = value;
       }

    get viewDeviseDialog(): boolean {
        return this._viewDeviseDialog;
       }

    set viewDeviseDialog(value: boolean) {
        this._viewDeviseDialog = value;
       }

     get searchDevise(): DeviseVo {
     if(this._searchDevise==null){
    this._searchDevise=new DeviseVo();
    }
        return this._searchDevise;
    }

    set searchDevise(value: DeviseVo) {
        this._searchDevise = value;
       }

}
