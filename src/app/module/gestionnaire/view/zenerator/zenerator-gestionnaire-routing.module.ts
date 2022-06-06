
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { GestionnaireGestionnaireComponent } from './gestionnaire-gestionnaire/gestionnaire-gestionnaire.component';



    import { AdminGestionnaireComponent } from './admin-gestionnaire/admin-gestionnaire.component';



    import { QuittancePrimeGestionnaireComponent } from './quittance-prime-gestionnaire/quittance-prime-gestionnaire.component';



    import { AgentGestionnaireComponent } from './agent-gestionnaire/agent-gestionnaire.component';



    import { ChercheurGestionnaireComponent } from './chercheur-gestionnaire/chercheur-gestionnaire.component';


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
                                    component: GestionnaireGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'admin',
                            children: [
                                {
                                    path: 'list',
                                    component: AdminGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'quittance-prime',
                            children: [
                                {
                                    path: 'list',
                                    component: QuittancePrimeGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'agent',
                            children: [
                                {
                                    path: 'list',
                                    component: AgentGestionnaireComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChercheurGestionnaireComponent ,
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
export class ZeneratorGestionnaireRoutingModule { }
