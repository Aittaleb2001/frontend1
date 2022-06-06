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
  selector: 'app-garantie-create-agent',
  templateUrl: './garantie-create-agent.component.html',
  styleUrls: ['./garantie-create-agent.component.css']
})
export class GarantieCreateAgentComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validGarantieLibelle = true;




constructor(private datePipe: DatePipe, private garantieService: GarantieService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}



ngOnInit(): void {

}




private setValidation(value: boolean){
    this.validGarantieLibelle = value;
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
     this.garantieService.save().subscribe(garantie=>{
       this.garanties.push({...garantie});
       this.createGarantieDialog = false;
       this.submitted = false;
       this.selectedGarantie = new GarantieVo();


    } , error =>{
        console.log(error);
    });
}

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






hideCreateDialog(){
    this.createGarantieDialog  = false;
    this.setValidation(true);
}

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

   get createGarantieDialog(): boolean {
           return this.garantieService.createGarantieDialog;

       }
    set createGarantieDialog(value: boolean) {
        this.garantieService.createGarantieDialog= value;
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

    get validGarantieLibelle(): boolean {
    return this._validGarantieLibelle;
    }

    set validGarantieLibelle(value: boolean) {
    this._validGarantieLibelle = value;
    }


}
