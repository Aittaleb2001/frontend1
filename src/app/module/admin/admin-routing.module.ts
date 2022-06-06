
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import {LoginAdminComponent} from './login-admin/login-admin.component';
import {RegisterAdminComponent} from './register-admin/register-admin.component';
import {ClientAdminComponent} from './view/assurance/client-admin/client-admin.component';
import {CarburantAdminComponent} from './view/assurance/carburant-admin/carburant-admin.component';
import {
    ClientSininstreListAdminComponent
} from './view/assurance/client-sininstre-admin/list-admin/client-sininstre-list-admin.component';
import {ContratAdminComponent} from './view/assurance/contrat-admin/contrat-admin.component';
import {ContratGarantieAdminComponent} from './view/assurance/contrat-garantie-admin/contrat-garantie-admin.component';
import {DeviseAdminComponent} from './view/assurance/devise-admin/devise-admin.component';
import {GarantieAdminComponent} from './view/assurance/garantie-admin/garantie-admin.component';
import {MarqueAdminComponent} from './view/assurance/marque-admin/marque-admin.component';
import {NatureContratAdminComponent} from './view/assurance/nature-contrat-admin/nature-contrat-admin.component';
import {QuittancePrimeAdminComponent} from './view/zenerator/quittance-prime-admin/quittance-prime-admin.component';
import {
    QuittanceIndemniserAdminComponent
} from './view/assurance/quittance-indemniser-admin/quittance-indemniser-admin.component';
import {SinistreAdminComponent} from './view/assurance/sinistre-admin/sinistre-admin.component';
import {TypeClientAdminComponent} from './view/assurance/type-client-admin/type-client-admin.component';
import {TypeSinistreAdminComponent} from './view/assurance/type-sinistre-admin/type-sinistre-admin.component';
import {TypeVehiculeAdminComponent} from './view/assurance/type-vehicule-admin/type-vehicule-admin.component';
import {VehiculeAdminComponent} from './view/assurance/vehicule-admin/vehicule-admin.component';
import {GestionnaireAdminComponent} from './view/zenerator/gestionnaire-admin/gestionnaire-admin.component';
import {
    QuittancePrimeCreateAdminComponent
} from './view/zenerator/quittance-prime-admin/create-admin/quittance-prime-create-admin.component';
import {ClientCreateAdminComponent} from './view/assurance/client-admin/create-admin/client-create-admin.component';
import {ClientSininstreAdminComponent} from './view/assurance/client-sininstre-admin/client-sininstre-admin.component';
import {ContratCreateAdminComponent} from "./view/assurance/contrat-admin/create-admin/contrat-create-admin.component";

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'client',
                            children: [
                                {
                                    path: '',
                                    component: ClientAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'client',
                            children: [
                                {
                                    path: '',
                                    component: ClientCreateAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'carburant',
                            children: [
                                {
                                    path: 'list',
                                    component: CarburantAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'client-sinistre',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientSininstreListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'client-sinistre',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientSininstreAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'contrat',
                            children: [
                                {
                                    path: 'list',
                                    component: ContratAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'contrat',
                            children: [
                                {
                                    path: 'list',
                                    component: ContratCreateAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'contrat-garantie',
                            children: [
                                {
                                    path: 'list',
                                    component: ContratGarantieAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'devise',
                            children: [
                                {
                                    path: 'list',
                                    component: DeviseAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'garantie',
                            children: [
                                {
                                    path: 'list',
                                    component:  GarantieAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'marque',
                            children: [
                                {
                                    path: 'list',
                                    component: MarqueAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'nature-contrat',
                            children: [
                                {
                                    path: 'list',
                                    component: NatureContratAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'quittance-prime',
                            children: [
                                {
                                    path: 'list',
                                    component: QuittancePrimeCreateAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'quittance-indemniser',
                            children: [
                                {
                                    path: 'list',
                                    component: QuittanceIndemniserAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'sinistre',
                            children: [
                                {
                                    path: 'list',
                                    component: SinistreAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'type-client',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeClientAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'type-sinistre',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeSinistreAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'type-vehicule',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeVehiculeAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'vehicule',
                            children: [
                                {
                                    path: 'list',
                                    component: VehiculeAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'gestionnaire',
                            children: [
                                {
                                    path: 'list',
                                    component: GestionnaireAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'assurance',
                            loadChildren: './view/assurance/assurance-admin-routing.module#AssuranceAdminRoutingModule',
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'zenerator',
                            loadChildren: './view/zenerator/zenerator-admin-routing.module#ZeneratorAdminRoutingModule',
                            canActivate: [AuthGuard],
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule{ }
