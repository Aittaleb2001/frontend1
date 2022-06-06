import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {NatureContratVo} from '../model/NatureContrat.model';


@Injectable({
  providedIn: 'root'
})
export class NatureContratService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/natureContrat/';
        })
    }
     private _natureContrats: Array<NatureContratVo> ;
     private _selectedNatureContrat: NatureContratVo;
     private _natureContratSelections: Array<NatureContratVo>;
     private _createNatureContratDialog: boolean;
     private _editNatureContratDialog: boolean;
     private _viewNatureContratDialog: boolean;
     public editNatureContrat$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchNatureContrat: NatureContratVo ;

    // methods

    public findAll(){
     return this.http.get<Array<NatureContratVo>>(this.API);
    }

    public save(): Observable<NatureContratVo> {
         return this.http.post<NatureContratVo>(this.API, this.selectedNatureContrat);
    }

    delete(natureContrat: NatureContratVo) {
         return this.http.delete<number>(this.API + 'id/' + natureContrat.id);
    }


    public edit(): Observable<NatureContratVo> {
        return this.http.put<NatureContratVo>(this.API, this.selectedNatureContrat);
    }


     public findByCriteria(natureContrat:NatureContratVo):Observable<Array<NatureContratVo>>{
           return this.http.post<Array<NatureContratVo>>(this.API +'search', natureContrat);
    }

   public findByIdWithAssociatedList(natureContrat:NatureContratVo):Observable<NatureContratVo>{
         return this.http.get<NatureContratVo>(this.API + 'detail/id/' +natureContrat.id);
    }

    // getters and setters


    get natureContrats(): Array<NatureContratVo> {
    if(this._natureContrats==null){
    this._natureContrats=new Array<NatureContratVo>();
    }
return this._natureContrats;
       }

    set natureContrats(value: Array<NatureContratVo>) {
        this._natureContrats = value;
       }

    get selectedNatureContrat(): NatureContratVo {
    if(this._selectedNatureContrat==null){
    this._selectedNatureContrat=new NatureContratVo();
    }
           return this._selectedNatureContrat;
       }

    set selectedNatureContrat(value: NatureContratVo) {
        this._selectedNatureContrat = value;
       }

    get natureContratSelections(): Array<NatureContratVo> {
    if(this._natureContratSelections==null){
    this._natureContratSelections=new Array<NatureContratVo>();
    }
        return this._natureContratSelections;
       }


    set natureContratSelections(value: Array<NatureContratVo>) {
        this._natureContratSelections = value;
       }

    get createNatureContratDialog(): boolean {
        return this._createNatureContratDialog;
       }

    set createNatureContratDialog(value: boolean) {
        this._createNatureContratDialog = value;
       }

    get editNatureContratDialog(): boolean {
        return this._editNatureContratDialog;
       }

    set editNatureContratDialog(value: boolean) {
        this._editNatureContratDialog = value;
       }

    get viewNatureContratDialog(): boolean {
        return this._viewNatureContratDialog;
       }

    set viewNatureContratDialog(value: boolean) {
        this._viewNatureContratDialog = value;
       }

     get searchNatureContrat(): NatureContratVo {
     if(this._searchNatureContrat==null){
    this._searchNatureContrat=new NatureContratVo();
    }
        return this._searchNatureContrat;
    }

    set searchNatureContrat(value: NatureContratVo) {
        this._searchNatureContrat = value;
       }

}
