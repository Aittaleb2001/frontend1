import {Component, OnInit} from '@angular/core';
import {ContratGarantieService} from 'src/app/controller/service/ContratGarantie.service';
import {ContratGarantieVo} from 'src/app/controller/model/ContratGarantie.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {GarantieVo} from 'src/app/controller/model/Garantie.model';
import {GarantieService} from 'src/app/controller/service/Garantie.service';
import {ContratVo} from 'src/app/controller/model/Contrat.model';
import {ContratService} from 'src/app/controller/service/Contrat.service';

@Component({
  selector: 'app-contrat-garantie-view-agent',
  templateUrl: './contrat-garantie-view-agent.component.html',
  styleUrls: ['./contrat-garantie-view-agent.component.css']
})
export class ContratGarantieViewAgentComponent implements OnInit {


constructor(private datePipe: DatePipe, private contratGarantieService: ContratGarantieService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private garantieService: GarantieService
    ,private contratService: ContratService
) {
}

// methods
ngOnInit(): void {
    this.selectedContrat = new ContratVo();
    this.contratService.findAll().subscribe((data) => this.contrats = data);
    this.selectedGarantie = new GarantieVo();
    this.garantieService.findAll().subscribe((data) => this.garanties = data);
}

hideViewDialog(){
    this.viewContratGarantieDialog  = false;
}

// getters and setters

get contratGaranties(): Array<ContratGarantieVo> {
    return this.contratGarantieService.contratGaranties;
       }
set contratGaranties(value: Array<ContratGarantieVo>) {
        this.contratGarantieService.contratGaranties = value;
       }

 get selectedContratGarantie(): ContratGarantieVo {
           return this.contratGarantieService.selectedContratGarantie;
       }
    set selectedContratGarantie(value: ContratGarantieVo) {
        this.contratGarantieService.selectedContratGarantie = value;
       }

   get viewContratGarantieDialog(): boolean {
           return this.contratGarantieService.viewContratGarantieDialog;

       }
    set viewContratGarantieDialog(value: boolean) {
        this.contratGarantieService.viewContratGarantieDialog= value;
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
