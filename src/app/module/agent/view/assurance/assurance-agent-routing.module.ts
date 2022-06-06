
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { DeviseAgentComponent } from './devise-agent/devise-agent.component';



    import { TypeClientAgentComponent } from './type-client-agent/type-client-agent.component';



    import { TypeSinistreAgentComponent } from './type-sinistre-agent/type-sinistre-agent.component';



    import { TypeVehiculeAgentComponent } from './type-vehicule-agent/type-vehicule-agent.component';



    import { VehiculeAgentComponent } from './vehicule-agent/vehicule-agent.component';



    import { CarburantAgentComponent } from './carburant-agent/carburant-agent.component';



    import { GarantieAgentComponent } from './garantie-agent/garantie-agent.component';



    import { ContratGarantieAgentComponent } from './contrat-garantie-agent/contrat-garantie-agent.component';



    import { ClientSininstreAgentComponent } from './client-sininstre-agent/client-sininstre-agent.component';



    import { ClientAgentComponent } from './client-agent/client-agent.component';



    import { NatureContratAgentComponent } from './nature-contrat-agent/nature-contrat-agent.component';



    import { SinistreAgentComponent } from './sinistre-agent/sinistre-agent.component';



    import { QuittanceIndemniserAgentComponent } from './quittance-indemniser-agent/quittance-indemniser-agent.component';



    import { ContratAgentComponent } from './contrat-agent/contrat-agent.component';



    import { MarqueAgentComponent } from './marque-agent/marque-agent.component';


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'devise',
                            children: [
                                {
                                    path: 'list',
                                    component: DeviseAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-client',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeClientAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-sinistre',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeSinistreAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-vehicule',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeVehiculeAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'vehicule',
                            children: [
                                {
                                    path: 'list',
                                    component: VehiculeAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'carburant',
                            children: [
                                {
                                    path: 'list',
                                    component: CarburantAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'garantie',
                            children: [
                                {
                                    path: 'list',
                                    component: GarantieAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'contrat-garantie',
                            children: [
                                {
                                    path: 'list',
                                    component: ContratGarantieAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client-sininstre',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientSininstreAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'nature-contrat',
                            children: [
                                {
                                    path: 'list',
                                    component: NatureContratAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'sinistre',
                            children: [
                                {
                                    path: 'list',
                                    component: SinistreAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'quittance-indemniser',
                            children: [
                                {
                                    path: 'list',
                                    component: QuittanceIndemniserAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'contrat',
                            children: [
                                {
                                    path: 'list',
                                    component: ContratAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'marque',
                            children: [
                                {
                                    path: 'list',
                                    component: MarqueAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AssuranceAgentRoutingModule { }
