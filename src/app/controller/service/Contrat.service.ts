import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {ContratVo} from '../model/Contrat.model';
import {VehiculeVo} from '../model/Vehicule.model';
import {NatureContratVo} from '../model/NatureContrat.model';
import {QuittancePrimeVo} from '../model/QuittancePrime.model';
import {ClientVo} from '../model/Client.model';
import {ContratGarantieVo} from '../model/ContratGarantie.model';


@Injectable({
  providedIn: 'root'
})
export class ContratService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/contrat/';
        })
    }
     private _contrats: Array<ContratVo> ;
     private _selectedContrat: ContratVo;
     private _contratSelections: Array<ContratVo>;
     private _createContratDialog: boolean;
     private _editContratDialog: boolean;
     private _viewContratDialog: boolean;
     public editContrat$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchContrat: ContratVo ;

    // methods

    public findAll(){
     return this.http.get<Array<ContratVo>>(this.API);
    }

    public save(): Observable<ContratVo> {
           return this.http.post<ContratVo>(this.API, {...this.selectedContrat,dateSignature: moment(this.selectedContrat.dateSignature).format("YYYY-MM-DD")});
    }

    delete(contrat: ContratVo) {
         return this.http.delete<number>(this.API + 'id/' + contrat.id);
    }


    public edit(): Observable<ContratVo> {
        return this.http.put<ContratVo>(this.API, this.selectedContrat);
    }


     public findByCriteria(contrat:ContratVo):Observable<Array<ContratVo>>{
           return this.http.post<Array<ContratVo>>(this.API +'search', contrat);
    }

   public findByIdWithAssociatedList(contrat:ContratVo):Observable<ContratVo>{
         return this.http.get<ContratVo>(this.API + 'detail/id/' +contrat.id);
    }

    // getters and setters


    get contrats(): Array<ContratVo> {
    if(this._contrats==null){
    this._contrats=new Array<ContratVo>();
    }
return this._contrats;
       }

    set contrats(value: Array<ContratVo>) {
        this._contrats = value;
       }

    get selectedContrat(): ContratVo {
    if(this._selectedContrat==null){
    this._selectedContrat=new ContratVo();
    }
           return this._selectedContrat;
       }

    set selectedContrat(value: ContratVo) {
        this._selectedContrat = value;
       }

    get contratSelections(): Array<ContratVo> {
    if(this._contratSelections==null){
    this._contratSelections=new Array<ContratVo>();
    }
        return this._contratSelections;
       }


    set contratSelections(value: Array<ContratVo>) {
        this._contratSelections = value;
       }

    get createContratDialog(): boolean {
        return this._createContratDialog;
       }

    set createContratDialog(value: boolean) {
        this._createContratDialog = value;
       }

    get editContratDialog(): boolean {
        return this._editContratDialog;
       }

    set editContratDialog(value: boolean) {
        this._editContratDialog = value;
       }

    get viewContratDialog(): boolean {
        return this._viewContratDialog;
       }

    set viewContratDialog(value: boolean) {
        this._viewContratDialog = value;
       }

     get searchContrat(): ContratVo {
     if(this._searchContrat==null){
    this._searchContrat=new ContratVo();
    }
        return this._searchContrat;
    }

    set searchContrat(value: ContratVo) {
        this._searchContrat = value;
       }

}
