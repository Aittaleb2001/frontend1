import {Component, OnInit} from '@angular/core';
import {QuittanceIndemniserService} from 'src/app/controller/service/QuittanceIndemniser.service';
import {QuittanceIndemniserVo} from 'src/app/controller/model/QuittanceIndemniser.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {DeviseVo} from 'src/app/controller/model/Devise.model';
import {DeviseService} from 'src/app/controller/service/Devise.service';

@Component({
  selector: 'app-quittance-indemniser-view-admin',
  templateUrl: './quittance-indemniser-view-admin.component.html',
  styleUrls: ['./quittance-indemniser-view-admin.component.css']
})
export class QuittanceIndemniserViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private quittanceIndemniserService: QuittanceIndemniserService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private deviseService: DeviseService
) {
}

// methods
ngOnInit(): void {
    this.selectedDevise = new DeviseVo();
    this.deviseService.findAll().subscribe((data) => this.devises = data);
}

hideViewDialog(){
    this.viewQuittanceIndemniserDialog  = false;
}

// getters and setters

get quittanceIndemnisers(): Array<QuittanceIndemniserVo> {
    return this.quittanceIndemniserService.quittanceIndemnisers;
       }
set quittanceIndemnisers(value: Array<QuittanceIndemniserVo>) {
        this.quittanceIndemniserService.quittanceIndemnisers = value;
       }

 get selectedQuittanceIndemniser(): QuittanceIndemniserVo {
           return this.quittanceIndemniserService.selectedQuittanceIndemniser;
       }
    set selectedQuittanceIndemniser(value: QuittanceIndemniserVo) {
        this.quittanceIndemniserService.selectedQuittanceIndemniser = value;
       }

   get viewQuittanceIndemniserDialog(): boolean {
           return this.quittanceIndemniserService.viewQuittanceIndemniserDialog;

       }
    set viewQuittanceIndemniserDialog(value: boolean) {
        this.quittanceIndemniserService.viewQuittanceIndemniserDialog= value;
       }

       get selectedDevise(): DeviseVo {
           return this.deviseService.selectedDevise;
       }
      set selectedDevise(value: DeviseVo) {
        this.deviseService.selectedDevise = value;
       }
       get devises():Array<DeviseVo> {
           return this.deviseService.devises;
       }
       set devises(value: Array<DeviseVo>) {
        this.deviseService.devises = value;
       }
       get editDeviseDialog(): boolean {
           return this.deviseService.editDeviseDialog;
       }
      set editDeviseDialog(value: boolean) {
        this.deviseService.editDeviseDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
