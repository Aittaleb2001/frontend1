import {Component, OnInit, Input} from '@angular/core';
import {TypeSinistreService} from 'src/app/controller/service/TypeSinistre.service';
import {TypeSinistreVo} from 'src/app/controller/model/TypeSinistre.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-type-sinistre-create-agent',
  templateUrl: './type-sinistre-create-agent.component.html',
  styleUrls: ['./type-sinistre-create-agent.component.css']
})
export class TypeSinistreCreateAgentComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validTypeSinistreLibelle = true;




constructor(private datePipe: DatePipe, private typeSinistreService: TypeSinistreService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}



ngOnInit(): void {

}




private setValidation(value: boolean){
    this.validTypeSinistreLibelle = value;
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
     this.typeSinistreService.save().subscribe(typeSinistre=>{
       this.typeSinistres.push({...typeSinistre});
       this.createTypeSinistreDialog = false;
       this.submitted = false;
       this.selectedTypeSinistre = new TypeSinistreVo();


    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateTypeSinistreLibelle();

    }

private validateTypeSinistreLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedTypeSinistre.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTypeSinistreLibelle = false;
        } else {
            this.validTypeSinistreLibelle = true;
        }
    }






hideCreateDialog(){
    this.createTypeSinistreDialog  = false;
    this.setValidation(true);
}

get typeSinistres(): Array<TypeSinistreVo> {
    return this.typeSinistreService.typeSinistres;
       }
set typeSinistres(value: Array<TypeSinistreVo>) {
        this.typeSinistreService.typeSinistres = value;
       }

 get selectedTypeSinistre(): TypeSinistreVo {
           return this.typeSinistreService.selectedTypeSinistre;
       }
    set selectedTypeSinistre(value: TypeSinistreVo) {
        this.typeSinistreService.selectedTypeSinistre = value;
       }

   get createTypeSinistreDialog(): boolean {
           return this.typeSinistreService.createTypeSinistreDialog;

       }
    set createTypeSinistreDialog(value: boolean) {
        this.typeSinistreService.createTypeSinistreDialog= value;
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

    get validTypeSinistreLibelle(): boolean {
    return this._validTypeSinistreLibelle;
    }

    set validTypeSinistreLibelle(value: boolean) {
    this._validTypeSinistreLibelle = value;
    }


}
