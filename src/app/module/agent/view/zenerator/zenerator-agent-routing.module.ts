
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { GestionnaireAgentComponent } from './gestionnaire-agent/gestionnaire-agent.component';



    import { AdminAgentComponent } from './admin-agent/admin-agent.component';



    import { QuittancePrimeAgentComponent } from './quittance-prime-agent/quittance-prime-agent.component';



    import { AgentAgentComponent } from './agent-agent/agent-agent.component';



    import { ChercheurAgentComponent } from './chercheur-agent/chercheur-agent.component';


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
                                    component: GestionnaireAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'admin',
                            children: [
                                {
                                    path: 'list',
                                    component: AdminAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'quittance-prime',
                            children: [
                                {
                                    path: 'list',
                                    component: QuittancePrimeAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'agent',
                            children: [
                                {
                                    path: 'list',
                                    component: AgentAgentComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChercheurAgentComponent ,
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
export class ZeneratorAgentRoutingModule { }
