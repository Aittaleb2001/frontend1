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
  selector: 'app-admin-create-gestionnaire',
  templateUrl: './admin-create-gestionnaire.component.html',
  styleUrls: ['./admin-create-gestionnaire.component.css']
})
export class AdminCreateGestionnaireComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();





constructor(private datePipe: DatePipe, private adminService: AdminService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}



ngOnInit(): void {

}




private setValidation(value: boolean){
    }


public save(){
  this.submitted = true;
  this.validateForm();
  if (this.errorMessages.length === 0) {
        this.saveWithShowOption(false);
  } else {
        this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Merci de corrigé les erreurs sur le formulaire'});
  }
}

public saveWithShowOption(showList: boolean){
     this.adminService.save().subscribe(admin=>{
       this.admins.push({...admin});
       this.createAdminDialog = false;
       this.submitted = false;
       this.selectedAdmin = new AdminVo();


    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();

    }





















hideCreateDialog(){
    this.createAdminDialog  = false;
    this.setValidation(true);
}

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

   get createAdminDialog(): boolean {
           return this.adminService.createAdminDialog;

       }
    set createAdminDialog(value: boolean) {
        this.adminService.createAdminDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatCreate;
    }

    get dateFormatColumn(){
            return environment.dateFormatCreate;
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
