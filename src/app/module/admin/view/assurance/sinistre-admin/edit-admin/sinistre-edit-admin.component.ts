import {Component, OnInit, Input} from '@angular/core';
import {SinistreService} from 'src/app/controller/service/Sinistre.service';
import {SinistreVo} from 'src/app/controller/model/Sinistre.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {ClientVo} from 'src/app/controller/model/Client.model';
import {ClientService} from 'src/app/controller/service/Client.service';
import {TypeSinistreVo} from 'src/app/controller/model/TypeSinistre.model';
import {TypeSinistreService} from 'src/app/controller/service/TypeSinistre.service';
@Component({
  selector: 'app-sinistre-edit-admin',
  templateUrl: './sinistre-edit-admin.component.html',
  styleUrls: ['./sinistre-edit-admin.component.css']
})
export class SinistreEditAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validSinistreReference = true;
   _validSinistreTypeSinistre = true;

    _validTypeSinistreLibelle = true;
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



constructor(private datePipe: DatePipe, private sinistreService: SinistreService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private clientService: ClientService
,       private typeSinistreService: TypeSinistreService
) {

}


// methods
ngOnInit(): void {

    this.selectedTypeSinistre = new TypeSinistreVo();
    this.typeSinistreService.findAll().subscribe((data) => this.typeSinistres = data);
    this.selectedClient = new ClientVo();
    this.clientService.findAll().subscribe((data) => this.clients = data);
}




private setValidation(value : boolean){
    this.validSinistreReference = value;
    this.validSinistreTypeSinistre = value;
    }


public edit(){
  this.submitted = true;
  this.validateForm();
  if (this.errorMessages.length === 0) {
        this.editWithShowOption(false);
  } else {
        this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Merci de corrig?? les erreurs sur le formulaire'});
  }
}

public editWithShowOption(showList: boolean){
     this.sinistreService.edit().subscribe(sinistre=>{
     const myIndex = this.sinistres.findIndex(e => e.id === this.selectedSinistre.id);
     this.sinistres[myIndex] = this.selectedSinistre;
     this.editSinistreDialog = false;
     this.submitted = false;
     this.selectedSinistre = new SinistreVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateSinistreReference();
this.validateSinistreTypeSinistre();

    }

private validateSinistreReference(){
        if (this.stringUtilService.isEmpty(this.selectedSinistre.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validSinistreReference = false;
        } else {
            this.validSinistreReference = true;
        }
    }
private validateSinistreTypeSinistre(){
        if (this.stringUtilService.isEmpty(this.selectedSinistre.typeSinistreVo)) {
            this.errorMessages.push('Type sinistre non valide');
            this.validSinistreTypeSinistre = false;
        } else {
            this.validSinistreTypeSinistre = true;
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
                severity: 'error', summary: 'erreur', detail: 'probl??me de permission'
            });
        }
}
      public async openCreateTypeSinistre(typeSinistre: string) {
        const isPermistted = await this.roleService.isPermitted('TypeSinistre', 'edit');
        if(isPermistted) {
         this.selectedTypeSinistre = new TypeSinistreVo();
         this.createTypeSinistreDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'probl??me de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editSinistreDialog  = false;
    this.setValidation(true);
}

// getters and setters

get sinistres(): Array<SinistreVo> {
    return this.sinistreService.sinistres;
       }
set sinistres(value: Array<SinistreVo>) {
        this.sinistreService.sinistres = value;
       }

 get selectedSinistre(): SinistreVo {
           return this.sinistreService.selectedSinistre;
       }
    set selectedSinistre(value: SinistreVo) {
        this.sinistreService.selectedSinistre = value;
       }

   get editSinistreDialog(): boolean {
           return this.sinistreService.editSinistreDialog;

       }
    set editSinistreDialog(value: boolean) {
        this.sinistreService.editSinistreDialog= value;
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
       get selectedTypeSinistre(): TypeSinistreVo {
           return this.typeSinistreService.selectedTypeSinistre;
       }
      set selectedTypeSinistre(value: TypeSinistreVo) {
        this.typeSinistreService.selectedTypeSinistre = value;
       }
       get typeSinistres(): Array<TypeSinistreVo> {
           return this.typeSinistreService.typeSinistres;
       }
       set typeSinistres(value: Array<TypeSinistreVo>) {
        this.typeSinistreService.typeSinistres = value;
       }
       get createTypeSinistreDialog(): boolean {
           return this.typeSinistreService.createTypeSinistreDialog;
       }
      set createTypeSinistreDialog(value: boolean) {
        this.typeSinistreService.createTypeSinistreDialog= value;
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

    get validTypeSinistreLibelle(): boolean {
    return this._validTypeSinistreLibelle;
    }

    set validTypeSinistreLibelle(value: boolean) {
    this._validTypeSinistreLibelle = value;
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
}
