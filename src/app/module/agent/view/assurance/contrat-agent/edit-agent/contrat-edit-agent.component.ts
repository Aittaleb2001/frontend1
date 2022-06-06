import {Component, OnInit, Input} from '@angular/core';
import {ContratService} from 'src/app/controller/service/Contrat.service';
import {ContratVo} from 'src/app/controller/model/Contrat.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {NatureContratVo} from 'src/app/controller/model/NatureContrat.model';
import {NatureContratService} from 'src/app/controller/service/NatureContrat.service';
import {GarantieVo} from 'src/app/controller/model/Garantie.model';
import {GarantieService} from 'src/app/controller/service/Garantie.service';
import {VehiculeVo} from 'src/app/controller/model/Vehicule.model';
import {VehiculeService} from 'src/app/controller/service/Vehicule.service';
import {ClientVo} from 'src/app/controller/model/Client.model';
import {ClientService} from 'src/app/controller/service/Client.service';
import {QuittancePrimeVo} from 'src/app/controller/model/QuittancePrime.model';
import {QuittancePrimeService} from 'src/app/controller/service/QuittancePrime.service';
import {ContratGarantieVo} from 'src/app/controller/model/ContratGarantie.model';
import {ContratGarantieService} from 'src/app/controller/service/ContratGarantie.service';
@Component({
  selector: 'app-contrat-edit-agent',
  templateUrl: './contrat-edit-agent.component.html',
  styleUrls: ['./contrat-edit-agent.component.css']
})
export class ContratEditAgentComponent implements OnInit {

        selectedContratGaranties: ContratGarantieVo = new ContratGarantieVo();
    _submitted = false;
    private _errorMessages = new Array<string>();

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

    _validQuittancePrimePrimeNette = true;
    _validQuittancePrimeTaxe = true;
    _validQuittancePrimeTotalTtc = true;
    _validQuittancePrimeTotalQuittance = true;
    _validQuittancePrimeTotalPaye = true;
    _validQuittancePrimeRest = true;
    _validQuittancePrimeContrat = true;
    _validNatureContratLibelle = true;
    _validVehiculeReference = true;
    _validVehiculeCodeVerification = true;
    _validVehiculeMatricule = true;
    _validVehiculeCylindree = true;
    _validVehiculeVersion = true;
    _validVehiculePoidsEncharge = true;
    _validVehiculeNombrePlaces = true;
    _validVehiculePuissanceFiscale = true;
    _validVehiculeCarburant = true;
    _validVehiculeClient = true;
    _validVehiculeContrat = true;
    _validVehiculeMarque = true;
    _validClientReference = true;
    _validClientCin = true;
    _validClientNom = true;
    _validClientPrenom = true;
    _validClientActivite = true;
    _validClientAdresse = true;
    _validClientDatedeNaissance = true;
    _validClientNumTelephone = true;
    _validClientTypeClient = true;
    _validClientClientSininstres = true;
    _validClientVehicule = true;
    _validClientContrat = true;
    _validContratGarantiesContrat = true;
    _validContratGarantiesGarantie = true;


private _contratGarantiesVo: Array<ContratGarantieVo> = [];

constructor(private datePipe: DatePipe, private contratService: ContratService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private natureContratService: NatureContratService
,       private garantieService: GarantieService
,       private vehiculeService: VehiculeService
,       private clientService: ClientService
,       private quittancePrimeService: QuittancePrimeService
,       private contratGarantieService: ContratGarantieService
) {

}


// methods
ngOnInit(): void {

            this.garantieService.findAll().subscribe(data => this.prepareContratGaranties(data));

                this.selectedContratGaranties.garantieVo = new GarantieVo();
                this.garantieService.findAll().subscribe((data) => this.garanties = data);


    this.selectedQuittancePrime = new QuittancePrimeVo();
    this.quittancePrimeService.findAll().subscribe((data) => this.quittancePrimes = data);
    this.selectedNatureContrat = new NatureContratVo();
    this.natureContratService.findAll().subscribe((data) => this.natureContrats = data);
    this.selectedVehicule = new VehiculeVo();
    this.vehiculeService.findAll().subscribe((data) => this.vehicules = data);
    this.selectedClient = new ClientVo();
    this.clientService.findAll().subscribe((data) => this.clients = data);
}

         prepareContratGaranties(garanties: Array<GarantieVo>): void{
        if( garanties != null){
        garanties.forEach(e => {
        const contratGarantie = new ContratGarantieVo();
        contratGarantie.garantieVo = e;
        this.contratGarantiesVo.push(contratGarantie);
        });
        }
    }



private setValidation(value : boolean){
    this.validContratNumPolice = value;
    this.validContratNumAttestation = value;
    this.validContratDateEffet = value;
    this.validContratDateEcheance = value;
    this.validContratDateSignature = value;
    this.validContratPeriode = value;
    this.validContratQuittancePrime = value;
    this.validContratNatureContrat = value;
    this.validContratVehicule = value;
    this.validContratContratGaranties = value;
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
     this.contratService.edit().subscribe(contrat=>{
     const myIndex = this.contrats.findIndex(e => e.id === this.selectedContrat.id);
     this.contrats[myIndex] = this.selectedContrat;
     this.editContratDialog = false;
     this.submitted = false;
     this.selectedContrat = new ContratVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateContratNumPolice();
this.validateContratNumAttestation();
this.validateContratDateEffet();
this.validateContratDateEcheance();
this.validateContratDateSignature();
this.validateContratPeriode();
this.validateContratQuittancePrime();
this.validateContratNatureContrat();
this.validateContratVehicule();
this.validateContratContratGaranties();

    }

private validateContratNumPolice(){
        if (this.stringUtilService.isEmpty(this.selectedContrat.numPolice)) {
            this.errorMessages.push('Num police non valide');
            this.validContratNumPolice = false;
        } else {
            this.validContratNumPolice = true;
        }
    }
private validateContratNumAttestation(){
        if (this.stringUtilService.isEmpty(this.selectedContrat.numAttestation)) {
            this.errorMessages.push('Num attestation non valide');
            this.validContratNumAttestation = false;
        } else {
            this.validContratNumAttestation = true;
        }
    }
private validateContratDateEffet(){
        if (this.stringUtilService.isEmpty(this.selectedContrat.dateEffet)) {
            this.errorMessages.push('Date effet non valide');
            this.validContratDateEffet = false;
        } else {
            this.validContratDateEffet = true;
        }
    }
private validateContratDateEcheance(){
        if (this.stringUtilService.isEmpty(this.selectedContrat.dateEcheance)) {
            this.errorMessages.push('Date echeance non valide');
            this.validContratDateEcheance = false;
        } else {
            this.validContratDateEcheance = true;
        }
    }
private validateContratDateSignature(){
        if (this.stringUtilService.isEmpty(this.selectedContrat.dateSignature)) {
            this.errorMessages.push('Date signature non valide');
            this.validContratDateSignature = false;
        } else {
            this.validContratDateSignature = true;
        }
    }
private validateContratPeriode(){
        if (this.stringUtilService.isEmpty(this.selectedContrat.periode)) {
            this.errorMessages.push('Periode non valide');
            this.validContratPeriode = false;
        } else {
            this.validContratPeriode = true;
        }
    }
private validateContratQuittancePrime(){
        if (this.stringUtilService.isEmpty(this.selectedContrat.quittancePrimeVo)) {
            this.errorMessages.push('Quittance prime non valide');
            this.validContratQuittancePrime = false;
        } else {
            this.validContratQuittancePrime = true;
        }
    }
private validateContratNatureContrat(){
        if (this.stringUtilService.isEmpty(this.selectedContrat.natureContratVo)) {
            this.errorMessages.push('Nature contrat non valide');
            this.validContratNatureContrat = false;
        } else {
            this.validContratNatureContrat = true;
        }
    }
private validateContratVehicule(){
        if (this.stringUtilService.isEmpty(this.selectedContrat.vehiculeVo)) {
            this.errorMessages.push('Vehicule non valide');
            this.validContratVehicule = false;
        } else {
            this.validContratVehicule = true;
        }
    }
private validateContratContratGaranties(){
        if (this.stringUtilService.isEmpty(this.selectedContrat.contratGarantiesVo)) {
            this.errorMessages.push('Contrat garanties non valide');
            this.validContratContratGaranties = false;
        } else {
            this.validContratContratGaranties = true;
        }
    }















            private validateContratGarantiesContrat(){
            if (this.selectedContratGaranties.contratVo == null) {
            this.errorMessages.push('Contrat de la contratGarantie est  invalide');
             this.validContratGarantiesContrat = false;
            } else {
            this.validContratGarantiesContrat = true;
            }
            }

            private validateContratGarantiesGarantie(){
            if (this.selectedContratGaranties.garantieVo == null) {
            this.errorMessages.push('Garantie de la contratGarantie est  invalide');
             this.validContratGarantiesGarantie = false;
            } else {
            this.validContratGarantiesGarantie = true;
            }
            }



//openPopup
      public async openCreateClient(client: string) {
        const isPermistted = await this.roleService.isPermitted('Client', 'edit');
        if(isPermistted) {
         this.selectedClient = new ClientVo();
         this.createClientDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
      public async openCreateQuittancePrime(quittancePrime: string) {
        const isPermistted = await this.roleService.isPermitted('QuittancePrime', 'edit');
        if(isPermistted) {
         this.selectedQuittancePrime = new QuittancePrimeVo();
         this.createQuittancePrimeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
      public async openCreateNatureContrat(natureContrat: string) {
        const isPermistted = await this.roleService.isPermitted('NatureContrat', 'edit');
        if(isPermistted) {
         this.selectedNatureContrat = new NatureContratVo();
         this.createNatureContratDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
      public async openCreateVehicule(vehicule: string) {
        const isPermistted = await this.roleService.isPermitted('Vehicule', 'edit');
        if(isPermistted) {
         this.selectedVehicule = new VehiculeVo();
         this.createVehiculeDialog = true;
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
    this.editContratDialog  = false;
    this.setValidation(true);
}

// getters and setters

get contrats(): Array<ContratVo> {
    return this.contratService.contrats;
       }
set contrats(value: Array<ContratVo>) {
        this.contratService.contrats = value;
       }

 get selectedContrat(): ContratVo {
           return this.contratService.selectedContrat;
       }
    set selectedContrat(value: ContratVo) {
        this.contratService.selectedContrat = value;
       }

   get editContratDialog(): boolean {
           return this.contratService.createContratDialog;

       }
    set editContratDialog(value: boolean) {
        this.contratService.createContratDialog= value;
       }

       get selectedClient(): ClientVo {
           return this.clientService.selectedClient;
       }
      set selectedClient(value: ClientVo) {
        this.clientService.selectedClient = value;
       }
       get clients(): Array<ClientVo> {
           return this.clientService.clients;
       }
       set clients(value: Array<ClientVo>) {
        this.clientService.clients = value;
       }
       get createClientDialog(): boolean {
           return this.clientService.createClientDialog;
       }
      set createClientDialog(value: boolean) {
        this.clientService.createClientDialog= value;
       }
       get selectedQuittancePrime(): QuittancePrimeVo {
           return this.quittancePrimeService.selectedQuittancePrime;
       }
      set selectedQuittancePrime(value: QuittancePrimeVo) {
        this.quittancePrimeService.selectedQuittancePrime = value;
       }
       get quittancePrimes(): Array<QuittancePrimeVo> {
           return this.quittancePrimeService.quittancePrimes;
       }
       set quittancePrimes(value: Array<QuittancePrimeVo>) {
        this.quittancePrimeService.quittancePrimes = value;
       }
       get createQuittancePrimeDialog(): boolean {
           return this.quittancePrimeService.createQuittancePrimeDialog;
       }
      set createQuittancePrimeDialog(value: boolean) {
        this.quittancePrimeService.createQuittancePrimeDialog= value;
       }
       get selectedNatureContrat(): NatureContratVo {
           return this.natureContratService.selectedNatureContrat;
       }
      set selectedNatureContrat(value: NatureContratVo) {
        this.natureContratService.selectedNatureContrat = value;
       }
       get natureContrats(): Array<NatureContratVo> {
           return this.natureContratService.natureContrats;
       }
       set natureContrats(value: Array<NatureContratVo>) {
        this.natureContratService.natureContrats = value;
       }
       get createNatureContratDialog(): boolean {
           return this.natureContratService.createNatureContratDialog;
       }
      set createNatureContratDialog(value: boolean) {
        this.natureContratService.createNatureContratDialog= value;
       }
       get selectedVehicule(): VehiculeVo {
           return this.vehiculeService.selectedVehicule;
       }
      set selectedVehicule(value: VehiculeVo) {
        this.vehiculeService.selectedVehicule = value;
       }
       get vehicules(): Array<VehiculeVo> {
           return this.vehiculeService.vehicules;
       }
       set vehicules(value: Array<VehiculeVo>) {
        this.vehiculeService.vehicules = value;
       }
       get createVehiculeDialog(): boolean {
           return this.vehiculeService.createVehiculeDialog;
       }
      set createVehiculeDialog(value: boolean) {
        this.vehiculeService.createVehiculeDialog= value;
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


    get contratGarantiesVo(): Array<ContratGarantieVo> {
    if( this._contratGarantiesVo == null )
    this._contratGarantiesVo = new Array();
    return this._contratGarantiesVo;
    }

    set contratGarantiesVo(value: Array<ContratGarantieVo>) {
    this._contratGarantiesVo = value;
    }


    get errorMessages(): string[] {
    return this._errorMessages;
    }

    set errorMessages(value: string[]) {
    this._errorMessages = value;
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
    get validNatureContratLibelle(): boolean {
    return this._validNatureContratLibelle;
    }

    set validNatureContratLibelle(value: boolean) {
    this._validNatureContratLibelle = value;
    }
    get validVehiculeReference(): boolean {
    return this._validVehiculeReference;
    }

    set validVehiculeReference(value: boolean) {
    this._validVehiculeReference = value;
    }
    get validVehiculeCodeVerification(): boolean {
    return this._validVehiculeCodeVerification;
    }

    set validVehiculeCodeVerification(value: boolean) {
    this._validVehiculeCodeVerification = value;
    }
    get validVehiculeMatricule(): boolean {
    return this._validVehiculeMatricule;
    }

    set validVehiculeMatricule(value: boolean) {
    this._validVehiculeMatricule = value;
    }
    get validVehiculeCylindree(): boolean {
    return this._validVehiculeCylindree;
    }

    set validVehiculeCylindree(value: boolean) {
    this._validVehiculeCylindree = value;
    }
    get validVehiculeVersion(): boolean {
    return this._validVehiculeVersion;
    }

    set validVehiculeVersion(value: boolean) {
    this._validVehiculeVersion = value;
    }
    get validVehiculePoidsEncharge(): boolean {
    return this._validVehiculePoidsEncharge;
    }

    set validVehiculePoidsEncharge(value: boolean) {
    this._validVehiculePoidsEncharge = value;
    }
    get validVehiculeNombrePlaces(): boolean {
    return this._validVehiculeNombrePlaces;
    }

    set validVehiculeNombrePlaces(value: boolean) {
    this._validVehiculeNombrePlaces = value;
    }
    get validVehiculePuissanceFiscale(): boolean {
    return this._validVehiculePuissanceFiscale;
    }

    set validVehiculePuissanceFiscale(value: boolean) {
    this._validVehiculePuissanceFiscale = value;
    }
    get validVehiculeCarburant(): boolean {
    return this._validVehiculeCarburant;
    }

    set validVehiculeCarburant(value: boolean) {
    this._validVehiculeCarburant = value;
    }
    get validVehiculeClient(): boolean {
    return this._validVehiculeClient;
    }

    set validVehiculeClient(value: boolean) {
    this._validVehiculeClient = value;
    }
    get validVehiculeContrat(): boolean {
    return this._validVehiculeContrat;
    }

    set validVehiculeContrat(value: boolean) {
    this._validVehiculeContrat = value;
    }
    get validVehiculeMarque(): boolean {
    return this._validVehiculeMarque;
    }

    set validVehiculeMarque(value: boolean) {
    this._validVehiculeMarque = value;
    }
    get validClientReference(): boolean {
    return this._validClientReference;
    }

    set validClientReference(value: boolean) {
    this._validClientReference = value;
    }
    get validClientCin(): boolean {
    return this._validClientCin;
    }

    set validClientCin(value: boolean) {
    this._validClientCin = value;
    }
    get validClientNom(): boolean {
    return this._validClientNom;
    }

    set validClientNom(value: boolean) {
    this._validClientNom = value;
    }
    get validClientPrenom(): boolean {
    return this._validClientPrenom;
    }

    set validClientPrenom(value: boolean) {
    this._validClientPrenom = value;
    }
    get validClientActivite(): boolean {
    return this._validClientActivite;
    }

    set validClientActivite(value: boolean) {
    this._validClientActivite = value;
    }
    get validClientAdresse(): boolean {
    return this._validClientAdresse;
    }

    set validClientAdresse(value: boolean) {
    this._validClientAdresse = value;
    }
    get validClientDatedeNaissance(): boolean {
    return this._validClientDatedeNaissance;
    }

    set validClientDatedeNaissance(value: boolean) {
    this._validClientDatedeNaissance = value;
    }
    get validClientNumTelephone(): boolean {
    return this._validClientNumTelephone;
    }

    set validClientNumTelephone(value: boolean) {
    this._validClientNumTelephone = value;
    }
    get validClientTypeClient(): boolean {
    return this._validClientTypeClient;
    }

    set validClientTypeClient(value: boolean) {
    this._validClientTypeClient = value;
    }
    get validClientClientSininstres(): boolean {
    return this._validClientClientSininstres;
    }

    set validClientClientSininstres(value: boolean) {
    this._validClientClientSininstres = value;
    }
    get validClientVehicule(): boolean {
    return this._validClientVehicule;
    }

    set validClientVehicule(value: boolean) {
    this._validClientVehicule = value;
    }
    get validClientContrat(): boolean {
    return this._validClientContrat;
    }

    set validClientContrat(value: boolean) {
    this._validClientContrat = value;
    }
    get validContratGarantiesContrat(): boolean {
    return this._validContratGarantiesContrat;
    }

    set validContratGarantiesContrat(value: boolean) {
    this._validContratGarantiesContrat = value;
    }
    get validContratGarantiesGarantie(): boolean {
    return this._validContratGarantiesGarantie;
    }

    set validContratGarantiesGarantie(value: boolean) {
    this._validContratGarantiesGarantie = value;
    }
}
