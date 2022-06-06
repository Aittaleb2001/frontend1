import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {QuittancePrimeVo} from '../model/QuittancePrime.model';
import {ContratVo} from '../model/Contrat.model';


@Injectable({
  providedIn: 'root'
})
export class QuittancePrimeService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/quittancePrime/';
        })
    }
     private _quittancePrimes: Array<QuittancePrimeVo> ;
     private _selectedQuittancePrime: QuittancePrimeVo;
     private _quittancePrimeSelections: Array<QuittancePrimeVo>;
     private _createQuittancePrimeDialog: boolean;
     private _editQuittancePrimeDialog: boolean;
     private _viewQuittancePrimeDialog: boolean;
     public editQuittancePrime$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchQuittancePrime: QuittancePrimeVo ;

    // methods

    public findAll(){
     return this.http.get<Array<QuittancePrimeVo>>(this.API);
    }

    public save(): Observable<QuittancePrimeVo> {
         return this.http.post<QuittancePrimeVo>(this.API, this.selectedQuittancePrime);
    }

    delete(quittancePrime: QuittancePrimeVo) {
         return this.http.delete<number>(this.API + 'id/' + quittancePrime.id);
    }


    public edit(): Observable<QuittancePrimeVo> {
        return this.http.put<QuittancePrimeVo>(this.API, this.selectedQuittancePrime);
    }


     public findByCriteria(quittancePrime:QuittancePrimeVo):Observable<Array<QuittancePrimeVo>>{
           return this.http.post<Array<QuittancePrimeVo>>(this.API +'search', quittancePrime);
    }

   public findByIdWithAssociatedList(quittancePrime:QuittancePrimeVo):Observable<QuittancePrimeVo>{
         return this.http.get<QuittancePrimeVo>(this.API + 'detail/id/' +quittancePrime.id);
    }

    // getters and setters


    get quittancePrimes(): Array<QuittancePrimeVo> {
    if(this._quittancePrimes==null){
    this._quittancePrimes=new Array<QuittancePrimeVo>();
    }
return this._quittancePrimes;
       }

    set quittancePrimes(value: Array<QuittancePrimeVo>) {
        this._quittancePrimes = value;
       }

    get selectedQuittancePrime(): QuittancePrimeVo {
    if(this._selectedQuittancePrime==null){
    this._selectedQuittancePrime=new QuittancePrimeVo();
    }
           return this._selectedQuittancePrime;
       }

    set selectedQuittancePrime(value: QuittancePrimeVo) {
        this._selectedQuittancePrime = value;
       }

    get quittancePrimeSelections(): Array<QuittancePrimeVo> {
    if(this._quittancePrimeSelections==null){
    this._quittancePrimeSelections=new Array<QuittancePrimeVo>();
    }
        return this._quittancePrimeSelections;
       }


    set quittancePrimeSelections(value: Array<QuittancePrimeVo>) {
        this._quittancePrimeSelections = value;
       }

    get createQuittancePrimeDialog(): boolean {
        return this._createQuittancePrimeDialog;
       }

    set createQuittancePrimeDialog(value: boolean) {
        this._createQuittancePrimeDialog = value;
       }

    get editQuittancePrimeDialog(): boolean {
        return this._editQuittancePrimeDialog;
       }

    set editQuittancePrimeDialog(value: boolean) {
        this._editQuittancePrimeDialog = value;
       }

    get viewQuittancePrimeDialog(): boolean {
        return this._viewQuittancePrimeDialog;
       }

    set viewQuittancePrimeDialog(value: boolean) {
        this._viewQuittancePrimeDialog = value;
       }

     get searchQuittancePrime(): QuittancePrimeVo {
     if(this._searchQuittancePrime==null){
    this._searchQuittancePrime=new QuittancePrimeVo();
    }
        return this._searchQuittancePrime;
    }

    set searchQuittancePrime(value: QuittancePrimeVo) {
        this._searchQuittancePrime = value;
       }

}
