import {Component, OnInit, Input} from '@angular/core';
import {VehiculeService} from 'src/app/controller/service/Vehicule.service';
import {VehiculeVo} from 'src/app/controller/model/Vehicule.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {ContratVo} from 'src/app/controller/model/Contrat.model';
import {ContratService} from 'src/app/controller/service/Contrat.service';
import {ClientVo} from 'src/app/controller/model/Client.model';
import {ClientService} from 'src/app/controller/service/Client.service';
import {MarqueVo} from 'src/app/controller/model/Marque.model';
import {MarqueService} from 'src/app/controller/service/Marque.service';
import {CarburantVo} from 'src/app/controller/model/Carburant.model';
import {CarburantService} from 'src/app/controller/service/Carburant.service';
import {TypeVehiculeVo} from 'src/app/controller/model/TypeVehicule.model';
import {TypeVehiculeService} from 'src/app/controller/service/TypeVehicule.service';
@Component({
  selector: 'app-vehicule-edit-gestionnaire',
  templateUrl: './vehicule-edit-gestionnaire.component.html',
  styleUrls: ['./vehicule-edit-gestionnaire.component.css']
})
export class VehiculeEditGestionnaireComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

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

    _validCarburantLibelle = true;
    _validTypeVehiculeLibelle = true;
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
    _validMarqueLibelle = true;



constructor(private datePipe: DatePipe, private vehiculeService: VehiculeService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private contratService: ContratService
,       private clientService: ClientService
,       private marqueService: MarqueService
,       private carburantService: CarburantService
,       private typeVehiculeService: TypeVehiculeService
) {

}


// methods
ngOnInit(): void {

    this.selectedCarburant = new CarburantVo();
    this.carburantService.findAll().subscribe((data) => this.carburants = data);
    this.selectedTypeVehicule = new TypeVehiculeVo();
    this.typeVehiculeService.findAll().subscribe((data) => this.typeVehicules = data);
    this.selectedClient = new ClientVo();
    this.clientService.findAll().subscribe((data) => this.clients = data);
    this.selectedContrat = new ContratVo();
    this.contratService.findAll().subscribe((data) => this.contrats = data);
    this.selectedMarque = new MarqueVo();
    this.marqueService.findAll().subscribe((data) => this.marques = data);
}




private setValidation(value : boolean){
    this.validVehiculeReference = value;
    this.validVehiculeCodeVerification = value;
    this.validVehiculeMatricule = value;
    this.validVehiculeCylindree = value;
    this.validVehiculeVersion = value;
    this.validVehiculePoidsEncharge = value;
    this.validVehiculeNombrePlaces = value;
    this.validVehiculePuissanceFiscale = value;
    this.validVehiculeCarburant = value;
    this.validVehiculeClient = value;
    this.validVehiculeContrat = value;
    this.validVehiculeMarque = value;
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
     this.vehiculeService.edit().subscribe(vehicule=>{
     const myIndex = this.vehicules.findIndex(e => e.id === this.selectedVehicule.id);
     this.vehicules[myIndex] = this.selectedVehicule;
     this.editVehiculeDialog = false;
     this.submitted = false;
     this.selectedVehicule = new VehiculeVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateVehiculeReference();
this.validateVehiculeCodeVerification();
this.validateVehiculeMatricule();
this.validateVehiculeCylindree();
this.validateVehiculeVersion();
this.validateVehiculePoidsEncharge();
this.validateVehiculeNombrePlaces();
this.validateVehiculePuissanceFiscale();
this.validateVehiculeCarburant();
this.validateVehiculeClient();
this.validateVehiculeContrat();
this.validateVehiculeMarque();

    }

private validateVehiculeReference(){
        if (this.stringUtilService.isEmpty(this.selectedVehicule.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validVehiculeReference = false;
        } else {
            this.validVehiculeReference = true;
        }
    }
private validateVehiculeCodeVerification(){
        if (this.stringUtilService.isEmpty(this.selectedVehicule.codeVerification)) {
            this.errorMessages.push('Code verification non valide');
            this.validVehiculeCodeVerification = false;
        } else {
            this.validVehiculeCodeVerification = true;
        }
    }
private validateVehiculeMatricule(){
        if (this.stringUtilService.isEmpty(this.selectedVehicule.matricule)) {
            this.errorMessages.push('Matricule non valide');
            this.validVehiculeMatricule = false;
        } else {
            this.validVehiculeMatricule = true;
        }
    }
private validateVehiculeCylindree(){
        if (this.stringUtilService.isEmpty(this.selectedVehicule.cylindree)) {
            this.errorMessages.push('Cylindree non valide');
            this.validVehiculeCylindree = false;
        } else {
            this.validVehiculeCylindree = true;
        }
    }
private validateVehiculeVersion(){
        if (this.stringUtilService.isEmpty(this.selectedVehicule.version)) {
            this.errorMessages.push('Version non valide');
            this.validVehiculeVersion = false;
        } else {
            this.validVehiculeVersion = true;
        }
    }
private validateVehiculePoidsEncharge(){
        if (this.stringUtilService.isEmpty(this.selectedVehicule.poidsEncharge)) {
            this.errorMessages.push('Poids encharge non valide');
            this.validVehiculePoidsEncharge = false;
        } else {
            this.validVehiculePoidsEncharge = true;
        }
    }
private validateVehiculeNombrePlaces(){
        if (this.stringUtilService.isEmpty(this.selectedVehicule.nombrePlaces)) {
            this.errorMessages.push('Nombre places non valide');
            this.validVehiculeNombrePlaces = false;
        } else {
            this.validVehiculeNombrePlaces = true;
        }
    }
private validateVehiculePuissanceFiscale(){
        if (this.stringUtilService.isEmpty(this.selectedVehicule.puissanceFiscale)) {
            this.errorMessages.push('Puissance fiscale non valide');
            this.validVehiculePuissanceFiscale = false;
        } else {
            this.validVehiculePuissanceFiscale = true;
        }
    }
private validateVehiculeCarburant(){
        if (this.stringUtilService.isEmpty(this.selectedVehicule.carburantVo)) {
            this.errorMessages.push('Carburant non valide');
            this.validVehiculeCarburant = false;
        } else {
            this.validVehiculeCarburant = true;
        }
    }
private validateVehiculeClient(){
        if (this.stringUtilService.isEmpty(this.selectedVehicule.clientVo)) {
            this.errorMessages.push('Client non valide');
            this.validVehiculeClient = false;
        } else {
            this.validVehiculeClient = true;
        }
    }
private validateVehiculeContrat(){
        if (this.stringUtilService.isEmpty(this.selectedVehicule.contratVo)) {
            this.errorMessages.push('Contrat non valide');
            this.validVehiculeContrat = false;
        } else {
            this.validVehiculeContrat = true;
        }
    }
private validateVehiculeMarque(){
        if (this.stringUtilService.isEmpty(this.selectedVehicule.marqueVo)) {
            this.errorMessages.push('Marque non valide');
            this.validVehiculeMarque = false;
        } else {
            this.validVehiculeMarque = true;
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
      public async openCreateMarque(marque: string) {
        const isPermistted = await this.roleService.isPermitted('Marque', 'edit');
        if(isPermistted) {
         this.selectedMarque = new MarqueVo();
         this.createMarqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
      public async openCreateCarburant(carburant: string) {
        const isPermistted = await this.roleService.isPermitted('Carburant', 'edit');
        if(isPermistted) {
         this.selectedCarburant = new CarburantVo();
         this.createCarburantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
      public async openCreateTypeVehicule(typeVehicule: string) {
        const isPermistted = await this.roleService.isPermitted('TypeVehicule', 'edit');
        if(isPermistted) {
         this.selectedTypeVehicule = new TypeVehiculeVo();
         this.createTypeVehiculeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editVehiculeDialog  = false;
    this.setValidation(true);
}

// getters and setters

get vehicules(): Array<VehiculeVo> {
    return this.vehiculeService.vehicules;
       }
set vehicules(value: Array<VehiculeVo>) {
        this.vehiculeService.vehicules = value;
       }

 get selectedVehicule(): VehiculeVo {
           return this.vehiculeService.selectedVehicule;
       }
    set selectedVehicule(value: VehiculeVo) {
        this.vehiculeService.selectedVehicule = value;
       }

   get editVehiculeDialog(): boolean {
           return this.vehiculeService.createVehiculeDialog;

       }
    set editVehiculeDialog(value: boolean) {
        this.vehiculeService.createVehiculeDialog= value;
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
       get selectedMarque(): MarqueVo {
           return this.marqueService.selectedMarque;
       }
      set selectedMarque(value: MarqueVo) {
        this.marqueService.selectedMarque = value;
       }
       get marques(): Array<MarqueVo> {
           return this.marqueService.marques;
       }
       set marques(value: Array<MarqueVo>) {
        this.marqueService.marques = value;
       }
       get createMarqueDialog(): boolean {
           return this.marqueService.createMarqueDialog;
       }
      set createMarqueDialog(value: boolean) {
        this.marqueService.createMarqueDialog= value;
       }
       get selectedCarburant(): CarburantVo {
           return this.carburantService.selectedCarburant;
       }
      set selectedCarburant(value: CarburantVo) {
        this.carburantService.selectedCarburant = value;
       }
       get carburants(): Array<CarburantVo> {
           return this.carburantService.carburants;
       }
       set carburants(value: Array<CarburantVo>) {
        this.carburantService.carburants = value;
       }
       get createCarburantDialog(): boolean {
           return this.carburantService.createCarburantDialog;
       }
      set createCarburantDialog(value: boolean) {
        this.carburantService.createCarburantDialog= value;
       }
       get selectedTypeVehicule(): TypeVehiculeVo {
           return this.typeVehiculeService.selectedTypeVehicule;
       }
      set selectedTypeVehicule(value: TypeVehiculeVo) {
        this.typeVehiculeService.selectedTypeVehicule = value;
       }
       get typeVehicules(): Array<TypeVehiculeVo> {
           return this.typeVehiculeService.typeVehicules;
       }
       set typeVehicules(value: Array<TypeVehiculeVo>) {
        this.typeVehiculeService.typeVehicules = value;
       }
       get createTypeVehiculeDialog(): boolean {
           return this.typeVehiculeService.createTypeVehiculeDialog;
       }
      set createTypeVehiculeDialog(value: boolean) {
        this.typeVehiculeService.createTypeVehiculeDialog= value;
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

    get validCarburantLibelle(): boolean {
    return this._validCarburantLibelle;
    }

    set validCarburantLibelle(value: boolean) {
    this._validCarburantLibelle = value;
    }
    get validTypeVehiculeLibelle(): boolean {
    return this._validTypeVehiculeLibelle;
    }

    set validTypeVehiculeLibelle(value: boolean) {
    this._validTypeVehiculeLibelle = value;
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
    get validMarqueLibelle(): boolean {
    return this._validMarqueLibelle;
    }

    set validMarqueLibelle(value: boolean) {
    this._validMarqueLibelle = value;
    }
}
