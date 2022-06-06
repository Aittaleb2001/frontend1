import {Component, OnInit, Input} from '@angular/core';
import {GestionnaireService} from 'src/app/controller/service/Gestionnaire.service';
import {GestionnaireVo} from 'src/app/controller/model/Gestionnaire.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-gestionnaire-create-admin',
  templateUrl: './gestionnaire-create-admin.component.html',
  styleUrls: ['./gestionnaire-create-admin.component.css']
})
export class GestionnaireCreateAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validGestionnaireReference = true;




constructor(private datePipe: DatePipe, private gestionnaireService: GestionnaireService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}



ngOnInit(): void {

}




private setValidation(value: boolean){
    this.validGestionnaireReference = value;
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
     this.gestionnaireService.save().subscribe(gestionnaire=>{
       this.gestionnaires.push({...gestionnaire});
       this.createGestionnaireDialog = false;
       this.submitted = false;
       this.selectedGestionnaire = new GestionnaireVo();


    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateGestionnaireReference();

    }

private validateGestionnaireReference(){
        if (this.stringUtilService.isEmpty(this.selectedGestionnaire.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validGestionnaireReference = false;
        } else {
            this.validGestionnaireReference = true;
        }
    }




















hideCreateDialog(){
    this.createGestionnaireDialog  = false;
    this.setValidation(true);
}

get gestionnaires(): Array<GestionnaireVo> {
    return this.gestionnaireService.gestionnaires;
       }
set gestionnaires(value: Array<GestionnaireVo>) {
        this.gestionnaireService.gestionnaires = value;
       }

 get selectedGestionnaire(): GestionnaireVo {
           return this.gestionnaireService.selectedGestionnaire;
       }
    set selectedGestionnaire(value: GestionnaireVo) {
        this.gestionnaireService.selectedGestionnaire = value;
       }

   get createGestionnaireDialog(): boolean {
           return this.gestionnaireService.createGestionnaireDialog;

       }
    set createGestionnaireDialog(value: boolean) {
        this.gestionnaireService.createGestionnaireDialog= value;
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

    get validGestionnaireReference(): boolean {
    return this._validGestionnaireReference;
    }

    set validGestionnaireReference(value: boolean) {
    this._validGestionnaireReference = value;
    }


}
