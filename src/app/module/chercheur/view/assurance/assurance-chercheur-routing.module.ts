
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { DeviseChercheurComponent } from './devise-chercheur/devise-chercheur.component';



    import { TypeClientChercheurComponent } from './type-client-chercheur/type-client-chercheur.component';



    import { TypeSinistreChercheurComponent } from './type-sinistre-chercheur/type-sinistre-chercheur.component';



    import { TypeVehiculeChercheurComponent } from './type-vehicule-chercheur/type-vehicule-chercheur.component';



    import { VehiculeChercheurComponent } from './vehicule-chercheur/vehicule-chercheur.component';



    import { CarburantChercheurComponent } from './carburant-chercheur/carburant-chercheur.component';



    import { GarantieChercheurComponent } from './garantie-chercheur/garantie-chercheur.component';



    import { ContratGarantieChercheurComponent } from './contrat-garantie-chercheur/contrat-garantie-chercheur.component';



    import { ClientSininstreChercheurComponent } from './client-sininstre-chercheur/client-sininstre-chercheur.component';



    import { ClientChercheurComponent } from './client-chercheur/client-chercheur.component';



    import { NatureContratChercheurComponent } from './nature-contrat-chercheur/nature-contrat-chercheur.component';



    import { SinistreChercheurComponent } from './sinistre-chercheur/sinistre-chercheur.component';



    import { QuittanceIndemniserChercheurComponent } from './quittance-indemniser-chercheur/quittance-indemniser-chercheur.component';



    import { ContratChercheurComponent } from './contrat-chercheur/contrat-chercheur.component';



    import { MarqueChercheurComponent } from './marque-chercheur/marque-chercheur.component';


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
                                    component: DeviseChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-client',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeClientChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-sinistre',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeSinistreChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-vehicule',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeVehiculeChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'vehicule',
                            children: [
                                {
                                    path: 'list',
                                    component: VehiculeChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'carburant',
                            children: [
                                {
                                    path: 'list',
                                    component: CarburantChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'garantie',
                            children: [
                                {
                                    path: 'list',
                                    component: GarantieChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'contrat-garantie',
                            children: [
                                {
                                    path: 'list',
                                    component: ContratGarantieChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client-sininstre',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientSininstreChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'nature-contrat',
                            children: [
                                {
                                    path: 'list',
                                    component: NatureContratChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'sinistre',
                            children: [
                                {
                                    path: 'list',
                                    component: SinistreChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'quittance-indemniser',
                            children: [
                                {
                                    path: 'list',
                                    component: QuittanceIndemniserChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'contrat',
                            children: [
                                {
                                    path: 'list',
                                    component: ContratChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'marque',
                            children: [
                                {
                                    path: 'list',
                                    component: MarqueChercheurComponent ,
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
export class AssuranceChercheurRoutingModule { }
