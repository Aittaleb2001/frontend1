import {Component, OnInit} from '@angular/core';
import {NatureContratService} from 'src/app/controller/service/NatureContrat.service';
import {NatureContratVo} from 'src/app/controller/model/NatureContrat.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-nature-contrat-view-admin',
  templateUrl: './nature-contrat-view-admin.component.html',
  styleUrls: ['./nature-contrat-view-admin.component.css']
})
export class NatureContratViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private natureContratService: NatureContratService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewNatureContratDialog  = false;
}

// getters and setters

get natureContrats(): Array<NatureContratVo> {
    return this.natureContratService.natureContrats;
       }
set natureContrats(value: Array<NatureContratVo>) {
        this.natureContratService.natureContrats = value;
       }

 get selectedNatureContrat(): NatureContratVo {
           return this.natureContratService.selectedNatureContrat;
       }
    set selectedNatureContrat(value: NatureContratVo) {
        this.natureContratService.selectedNatureContrat = value;
       }

   get viewNatureContratDialog(): boolean {
           return this.natureContratService.viewNatureContratDialog;

       }
    set viewNatureContratDialog(value: boolean) {
        this.natureContratService.viewNatureContratDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
