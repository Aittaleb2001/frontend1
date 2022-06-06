import {Component, OnInit, Input} from '@angular/core';
import {QuittanceIndemniserService} from 'src/app/controller/service/QuittanceIndemniser.service';
import {QuittanceIndemniserVo} from 'src/app/controller/model/QuittanceIndemniser.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {DeviseVo} from 'src/app/controller/model/Devise.model';
import {DeviseService} from 'src/app/controller/service/Devise.service';
@Component({
  selector: 'app-quittance-indemniser-edit-gestionnaire',
  templateUrl: './quittance-indemniser-edit-gestionnaire.component.html',
  styleUrls: ['./quittance-indemniser-edit-gestionnaire.component.css']
})
export class QuittanceIndemniserEditGestionnaireComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validQuittanceIndemniserReference = true;
   _validQuittanceIndemniserDateReception = true;
   _validQuittanceIndemniserDateAjout = true;
   _validQuittanceIndemniserDevise = true;

    _validDeviseLibelle = true;
    _validDeviseReference = true;



constructor(private datePipe: DatePipe, private quittanceIndemniserService: QuittanceIndemniserService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private deviseService: DeviseService
) {

}


// methods
ngOnInit(): void {

    this.selectedDevise = new DeviseVo();
    this.deviseService.findAll().subscribe((data) => this.devises = data);
}




private setValidation(value : boolean){
    this.validQuittanceIndemniserReference = value;
    this.validQuittanceIndemniserDateReception = value;
    this.validQuittanceIndemniserDateAjout = value;
    this.validQuittanceIndemniserDevise = value;
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
     this.quittanceIndemniserService.edit().subscribe(quittanceIndemniser=>{
     const myIndex = this.quittanceIndemnisers.findIndex(e => e.id === this.selectedQuittanceIndemniser.id);
     this.quittanceIndemnisers[myIndex] = this.selectedQuittanceIndemniser;
     this.editQuittanceIndemniserDialog = false;
     this.submitted = false;
     this.selectedQuittanceIndemniser = new QuittanceIndemniserVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateQuittanceIndemniserReference();
this.validateQuittanceIndemniserDateReception();
this.validateQuittanceIndemniserDateAjout();
this.validateQuittanceIndemniserDevise();

    }

private validateQuittanceIndemniserReference(){
        if (this.stringUtilService.isEmpty(this.selectedQuittanceIndemniser.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validQuittanceIndemniserReference = false;
        } else {
            this.validQuittanceIndemniserReference = true;
        }
    }
private validateQuittanceIndemniserDateReception(){
        if (this.stringUtilService.isEmpty(this.selectedQuittanceIndemniser.dateReception)) {
            this.errorMessages.push('Date reception non valide');
            this.validQuittanceIndemniserDateReception = false;
        } else {
            this.validQuittanceIndemniserDateReception = true;
        }
    }
private validateQuittanceIndemniserDateAjout(){
        if (this.stringUtilService.isEmpty(this.selectedQuittanceIndemniser.dateAjout)) {
            this.errorMessages.push('Date ajout non valide');
            this.validQuittanceIndemniserDateAjout = false;
        } else {
            this.validQuittanceIndemniserDateAjout = true;
        }
    }
private validateQuittanceIndemniserDevise(){
        if (this.stringUtilService.isEmpty(this.selectedQuittanceIndemniser.deviseVo)) {
            this.errorMessages.push('Devise non valide');
            this.validQuittanceIndemniserDevise = false;
        } else {
            this.validQuittanceIndemniserDevise = true;
        }
    }










//openPopup
      public async openCreateDevise(devise: string) {
        const isPermistted = await this.roleService.isPermitted('Devise', 'edit');
        if(isPermistted) {
         this.selectedDevise = new DeviseVo();
         this.createDeviseDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editQuittanceIndemniserDialog  = false;
    this.setValidation(true);
}

// getters and setters

get quittanceIndemnisers(): Array<QuittanceIndemniserVo> {
    return this.quittanceIndemniserService.quittanceIndemnisers;
       }
set quittanceIndemnisers(value: Array<QuittanceIndemniserVo>) {
        this.quittanceIndemniserService.quittanceIndemnisers = value;
       }

 get selectedQuittanceIndemniser(): QuittanceIndemniserVo {
           return this.quittanceIndemniserService.selectedQuittanceIndemniser;
       }
    set selectedQuittanceIndemniser(value: QuittanceIndemniserVo) {
        this.quittanceIndemniserService.selectedQuittanceIndemniser = value;
       }

   get editQuittanceIndemniserDialog(): boolean {
           return this.quittanceIndemniserService.createQuittanceIndemniserDialog;

       }
    set editQuittanceIndemniserDialog(value: boolean) {
        this.quittanceIndemniserService.createQuittanceIndemniserDialog= value;
       }

       get selectedDevise(): DeviseVo {
           return this.deviseService.selectedDevise;
       }
      set selectedDevise(value: DeviseVo) {
        this.deviseService.selectedDevise = value;
       }
       get devises(): Array<DeviseVo> {
           return this.deviseService.devises;
       }
       set devises(value: Array<DeviseVo>) {
        this.deviseService.devises = value;
       }
       get createDeviseDialog(): boolean {
           return this.deviseService.createDeviseDialog;
       }
      set createDeviseDialog(value: boolean) {
        this.deviseService.createDeviseDialog= value;
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

    get validQuittanceIndemniserReference(): boolean {
    return this._validQuittanceIndemniserReference;
    }

    set validQuittanceIndemniserReference(value: boolean) {
    this._validQuittanceIndemniserReference = value;
    }
    get validQuittanceIndemniserDateReception(): boolean {
    return this._validQuittanceIndemniserDateReception;
    }

    set validQuittanceIndemniserDateReception(value: boolean) {
    this._validQuittanceIndemniserDateReception = value;
    }
    get validQuittanceIndemniserDateAjout(): boolean {
    return this._validQuittanceIndemniserDateAjout;
    }

    set validQuittanceIndemniserDateAjout(value: boolean) {
    this._validQuittanceIndemniserDateAjout = value;
    }
    get validQuittanceIndemniserDevise(): boolean {
    return this._validQuittanceIndemniserDevise;
    }

    set validQuittanceIndemniserDevise(value: boolean) {
    this._validQuittanceIndemniserDevise = value;
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
