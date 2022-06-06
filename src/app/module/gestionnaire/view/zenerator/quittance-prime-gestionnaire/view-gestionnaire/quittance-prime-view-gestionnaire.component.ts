import {Component, OnInit} from '@angular/core';
import {QuittancePrimeService} from 'src/app/controller/service/QuittancePrime.service';
import {QuittancePrimeVo} from 'src/app/controller/model/QuittancePrime.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {ContratVo} from 'src/app/controller/model/Contrat.model';
import {ContratService} from 'src/app/controller/service/Contrat.service';

@Component({
  selector: 'app-quittance-prime-view-gestionnaire',
  templateUrl: './quittance-prime-view-gestionnaire.component.html',
  styleUrls: ['./quittance-prime-view-gestionnaire.component.css']
})
export class QuittancePrimeViewGestionnaireComponent implements OnInit {


constructor(private datePipe: DatePipe, private quittancePrimeService: QuittancePrimeService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private contratService: ContratService
) {
}

// methods
ngOnInit(): void {
    this.selectedContrat = new ContratVo();
    this.contratService.findAll().subscribe((data) => this.contrats = data);
}

hideViewDialog(){
    this.viewQuittancePrimeDialog  = false;
}

// getters and setters

get quittancePrimes(): Array<QuittancePrimeVo> {
    return this.quittancePrimeService.quittancePrimes;
       }
set quittancePrimes(value: Array<QuittancePrimeVo>) {
        this.quittancePrimeService.quittancePrimes = value;
       }

 get selectedQuittancePrime(): QuittancePrimeVo {
           return this.quittancePrimeService.selectedQuittancePrime;
       }
    set selectedQuittancePrime(value: QuittancePrimeVo) {
        this.quittancePrimeService.selectedQuittancePrime = value;
       }

   get viewQuittancePrimeDialog(): boolean {
           return this.quittancePrimeService.viewQuittancePrimeDialog;

       }
    set viewQuittancePrimeDialog(value: boolean) {
        this.quittancePrimeService.viewQuittancePrimeDialog= value;
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

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
