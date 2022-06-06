import {Component, OnInit, Input} from '@angular/core';
import {ClientSininstreService} from 'src/app/controller/service/ClientSininstre.service';
import {ClientSininstreVo} from 'src/app/controller/model/ClientSininstre.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {ClientVo} from 'src/app/controller/model/Client.model';
import {ClientService} from 'src/app/controller/service/Client.service';
import {QuittanceIndemniserVo} from 'src/app/controller/model/QuittanceIndemniser.model';
import {QuittanceIndemniserService} from 'src/app/controller/service/QuittanceIndemniser.service';
import {SinistreVo} from 'src/app/controller/model/Sinistre.model';
import {SinistreService} from 'src/app/controller/service/Sinistre.service';
@Component({
  selector: 'app-client-sininstre-edit-agent',
  templateUrl: './client-sininstre-edit-agent.component.html',
  styleUrls: ['./client-sininstre-edit-agent.component.css']
})
export class ClientSininstreEditAgentComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validClientSininstreRef = true;
   _validClientSininstreDateSinistre = true;
   _validClientSininstreMontantExpertise = true;
   _validClientSininstreMontantIndemniser = true;
   _validClientSininstreObservation = true;
   _validClientSininstreClient = true;
   _validClientSininstreSinistre = true;
   _validClientSininstreQuittanceIndemniser = true;

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
    _validSinistreReference = true;
    _validSinistreTypeSinistre = true;
    _validQuittanceIndemniserReference = true;
    _validQuittanceIndemniserDateReception = true;
    _validQuittanceIndemniserDateAjout = true;
    _validQuittanceIndemniserDevise = true;



constructor(private datePipe: DatePipe, private clientSininstreService: ClientSininstreService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private clientService: ClientService
,       private quittanceIndemniserService: QuittanceIndemniserService
,       private sinistreService: SinistreService
) {

}


// methods
ngOnInit(): void {

    this.selectedClient = new ClientVo();
    this.clientService.findAll().subscribe((data) => this.clients = data);
    this.selectedSinistre = new SinistreVo();
    this.sinistreService.findAll().subscribe((data) => this.sinistres = data);
    this.selectedQuittanceIndemniser = new QuittanceIndemniserVo();
    this.quittanceIndemniserService.findAll().subscribe((data) => this.quittanceIndemnisers = data);
}




private setValidation(value : boolean){
    this.validClientSininstreRef = value;
    this.validClientSininstreDateSinistre = value;
    this.validClientSininstreMontantExpertise = value;
    this.validClientSininstreMontantIndemniser = value;
    this.validClientSininstreObservation = value;
    this.validClientSininstreClient = value;
    this.validClientSininstreSinistre = value;
    this.validClientSininstreQuittanceIndemniser = value;
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
     this.clientSininstreService.edit().subscribe(clientSininstre=>{
     const myIndex = this.clientSininstres.findIndex(e => e.id === this.selectedClientSininstre.id);
     this.clientSininstres[myIndex] = this.selectedClientSininstre;
     this.editClientSininstreDialog = false;
     this.submitted = false;
     this.selectedClientSininstre = new ClientSininstreVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateClientSininstreRef();
this.validateClientSininstreDateSinistre();
this.validateClientSininstreMontantExpertise();
this.validateClientSininstreMontantIndemniser();
this.validateClientSininstreObservation();
this.validateClientSininstreClient();
this.validateClientSininstreSinistre();
this.validateClientSininstreQuittanceIndemniser();

    }

private validateClientSininstreRef(){
        if (this.stringUtilService.isEmpty(this.selectedClientSininstre.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validClientSininstreRef = false;
        } else {
            this.validClientSininstreRef = true;
        }
    }
private validateClientSininstreDateSinistre(){
        if (this.stringUtilService.isEmpty(this.selectedClientSininstre.dateSinistre)) {
            this.errorMessages.push('Date sinistre non valide');
            this.validClientSininstreDateSinistre = false;
        } else {
            this.validClientSininstreDateSinistre = true;
        }
    }
private validateClientSininstreMontantExpertise(){
        if (this.stringUtilService.isEmpty(this.selectedClientSininstre.montantExpertise)) {
            this.errorMessages.push('Montant expertise non valide');
            this.validClientSininstreMontantExpertise = false;
        } else {
            this.validClientSininstreMontantExpertise = true;
        }
    }
private validateClientSininstreMontantIndemniser(){
        if (this.stringUtilService.isEmpty(this.selectedClientSininstre.montantIndemniser)) {
            this.errorMessages.push('Montant indemniser non valide');
            this.validClientSininstreMontantIndemniser = false;
        } else {
            this.validClientSininstreMontantIndemniser = true;
        }
    }
private validateClientSininstreObservation(){
        if (this.stringUtilService.isEmpty(this.selectedClientSininstre.observation)) {
            this.errorMessages.push('Observation non valide');
            this.validClientSininstreObservation = false;
        } else {
            this.validClientSininstreObservation = true;
        }
    }
private validateClientSininstreClient(){
        if (this.stringUtilService.isEmpty(this.selectedClientSininstre.clientVo)) {
            this.errorMessages.push('Client non valide');
            this.validClientSininstreClient = false;
        } else {
            this.validClientSininstreClient = true;
        }
    }
private validateClientSininstreSinistre(){
        if (this.stringUtilService.isEmpty(this.selectedClientSininstre.sinistreVo)) {
            this.errorMessages.push('Sinistre non valide');
            this.validClientSininstreSinistre = false;
        } else {
            this.validClientSininstreSinistre = true;
        }
    }
private validateClientSininstreQuittanceIndemniser(){
        if (this.stringUtilService.isEmpty(this.selectedClientSininstre.quittanceIndemniserVo)) {
            this.errorMessages.push('Quittance indemniser non valide');
            this.validClientSininstreQuittanceIndemniser = false;
        } else {
            this.validClientSininstreQuittanceIndemniser = true;
        }
    }
















//openPopup
      public async openCreateSinistre(sinistre: string) {
        const isPermistted = await this.roleService.isPermitted('Sinistre', 'edit');
        if(isPermistted) {
         this.selectedSinistre = new SinistreVo();
         this.createSinistreDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
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
      public async openCreateQuittanceIndemniser(quittanceIndemniser: string) {
        const isPermistted = await this.roleService.isPermitted('QuittanceIndemniser', 'edit');
        if(isPermistted) {
         this.selectedQuittanceIndemniser = new QuittanceIndemniserVo();
         this.createQuittanceIndemniserDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editClientSininstreDialog  = false;
    this.setValidation(true);
}

// getters and setters

get clientSininstres(): Array<ClientSininstreVo> {
    return this.clientSininstreService.clientSininstres;
       }
set clientSininstres(value: Array<ClientSininstreVo>) {
        this.clientSininstreService.clientSininstres = value;
       }

 get selectedClientSininstre(): ClientSininstreVo {
           return this.clientSininstreService.selectedClientSininstre;
       }
    set selectedClientSininstre(value: ClientSininstreVo) {
        this.clientSininstreService.selectedClientSininstre = value;
       }

   get editClientSininstreDialog(): boolean {
           return this.clientSininstreService.createClientSininstreDialog;

       }
    set editClientSininstreDialog(value: boolean) {
        this.clientSininstreService.createClientSininstreDialog= value;
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

    get validClientSininstreRef(): boolean {
    return this._validClientSininstreRef;
    }

    set validClientSininstreRef(value: boolean) {
    this._validClientSininstreRef = value;
    }
    get validClientSininstreDateSinistre(): boolean {
    return this._validClientSininstreDateSinistre;
    }

    set validClientSininstreDateSinistre(value: boolean) {
    this._validClientSininstreDateSinistre = value;
    }
    get validClientSininstreMontantExpertise(): boolean {
    return this._validClientSininstreMontantExpertise;
    }

    set validClientSininstreMontantExpertise(value: boolean) {
    this._validClientSininstreMontantExpertise = value;
    }
    get validClientSininstreMontantIndemniser(): boolean {
    return this._validClientSininstreMontantIndemniser;
    }

    set validClientSininstreMontantIndemniser(value: boolean) {
    this._validClientSininstreMontantIndemniser = value;
    }
    get validClientSininstreObservation(): boolean {
    return this._validClientSininstreObservation;
    }

    set validClientSininstreObservation(value: boolean) {
    this._validClientSininstreObservation = value;
    }
    get validClientSininstreClient(): boolean {
    return this._validClientSininstreClient;
    }

    set validClientSininstreClient(value: boolean) {
    this._validClientSininstreClient = value;
    }
    get validClientSininstreSinistre(): boolean {
    return this._validClientSininstreSinistre;
    }

    set validClientSininstreSinistre(value: boolean) {
    this._validClientSininstreSinistre = value;
    }
    get validClientSininstreQuittanceIndemniser(): boolean {
    return this._validClientSininstreQuittanceIndemniser;
    }

    set validClientSininstreQuittanceIndemniser(value: boolean) {
    this._validClientSininstreQuittanceIndemniser = value;
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
    get validSinistreReference(): boolean {
    return this._validSinistreReference;
    }

    set validSinistreReference(value: boolean) {
    this._validSinistreReference = value;
    }
    get validSinistreTypeSinistre(): boolean {
    return this._validSinistreTypeSinistre;
    }

    set validSinistreTypeSinistre(value: boolean) {
    this._validSinistreTypeSinistre = value;
    }
    get validQuittanceIndemniserReference(): boolean {
    return this._validQuittanceIndemniserReference;
    }

    set validQuittanceIndemniserReference(value: boolean) {
    this._validQuittanceIndemniserReference = value;
    }
    get validQuittanceIndemniserDateReception(): boolean {
    return this._validQuittanceIndemniserDateReception;
    }

    set validQuittanceIndemniserDateReception(value: boolean) {
    this._validQuittanceIndemniserDateReception = value;
    }
    get validQuittanceIndemniserDateAjout(): boolean {
    return this._validQuittanceIndemniserDateAjout;
    }

    set validQuittanceIndemniserDateAjout(value: boolean) {
    this._validQuittanceIndemniserDateAjout = value;
    }
    get validQuittanceIndemniserDevise(): boolean {
    return this._validQuittanceIndemniserDevise;
    }

    set validQuittanceIndemniserDevise(value: boolean) {
    this._validQuittanceIndemniserDevise = value;
    }
}
