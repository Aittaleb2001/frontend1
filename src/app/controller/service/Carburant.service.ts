import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {CarburantVo} from '../model/Carburant.model';


@Injectable({
  providedIn: 'root'
})
export class CarburantService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/carburant/';
        })
    }
     private _carburants: Array<CarburantVo> ;
     private _selectedCarburant: CarburantVo;
     private _carburantSelections: Array<CarburantVo>;
     private _createCarburantDialog: boolean;
     private _editCarburantDialog: boolean;
     private _viewCarburantDialog: boolean;
     public editCarburant$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchCarburant: CarburantVo ;

    // methods

    public findAll(){
     return this.http.get<Array<CarburantVo>>(this.API);
    }

    public save(): Observable<CarburantVo> {
        console.log("west dsave"+this.selectedCarburant);
         return this.http.post<CarburantVo>(this.API, this.selectedCarburant);
    }

    delete(carburant: CarburantVo) {
         return this.http.delete<number>(this.API + 'id/' + carburant.id);
    }


    public edit(): Observable<CarburantVo> {
        return this.http.put<CarburantVo>(this.API, this.selectedCarburant);
    }


     public findByCriteria(carburant:CarburantVo):Observable<Array<CarburantVo>>{
           return this.http.post<Array<CarburantVo>>(this.API +'search', carburant);
    }

   public findByIdWithAssociatedList(carburant:CarburantVo):Observable<CarburantVo>{
         return this.http.get<CarburantVo>(this.API + 'detail/id/' +carburant.id);
    }

    // getters and setters


    get carburants(): Array<CarburantVo> {
    if(this._carburants==null){
    this._carburants=new Array<CarburantVo>();
    }
return this._carburants;
       }

    set carburants(value: Array<CarburantVo>) {
        this._carburants = value;
       }

    get selectedCarburant(): CarburantVo {
    if(this._selectedCarburant==null){
    this._selectedCarburant=new CarburantVo();
    }
           return this._selectedCarburant;
       }

    set selectedCarburant(value: CarburantVo) {
        this._selectedCarburant = value;
       }

    get carburantSelections(): Array<CarburantVo> {
    if(this._carburantSelections==null){
    this._carburantSelections=new Array<CarburantVo>();
    }
        return this._carburantSelections;
       }


    set carburantSelections(value: Array<CarburantVo>) {
        this._carburantSelections = value;
       }

    get createCarburantDialog(): boolean {
        return this._createCarburantDialog;
       }

    set createCarburantDialog(value: boolean) {
        this._createCarburantDialog = value;
       }

    get editCarburantDialog(): boolean {
        return this._editCarburantDialog;
       }

    set editCarburantDialog(value: boolean) {
        this._editCarburantDialog = value;
       }

    get viewCarburantDialog(): boolean {
        return this._viewCarburantDialog;
       }

    set viewCarburantDialog(value: boolean) {
        this._viewCarburantDialog = value;
       }

     get searchCarburant(): CarburantVo {
     if(this._searchCarburant==null){
    this._searchCarburant=new CarburantVo();
    }
        return this._searchCarburant;
    }

    set searchCarburant(value: CarburantVo) {
        this._searchCarburant = value;
       }

}
