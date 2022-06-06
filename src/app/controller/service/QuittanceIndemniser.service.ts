import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {QuittanceIndemniserVo} from '../model/QuittanceIndemniser.model';
import {DeviseVo} from '../model/Devise.model';


@Injectable({
  providedIn: 'root'
})
export class QuittanceIndemniserService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/quittanceIndemniser/';
        })
    }
     private _quittanceIndemnisers: Array<QuittanceIndemniserVo> ;
     private _selectedQuittanceIndemniser: QuittanceIndemniserVo;
     private _quittanceIndemniserSelections: Array<QuittanceIndemniserVo>;
     private _createQuittanceIndemniserDialog: boolean;
     private _editQuittanceIndemniserDialog: boolean;
     private _viewQuittanceIndemniserDialog: boolean;
     public editQuittanceIndemniser$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchQuittanceIndemniser: QuittanceIndemniserVo ;

    // methods

    public findAll(){
     return this.http.get<Array<QuittanceIndemniserVo>>(this.API);
    }

    public save(): Observable<QuittanceIndemniserVo> {
           return this.http.post<QuittanceIndemniserVo>(this.API, {...this.selectedQuittanceIndemniser,dateAjout: moment(this.selectedQuittanceIndemniser.dateAjout).format("YYYY-MM-DD")});
    }

    delete(quittanceIndemniser: QuittanceIndemniserVo) {
         return this.http.delete<number>(this.API + 'id/' + quittanceIndemniser.id);
    }


    public edit(): Observable<QuittanceIndemniserVo> {
        return this.http.put<QuittanceIndemniserVo>(this.API, this.selectedQuittanceIndemniser);
    }


     public findByCriteria(quittanceIndemniser:QuittanceIndemniserVo):Observable<Array<QuittanceIndemniserVo>>{
           return this.http.post<Array<QuittanceIndemniserVo>>(this.API +'search', quittanceIndemniser);
    }

   public findByIdWithAssociatedList(quittanceIndemniser:QuittanceIndemniserVo):Observable<QuittanceIndemniserVo>{
         return this.http.get<QuittanceIndemniserVo>(this.API + 'detail/id/' +quittanceIndemniser.id);
    }

    // getters and setters


    get quittanceIndemnisers(): Array<QuittanceIndemniserVo> {
    if(this._quittanceIndemnisers==null){
    this._quittanceIndemnisers=new Array<QuittanceIndemniserVo>();
    }
return this._quittanceIndemnisers;
       }

    set quittanceIndemnisers(value: Array<QuittanceIndemniserVo>) {
        this._quittanceIndemnisers = value;
       }

    get selectedQuittanceIndemniser(): QuittanceIndemniserVo {
    if(this._selectedQuittanceIndemniser==null){
    this._selectedQuittanceIndemniser=new QuittanceIndemniserVo();
    }
           return this._selectedQuittanceIndemniser;
       }

    set selectedQuittanceIndemniser(value: QuittanceIndemniserVo) {
        this._selectedQuittanceIndemniser = value;
       }

    get quittanceIndemniserSelections(): Array<QuittanceIndemniserVo> {
    if(this._quittanceIndemniserSelections==null){
    this._quittanceIndemniserSelections=new Array<QuittanceIndemniserVo>();
    }
        return this._quittanceIndemniserSelections;
       }


    set quittanceIndemniserSelections(value: Array<QuittanceIndemniserVo>) {
        this._quittanceIndemniserSelections = value;
       }

    get createQuittanceIndemniserDialog(): boolean {
        return this._createQuittanceIndemniserDialog;
       }

    set createQuittanceIndemniserDialog(value: boolean) {
        this._createQuittanceIndemniserDialog = value;
       }

    get editQuittanceIndemniserDialog(): boolean {
        return this._editQuittanceIndemniserDialog;
       }

    set editQuittanceIndemniserDialog(value: boolean) {
        this._editQuittanceIndemniserDialog = value;
       }

    get viewQuittanceIndemniserDialog(): boolean {
        return this._viewQuittanceIndemniserDialog;
       }

    set viewQuittanceIndemniserDialog(value: boolean) {
        this._viewQuittanceIndemniserDialog = value;
       }

     get searchQuittanceIndemniser(): QuittanceIndemniserVo {
     if(this._searchQuittanceIndemniser==null){
    this._searchQuittanceIndemniser=new QuittanceIndemniserVo();
    }
        return this._searchQuittanceIndemniser;
    }

    set searchQuittanceIndemniser(value: QuittanceIndemniserVo) {
        this._searchQuittanceIndemniser = value;
       }

}
