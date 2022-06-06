import {Component, OnInit} from '@angular/core';
import {SinistreService} from 'src/app/controller/service/Sinistre.service';
import {SinistreVo} from 'src/app/controller/model/Sinistre.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {TypeSinistreVo} from 'src/app/controller/model/TypeSinistre.model';
import {TypeSinistreService} from 'src/app/controller/service/TypeSinistre.service';
import {ClientVo} from 'src/app/controller/model/Client.model';
import {ClientService} from 'src/app/controller/service/Client.service';

@Component({
  selector: 'app-sinistre-view-agent',
  templateUrl: './sinistre-view-agent.component.html',
  styleUrls: ['./sinistre-view-agent.component.css']
})
export class SinistreViewAgentComponent implements OnInit {


constructor(private datePipe: DatePipe, private sinistreService: SinistreService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private typeSinistreService: TypeSinistreService
    ,private clientService: ClientService
) {
}

// methods
ngOnInit(): void {
    this.selectedTypeSinistre = new TypeSinistreVo();
    this.typeSinistreService.findAll().subscribe((data) => this.typeSinistres = data);
    this.selectedClient = new ClientVo();
    this.clientService.findAll().subscribe((data) => this.clients = data);
}

hideViewDialog(){
    this.viewSinistreDialog  = false;
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

   get viewSinistreDialog(): boolean {
           return this.sinistreService.viewSinistreDialog;

       }
    set viewSinistreDialog(value: boolean) {
        this.sinistreService.viewSinistreDialog= value;
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
       get selectedTypeSinistre(): TypeSinistreVo {
           return this.typeSinistreService.selectedTypeSinistre;
       }
      set selectedTypeSinistre(value: TypeSinistreVo) {
        this.typeSinistreService.selectedTypeSinistre = value;
       }
       get typeSinistres():Array<TypeSinistreVo> {
           return this.typeSinistreService.typeSinistres;
       }
       set typeSinistres(value: Array<TypeSinistreVo>) {
        this.typeSinistreService.typeSinistres = value;
       }
       get editTypeSinistreDialog(): boolean {
           return this.typeSinistreService.editTypeSinistreDialog;
       }
      set editTypeSinistreDialog(value: boolean) {
        this.typeSinistreService.editTypeSinistreDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
