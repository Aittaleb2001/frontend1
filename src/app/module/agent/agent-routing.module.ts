
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginAgentComponent } from './login-agent/login-agent.component';
import { RegisterAgentComponent } from './register-agent/register-agent.component';
import {ClientAgentComponent} from './view/assurance/client-agent/client-agent.component';
import {CarburantAgentComponent} from "./view/assurance/carburant-agent/carburant-agent.component";
import {
    ClientSininstreAdminComponent
} from "../admin/view/assurance/client-sininstre-admin/client-sininstre-admin.component";
import {ContratAgentComponent} from './view/assurance/contrat-agent/contrat-agent.component';
import {ClientSininstreAgentComponent} from './view/assurance/client-sininstre-agent/client-sininstre-agent.component';
import {ContratGarantieAgentComponent} from './view/assurance/contrat-garantie-agent/contrat-garantie-agent.component';
import {DeviseAgentComponent} from "./view/assurance/devise-agent/devise-agent.component";
import {MarqueAgentComponent} from "./view/assurance/marque-agent/marque-agent.component";
import {NatureContratAgentComponent} from "./view/assurance/nature-contrat-agent/nature-contrat-agent.component";
import {QuittancePrimeAgentComponent} from "./view/zenerator/quittance-prime-agent/quittance-prime-agent.component";
import {SinistreAgentComponent} from "./view/assurance/sinistre-agent/sinistre-agent.component";
import {TypeClientAgentComponent} from "./view/assurance/type-client-agent/type-client-agent.component";
import {TypeSinistreAgentComponent} from "./view/assurance/type-sinistre-agent/type-sinistre-agent.component";
import {TypeVehiculeAgentComponent} from "./view/assurance/type-vehicule-agent/type-vehicule-agent.component";
import {
    QuittanceIndemniserAgentComponent
} from "./view/assurance/quittance-indemniser-agent/quittance-indemniser-agent.component";

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
                                    component: LoginAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'client',
                            children: [
                                {
                                    path: '',
                                    component: ClientAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'carburant',
                            children: [
                                {
                                    path: '',
                                    component: CarburantAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'client-sinistre',
                            children: [
                                {
                                    path: '',
                                    component: ClientSininstreAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'contrat',
                            children: [
                                {
                                    path: '',
                                    component: ContratAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'contrat-garantie',
                            children: [
                                {
                                    path: '',
                                    component: ContratGarantieAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'devise',
                            children: [
                                {
                                    path: '',
                                    component: DeviseAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'garantie',
                            children: [
                                {
                                    path: '',
                                    component: MarqueAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'nature-contrat',
                            children: [
                                {
                                    path: '',
                                    component: NatureContratAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'quittance-prime',
                            children: [
                                {
                                    path: '',
                                    component: QuittancePrimeAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'sinistre',
                            children: [
                                {
                                    path: '',
                                    component: SinistreAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'type-client',
                            children: [
                                {
                                    path: '',
                                    component: TypeClientAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'type-sinistre',
                            children: [
                                {
                                    path: '',
                                    component: TypeSinistreAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'type-vehicule',
                            children: [
                                {
                                    path: '',
                                    component: TypeVehiculeAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'vehicule',
                            children: [
                                {
                                    path: '',
                                    component: TypeVehiculeAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {
                            path: 'quittance-indemniser',
                            children: [
                                {
                                    path: '',
                                    component: QuittanceIndemniserAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'assurance',
                            loadChildren: './view/assurance/assurance-agent-routing.module#AssuranceAgentRoutingModule',
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'zenerator',
                            loadChildren: './view/zenerator/zenerator-agent-routing.module#ZeneratorAgentRoutingModule',
                            canActivate: [AuthGuard],
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AgentRoutingModule { }
