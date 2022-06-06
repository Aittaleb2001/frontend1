
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { GestionnaireChercheurComponent } from './gestionnaire-chercheur/gestionnaire-chercheur.component';



    import { AdminChercheurComponent } from './admin-chercheur/admin-chercheur.component';



    import { QuittancePrimeChercheurComponent } from './quittance-prime-chercheur/quittance-prime-chercheur.component';



    import { AgentChercheurComponent } from './agent-chercheur/agent-chercheur.component';



    import { ChercheurChercheurComponent } from './chercheur-chercheur/chercheur-chercheur.component';


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
                                    component: GestionnaireChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'admin',
                            children: [
                                {
                                    path: 'list',
                                    component: AdminChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'quittance-prime',
                            children: [
                                {
                                    path: 'list',
                                    component: QuittancePrimeChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'agent',
                            children: [
                                {
                                    path: 'list',
                                    component: AgentChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChercheurChercheurComponent ,
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
export class ZeneratorChercheurRoutingModule { }
