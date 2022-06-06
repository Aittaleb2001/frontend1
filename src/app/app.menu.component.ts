import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './controller/service/Auth.service';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { RoleService } from './controller/service/role.service';
@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  animations: [
    trigger('inline', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelsuperadmin:any[];
  modelanonymous: any[];
    modeladmin : any[];
  modelchercheur : any[];
  modelgestionnaire : any[];
  modelagent : any[];
  constructor(public app: AppComponent,
   public appMain: AppMainComponent,
   private roleService: RoleService,
   private authService:AuthService,
  private router: Router) {}

  ngOnInit() {


    this.modeladmin =
      [
              // {
              //   label: 'Agent',
              //   icon: 'pi pi-wallet',
              //   items:[
              //       {
              //         label: 'Liste agent',
              //         icon: 'pi pi-fw pi-plus-circle',
              //         routerLink: ['/app/admin/zenerator/agent/list']
              //       },
              //   ]
              // },
              {
                label: 'Dossier Client',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste devise',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/assurance/devise/list']
                    },
                    {
                      label: 'Liste type client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/assurance/type-client/list']
                    },
                    {
                      label: 'Liste type sinistre',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/assurance/type-sinistre/list']
                    },
                    {
                      label: 'Liste type vehicule',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/assurance/type-vehicule/list']
                    },
                    {
                      label: 'Liste vehicule',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/assurance/vehicule/list']
                    },
                    {
                      label: 'Liste carburant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/assurance/carburant/list']
                    },
                    {
                      label: 'Liste garantie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/assurance/garantie/list']
                    },
                    {
                      label: 'Liste contrat garantie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/assurance/contrat-garantie/list']
                    },
                    {
                      label: 'Liste client sininstre',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/assurance/client-sininstre/list']
                    },
                    {
                      label: 'Liste client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/assurance/client/list']
                    },
                    {
                      label: 'Liste nature contrat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/assurance/nature-contrat/list']
                    },
                    {
                      label: 'Liste sinistre',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/assurance/sinistre/list']
                    },
                    {
                      label: 'Liste quittance indemniser',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/assurance/quittance-indemniser/list']
                    },
                    {
                      label: 'Liste contrat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/assurance/contrat/list']
                    },
                    {
                      label: 'Liste marque',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/assurance/marque/list']
                    },
                    {
                        label: 'Liste quittance prime',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/zenerator/quittance-prime/list']
                    },

                ]
              },

              /*{
                label: 'Admin',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste admin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/zenerator/admin/list']
                    },
                ]
              },
              {
                label: 'Chercheur',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste chercheur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/zenerator/chercheur/list']
                    },
                ]
              },*/
              {
                label: 'Gestionnaire',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste gestionnaire',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/zenerator/gestionnaire/list']
                    },
                ]
              },
    ];
    this.modelchercheur =
      [
              {
                label: 'Agent',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste agent',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/zenerator/agent/list']
                    },
                ]
              },
              {
                label: 'Dossier Client',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste devise',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/assurance/devise/list']
                    },
                    {
                      label: 'Liste type client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/assurance/type-client/list']
                    },
                    {
                      label: 'Liste type sinistre',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/assurance/type-sinistre/list']
                    },
                    {
                      label: 'Liste type vehicule',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/assurance/type-vehicule/list']
                    },
                    {
                      label: 'Liste vehicule',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/assurance/vehicule/list']
                    },
                    {
                      label: 'Liste carburant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/assurance/carburant/list']
                    },
                    {
                      label: 'Liste garantie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/assurance/garantie/list']
                    },
                    {
                      label: 'Liste contrat garantie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/assurance/contrat-garantie/list']
                    },
                    {
                      label: 'Liste client sininstre',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/assurance/client-sininstre/list']
                    },
                    {
                      label: 'Liste client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/assurance/client/list']
                    },
                    {
                      label: 'Liste nature contrat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/assurance/nature-contrat/list']
                    },
                    {
                      label: 'Liste sinistre',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/assurance/sinistre/list']
                    },
                    {
                      label: 'Liste quittance indemniser',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/assurance/quittance-indemniser/list']
                    },
                    {
                      label: 'Liste contrat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/assurance/contrat/list']
                    },
                    {
                      label: 'Liste marque',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/assurance/marque/list']
                    },
                ]
              },
              {
                label: 'Quittance prime',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste quittance prime',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/zenerator/quittance-prime/list']
                    },
                ]
              },
              {
                label: 'Admin',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste admin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/zenerator/admin/list']
                    },
                ]
              },
              {
                label: 'Chercheur',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste chercheur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/zenerator/chercheur/list']
                    },
                ]
              },
              {
                label: 'Gestionnaire',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste gestionnaire',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/zenerator/gestionnaire/list']
                    },
                ]
              },
    ];
    this.modelgestionnaire =
      [
             /* {
                label: 'Agent',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste agent',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/zenerator/agent/list']
                    },
                ]
              },*/
              {
                label: 'Dossier Client',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste devise',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/assurance/devise/list']
                    },
                    {
                      label: 'Liste type client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/assurance/type-client/list']
                    },
                    {
                      label: 'Liste type sinistre',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/assurance/type-sinistre/list']
                    },
                    {
                      label: 'Liste type vehicule',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/assurance/type-vehicule/list']
                    },
                    {
                      label: 'Liste vehicule',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/assurance/vehicule/list']
                    },
                    {
                      label: 'Liste carburant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/assurance/carburant/list']
                    },
                    {
                      label: 'Liste garantie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/assurance/garantie/list']
                    },
                    {
                      label: 'Liste contrat garantie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/assurance/contrat-garantie/list']
                    },
                    {
                      label: 'Liste client sininstre',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/assurance/client-sininstre/list']
                    },
                    {
                      label: 'Liste client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/assurance/client/list']
                    },
                    {
                      label: 'Liste nature contrat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/assurance/nature-contrat/list']
                    },
                    {
                      label: 'Liste sinistre',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/assurance/sinistre/list']
                    },
                    {
                      label: 'Liste quittance indemniser',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/assurance/quittance-indemniser/list']
                    },
                    {
                      label: 'Liste contrat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/assurance/contrat/list']
                    },
                    {
                      label: 'Liste marque',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/assurance/marque/list']
                    },
                    {
                        label: 'Liste quittance prime',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/gestionnaire/zenerator/quittance-prime/list']
                    },
                ]
              },
             // {
               // label: 'Quittance prime',
               // icon: 'pi pi-wallet',
                //items:[
                   // {
                     // label: 'Liste quittance prime',
                     // icon: 'pi pi-fw pi-plus-circle',
                     // routerLink: ['/app/gestionnaire/zenerator/quittance-prime/list']
                    //},
                //]
              //},
              /*{
                label: 'Admin',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste admin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/zenerator/admin/list']
                    },
                ]
              },
              {
                label: 'Chercheur',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste chercheur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/zenerator/chercheur/list']
                    },
                ]
              },
              {
                label: 'Gestionnaire',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste gestionnaire',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/gestionnaire/zenerator/gestionnaire/list']
                    },
                ]
              },*/
    ];
    this.modelagent =
      [
            /*  {
                label: 'Agent',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste agent',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/zenerator/agent/list']
                    },
                ]
              },*/
              {
                label: 'Assurance',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste devise',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/assurance/devise/list']
                    },
                    {
                      label: 'Liste type client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/assurance/type-client/list']
                    },
                    {
                      label: 'Liste type sinistre',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/assurance/type-sinistre/list']
                    },
                    {
                      label: 'Liste type vehicule',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/assurance/type-vehicule/list']
                    },
                    {
                      label: 'Liste vehicule',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/assurance/vehicule/list']
                    },
                    {
                      label: 'Liste carburant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/assurance/carburant/list']
                    },
                    {
                      label: 'Liste garantie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/assurance/garantie/list']
                    },
                    {
                      label: 'Liste contrat garantie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/assurance/contrat-garantie/list']
                    },
                    {
                      label: 'Liste client sininstre',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/assurance/client-sininstre/list']
                    },
                    {
                      label: 'Liste client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/assurance/client/list']
                    },
                    {
                      label: 'Liste nature contrat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/assurance/nature-contrat/list']
                    },
                    {
                      label: 'Liste sinistre',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/assurance/sinistre/list']
                    },
                    {
                      label: 'Liste quittance indemniser',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/assurance/quittance-indemniser/list']
                    },
                    {
                      label: 'Liste contrat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/assurance/contrat/list']
                    },
                    {
                      label: 'Liste marque',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/assurance/marque/list']
                    },
                ]
              },
              {
                label: 'Quittance prime',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste quittance prime',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/zenerator/quittance-prime/list']
                    },
                ]
              },
             /* {
                label: 'Admin',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste admin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/zenerator/admin/list']
                    },
                ]
              },*/
              /*{
                label: 'Chercheur',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste chercheur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/zenerator/chercheur/list']
                    },
                ]
              },*/
              {
                label: 'Gestionnaire',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste gestionnaire',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/agent/zenerator/gestionnaire/list']
                    },
                ]
              },
    ];
        if (this.authService.authenticated) {
      if (this.authService.authenticatedUser.roles) {

        this.authService.authenticatedUser.roles.forEach(role => {
          const roleName: string = this.getRole(role);
          this.roleService._role.next(roleName.toUpperCase());
          eval('this.model = this.model' + this.getRole(role));
        })
      }

    }
  }
  getRole(text){
  const [role, ...rest] = text.split('_');
  return rest.join('').toLowerCase();
}
  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
