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
  selector: 'app-devise-create-admin',
  templateUrl: './devise-create-admin.component.html',
  styleUrls: ['./devise-create-admin.component.css']
})
export class DeviseCreateAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validDeviseLibelle = true;
   _validDeviseReference = true;




constructor(private datePipe: DatePipe, private deviseService: DeviseService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}



ngOnInit(): void {

}




private setValidation(value: boolean){
    this.validDeviseLibelle = value;
    this.validDeviseReference = value;
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
     this.deviseService.save().subscribe(devise=>{
       this.devises.push({...devise});
       this.createDeviseDialog = false;
       this.submitted = false;
       this.selectedDevise = new DeviseVo();


    } , error =>{
        console.log(error);
    });
}

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








hideCreateDialog(){
    this.createDeviseDialog  = false;
    this.setValidation(true);
}

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

   get createDeviseDialog(): boolean {
           return this.deviseService.createDeviseDialog;

       }
    set createDeviseDialog(value: boolean) {
        this.deviseService.createDeviseDialog= value;
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
