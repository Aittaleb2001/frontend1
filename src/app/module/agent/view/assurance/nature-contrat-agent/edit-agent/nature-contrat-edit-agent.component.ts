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
  selector: 'app-nature-contrat-edit-agent',
  templateUrl: './nature-contrat-edit-agent.component.html',
  styleUrls: ['./nature-contrat-edit-agent.component.css']
})
export class NatureContratEditAgentComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validNatureContratLibelle = true;




constructor(private datePipe: DatePipe, private natureContratService: NatureContratService
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
    this.validNatureContratLibelle = value;
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
     this.natureContratService.edit().subscribe(natureContrat=>{
     const myIndex = this.natureContrats.findIndex(e => e.id === this.selectedNatureContrat.id);
     this.natureContrats[myIndex] = this.selectedNatureContrat;
     this.editNatureContratDialog = false;
     this.submitted = false;
     this.selectedNatureContrat = new NatureContratVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
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





//openPopup
// methods

hideEditDialog(){
    this.editNatureContratDialog  = false;
    this.setValidation(true);
}

// getters and setters

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

   get editNatureContratDialog(): boolean {
           return this.natureContratService.createNatureContratDialog;

       }
    set editNatureContratDialog(value: boolean) {
        this.natureContratService.createNatureContratDialog= value;
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

    get validNatureContratLibelle(): boolean {
    return this._validNatureContratLibelle;
    }

    set validNatureContratLibelle(value: boolean) {
    this._validNatureContratLibelle = value;
    }

}
