import {Component, OnInit} from '@angular/core';
import {GarantieService} from 'src/app/controller/service/Garantie.service';
import {GarantieVo} from 'src/app/controller/model/Garantie.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-garantie-view-agent',
  templateUrl: './garantie-view-agent.component.html',
  styleUrls: ['./garantie-view-agent.component.css']
})
export class GarantieViewAgentComponent implements OnInit {


constructor(private datePipe: DatePipe, private garantieService: GarantieService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewGarantieDialog  = false;
}

// getters and setters

get garanties(): Array<GarantieVo> {
    return this.garantieService.garanties;
       }
set garanties(value: Array<GarantieVo>) {
        this.garantieService.garanties = value;
       }

 get selectedGarantie(): GarantieVo {
           return this.garantieService.selectedGarantie;
       }
    set selectedGarantie(value: GarantieVo) {
        this.garantieService.selectedGarantie = value;
       }

   get viewGarantieDialog(): boolean {
           return this.garantieService.viewGarantieDialog;

       }
    set viewGarantieDialog(value: boolean) {
        this.garantieService.viewGarantieDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
