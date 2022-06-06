import {Component, OnInit, Input} from '@angular/core';
import {GarantieService} from 'src/app/controller/service/Garantie.service';
import {GarantieVo} from 'src/app/controller/model/Garantie.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-garantie-edit-gestionnaire',
  templateUrl: './garantie-edit-gestionnaire.component.html',
  styleUrls: ['./garantie-edit-gestionnaire.component.css']
})
export class GarantieEditGestionnaireComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validGarantieLibelle = true;




constructor(private datePipe: DatePipe, private garantieService: GarantieService
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
    this.validGarantieLibelle = value;
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
     this.garantieService.edit().subscribe(garantie=>{
     const myIndex = this.garanties.findIndex(e => e.id === this.selectedGarantie.id);
     this.garanties[myIndex] = this.selectedGarantie;
     this.editGarantieDialog = false;
     this.submitted = false;
     this.selectedGarantie = new GarantieVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateGarantieLibelle();

    }

private validateGarantieLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedGarantie.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validGarantieLibelle = false;
        } else {
            this.validGarantieLibelle = true;
        }
    }





//openPopup
// methods

hideEditDialog(){
    this.editGarantieDialog  = false;
    this.setValidation(true);
}

// getters and setters

get garanties(): Array<GarantieVo> {
    return this.garantieService.garanties;
       }
set garanties(value: Array<GarantieVo>) {
        this.garantieService.garanties = value;
       }

 get selectedGarantie(): GarantieVo {
           return this.garantieService.selectedGarantie;
       }
    set selectedGarantie(value: GarantieVo) {
        this.garantieService.selectedGarantie = value;
       }

   get editGarantieDialog(): boolean {
           return this.garantieService.createGarantieDialog;

       }
    set editGarantieDialog(value: boolean) {
        this.garantieService.createGarantieDialog= value;
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

    get validGarantieLibelle(): boolean {
    return this._validGarantieLibelle;
    }

    set validGarantieLibelle(value: boolean) {
    this._validGarantieLibelle = value;
    }

}
