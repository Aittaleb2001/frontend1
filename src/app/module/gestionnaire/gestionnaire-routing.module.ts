
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginGestionnaireComponent } from './login-gestionnaire/login-gestionnaire.component';
import { RegisterGestionnaireComponent } from './register-gestionnaire/register-gestionnaire.component';
import {CarburantGestionnaireComponent} from "./view/assurance/carburant-gestionnaire/carburant-gestionnaire.component";
import {ClientGestionnaireComponent} from "./view/assurance/client-gestionnaire/client-gestionnaire.component";
import {
    ClientSininstreGestionnaireComponent
} from "./view/assurance/client-sininstre-gestionnaire/client-sininstre-gestionnaire.component";
import {ContratGestionnaireComponent} from "./view/assurance/contrat-gestionnaire/contrat-gestionnaire.component";
import {
    ContratGarantieGestionnaireComponent
} from "./view/assurance/contrat-garantie-gestionnaire/contrat-garantie-gestionnaire.component";
import {DeviseGestionnaireComponent} from "./view/assurance/devise-gestionnaire/devise-gestionnaire.component";
import {GarantieGestionnaireComponent} from "./view/assurance/garantie-gestionnaire/garantie-gestionnaire.component";
import {MarqueGestionnaireComponent} from "./view/assurance/marque-gestionnaire/marque-gestionnaire.component";
import {
    NatureContratGestionnaireComponent
} from "./view/assurance/nature-contrat-gestionnaire/nature-contrat-gestionnaire.component";
import {
    QuittancePrimeGestionnaireComponent
} from "./view/zenerator/quittance-prime-gestionnaire/quittance-prime-gestionnaire.component";
import {
    QuittanceIndemniserGestionnaireComponent
} from "./view/assurance/quittance-indemniser-gestionnaire/quittance-indemniser-gestionnaire.component";
import {SinistreGestionnaireComponent} from "./view/assurance/sinistre-gestionnaire/sinistre-gestionnaire.component";
import {
    TypeClientGestionnaireComponent
} from "./view/assurance/type-client-gestionnaire/type-client-gestionnaire.component";
import {
    TypeSinistreGestionnaireComponent
} from "./view/assurance/type-sinistre-gestionnaire/type-sinistre-gestionnaire.component";
import {
    TypeVehiculeGestionnaireComponent
} from "./view/assurance/type-vehicule-gestionnaire/type-vehicule-gestionnaire.component";
import {VehiculeGestionnaireComponent} from "./view/assurance/vehicule-gestionnaire/vehicule-gestionnaire.component";

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
                                    component: LoginGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'carburant',
                            children: [
                                {
                                    path: 'list',
                                    component: CarburantGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'client',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'client-sinistre',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientSininstreGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'contart',
                            children: [
                                {
                                    path: 'list',
                                    component: ContratGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'contrat-garantie',
                            children: [
                                {
                                    path: 'list',
                                    component: ContratGarantieGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'devise',
                            children: [
                                {
                                    path: 'list',
                                    component: DeviseGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'garantie',
                            children: [
                                {
                                    path: 'list',
                                    component: GarantieGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'marque',
                            children: [
                                {
                                    path: 'list',
                                    component: MarqueGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'nature-contart',
                            children: [
                                {
                                    path: 'list',
                                    component: NatureContratGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'quittance-prime',
                            children: [
                                {
                                    path: 'list',
                                    component: QuittancePrimeGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'quittance-indemniser',
                            children: [
                                {
                                    path: 'list',
                                    component: QuittanceIndemniserGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'sinistre',
                            children: [
                                {
                                    path: 'list',
                                    component: SinistreGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'type-client',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeClientGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'type-sinistre',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeSinistreGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'type-vehicule',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeVehiculeGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'vehicule',
                            children: [
                                {
                                    path: 'list',
                                    component: VehiculeGestionnaireComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'assurance',
                            loadChildren: './view/assurance/assurance-gestionnaire-routing.module#AssuranceGestionnaireRoutingModule',
                            canActivate: [AuthGuard],
                        },
                       {

                            path: 'zenerator',
                            loadChildren: './view/zenerator/zenerator-gestionnaire-routing.module#ZeneratorGestionnaireRoutingModule',
                            canActivate: [AuthGuard],
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class GestionnaireRoutingModule { }
