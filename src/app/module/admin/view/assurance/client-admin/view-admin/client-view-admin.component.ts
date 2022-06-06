import {Component, OnInit} from '@angular/core';
import {ClientService} from 'src/app/controller/service/Client.service';
import {ClientVo} from 'src/app/controller/model/Client.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {QuittancePrimeVo} from 'src/app/controller/model/QuittancePrime.model';
import {QuittancePrimeService} from 'src/app/controller/service/QuittancePrime.service';
import {ClientSininstreVo} from 'src/app/controller/model/ClientSininstre.model';
import {ClientSininstreService} from 'src/app/controller/service/ClientSininstre.service';
import {VehiculeVo} from 'src/app/controller/model/Vehicule.model';
import {VehiculeService} from 'src/app/controller/service/Vehicule.service';
import {TypeVehiculeVo} from 'src/app/controller/model/TypeVehicule.model';
import {TypeVehiculeService} from 'src/app/controller/service/TypeVehicule.service';
import {NatureContratVo} from 'src/app/controller/model/NatureContrat.model';
import {NatureContratService} from 'src/app/controller/service/NatureContrat.service';
import {TypeClientVo} from 'src/app/controller/model/TypeClient.model';
import {TypeClientService} from 'src/app/controller/service/TypeClient.service';
import {QuittanceIndemniserVo} from 'src/app/controller/model/QuittanceIndemniser.model';
import {QuittanceIndemniserService} from 'src/app/controller/service/QuittanceIndemniser.service';
import {CarburantVo} from 'src/app/controller/model/Carburant.model';
import {CarburantService} from 'src/app/controller/service/Carburant.service';
import {SinistreVo} from 'src/app/controller/model/Sinistre.model';
import {SinistreService} from 'src/app/controller/service/Sinistre.service';
import {ContratVo} from 'src/app/controller/model/Contrat.model';
import {ContratService} from 'src/app/controller/service/Contrat.service';
import {MarqueVo} from 'src/app/controller/model/Marque.model';
import {MarqueService} from 'src/app/controller/service/Marque.service';

@Component({
  selector: 'app-client-view-admin',
  templateUrl: './client-view-admin.component.html',
  styleUrls: ['./client-view-admin.component.css']
})
export class ClientViewAdminComponent implements OnInit {

        selectedClientSininstres: ClientSininstreVo = new ClientSininstreVo();
        clientSininstresListe: Array<ClientSininstreVo> = [];

        mySinistres: Array<SinistreVo> = [];
        myQuittanceIndemnisers: Array<QuittanceIndemniserVo> = [];

       // selectedVehicule: VehiculeVo = new VehiculeVo();
        vehiculeListe: Array<VehiculeVo> = [];

        myCarburants: Array<CarburantVo> = [];
        myTypeVehicules: Array<TypeVehiculeVo> = [];
        myContrats: Array<ContratVo> = [];
        myMarques: Array<MarqueVo> = [];

       // selectedContrat: ContratVo = new ContratVo();
        contratListe: Array<ContratVo> = [];

        myQuittancePrimes: Array<QuittancePrimeVo> = [];
        myNatureContrats: Array<NatureContratVo> = [];
        myVehicules: Array<VehiculeVo> = [];


constructor(private datePipe: DatePipe, private clientService: ClientService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private quittancePrimeService: QuittancePrimeService
    ,private clientSininstreService: ClientSininstreService
    ,private vehiculeService: VehiculeService
    ,private typeVehiculeService: TypeVehiculeService
    ,private natureContratService: NatureContratService
    ,private typeClientService: TypeClientService
    ,private quittanceIndemniserService: QuittanceIndemniserService
    ,private carburantService: CarburantService
    ,private sinistreService: SinistreService
    ,private contratService: ContratService
    ,private marqueService: MarqueService
) {
}

// methods
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
    this.selectedTypeClient = new TypeClientVo();
    this.typeClientService.findAll().subscribe((data) => this.typeClients = data);
}

hideViewDialog(){
    this.viewClientDialog  = false;
}

// getters and setters

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

   get viewClientDialog(): boolean {
           return this.clientService.viewClientDialog;

       }
    set viewClientDialog(value: boolean) {
        this.clientService.viewClientDialog= value;
       }

       get selectedSinistre(): SinistreVo {
           return this.sinistreService.selectedSinistre;
       }
      set selectedSinistre(value: SinistreVo) {
        this.sinistreService.selectedSinistre = value;
       }
       get sinistres():Array<SinistreVo> {
           return this.sinistreService.sinistres;
       }
       set sinistres(value: Array<SinistreVo>) {
        this.sinistreService.sinistres = value;
       }
       get editSinistreDialog(): boolean {
           return this.sinistreService.editSinistreDialog;
       }
      set editSinistreDialog(value: boolean) {
        this.sinistreService.editSinistreDialog= value;
       }
       get selectedTypeClient(): TypeClientVo {
           return this.typeClientService.selectedTypeClient;
       }
      set selectedTypeClient(value: TypeClientVo) {
        this.typeClientService.selectedTypeClient = value;
       }
       get typeClients():Array<TypeClientVo> {
           return this.typeClientService.typeClients;
       }
       set typeClients(value: Array<TypeClientVo>) {
        this.typeClientService.typeClients = value;
       }
       get editTypeClientDialog(): boolean {
           return this.typeClientService.editTypeClientDialog;
       }
      set editTypeClientDialog(value: boolean) {
        this.typeClientService.editTypeClientDialog= value;
       }
       get selectedQuittanceIndemniser(): QuittanceIndemniserVo {
           return this.quittanceIndemniserService.selectedQuittanceIndemniser;
       }
      set selectedQuittanceIndemniser(value: QuittanceIndemniserVo) {
        this.quittanceIndemniserService.selectedQuittanceIndemniser = value;
       }
       get quittanceIndemnisers():Array<QuittanceIndemniserVo> {
           return this.quittanceIndemniserService.quittanceIndemnisers;
       }
       set quittanceIndemnisers(value: Array<QuittanceIndemniserVo>) {
        this.quittanceIndemniserService.quittanceIndemnisers = value;
       }
       get editQuittanceIndemniserDialog(): boolean {
           return this.quittanceIndemniserService.editQuittanceIndemniserDialog;
       }
      set editQuittanceIndemniserDialog(value: boolean) {
        this.quittanceIndemniserService.editQuittanceIndemniserDialog= value;
       }
       get selectedContrat(): ContratVo {
           return this.contratService.selectedContrat;
       }
      set selectedContrat(value: ContratVo) {
        this.contratService.selectedContrat = value;
       }
       get contrats():Array<ContratVo> {
           return this.contratService.contrats;
       }
       set contrats(value: Array<ContratVo>) {
        this.contratService.contrats = value;
       }
       get editContratDialog(): boolean {
           return this.contratService.editContratDialog;
       }
      set editContratDialog(value: boolean) {
        this.contratService.editContratDialog= value;
       }
       get selectedQuittancePrime(): QuittancePrimeVo {
           return this.quittancePrimeService.selectedQuittancePrime;
       }
      set selectedQuittancePrime(value: QuittancePrimeVo) {
        this.quittancePrimeService.selectedQuittancePrime = value;
       }
       get quittancePrimes():Array<QuittancePrimeVo> {
           return this.quittancePrimeService.quittancePrimes;
       }
       set quittancePrimes(value: Array<QuittancePrimeVo>) {
        this.quittancePrimeService.quittancePrimes = value;
       }
       get editQuittancePrimeDialog(): boolean {
           return this.quittancePrimeService.editQuittancePrimeDialog;
       }
      set editQuittancePrimeDialog(value: boolean) {
        this.quittancePrimeService.editQuittancePrimeDialog= value;
       }
       get selectedNatureContrat(): NatureContratVo {
           return this.natureContratService.selectedNatureContrat;
       }
      set selectedNatureContrat(value: NatureContratVo) {
        this.natureContratService.selectedNatureContrat = value;
       }
       get natureContrats():Array<NatureContratVo> {
           return this.natureContratService.natureContrats;
       }
       set natureContrats(value: Array<NatureContratVo>) {
        this.natureContratService.natureContrats = value;
       }
       get editNatureContratDialog(): boolean {
           return this.natureContratService.editNatureContratDialog;
       }
      set editNatureContratDialog(value: boolean) {
        this.natureContratService.editNatureContratDialog= value;
       }
       get selectedVehicule(): VehiculeVo {
           return this.vehiculeService.selectedVehicule;
       }
      set selectedVehicule(value: VehiculeVo) {
        this.vehiculeService.selectedVehicule = value;
       }
       get vehicules():Array<VehiculeVo> {
           return this.vehiculeService.vehicules;
       }
       set vehicules(value: Array<VehiculeVo>) {
        this.vehiculeService.vehicules = value;
       }
       get editVehiculeDialog(): boolean {
           return this.vehiculeService.editVehiculeDialog;
       }
      set editVehiculeDialog(value: boolean) {
        this.vehiculeService.editVehiculeDialog= value;
       }
       get selectedMarque(): MarqueVo {
           return this.marqueService.selectedMarque;
       }
      set selectedMarque(value: MarqueVo) {
        this.marqueService.selectedMarque = value;
       }
       get marques():Array<MarqueVo> {
           return this.marqueService.marques;
       }
       set marques(value: Array<MarqueVo>) {
        this.marqueService.marques = value;
       }
       get editMarqueDialog(): boolean {
           return this.marqueService.editMarqueDialog;
       }
      set editMarqueDialog(value: boolean) {
        this.marqueService.editMarqueDialog= value;
       }
       get selectedCarburant(): CarburantVo {
           return this.carburantService.selectedCarburant;
       }
      set selectedCarburant(value: CarburantVo) {
        this.carburantService.selectedCarburant = value;
       }
       get carburants():Array<CarburantVo> {
           return this.carburantService.carburants;
       }
       set carburants(value: Array<CarburantVo>) {
        this.carburantService.carburants = value;
       }
       get editCarburantDialog(): boolean {
           return this.carburantService.editCarburantDialog;
       }
      set editCarburantDialog(value: boolean) {
        this.carburantService.editCarburantDialog= value;
       }
       get selectedTypeVehicule(): TypeVehiculeVo {
           return this.typeVehiculeService.selectedTypeVehicule;
       }
      set selectedTypeVehicule(value: TypeVehiculeVo) {
        this.typeVehiculeService.selectedTypeVehicule = value;
       }
       get typeVehicules():Array<TypeVehiculeVo> {
           return this.typeVehiculeService.typeVehicules;
       }
       set typeVehicules(value: Array<TypeVehiculeVo>) {
        this.typeVehiculeService.typeVehicules = value;
       }
       get editTypeVehiculeDialog(): boolean {
           return this.typeVehiculeService.editTypeVehiculeDialog;
       }
      set editTypeVehiculeDialog(value: boolean) {
        this.typeVehiculeService.editTypeVehiculeDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
