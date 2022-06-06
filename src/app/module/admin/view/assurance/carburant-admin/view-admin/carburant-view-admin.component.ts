import {Component, OnInit} from '@angular/core';
import {CarburantService} from 'src/app/controller/service/Carburant.service';
import {CarburantVo} from 'src/app/controller/model/Carburant.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-carburant-view-admin',
  templateUrl: './carburant-view-admin.component.html',
  styleUrls: ['./carburant-view-admin.component.css']
})
export class CarburantViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private carburantService: CarburantService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewCarburantDialog  = false;
}

// getters and setters

get carburants(): Array<CarburantVo> {
    return this.carburantService.carburants;
       }
set carburants(value: Array<CarburantVo>) {
        this.carburantService.carburants = value;
       }

 get selectedCarburant(): CarburantVo {
           return this.carburantService.selectedCarburant;
       }
    set selectedCarburant(value: CarburantVo) {
        this.carburantService.selectedCarburant = value;
       }

   get viewCarburantDialog(): boolean {
           return this.carburantService.viewCarburantDialog;

       }
    set viewCarburantDialog(value: boolean) {
        this.carburantService.viewCarburantDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
