import {Component, OnInit} from '@angular/core';
import {VehiculeService} from 'src/app/controller/service/Vehicule.service';
import {VehiculeVo} from 'src/app/controller/model/Vehicule.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {MarqueVo} from 'src/app/controller/model/Marque.model';
import {MarqueService} from 'src/app/controller/service/Marque.service';
import {TypeVehiculeVo} from 'src/app/controller/model/TypeVehicule.model';
import {TypeVehiculeService} from 'src/app/controller/service/TypeVehicule.service';
import {CarburantVo} from 'src/app/controller/model/Carburant.model';
import {CarburantService} from 'src/app/controller/service/Carburant.service';
import {ClientVo} from 'src/app/controller/model/Client.model';
import {ClientService} from 'src/app/controller/service/Client.service';
import {ContratVo} from 'src/app/controller/model/Contrat.model';
import {ContratService} from 'src/app/controller/service/Contrat.service';

@Component({
  selector: 'app-vehicule-view-gestionnaire',
  templateUrl: './vehicule-view-gestionnaire.component.html',
  styleUrls: ['./vehicule-view-gestionnaire.component.css']
})
export class VehiculeViewGestionnaireComponent implements OnInit {


constructor(private datePipe: DatePipe, private vehiculeService: VehiculeService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private marqueService: MarqueService
    ,private typeVehiculeService: TypeVehiculeService
    ,private carburantService: CarburantService
    ,private clientService: ClientService
    ,private contratService: ContratService
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

hideViewDialog(){
    this.viewVehiculeDialog  = false;
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

   get viewVehiculeDialog(): boolean {
           return this.vehiculeService.viewVehiculeDialog;

       }
    set viewVehiculeDialog(value: boolean) {
        this.vehiculeService.viewVehiculeDialog= value;
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
