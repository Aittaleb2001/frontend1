import {Component, OnInit, Input} from '@angular/core';
import {AdminService} from 'src/app/controller/service/Admin.service';
import {AdminVo} from 'src/app/controller/model/Admin.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-admin-edit-chercheur',
  templateUrl: './admin-edit-chercheur.component.html',
  styleUrls: ['./admin-edit-chercheur.component.css']
})
export class AdminEditChercheurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();





constructor(private datePipe: DatePipe, private adminService: AdminService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}


// methods
ngOnInit(): void {

}




private setValidation(value : boolean){
    }


public edit(){
  this.submitted = true;
  this.validateForm();
  if (this.errorMessages.length === 0) {
        this.editWithShowOption(false);
  } else {
        this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Merci de corrigé les erreurs sur le formulaire'});
  }
}

public editWithShowOption(showList: boolean){
     this.adminService.edit().subscribe(admin=>{
     const myIndex = this.admins.findIndex(e => e.id === this.selectedAdmin.id);
     this.admins[myIndex] = this.selectedAdmin;
     this.editAdminDialog = false;
     this.submitted = false;
     this.selectedAdmin = new AdminVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();

    }




















//openPopup
// methods

hideEditDialog(){
    this.editAdminDialog  = false;
    this.setValidation(true);
}

// getters and setters

get admins(): Array<AdminVo> {
    return this.adminService.admins;
       }
set admins(value: Array<AdminVo>) {
        this.adminService.admins = value;
       }

 get selectedAdmin(): AdminVo {
           return this.adminService.selectedAdmin;
       }
    set selectedAdmin(value: AdminVo) {
        this.adminService.selectedAdmin = value;
       }

   get editAdminDialog(): boolean {
           return this.adminService.createAdminDialog;

       }
    set editAdminDialog(value: boolean) {
        this.adminService.createAdminDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatEdit;
     }

     get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }




    get errorMessages(): string[] {
    return this._errorMessages;
    }

    set errorMessages(value: string[]) {
    this._errorMessages = value;
    }


}
