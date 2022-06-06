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
  selector: 'app-gestionnaire-edit-agent',
  templateUrl: './gestionnaire-edit-agent.component.html',
  styleUrls: ['./gestionnaire-edit-agent.component.css']
})
export class GestionnaireEditAgentComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validGestionnaireReference = true;




constructor(private datePipe: DatePipe, private gestionnaireService: GestionnaireService
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
    this.validGestionnaireReference = value;
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
     this.gestionnaireService.edit().subscribe(gestionnaire=>{
     const myIndex = this.gestionnaires.findIndex(e => e.id === this.selectedGestionnaire.id);
     this.gestionnaires[myIndex] = this.selectedGestionnaire;
     this.editGestionnaireDialog = false;
     this.submitted = false;
     this.selectedGestionnaire = new GestionnaireVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
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



















//openPopup
// methods

hideEditDialog(){
    this.editGestionnaireDialog  = false;
    this.setValidation(true);
}

// getters and setters

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

   get editGestionnaireDialog(): boolean {
           return this.gestionnaireService.createGestionnaireDialog;

       }
    set editGestionnaireDialog(value: boolean) {
        this.gestionnaireService.createGestionnaireDialog= value;
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

    get validGestionnaireReference(): boolean {
    return this._validGestionnaireReference;
    }

    set validGestionnaireReference(value: boolean) {
    this._validGestionnaireReference = value;
    }

}
