import {Component, OnInit} from '@angular/core';
import {ContratService} from 'src/app/controller/service/Contrat.service';
import {ContratVo} from 'src/app/controller/model/Contrat.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {VehiculeVo} from 'src/app/controller/model/Vehicule.model';
import {VehiculeService} from 'src/app/controller/service/Vehicule.service';
import {GarantieVo} from 'src/app/controller/model/Garantie.model';
import {GarantieService} from 'src/app/controller/service/Garantie.service';
import {NatureContratVo} from 'src/app/controller/model/NatureContrat.model';
import {NatureContratService} from 'src/app/controller/service/NatureContrat.service';
import {QuittancePrimeVo} from 'src/app/controller/model/QuittancePrime.model';
import {QuittancePrimeService} from 'src/app/controller/service/QuittancePrime.service';
import {ClientVo} from 'src/app/controller/model/Client.model';
import {ClientService} from 'src/app/controller/service/Client.service';
import {ContratGarantieVo} from 'src/app/controller/model/ContratGarantie.model';
import {ContratGarantieService} from 'src/app/controller/service/ContratGarantie.service';

@Component({
  selector: 'app-contrat-view-agent',
  templateUrl: './contrat-view-agent.component.html',
  styleUrls: ['./contrat-view-agent.component.css']
})
export class ContratViewAgentComponent implements OnInit {

        selectedContratGaranties: ContratGarantieVo = new ContratGarantieVo();
        contratGarantiesListe: Array<ContratGarantieVo> = [];

        myGaranties: Array<GarantieVo> = [];


constructor(private datePipe: DatePipe, private contratService: ContratService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private vehiculeService: VehiculeService
    ,private garantieService: GarantieService
    ,private natureContratService: NatureContratService
    ,private quittancePrimeService: QuittancePrimeService
    ,private clientService: ClientService
    ,private contratGarantieService: ContratGarantieService
) {
}

// methods
ngOnInit(): void {
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

hideViewDialog(){
    this.viewContratDialog  = false;
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

   get viewContratDialog(): boolean {
           return this.contratService.viewContratDialog;

       }
    set viewContratDialog(value: boolean) {
        this.contratService.viewContratDialog= value;
       }

       get selectedClient(): ClientVo {
           return this.clientService.selectedClient;
       }
      set selectedClient(value: ClientVo) {
        this.clientService.selectedClient = value;
       }
       get clients():Array<ClientVo> {
           return this.clientService.clients;
       }
       set clients(value: Array<ClientVo>) {
        this.clientService.clients = value;
       }
       get editClientDialog(): boolean {
           return this.clientService.editClientDialog;
       }
      set editClientDialog(value: boolean) {
        this.clientService.editClientDialog= value;
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
       get selectedGarantie(): GarantieVo {
           return this.garantieService.selectedGarantie;
       }
      set selectedGarantie(value: GarantieVo) {
        this.garantieService.selectedGarantie = value;
       }
       get garanties():Array<GarantieVo> {
           return this.garantieService.garanties;
       }
       set garanties(value: Array<GarantieVo>) {
        this.garantieService.garanties = value;
       }
       get editGarantieDialog(): boolean {
           return this.garantieService.editGarantieDialog;
       }
      set editGarantieDialog(value: boolean) {
        this.garantieService.editGarantieDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
