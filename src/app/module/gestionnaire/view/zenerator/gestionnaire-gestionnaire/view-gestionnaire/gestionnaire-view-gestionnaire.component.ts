import {Component, OnInit} from '@angular/core';
import {GestionnaireService} from 'src/app/controller/service/Gestionnaire.service';
import {GestionnaireVo} from 'src/app/controller/model/Gestionnaire.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-gestionnaire-view-gestionnaire',
  templateUrl: './gestionnaire-view-gestionnaire.component.html',
  styleUrls: ['./gestionnaire-view-gestionnaire.component.css']
})
export class GestionnaireViewGestionnaireComponent implements OnInit {


constructor(private datePipe: DatePipe, private gestionnaireService: GestionnaireService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewGestionnaireDialog  = false;
}

// getters and setters

get gestionnaires(): Array<GestionnaireVo> {
    return this.gestionnaireService.gestionnaires;
       }
set gestionnaires(value: Array<GestionnaireVo>) {
        this.gestionnaireService.gestionnaires = value;
       }

 get selectedGestionnaire(): GestionnaireVo {
           return this.gestionnaireService.selectedGestionnaire;
       }
    set selectedGestionnaire(value: GestionnaireVo) {
        this.gestionnaireService.selectedGestionnaire = value;
       }

   get viewGestionnaireDialog(): boolean {
           return this.gestionnaireService.viewGestionnaireDialog;

       }
    set viewGestionnaireDialog(value: boolean) {
        this.gestionnaireService.viewGestionnaireDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
