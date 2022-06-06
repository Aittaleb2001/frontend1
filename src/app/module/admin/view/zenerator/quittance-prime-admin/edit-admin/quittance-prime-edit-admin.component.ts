import {Component, OnInit, Input} from '@angular/core';
import {QuittancePrimeService} from 'src/app/controller/service/QuittancePrime.service';
import {QuittancePrimeVo} from 'src/app/controller/model/QuittancePrime.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {ContratVo} from 'src/app/controller/model/Contrat.model';
import {ContratService} from 'src/app/controller/service/Contrat.service';
@Component({
  selector: 'app-quittance-prime-edit-admin',
  templateUrl: './quittance-prime-edit-admin.component.html',
  styleUrls: ['./quittance-prime-edit-admin.component.css']
})
export class QuittancePrimeEditAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validQuittancePrimePrimeNette = true;
   _validQuittancePrimeTaxe = true;
   _validQuittancePrimeTotalTtc = true;
   _validQuittancePrimeTotalQuittance = true;
   _validQuittancePrimeTotalPaye = true;
   _validQuittancePrimeRest = true;
   _validQuittancePrimeContrat = true;

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



constructor(private datePipe: DatePipe, private quittancePrimeService: QuittancePrimeService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private contratService: ContratService
) {

}


// methods
ngOnInit(): void {

    this.selectedContrat = new ContratVo();
    this.contratService.findAll().subscribe((data) => this.contrats = data);
}




private setValidation(value : boolean){
    this.validQuittancePrimePrimeNette = value;
    this.validQuittancePrimeTaxe = value;
    this.validQuittancePrimeTotalTtc = value;
    this.validQuittancePrimeTotalQuittance = value;
    this.validQuittancePrimeTotalPaye = value;
    this.validQuittancePrimeRest = value;
    this.validQuittancePrimeContrat = value;
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
     this.quittancePrimeService.edit().subscribe(quittancePrime=>{
     const myIndex = this.quittancePrimes.findIndex(e => e.id === this.selectedQuittancePrime.id);
     this.quittancePrimes[myIndex] = this.selectedQuittancePrime;
     this.editQuittancePrimeDialog = false;
     this.submitted = false;
     this.selectedQuittancePrime = new QuittancePrimeVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateQuittancePrimePrimeNette();
this.validateQuittancePrimeTaxe();
this.validateQuittancePrimeTotalTtc();
this.validateQuittancePrimeTotalQuittance();
this.validateQuittancePrimeTotalPaye();
this.validateQuittancePrimeRest();
this.validateQuittancePrimeContrat();

    }

private validateQuittancePrimePrimeNette(){
        if (this.stringUtilService.isEmpty(this.selectedQuittancePrime.primeNette)) {
            this.errorMessages.push('Prime nette non valide');
            this.validQuittancePrimePrimeNette = false;
        } else {
            this.validQuittancePrimePrimeNette = true;
        }
    }
private validateQuittancePrimeTaxe(){
        if (this.stringUtilService.isEmpty(this.selectedQuittancePrime.taxe)) {
            this.errorMessages.push('Taxe non valide');
            this.validQuittancePrimeTaxe = false;
        } else {
            this.validQuittancePrimeTaxe = true;
        }
    }
private validateQuittancePrimeTotalTtc(){
        if (this.stringUtilService.isEmpty(this.selectedQuittancePrime.totalTtc)) {
            this.errorMessages.push('Total ttc non valide');
            this.validQuittancePrimeTotalTtc = false;
        } else {
            this.validQuittancePrimeTotalTtc = true;
        }
    }
private validateQuittancePrimeTotalQuittance(){
        if (this.stringUtilService.isEmpty(this.selectedQuittancePrime.totalQuittance)) {
            this.errorMessages.push('Total quittance non valide');
            this.validQuittancePrimeTotalQuittance = false;
        } else {
            this.validQuittancePrimeTotalQuittance = true;
        }
    }
private validateQuittancePrimeTotalPaye(){
        if (this.stringUtilService.isEmpty(this.selectedQuittancePrime.totalPaye)) {
            this.errorMessages.push('Total paye non valide');
            this.validQuittancePrimeTotalPaye = false;
        } else {
            this.validQuittancePrimeTotalPaye = true;
        }
    }
private validateQuittancePrimeRest(){
        if (this.stringUtilService.isEmpty(this.selectedQuittancePrime.rest)) {
            this.errorMessages.push('Rest non valide');
            this.validQuittancePrimeRest = false;
        } else {
            this.validQuittancePrimeRest = true;
        }
    }
private validateQuittancePrimeContrat(){
        if (this.stringUtilService.isEmpty(this.selectedQuittancePrime.contratVo)) {
            this.errorMessages.push('Contrat non valide');
            this.validQuittancePrimeContrat = false;
        } else {
            this.validQuittancePrimeContrat = true;
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
// methods

hideEditDialog(){
    this.editQuittancePrimeDialog  = false;
    this.setValidation(true);
}

// getters and setters

get quittancePrimes(): Array<QuittancePrimeVo> {
    return this.quittancePrimeService.quittancePrimes;
       }
set quittancePrimes(value: Array<QuittancePrimeVo>) {
        this.quittancePrimeService.quittancePrimes = value;
       }

 get selectedQuittancePrime(): QuittancePrimeVo {
           return this.quittancePrimeService.selectedQuittancePrime;
       }
    set selectedQuittancePrime(value: QuittancePrimeVo) {
        this.quittancePrimeService.selectedQuittancePrime = value;
       }

   get editQuittancePrimeDialog(): boolean {
           return this.quittancePrimeService.createQuittancePrimeDialog;

       }
    set editQuittancePrimeDialog(value: boolean) {
        this.quittancePrimeService.createQuittancePrimeDialog= value;
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

    get validQuittancePrimePrimeNette(): boolean {
    return this._validQuittancePrimePrimeNette;
    }

    set validQuittancePrimePrimeNette(value: boolean) {
    this._validQuittancePrimePrimeNette = value;
    }
    get validQuittancePrimeTaxe(): boolean {
    return this._validQuittancePrimeTaxe;
    }

    set validQuittancePrimeTaxe(value: boolean) {
    this._validQuittancePrimeTaxe = value;
    }
    get validQuittancePrimeTotalTtc(): boolean {
    return this._validQuittancePrimeTotalTtc;
    }

    set validQuittancePrimeTotalTtc(value: boolean) {
    this._validQuittancePrimeTotalTtc = value;
    }
    get validQuittancePrimeTotalQuittance(): boolean {
    return this._validQuittancePrimeTotalQuittance;
    }

    set validQuittancePrimeTotalQuittance(value: boolean) {
    this._validQuittancePrimeTotalQuittance = value;
    }
    get validQuittancePrimeTotalPaye(): boolean {
    return this._validQuittancePrimeTotalPaye;
    }

    set validQuittancePrimeTotalPaye(value: boolean) {
    this._validQuittancePrimeTotalPaye = value;
    }
    get validQuittancePrimeRest(): boolean {
    return this._validQuittancePrimeRest;
    }

    set validQuittancePrimeRest(value: boolean) {
    this._validQuittancePrimeRest = value;
    }
    get validQuittancePrimeContrat(): boolean {
    return this._validQuittancePrimeContrat;
    }

    set validQuittancePrimeContrat(value: boolean) {
    this._validQuittancePrimeContrat = value;
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
}
