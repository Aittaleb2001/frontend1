import {Component, OnInit, Input} from '@angular/core';
import {MarqueService} from 'src/app/controller/service/Marque.service';
import {MarqueVo} from 'src/app/controller/model/Marque.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-marque-create-agent',
  templateUrl: './marque-create-agent.component.html',
  styleUrls: ['./marque-create-agent.component.css']
})
export class MarqueCreateAgentComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validMarqueLibelle = true;




constructor(private datePipe: DatePipe, private marqueService: MarqueService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}



ngOnInit(): void {

}




private setValidation(value: boolean){
    this.validMarqueLibelle = value;
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
     this.marqueService.save().subscribe(marque=>{
       this.marques.push({...marque});
       this.createMarqueDialog = false;
       this.submitted = false;
       this.selectedMarque = new MarqueVo();


    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateMarqueLibelle();

    }

private validateMarqueLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedMarque.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validMarqueLibelle = false;
        } else {
            this.validMarqueLibelle = true;
        }
    }






hideCreateDialog(){
    this.createMarqueDialog  = false;
    this.setValidation(true);
}

get marques(): Array<MarqueVo> {
    return this.marqueService.marques;
       }
set marques(value: Array<MarqueVo>) {
        this.marqueService.marques = value;
       }

 get selectedMarque(): MarqueVo {
           return this.marqueService.selectedMarque;
       }
    set selectedMarque(value: MarqueVo) {
        this.marqueService.selectedMarque = value;
       }

   get createMarqueDialog(): boolean {
           return this.marqueService.createMarqueDialog;

       }
    set createMarqueDialog(value: boolean) {
        this.marqueService.createMarqueDialog= value;
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

    get validMarqueLibelle(): boolean {
    return this._validMarqueLibelle;
    }

    set validMarqueLibelle(value: boolean) {
    this._validMarqueLibelle = value;
    }


}
