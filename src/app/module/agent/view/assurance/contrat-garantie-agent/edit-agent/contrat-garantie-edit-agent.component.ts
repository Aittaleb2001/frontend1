import {Component, OnInit, Input} from '@angular/core';
import {ContratGarantieService} from 'src/app/controller/service/ContratGarantie.service';
import {ContratGarantieVo} from 'src/app/controller/model/ContratGarantie.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {ContratVo} from 'src/app/controller/model/Contrat.model';
import {ContratService} from 'src/app/controller/service/Contrat.service';
import {GarantieVo} from 'src/app/controller/model/Garantie.model';
import {GarantieService} from 'src/app/controller/service/Garantie.service';
@Component({
  selector: 'app-contrat-garantie-edit-agent',
  templateUrl: './contrat-garantie-edit-agent.component.html',
  styleUrls: ['./contrat-garantie-edit-agent.component.css']
})
export class ContratGarantieEditAgentComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validContratGarantieContrat = true;
   _validContratGarantieGarantie = true;

    _validContratNumPolice = true;
    _validContratNumAttestation = true;
    _validContratDateEffet = true;
    _validContratDateEcheance = true;
    _validContratDateSignature = true;
    _validContratPeriode = true;
    _validContratQuittancePrime = true;
    _validContratNatureContrat = true;
    _validContratVehicule = true;
    _validContratContratGaranties = true;
    _validGarantieLibelle = true;



constructor(private datePipe: DatePipe, private contratGarantieService: ContratGarantieService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private contratService: ContratService
,       private garantieService: GarantieService
) {

}


// methods
ngOnInit(): void {

    this.selectedContrat = new ContratVo();
    this.contratService.findAll().subscribe((data) => this.contrats = data);
    this.selectedGarantie = new GarantieVo();
    this.garantieService.findAll().subscribe((data) => this.garanties = data);
}




private setValidation(value : boolean){
    this.validContratGarantieContrat = value;
    this.validContratGarantieGarantie = value;
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
     this.contratGarantieService.edit().subscribe(contratGarantie=>{
     const myIndex = this.contratGaranties.findIndex(e => e.id === this.selectedContratGarantie.id);
     this.contratGaranties[myIndex] = this.selectedContratGarantie;
     this.editContratGarantieDialog = false;
     this.submitted = false;
     this.selectedContratGarantie = new ContratGarantieVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateContratGarantieContrat();
this.validateContratGarantieGarantie();

    }

private validateContratGarantieContrat(){
        if (this.stringUtilService.isEmpty(this.selectedContratGarantie.contratVo)) {
            this.errorMessages.push('Contrat non valide');
            this.validContratGarantieContrat = false;
        } else {
            this.validContratGarantieContrat = true;
        }
    }
private validateContratGarantieGarantie(){
        if (this.stringUtilService.isEmpty(this.selectedContratGarantie.garantieVo)) {
            this.errorMessages.push('Garantie non valide');
            this.validContratGarantieGarantie = false;
        } else {
            this.validContratGarantieGarantie = true;
        }
    }






//openPopup
      public async openCreateContrat(contrat: string) {
        const isPermistted = await this.roleService.isPermitted('Contrat', 'edit');
        if(isPermistted) {
         this.selectedContrat = new ContratVo();
         this.createContratDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
      public async openCreateGarantie(garantie: string) {
        const isPermistted = await this.roleService.isPermitted('Garantie', 'edit');
        if(isPermistted) {
         this.selectedGarantie = new GarantieVo();
         this.createGarantieDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editContratGarantieDialog  = false;
    this.setValidation(true);
}

// getters and setters

get contratGaranties(): Array<ContratGarantieVo> {
    return this.contratGarantieService.contratGaranties;
       }
set contratGaranties(value: Array<ContratGarantieVo>) {
        this.contratGarantieService.contratGaranties = value;
       }

 get selectedContratGarantie(): ContratGarantieVo {
           return this.contratGarantieService.selectedContratGarantie;
       }
    set selectedContratGarantie(value: ContratGarantieVo) {
        this.contratGarantieService.selectedContratGarantie = value;
       }

   get editContratGarantieDialog(): boolean {
           return this.contratGarantieService.createContratGarantieDialog;

       }
    set editContratGarantieDialog(value: boolean) {
        this.contratGarantieService.createContratGarantieDialog= value;
       }

       get selectedContrat(): ContratVo {
           return this.contratService.selectedContrat;
       }
      set selectedContrat(value: ContratVo) {
        this.contratService.selectedContrat = value;
       }
       get contrats(): Array<ContratVo> {
           return this.contratService.contrats;
       }
       set contrats(value: Array<ContratVo>) {
        this.contratService.contrats = value;
       }
       get createContratDialog(): boolean {
           return this.contratService.createContratDialog;
       }
      set createContratDialog(value: boolean) {
        this.contratService.createContratDialog= value;
       }
       get selectedGarantie(): GarantieVo {
           return this.garantieService.selectedGarantie;
       }
      set selectedGarantie(value: GarantieVo) {
        this.garantieService.selectedGarantie = value;
       }
       get garanties(): Array<GarantieVo> {
           return this.garantieService.garanties;
       }
       set garanties(value: Array<GarantieVo>) {
        this.garantieService.garanties = value;
       }
       get createGarantieDialog(): boolean {
           return this.garantieService.createGarantieDialog;
       }
      set createGarantieDialog(value: boolean) {
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

    get validContratGarantieContrat(): boolean {
    return this._validContratGarantieContrat;
    }

    set validContratGarantieContrat(value: boolean) {
    this._validContratGarantieContrat = value;
    }
    get validContratGarantieGarantie(): boolean {
    return this._validContratGarantieGarantie;
    }

    set validContratGarantieGarantie(value: boolean) {
    this._validContratGarantieGarantie = value;
    }

    get validContratNumPolice(): boolean {
    return this._validContratNumPolice;
    }

    set validContratNumPolice(value: boolean) {
    this._validContratNumPolice = value;
    }
    get validContratNumAttestation(): boolean {
    return this._validContratNumAttestation;
    }

    set validContratNumAttestation(value: boolean) {
    this._validContratNumAttestation = value;
    }
    get validContratDateEffet(): boolean {
    return this._validContratDateEffet;
    }

    set validContratDateEffet(value: boolean) {
    this._validContratDateEffet = value;
    }
    get validContratDateEcheance(): boolean {
    return this._validContratDateEcheance;
    }

    set validContratDateEcheance(value: boolean) {
    this._validContratDateEcheance = value;
    }
    get validContratDateSignature(): boolean {
    return this._validContratDateSignature;
    }

    set validContratDateSignature(value: boolean) {
    this._validContratDateSignature = value;
    }
    get validContratPeriode(): boolean {
    return this._validContratPeriode;
    }

    set validContratPeriode(value: boolean) {
    this._validContratPeriode = value;
    }
    get validContratQuittancePrime(): boolean {
    return this._validContratQuittancePrime;
    }

    set validContratQuittancePrime(value: boolean) {
    this._validContratQuittancePrime = value;
    }
    get validContratNatureContrat(): boolean {
    return this._validContratNatureContrat;
    }

    set validContratNatureContrat(value: boolean) {
    this._validContratNatureContrat = value;
    }
    get validContratVehicule(): boolean {
    return this._validContratVehicule;
    }

    set validContratVehicule(value: boolean) {
    this._validContratVehicule = value;
    }
    get validContratContratGaranties(): boolean {
    return this._validContratContratGaranties;
    }

    set validContratContratGaranties(value: boolean) {
    this._validContratContratGaranties = value;
    }
    get validGarantieLibelle(): boolean {
    return this._validGarantieLibelle;
    }

    set validGarantieLibelle(value: boolean) {
    this._validGarantieLibelle = value;
    }
}
