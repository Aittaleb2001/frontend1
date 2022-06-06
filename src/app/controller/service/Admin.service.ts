import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {AdminVo} from '../model/Admin.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/admin/';
        })
    }
     private _admins: Array<AdminVo> ;
     private _selectedAdmin: AdminVo;
     private _adminSelections: Array<AdminVo>;
     private _createAdminDialog: boolean;
     private _editAdminDialog: boolean;
     private _viewAdminDialog: boolean;
     public editAdmin$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchAdmin: AdminVo ;
     private _switchChercheurDialog: boolean;

    // methods

    public findAll(){
     return this.http.get<Array<AdminVo>>(this.API);
    }

    public save(): Observable<AdminVo> {
           return this.http.post<AdminVo>(this.API, {...this.selectedAdmin,updatedAt: moment(this.selectedAdmin.updatedAt).format("YYYY-MM-DD")});
    }

    delete(admin: AdminVo) {
         return this.http.delete<number>(this.API + 'id/' + admin.id);
    }


    public edit(): Observable<AdminVo> {
        return this.http.put<AdminVo>(this.API, this.selectedAdmin);
    }


     public findByCriteria(admin:AdminVo):Observable<Array<AdminVo>>{
           return this.http.post<Array<AdminVo>>(this.API +'search', admin);
    }

   public findByIdWithAssociatedList(admin:AdminVo):Observable<AdminVo>{
         return this.http.get<AdminVo>(this.API + 'detail/id/' +admin.id);
    }

    // getters and setters


    get admins(): Array<AdminVo> {
    if(this._admins==null){
    this._admins=new Array<AdminVo>();
    }
return this._admins;
       }

    set admins(value: Array<AdminVo>) {
        this._admins = value;
       }

    get selectedAdmin(): AdminVo {
    if(this._selectedAdmin==null){
    this._selectedAdmin=new AdminVo();
    }
           return this._selectedAdmin;
       }

    set selectedAdmin(value: AdminVo) {
        this._selectedAdmin = value;
       }

    get adminSelections(): Array<AdminVo> {
    if(this._adminSelections==null){
    this._adminSelections=new Array<AdminVo>();
    }
        return this._adminSelections;
       }


    set adminSelections(value: Array<AdminVo>) {
        this._adminSelections = value;
       }

    get createAdminDialog(): boolean {
        return this._createAdminDialog;
       }

    set createAdminDialog(value: boolean) {
        this._createAdminDialog = value;
       }

    get editAdminDialog(): boolean {
        return this._editAdminDialog;
       }

    set editAdminDialog(value: boolean) {
        this._editAdminDialog = value;
       }

    get viewAdminDialog(): boolean {
        return this._viewAdminDialog;
       }

    set viewAdminDialog(value: boolean) {
        this._viewAdminDialog = value;
       }

     get searchAdmin(): AdminVo {
     if(this._searchAdmin==null){
    this._searchAdmin=new AdminVo();
    }
        return this._searchAdmin;
    }

    set searchAdmin(value: AdminVo) {
        this._searchAdmin = value;
       }

   get switchChercheurDialog(): boolean {
    return this._switchChercheurDialog;
    }

    set switchChercheurDialog(value: boolean) {
    this._switchChercheurDialog = value;
    }
}
