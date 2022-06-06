import {Component, OnInit, Input} from '@angular/core';
import {CarburantService} from 'src/app/controller/service/Carburant.service';
import {CarburantVo} from 'src/app/controller/model/Carburant.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-carburant-create-gestionnaire',
  templateUrl: './carburant-create-gestionnaire.component.html',
  styleUrls: ['./carburant-create-gestionnaire.component.css']
})
export class CarburantCreateGestionnaireComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validCarburantLibelle = true;




constructor(private datePipe: DatePipe, private carburantService: CarburantService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}



ngOnInit(): void {

}




private setValidation(value: boolean){
    this.validCarburantLibelle = value;
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
     this.carburantService.save().subscribe(carburant=>{
       this.carburants.push({...carburant});
       this.createCarburantDialog = false;
       this.submitted = false;
       this.selectedCarburant = new CarburantVo();


    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateCarburantLibelle();

    }

private validateCarburantLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedCarburant.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validCarburantLibelle = false;
        } else {
            this.validCarburantLibelle = true;
        }
    }






hideCreateDialog(){
    this.createCarburantDialog  = false;
    this.setValidation(true);
}

get carburants(): Array<CarburantVo> {
    return this.carburantService.carburants;
       }
set carburants(value: Array<CarburantVo>) {
        this.carburantService.carburants = value;
       }

 get selectedCarburant(): CarburantVo {
           return this.carburantService.selectedCarburant;
       }
    set selectedCarburant(value: CarburantVo) {
        this.carburantService.selectedCarburant = value;
       }

   get createCarburantDialog(): boolean {
           return this.carburantService.createCarburantDialog;

       }
    set createCarburantDialog(value: boolean) {
        this.carburantService.createCarburantDialog= value;
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

    get validCarburantLibelle(): boolean {
    return this._validCarburantLibelle;
    }

    set validCarburantLibelle(value: boolean) {
    this._validCarburantLibelle = value;
    }


}
