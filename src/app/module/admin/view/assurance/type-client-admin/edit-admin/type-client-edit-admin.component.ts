import {Component, OnInit, Input} from '@angular/core';
import {TypeClientService} from 'src/app/controller/service/TypeClient.service';
import {TypeClientVo} from 'src/app/controller/model/TypeClient.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-type-client-edit-admin',
  templateUrl: './type-client-edit-admin.component.html',
  styleUrls: ['./type-client-edit-admin.component.css']
})
export class TypeClientEditAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validTypeClientLibelle = true;




constructor(private datePipe: DatePipe, private typeClientService: TypeClientService
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
    this.validTypeClientLibelle = value;
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
     this.typeClientService.edit().subscribe(typeClient=>{
     const myIndex = this.typeClients.findIndex(e => e.id === this.selectedTypeClient.id);
     this.typeClients[myIndex] = this.selectedTypeClient;
     this.editTypeClientDialog = false;
     this.submitted = false;
     this.selectedTypeClient = new TypeClientVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateTypeClientLibelle();

    }

private validateTypeClientLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedTypeClient.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTypeClientLibelle = false;
        } else {
            this.validTypeClientLibelle = true;
        }
    }





//openPopup
// methods

hideEditDialog(){
    this.editTypeClientDialog  = false;
    this.setValidation(true);
}

// getters and setters

get typeClients(): Array<TypeClientVo> {
    return this.typeClientService.typeClients;
       }
set typeClients(value: Array<TypeClientVo>) {
        this.typeClientService.typeClients = value;
       }

 get selectedTypeClient(): TypeClientVo {
           return this.typeClientService.selectedTypeClient;
       }
    set selectedTypeClient(value: TypeClientVo) {
        this.typeClientService.selectedTypeClient = value;
       }

   get editTypeClientDialog(): boolean {
           return this.typeClientService.editTypeClientDialog;

       }
    set editTypeClientDialog(value: boolean) {
        this.typeClientService.editTypeClientDialog= value;
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

    get validTypeClientLibelle(): boolean {
    return this._validTypeClientLibelle;
    }

    set validTypeClientLibelle(value: boolean) {
    this._validTypeClientLibelle = value;
    }

}
