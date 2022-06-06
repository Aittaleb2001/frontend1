import {Component, OnInit, Input} from '@angular/core';
import {DeviseService} from 'src/app/controller/service/Devise.service';
import {DeviseVo} from 'src/app/controller/model/Devise.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-devise-edit-admin',
  templateUrl: './devise-edit-admin.component.html',
  styleUrls: ['./devise-edit-admin.component.css']
})
export class DeviseEditAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validDeviseLibelle = true;
   _validDeviseReference = true;




constructor(private datePipe: DatePipe, private deviseService: DeviseService
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
    this.validDeviseLibelle = value;
    this.validDeviseReference = value;
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
     this.deviseService.edit().subscribe(devise=>{
     const myIndex = this.devises.findIndex(e => e.id === this.selectedDevise.id);
     this.devises[myIndex] = this.selectedDevise;
     this.editDeviseDialog = false;
     this.submitted = false;
     this.selectedDevise = new DeviseVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateDeviseLibelle();
this.validateDeviseReference();

    }

private validateDeviseLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedDevise.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validDeviseLibelle = false;
        } else {
            this.validDeviseLibelle = true;
        }
    }
private validateDeviseReference(){
        if (this.stringUtilService.isEmpty(this.selectedDevise.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validDeviseReference = false;
        } else {
            this.validDeviseReference = true;
        }
    }







//openPopup
// methods

hideEditDialog(){
    this.editDeviseDialog  = false;
    this.setValidation(true);
}

// getters and setters

get devises(): Array<DeviseVo> {
    return this.deviseService.devises;
       }
set devises(value: Array<DeviseVo>) {
        this.deviseService.devises = value;
       }

 get selectedDevise(): DeviseVo {
           return this.deviseService.selectedDevise;
       }
    set selectedDevise(value: DeviseVo) {
        this.deviseService.selectedDevise = value;
       }

   get editDeviseDialog(): boolean {
           return this.deviseService.editDeviseDialog;

       }
    set editDeviseDialog(value: boolean) {
        this.deviseService.editDeviseDialog= value;
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

    get validDeviseLibelle(): boolean {
    return this._validDeviseLibelle;
    }

    set validDeviseLibelle(value: boolean) {
    this._validDeviseLibelle = value;
    }
    get validDeviseReference(): boolean {
    return this._validDeviseReference;
    }

    set validDeviseReference(value: boolean) {
    this._validDeviseReference = value;
    }

}
