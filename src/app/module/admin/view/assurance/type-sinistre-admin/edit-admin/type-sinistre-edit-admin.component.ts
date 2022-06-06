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
  selector: 'app-type-sinistre-edit-admin',
  templateUrl: './type-sinistre-edit-admin.component.html',
  styleUrls: ['./type-sinistre-edit-admin.component.css']
})
export class TypeSinistreEditAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validTypeSinistreLibelle = true;




constructor(private datePipe: DatePipe, private typeSinistreService: TypeSinistreService
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
    this.validTypeSinistreLibelle = value;
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
     this.typeSinistreService.edit().subscribe(typeSinistre=>{
     const myIndex = this.typeSinistres.findIndex(e => e.id === this.selectedTypeSinistre.id);
     this.typeSinistres[myIndex] = this.selectedTypeSinistre;
     this.editTypeSinistreDialog = false;
     this.submitted = false;
     this.selectedTypeSinistre = new TypeSinistreVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
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





//openPopup
// methods

hideEditDialog(){
    this.editTypeSinistreDialog  = false;
    this.setValidation(true);
}

// getters and setters

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

   get editTypeSinistreDialog(): boolean {
           return this.typeSinistreService.editTypeSinistreDialog;

       }
    set editTypeSinistreDialog(value: boolean) {
        this.typeSinistreService.editTypeSinistreDialog= value;
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

    get validTypeSinistreLibelle(): boolean {
    return this._validTypeSinistreLibelle;
    }

    set validTypeSinistreLibelle(value: boolean) {
    this._validTypeSinistreLibelle = value;
    }

}
