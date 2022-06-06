import {Component, OnInit, Input} from '@angular/core';
import {NatureContratService} from 'src/app/controller/service/NatureContrat.service';
import {NatureContratVo} from 'src/app/controller/model/NatureContrat.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-nature-contrat-create-gestionnaire',
  templateUrl: './nature-contrat-create-gestionnaire.component.html',
  styleUrls: ['./nature-contrat-create-gestionnaire.component.css']
})
export class NatureContratCreateGestionnaireComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validNatureContratLibelle = true;




constructor(private datePipe: DatePipe, private natureContratService: NatureContratService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}



ngOnInit(): void {

}




private setValidation(value: boolean){
    this.validNatureContratLibelle = value;
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
     this.natureContratService.save().subscribe(natureContrat=>{
       this.natureContrats.push({...natureContrat});
       this.createNatureContratDialog = false;
       this.submitted = false;
       this.selectedNatureContrat = new NatureContratVo();


    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateNatureContratLibelle();

    }

private validateNatureContratLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedNatureContrat.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validNatureContratLibelle = false;
        } else {
            this.validNatureContratLibelle = true;
        }
    }






hideCreateDialog(){
    this.createNatureContratDialog  = false;
    this.setValidation(true);
}

get natureContrats(): Array<NatureContratVo> {
    return this.natureContratService.natureContrats;
       }
set natureContrats(value: Array<NatureContratVo>) {
        this.natureContratService.natureContrats = value;
       }

 get selectedNatureContrat(): NatureContratVo {
           return this.natureContratService.selectedNatureContrat;
       }
    set selectedNatureContrat(value: NatureContratVo) {
        this.natureContratService.selectedNatureContrat = value;
       }

   get createNatureContratDialog(): boolean {
           return this.natureContratService.createNatureContratDialog;

       }
    set createNatureContratDialog(value: boolean) {
        this.natureContratService.createNatureContratDialog= value;
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

    get validNatureContratLibelle(): boolean {
    return this._validNatureContratLibelle;
    }

    set validNatureContratLibelle(value: boolean) {
    this._validNatureContratLibelle = value;
    }


}
