import {Component, OnInit} from '@angular/core';
import {ClientSininstreService} from 'src/app/controller/service/ClientSininstre.service';
import {ClientSininstreVo} from 'src/app/controller/model/ClientSininstre.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {SinistreVo} from 'src/app/controller/model/Sinistre.model';
import {SinistreService} from 'src/app/controller/service/Sinistre.service';
import {QuittanceIndemniserVo} from 'src/app/controller/model/QuittanceIndemniser.model';
import {QuittanceIndemniserService} from 'src/app/controller/service/QuittanceIndemniser.service';
import {ClientVo} from 'src/app/controller/model/Client.model';
import {ClientService} from 'src/app/controller/service/Client.service';

@Component({
  selector: 'app-client-sininstre-view-agent',
  templateUrl: './client-sininstre-view-agent.component.html',
  styleUrls: ['./client-sininstre-view-agent.component.css']
})
export class ClientSininstreViewAgentComponent implements OnInit {


constructor(private datePipe: DatePipe, private clientSininstreService: ClientSininstreService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private sinistreService: SinistreService
    ,private quittanceIndemniserService: QuittanceIndemniserService
    ,private clientService: ClientService
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

hideViewDialog(){
    this.viewClientSininstreDialog  = false;
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

   get viewClientSininstreDialog(): boolean {
           return this.clientSininstreService.viewClientSininstreDialog;

       }
    set viewClientSininstreDialog(value: boolean) {
        this.clientSininstreService.viewClientSininstreDialog= value;
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

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
