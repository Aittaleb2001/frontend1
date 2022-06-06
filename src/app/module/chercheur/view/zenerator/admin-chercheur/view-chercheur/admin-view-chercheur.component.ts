import {Component, OnInit} from '@angular/core';
import {AdminService} from 'src/app/controller/service/Admin.service';
import {AdminVo} from 'src/app/controller/model/Admin.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-admin-view-chercheur',
  templateUrl: './admin-view-chercheur.component.html',
  styleUrls: ['./admin-view-chercheur.component.css']
})
export class AdminViewChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private adminService: AdminService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewAdminDialog  = false;
}

// getters and setters

get admins(): Array<AdminVo> {
    return this.adminService.admins;
       }
set admins(value: Array<AdminVo>) {
        this.adminService.admins = value;
       }

 get selectedAdmin(): AdminVo {
           return this.adminService.selectedAdmin;
       }
    set selectedAdmin(value: AdminVo) {
        this.adminService.selectedAdmin = value;
       }

   get viewAdminDialog(): boolean {
           return this.adminService.viewAdminDialog;

       }
    set viewAdminDialog(value: boolean) {
        this.adminService.viewAdminDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
