import {Component, OnInit, Input} from '@angular/core';
import {ClientService} from 'src/app/controller/service/Client.service';
import {ClientVo} from 'src/app/controller/model/Client.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {VehiculeVo} from 'src/app/controller/model/Vehicule.model';
import {VehiculeService} from 'src/app/controller/service/Vehicule.service';
import {QuittancePrimeVo} from 'src/app/controller/model/QuittancePrime.model';
import {QuittancePrimeService} from 'src/app/controller/service/QuittancePrime.service';
import {ContratGarantieVo} from 'src/app/controller/model/ContratGarantie.model';
import {ContratGarantieService} from 'src/app/controller/service/ContratGarantie.service';
import {NatureContratVo} from 'src/app/controller/model/NatureContrat.model';
import {NatureContratService} from 'src/app/controller/service/NatureContrat.service';
import {ClientSininstreVo} from 'src/app/controller/model/ClientSininstre.model';
import {ClientSininstreService} from 'src/app/controller/service/ClientSininstre.service';
import {CarburantVo} from 'src/app/controller/model/Carburant.model';
import {CarburantService} from 'src/app/controller/service/Carburant.service';
import {SinistreVo} from 'src/app/controller/model/Sinistre.model';
import {SinistreService} from 'src/app/controller/service/Sinistre.service';
import {GarantieVo} from 'src/app/controller/model/Garantie.model';
import {GarantieService} from 'src/app/controller/service/Garantie.service';
import {TypeClientVo} from 'src/app/controller/model/TypeClient.model';
import {TypeClientService} from 'src/app/controller/service/TypeClient.service';
import {MarqueVo} from 'src/app/controller/model/Marque.model';
import {MarqueService} from 'src/app/controller/service/Marque.service';
import {QuittanceIndemniserVo} from 'src/app/controller/model/QuittanceIndemniser.model';
import {QuittanceIndemniserService} from 'src/app/controller/service/QuittanceIndemniser.service';
import {ContratVo} from 'src/app/controller/model/Contrat.model';
import {ContratService} from 'src/app/controller/service/Contrat.service';
import {TypeVehiculeVo} from 'src/app/controller/model/TypeVehicule.model';
import {TypeVehiculeService} from 'src/app/controller/service/TypeVehicule.service';
@Component({
  selector: 'app-client-create-admin',
  templateUrl: './client-create-admin.component.html',
  styleUrls: ['./client-create-admin.component.css']
})
export class ClientCreateAdminComponent implements OnInit {

        selectedClientSininstres: ClientSininstreVo = new ClientSininstreVo();
        // selectedVehicule: VehiculeVo = new VehiculeVo();
        // selectedContrat: ContratVo = new ContratVo();
    _submitted = false;
    private _errorMessages = new Array<string>();

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

    _validTypeClientLibelle = true;
    _validClientSininstreRef = true;
    _validClientSininstreDateSinistre = true;
    _validClientSininstreMontantExpertise = true;
    _validClientSininstreMontantIndemniser = true;
    _validClientSininstreObservation = true;
    _validClientSininstreClient = true;
    _validClientSininstreSinistre = true;
    _validClientSininstreQuittanceIndemniser = true;
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

       private _contratGarantiesVo: Array<ContratGarantieVo> = [];


constructor(private datePipe: DatePipe, private clientService: ClientService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private contratService: ContratService
,       private natureContratService: NatureContratService
,       private garantieService: GarantieService
,       private clientSininstreService: ClientSininstreService
,       private vehiculeService: VehiculeService
,       private quittancePrimeService: QuittancePrimeService
,       private typeClientService: TypeClientService
,       private marqueService: MarqueService
,       private quittanceIndemniserService: QuittanceIndemniserService
,       private carburantService: CarburantService
,       private typeVehiculeService: TypeVehiculeService
,       private sinistreService: SinistreService
) {

}



ngOnInit(): void {


                this.selectedClientSininstres.sinistreVo = new SinistreVo();
                this.sinistreService.findAll().subscribe((data) => this.sinistres = data);
                this.selectedClientSininstres.quittanceIndemniserVo = new QuittanceIndemniserVo();
                this.quittanceIndemniserService.findAll().subscribe((data) => this.quittanceIndemnisers = data);



                this.selectedVehicule.carburantVo = new CarburantVo();
                this.carburantService.findAll().subscribe((data) => this.carburants = data);
                this.selectedVehicule.typeVehiculeVo = new TypeVehiculeVo();
                this.typeVehiculeService.findAll().subscribe((data) => this.typeVehicules = data);
                this.selectedVehicule.contratVo = new ContratVo();
                this.contratService.findAll().subscribe((data) => this.contrats = data);
                this.selectedVehicule.marqueVo = new MarqueVo();
                this.marqueService.findAll().subscribe((data) => this.marques = data);



                this.selectedContrat.quittancePrimeVo = new QuittancePrimeVo();
                this.quittancePrimeService.findAll().subscribe((data) => this.quittancePrimes = data);
                this.selectedContrat.natureContratVo = new NatureContratVo();
                this.natureContratService.findAll().subscribe((data) => this.natureContrats = data);
                this.selectedContrat.vehiculeVo = new VehiculeVo();
                this.vehiculeService.findAll().subscribe((data) => this.vehicules = data);

                this.garantieService.findAll().subscribe(data => this.prepareContratGaranties(data));

    this.selectedTypeClient = new TypeClientVo();
    this.typeClientService.findAll().subscribe((data) => this.typeClients = data);
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

    validateClientSininstres(){
    this.errorMessages = new Array();
    this.validateClientSininstresRef();
    this.validateClientSininstresDateSinistre();
    this.validateClientSininstresMontantExpertise();
    this.validateClientSininstresMontantIndemniser();
    this.validateClientSininstresObservation();
    this.validateClientSininstresClient();
    this.validateClientSininstresSinistre();
    this.validateClientSininstresQuittanceIndemniser();
    }
    validateVehicule(){
    this.errorMessages = new Array();
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
    validateContrat(){
    this.errorMessages = new Array();
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


private setValidation(value: boolean){
    this.validClientReference = value;
    this.validClientCin = value;
    this.validClientNom = value;
    this.validClientPrenom = value;
    this.validClientActivite = value;
    this.validClientAdresse = value;
    this.validClientDatedeNaissance = value;
    this.validClientNumTelephone = value;
    this.validClientTypeClient = value;
    this.validClientClientSininstres = value;
    this.validClientSininstresRef = value;
    this.validClientSininstresDateSinistre = value;
    this.validClientSininstresMontantExpertise = value;
    this.validClientSininstresMontantIndemniser = value;
    this.validClientSininstresObservation = value;
    this.validClientSininstresClient = value;
    this.validClientSininstresSinistre = value;
    this.validClientSininstresQuittanceIndemniser = value;
    this.validClientVehicule = value;
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
    this.validClientContrat = value;
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

        addClientSininstres() {
        if( this.selectedClient.clientSininstresVo == null ){
            this.selectedClient.clientSininstresVo = new Array<ClientSininstreVo>();
        }
       this.validateClientSininstres();
       if (this.errorMessages.length === 0) {
              this.selectedClient.clientSininstresVo.push(this.selectedClientSininstres);
              this.selectedClientSininstres = new ClientSininstreVo();
           }else{
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages
            });
        }
       }

        deleteClientSininstres(p: ClientSininstreVo) {
        this.selectedClient.clientSininstresVo.forEach((element, index) => {
            if (element === p) { this.selectedClient.clientSininstresVo.splice(index, 1); }
        });
    }
        addVehicule() {
        if( this.selectedClient.vehiculeVo == null ){
            this.selectedClient.vehiculeVo = new Array<VehiculeVo>();
        }
       this.validateVehicule();
       if (this.errorMessages.length === 0) {
              this.selectedClient.vehiculeVo.push(this.selectedVehicule);
              this.selectedVehicule = new VehiculeVo();
           }else{
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages
            });
        }
       }

        deleteVehicule(p: VehiculeVo) {
        this.selectedClient.vehiculeVo.forEach((element, index) => {
            if (element === p) { this.selectedClient.vehiculeVo.splice(index, 1); }
        });
    }
        addContrat() {
        if( this.selectedClient.contratVo == null ){
            this.selectedClient.contratVo = new Array<ContratVo>();
        }
       this.validateContrat();
       if (this.errorMessages.length === 0) {
              this.selectedClient.contratVo.push(this.selectedContrat);
              this.selectedContrat = new ContratVo();
           }else{
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages
            });
        }
       }

        deleteContrat(p: ContratVo) {
        this.selectedClient.contratVo.forEach((element, index) => {
            if (element === p) { this.selectedClient.contratVo.splice(index, 1); }
        });
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
     this.clientService.save().subscribe(client=>{
       this.clients.push({...client});
       this.createClientDialog = false;
       this.submitted = false;
       this.selectedClient = new ClientVo();


    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateClientReference();
this.validateClientCin();
this.validateClientNom();
// this.validateClientPrenom();
// this.validateClientActivite();
// this.validateClientAdresse();
// this.validateClientDatedeNaissance();
// this.validateClientNumTelephone();
// this.validateClientTypeClient();
// this.validateClientClientSininstres();
// this.validateClientVehicule();
// this.validateClientContrat();

    }

private validateClientReference(){
        if (this.stringUtilService.isEmpty(this.selectedClient.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validClientReference = false;
        } else {
            this.validClientReference = true;
        }
    }
private validateClientCin(){
        if (this.stringUtilService.isEmpty(this.selectedClient.cin)) {
            this.errorMessages.push('Cin non valide');
            this.validClientCin = false;
        } else {
            this.validClientCin = true;
        }
    }
private validateClientNom(){
        if (this.stringUtilService.isEmpty(this.selectedClient.nom)) {
            this.errorMessages.push('Nom non valide');
            this.validClientNom = false;
        } else {
            this.validClientNom = true;
        }
    }
private validateClientPrenom(){
        if (this.stringUtilService.isEmpty(this.selectedClient.prenom)) {
            this.errorMessages.push('Prenom non valide');
            this.validClientPrenom = false;
        } else {
            this.validClientPrenom = true;
        }
    }
private validateClientActivite(){
        if (this.stringUtilService.isEmpty(this.selectedClient.activite)) {
            this.errorMessages.push('Activite non valide');
            this.validClientActivite = false;
        } else {
            this.validClientActivite = true;
        }
    }
private validateClientAdresse(){
        if (this.stringUtilService.isEmpty(this.selectedClient.adresse)) {
            this.errorMessages.push('Adresse non valide');
            this.validClientAdresse = false;
        } else {
            this.validClientAdresse = true;
        }
    }
private validateClientDatedeNaissance(){
        if (this.stringUtilService.isEmpty(this.selectedClient.datedeNaissance)) {
            this.errorMessages.push('Datede naissance non valide');
            this.validClientDatedeNaissance = false;
        } else {
            this.validClientDatedeNaissance = true;
        }
    }
private validateClientNumTelephone(){
        if (this.stringUtilService.isEmpty(this.selectedClient.numTelephone)) {
            this.errorMessages.push('Num telephone non valide');
            this.validClientNumTelephone = false;
        } else {
            this.validClientNumTelephone = true;
        }
    }
private validateClientTypeClient(){
        if (this.stringUtilService.isEmpty(this.selectedClient.typeClientVo)) {
            this.errorMessages.push('Type client non valide');
            this.validClientTypeClient = false;
        } else {
            this.validClientTypeClient = true;
        }
    }
private validateClientClientSininstres(){
        if (this.stringUtilService.isEmpty(this.selectedClient.clientSininstresVo)) {
            this.errorMessages.push('Client sininstres non valide');
            this.validClientClientSininstres = false;
        } else {
            this.validClientClientSininstres = true;
        }
    }
private validateClientVehicule(){
        if (this.stringUtilService.isEmpty(this.selectedClient.vehiculeVo)) {
            this.errorMessages.push('Vehicule non valide');
            this.validClientVehicule = false;
        } else {
            this.validClientVehicule = true;
        }
    }
private validateClientContrat(){
        if (this.stringUtilService.isEmpty(this.selectedClient.contratVo)) {
            this.errorMessages.push('Contrat non valide');
            this.validClientContrat = false;
        } else {
            this.validClientContrat = true;
        }
    }














            private validateClientSininstresRef(){
            if (this.selectedClientSininstres.ref == null) {
            this.errorMessages.push('Ref de la clientSininstre est  invalide');
                this.validClientSininstresRef = false;
            } else {
                this.validClientSininstresRef = true;
            }
            }


            private validateClientSininstresDateSinistre(){
            if (this.selectedClientSininstres.dateSinistre == null) {
            this.errorMessages.push('DateSinistre de la clientSininstre est  invalide');
                this.validClientSininstresDateSinistre = false;
            } else {
                this.validClientSininstresDateSinistre = true;
            }
            }




            private validateClientSininstresMontantExpertise(){
            if (this.selectedClientSininstres.montantExpertise == null) {
            this.errorMessages.push('MontantExpertise de la clientSininstre est  invalide');
            this.validClientSininstresMontantExpertise = false;
            } else {
                this.validClientSininstresMontantExpertise = true;
            }
            }

            private validateClientSininstresMontantIndemniser(){
            if (this.selectedClientSininstres.montantIndemniser == null) {
            this.errorMessages.push('MontantIndemniser de la clientSininstre est  invalide');
                this.validClientSininstresMontantIndemniser = false;
            } else {
                this.validClientSininstresMontantIndemniser = true;
            }
            }

            private validateClientSininstresObservation(){
            if (this.selectedClientSininstres.observation == null) {
            this.errorMessages.push('Observation de la clientSininstre est  invalide');
                this.validClientSininstresObservation = false;
            } else {
                this.validClientSininstresObservation = true;
            }
            }

            private validateClientSininstresClient(){
            if (this.selectedClientSininstres.clientVo == null) {
            this.errorMessages.push('Client de la clientSininstre est  invalide');
                this.validClientSininstresClient = false;
            } else {
                this.validClientSininstresClient = true;
            }
            }

            private validateClientSininstresSinistre(){
            if (this.selectedClientSininstres.sinistreVo == null) {
            this.errorMessages.push('Sinistre de la clientSininstre est  invalide');
                this.validClientSininstresSinistre = false;
            } else {
                this.validClientSininstresSinistre = true;
            }
            }

            private validateClientSininstresQuittanceIndemniser(){
            if (this.selectedClientSininstres.quittanceIndemniserVo == null) {
            this.errorMessages.push('QuittanceIndemniser de la clientSininstre est  invalide');
                this.validClientSininstresQuittanceIndemniser = false;
            } else {
                this.validClientSininstresQuittanceIndemniser = true;
            }
            }




            private validateVehiculeReference(){
            if (this.selectedVehicule.reference == null) {
            this.errorMessages.push('Reference de la vehicule est  invalide');
                this.validVehiculeReference = false;
            } else {
                this.validVehiculeReference = true;
            }
            }

            private validateVehiculeCodeVerification(){
            if (this.selectedVehicule.codeVerification == null) {
            this.errorMessages.push('CodeVerification de la vehicule est  invalide');
                this.validVehiculeCodeVerification = false;
            } else {
                this.validVehiculeCodeVerification = true;
            }
            }

            private validateVehiculeMatricule(){
            if (this.selectedVehicule.matricule == null) {
            this.errorMessages.push('Matricule de la vehicule est  invalide');
                this.validVehiculeMatricule = false;
            } else {
                this.validVehiculeMatricule = true;
            }
            }

            private validateVehiculeCylindree(){
            if (this.selectedVehicule.cylindree == null) {
            this.errorMessages.push('Cylindree de la vehicule est  invalide');
                this.validVehiculeCylindree = false;
            } else {
                this.validVehiculeCylindree = true;
            }
            }

            private validateVehiculeVersion(){
            if (this.selectedVehicule.version == null) {
            this.errorMessages.push('Version de la vehicule est  invalide');
                this.validVehiculeVersion = false;
            } else {
                this.validVehiculeVersion = true;
            }
            }

            private validateVehiculePoidsEncharge(){
            if (this.selectedVehicule.poidsEncharge == null) {
            this.errorMessages.push('PoidsEncharge de la vehicule est  invalide');
                this.validVehiculePoidsEncharge = false;
            } else {
                this.validVehiculePoidsEncharge = true;
            }
            }

            private validateVehiculeNombrePlaces(){
            if (this.selectedVehicule.nombrePlaces == null) {
            this.errorMessages.push('NombrePlaces de la vehicule est  invalide');
                this.validVehiculeNombrePlaces = false;
            } else {
                this.validVehiculeNombrePlaces = true;
            }
            }

            private validateVehiculePuissanceFiscale(){
            if (this.selectedVehicule.puissanceFiscale == null) {
            this.errorMessages.push('PuissanceFiscale de la vehicule est  invalide');
                this.validVehiculePuissanceFiscale = false;
            } else {
                this.validVehiculePuissanceFiscale = true;
            }
            }

            private validateVehiculeCarburant(){
            if (this.selectedVehicule.carburantVo == null) {
            this.errorMessages.push('Carburant de la vehicule est  invalide');
                this.validVehiculeCarburant = false;
            } else {
                this.validVehiculeCarburant = true;
            }
            }


            private validateVehiculeClient(){
            if (this.selectedVehicule.clientVo == null) {
            this.errorMessages.push('Client de la vehicule est  invalide');
                this.validVehiculeClient = false;
            } else {
                this.validVehiculeClient = true;
            }
            }

            private validateVehiculeContrat(){
            if (this.selectedVehicule.contratVo == null) {
            this.errorMessages.push('Contrat de la vehicule est  invalide');
                this.validVehiculeContrat = false;
            } else {
                this.validVehiculeContrat = true;
            }
            }

            private validateVehiculeMarque(){
            if (this.selectedVehicule.marqueVo == null) {
            this.errorMessages.push('Marque de la vehicule est  invalide');
                this.validVehiculeMarque = false;
            } else {
                this.validVehiculeMarque = true;
            }
            }




            private validateContratNumPolice(){
            if (this.selectedContrat.numPolice == null) {
            this.errorMessages.push('NumPolice de la contrat est  invalide');
                this.validContratNumPolice = false;
            } else {
                this.validContratNumPolice = true;
            }
            }

            private validateContratNumAttestation(){
            if (this.selectedContrat.numAttestation == null) {
            this.errorMessages.push('NumAttestation de la contrat est  invalide');
                this.validContratNumAttestation = false;
            } else {
                this.validContratNumAttestation = true;
            }
            }

            private validateContratDateEffet(){
            if (this.selectedContrat.dateEffet == null) {
            this.errorMessages.push('DateEffet de la contrat est  invalide');
                this.validContratDateEffet = false;
            } else {
                this.validContratDateEffet = true;
            }
            }

            private validateContratDateEcheance(){
            if (this.selectedContrat.dateEcheance == null) {
            this.errorMessages.push('DateEcheance de la contrat est  invalide');
                this.validContratDateEcheance = false;
            } else {
                this.validContratDateEcheance = true;
            }
            }

            private validateContratDateSignature(){
            if (this.selectedContrat.dateSignature == null) {
            this.errorMessages.push('DateSignature de la contrat est  invalide');
                this.validContratDateSignature = false;
            } else {
                this.validContratDateSignature = true;
            }
            }

            private validateContratPeriode(){
            if (this.selectedContrat.periode == null) {
            this.errorMessages.push('Periode de la contrat est  invalide');
                this.validContratPeriode = false;
            } else {
                this.validContratPeriode = true;
            }
            }

            private validateContratQuittancePrime(){
            if (this.selectedContrat.quittancePrimeVo == null) {
            this.errorMessages.push('QuittancePrime de la contrat est  invalide');
                this.validContratQuittancePrime = false;
            } else {
                this.validContratQuittancePrime = true;
            }
            }

            private validateContratNatureContrat(){
            if (this.selectedContrat.natureContratVo == null) {
            this.errorMessages.push('NatureContrat de la contrat est  invalide');
                this.validContratNatureContrat = false;
            } else {
                this.validContratNatureContrat = true;
            }
            }

            private validateContratVehicule(){
            if (this.selectedContrat.vehiculeVo == null) {
            this.errorMessages.push('Vehicule de la contrat est  invalide');
                this.validContratVehicule = false;
            } else {
                this.validContratVehicule = true;
            }
            }


            private validateContratContratGaranties(){
            if (this.selectedContrat.contratGarantiesVo == null || this.selectedContrat.contratGarantiesVo.length === 0) {
            this.errorMessages.push('ContratGaranties de la contrat est  invalide');
                this.validContratContratGaranties = false;
            } else {
                this.validContratContratGaranties = true;
            }
            }



       public async openCreateSinistre(sinistre: string) {
          const isPermistted = await this.roleService.isPermitted('Sinistre', 'add');
           if(isPermistted) {
         this.selectedSinistre = new SinistreVo();
         this.createSinistreDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
       public async openCreateTypeClient(typeClient: string) {
          const isPermistted = await this.roleService.isPermitted('TypeClient', 'add');
         if(isPermistted) {
         this.selectedTypeClient = new TypeClientVo();
         this.createTypeClientDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
       public async openCreateQuittanceIndemniser(quittanceIndemniser: string) {
          const isPermistted = await this.roleService.isPermitted('QuittanceIndemniser', 'add');
         if(isPermistted) {
         this.selectedQuittanceIndemniser = new QuittanceIndemniserVo();
         this.createQuittanceIndemniserDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
       public async openCreateContrat(contrat: string) {
          const isPermistted = await this.roleService.isPermitted('Contrat', 'add');
         if(isPermistted) {
         this.selectedContrat = new ContratVo();
         this.createContratDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
       public async openCreateQuittancePrime(quittancePrime: string) {
          const isPermistted = await this.roleService.isPermitted('QuittancePrime', 'add');
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
          const isPermistted = await this.roleService.isPermitted('NatureContrat', 'add');
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
          const isPermistted = await this.roleService.isPermitted('Vehicule', 'add');
         if(isPermistted) {
         this.selectedVehicule = new VehiculeVo();
         this.createVehiculeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
       public async openCreateMarque(marque: string) {
          const isPermistted = await this.roleService.isPermitted('Marque', 'add');
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
          const isPermistted = await this.roleService.isPermitted('Carburant', 'add');
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
          const isPermistted = await this.roleService.isPermitted('TypeVehicule', 'add');
         if(isPermistted) {
         this.selectedTypeVehicule = new TypeVehiculeVo();
         this.createTypeVehiculeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}

hideCreateDialog(){
    this.createClientDialog  = false;
    this.setValidation(true);
}

get clients(): Array<ClientVo> {
    return this.clientService.clients;
       }
set clients(value: Array<ClientVo>) {
        this.clientService.clients = value;
       }

 get selectedClient(): ClientVo {
           return this.clientService.selectedClient;
       }
    set selectedClient(value: ClientVo) {
        this.clientService.selectedClient = value;
       }

   get createClientDialog(): boolean {
           return this.clientService.createClientDialog;

       }
    set createClientDialog(value: boolean) {
        this.clientService.createClientDialog= value;
       }

       get selectedSinistre(): SinistreVo {
           return this.sinistreService.selectedSinistre;
       }
      set selectedSinistre(value: SinistreVo) {
        this.sinistreService.selectedSinistre = value;
       }
       get sinistres(): Array<SinistreVo> {
           return this.sinistreService.sinistres;
       }
       set sinistres(value: Array<SinistreVo>) {
        this.sinistreService.sinistres = value;
       }
       get createSinistreDialog(): boolean {
           return this.sinistreService.createSinistreDialog;
       }
      set createSinistreDialog(value: boolean) {
        this.sinistreService.createSinistreDialog= value;
       }
       get selectedTypeClient(): TypeClientVo {
           return this.typeClientService.selectedTypeClient;
       }
      set selectedTypeClient(value: TypeClientVo) {
        this.typeClientService.selectedTypeClient = value;
       }
       get typeClients(): Array<TypeClientVo> {
           return this.typeClientService.typeClients;
       }
       set typeClients(value: Array<TypeClientVo>) {
        this.typeClientService.typeClients = value;
       }
       get createTypeClientDialog(): boolean {
           return this.typeClientService.createTypeClientDialog;
       }
      set createTypeClientDialog(value: boolean) {
        this.typeClientService.createTypeClientDialog= value;
       }
       get selectedQuittanceIndemniser(): QuittanceIndemniserVo {
           return this.quittanceIndemniserService.selectedQuittanceIndemniser;
       }
      set selectedQuittanceIndemniser(value: QuittanceIndemniserVo) {
        this.quittanceIndemniserService.selectedQuittanceIndemniser = value;
       }
       get quittanceIndemnisers(): Array<QuittanceIndemniserVo> {
           return this.quittanceIndemniserService.quittanceIndemnisers;
       }
       set quittanceIndemnisers(value: Array<QuittanceIndemniserVo>) {
        this.quittanceIndemniserService.quittanceIndemnisers = value;
       }
       get createQuittanceIndemniserDialog(): boolean {
           return this.quittanceIndemniserService.createQuittanceIndemniserDialog;
       }
      set createQuittanceIndemniserDialog(value: boolean) {
        this.quittanceIndemniserService.createQuittanceIndemniserDialog= value;
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

    get validTypeClientLibelle(): boolean {
    return this._validTypeClientLibelle;
    }

    set validTypeClientLibelle(value: boolean) {
    this._validTypeClientLibelle = value;
    }
    get validClientSininstresRef(): boolean {
    return this._validClientSininstreRef;
    }

    set validClientSininstresRef(value: boolean) {
    this._validClientSininstreRef = value;
    }
    get validClientSininstresDateSinistre(): boolean {
    return this._validClientSininstreDateSinistre;
    }

    set validClientSininstresDateSinistre(value: boolean) {
    this._validClientSininstreDateSinistre = value;
    }
    get validClientSininstresMontantExpertise(): boolean {
    return this._validClientSininstreMontantExpertise;
    }

    set validClientSininstresMontantExpertise(value: boolean) {
    this._validClientSininstreMontantExpertise = value;
    }
    get validClientSininstresMontantIndemniser(): boolean {
    return this._validClientSininstreMontantIndemniser;
    }

    set validClientSininstresMontantIndemniser(value: boolean) {
    this._validClientSininstreMontantIndemniser = value;
    }
    get validClientSininstresObservation(): boolean {
    return this._validClientSininstreObservation;
    }

    set validClientSininstresObservation(value: boolean) {
    this._validClientSininstreObservation = value;
    }
    get validClientSininstresClient(): boolean {
    return this._validClientSininstreClient;
    }

    set validClientSininstresClient(value: boolean) {
    this._validClientSininstreClient = value;
    }
    get validClientSininstresSinistre(): boolean {
    return this._validClientSininstreSinistre;
    }

    set validClientSininstresSinistre(value: boolean) {
    this._validClientSininstreSinistre = value;
    }
    get validClientSininstresQuittanceIndemniser(): boolean {
    return this._validClientSininstreQuittanceIndemniser;
    }

    set validClientSininstresQuittanceIndemniser(value: boolean) {
    this._validClientSininstreQuittanceIndemniser = value;
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
