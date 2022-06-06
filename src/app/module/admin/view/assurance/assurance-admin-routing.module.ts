
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { DeviseAdminComponent } from './devise-admin/devise-admin.component';



    import { TypeClientAdminComponent } from './type-client-admin/type-client-admin.component';



    import { TypeSinistreAdminComponent } from './type-sinistre-admin/type-sinistre-admin.component';



    import { TypeVehiculeAdminComponent } from './type-vehicule-admin/type-vehicule-admin.component';



    import { VehiculeAdminComponent } from './vehicule-admin/vehicule-admin.component';



    import { CarburantAdminComponent } from './carburant-admin/carburant-admin.component';



    import { GarantieAdminComponent } from './garantie-admin/garantie-admin.component';



    import { ContratGarantieAdminComponent } from './contrat-garantie-admin/contrat-garantie-admin.component';



    import { ClientSininstreAdminComponent } from './client-sininstre-admin/client-sininstre-admin.component';



    import { ClientAdminComponent } from './client-admin/client-admin.component';



    import { NatureContratAdminComponent } from './nature-contrat-admin/nature-contrat-admin.component';



    import { SinistreAdminComponent } from './sinistre-admin/sinistre-admin.component';



    import { QuittanceIndemniserAdminComponent } from './quittance-indemniser-admin/quittance-indemniser-admin.component';



    import { ContratAdminComponent } from './contrat-admin/contrat-admin.component';



    import { MarqueAdminComponent } from './marque-admin/marque-admin.component';


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
                                    component: DeviseAdminComponent ,
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

                            path: 'garantie',
                            children: [
                                {
                                    path: 'list',
                                    component: GarantieAdminComponent ,
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

                            path: 'client-sininstre',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientSininstreAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientAdminComponent ,
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

                            path: 'contrat',
                            children: [
                                {
                                    path: 'list',
                                    component: ContratAdminComponent ,
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

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AssuranceAdminRoutingModule { }
