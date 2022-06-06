
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { DeviseGestionnaireComponent } from './devise-gestionnaire/devise-gestionnaire.component';



    import { TypeClientGestionnaireComponent } from './type-client-gestionnaire/type-client-gestionnaire.component';



    import { TypeSinistreGestionnaireComponent } from './type-sinistre-gestionnaire/type-sinistre-gestionnaire.component';



    import { TypeVehiculeGestionnaireComponent } from './type-vehicule-gestionnaire/type-vehicule-gestionnaire.component';



    import { VehiculeGestionnaireComponent } from './vehicule-gestionnaire/vehicule-gestionnaire.component';



    import { CarburantGestionnaireComponent } from './carburant-gestionnaire/carburant-gestionnaire.component';



    import { GarantieGestionnaireComponent } from './garantie-gestionnaire/garantie-gestionnaire.component';



    import { ContratGarantieGestionnaireComponent } from './contrat-garantie-gestionnaire/contrat-garantie-gestionnaire.component';



    import { ClientSininstreGestionnaireComponent } from './client-sininstre-gestionnaire/client-sininstre-gestionnaire.component';



    import { ClientGestionnaireComponent } from './client-gestionnaire/client-gestionnaire.component';



    import { NatureContratGestionnaireComponent } from './nature-contrat-gestionnaire/nature-contrat-gestionnaire.component';



    import { SinistreGestionnaireComponent } from './sinistre-gestionnaire/sinistre-gestionnaire.component';



    import { QuittanceIndemniserGestionnaireComponent } from './quittance-indemniser-gestionnaire/quittance-indemniser-gestionnaire.component';



    import { ContratGestionnaireComponent } from './contrat-gestionnaire/contrat-gestionnaire.component';



    import { MarqueGestionnaireComponent } from './marque-gestionnaire/marque-gestionnaire.component';


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
                                    component: DeviseGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-client',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeClientGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-sinistre',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeSinistreGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-vehicule',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeVehiculeGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'vehicule',
                            children: [
                                {
                                    path: 'list',
                                    component: VehiculeGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'carburant',
                            children: [
                                {
                                    path: 'list',
                                    component: CarburantGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'garantie',
                            children: [
                                {
                                    path: 'list',
                                    component: GarantieGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'contrat-garantie',
                            children: [
                                {
                                    path: 'list',
                                    component: ContratGarantieGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client-sininstre',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientSininstreGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'nature-contrat',
                            children: [
                                {
                                    path: 'list',
                                    component: NatureContratGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'sinistre',
                            children: [
                                {
                                    path: 'list',
                                    component: SinistreGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'quittance-indemniser',
                            children: [
                                {
                                    path: 'list',
                                    component: QuittanceIndemniserGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'contrat',
                            children: [
                                {
                                    path: 'list',
                                    component: ContratGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'marque',
                            children: [
                                {
                                    path: 'list',
                                    component: MarqueGestionnaireComponent ,
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
export class AssuranceGestionnaireRoutingModule { }
