import {Component, OnInit} from '@angular/core';
import {TypeSinistreService} from 'src/app/controller/service/TypeSinistre.service';
import {TypeSinistreVo} from 'src/app/controller/model/TypeSinistre.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-type-sinistre-view-chercheur',
  templateUrl: './type-sinistre-view-chercheur.component.html',
  styleUrls: ['./type-sinistre-view-chercheur.component.css']
})
export class TypeSinistreViewChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private typeSinistreService: TypeSinistreService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewTypeSinistreDialog  = false;
}

// getters and setters

get typeSinistres(): Array<TypeSinistreVo> {
    return this.typeSinistreService.typeSinistres;
       }
set typeSinistres(value: Array<TypeSinistreVo>) {
        this.typeSinistreService.typeSinistres = value;
       }

 get selectedTypeSinistre(): TypeSinistreVo {
           return this.typeSinistreService.selectedTypeSinistre;
       }
    set selectedTypeSinistre(value: TypeSinistreVo) {
        this.typeSinistreService.selectedTypeSinistre = value;
       }

   get viewTypeSinistreDialog(): boolean {
           return this.typeSinistreService.viewTypeSinistreDialog;

       }
    set viewTypeSinistreDialog(value: boolean) {
        this.typeSinistreService.viewTypeSinistreDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
