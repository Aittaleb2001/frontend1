
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { GestionnaireAdminComponent } from './gestionnaire-admin/gestionnaire-admin.component';



    import { AdminAdminComponent } from './admin-admin/admin-admin.component';



    import { QuittancePrimeAdminComponent } from './quittance-prime-admin/quittance-prime-admin.component';



    import { AgentAdminComponent } from './agent-admin/agent-admin.component';



    import { ChercheurAdminComponent } from './chercheur-admin/chercheur-admin.component';


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


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

                            path: 'admin',
                            children: [
                                {
                                    path: 'list',
                                    component: AdminAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'quittance-prime',
                            children: [
                                {
                                    path: 'list',
                                    component: QuittancePrimeAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'agent',
                            children: [
                                {
                                    path: 'list',
                                    component: AgentAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChercheurAdminComponent ,
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
export class ZeneratorAdminRoutingModule { }
