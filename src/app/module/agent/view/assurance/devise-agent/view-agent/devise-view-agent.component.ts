import {Component, OnInit} from '@angular/core';
import {DeviseService} from 'src/app/controller/service/Devise.service';
import {DeviseVo} from 'src/app/controller/model/Devise.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-devise-view-agent',
  templateUrl: './devise-view-agent.component.html',
  styleUrls: ['./devise-view-agent.component.css']
})
export class DeviseViewAgentComponent implements OnInit {


constructor(private datePipe: DatePipe, private deviseService: DeviseService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewDeviseDialog  = false;
}

// getters and setters

get devises(): Array<DeviseVo> {
    return this.deviseService.devises;
       }
set devises(value: Array<DeviseVo>) {
        this.deviseService.devises = value;
       }

 get selectedDevise(): DeviseVo {
           return this.deviseService.selectedDevise;
       }
    set selectedDevise(value: DeviseVo) {
        this.deviseService.selectedDevise = value;
       }

   get viewDeviseDialog(): boolean {
           return this.deviseService.viewDeviseDialog;

       }
    set viewDeviseDialog(value: boolean) {
        this.deviseService.viewDeviseDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
