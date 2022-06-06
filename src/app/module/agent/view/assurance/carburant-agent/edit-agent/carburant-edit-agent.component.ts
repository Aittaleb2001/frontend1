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
  selector: 'app-carburant-edit-agent',
  templateUrl: './carburant-edit-agent.component.html',
  styleUrls: ['./carburant-edit-agent.component.css']
})
export class CarburantEditAgentComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validCarburantLibelle = true;




constructor(private datePipe: DatePipe, private carburantService: CarburantService
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
    this.validCarburantLibelle = value;
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
     this.carburantService.edit().subscribe(carburant=>{
     const myIndex = this.carburants.findIndex(e => e.id === this.selectedCarburant.id);
     this.carburants[myIndex] = this.selectedCarburant;
     this.editCarburantDialog = false;
     this.submitted = false;
     this.selectedCarburant = new CarburantVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
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





//openPopup
// methods

hideEditDialog(){
    this.editCarburantDialog  = false;
    this.setValidation(true);
}

// getters and setters

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

   get editCarburantDialog(): boolean {
           return this.carburantService.editCarburantDialog;

       }
    set editCarburantDialog(value: boolean) {
        this.carburantService.editCarburantDialog= value;
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

    get validCarburantLibelle(): boolean {
    return this._validCarburantLibelle;
    }

    set validCarburantLibelle(value: boolean) {
    this._validCarburantLibelle = value;
    }

}
