import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import { AuthGuard } from './controller/guards/auth.guard';
import { AccessDeniedComponent } from './auth/access-denied/access-denied.component';
import { HomeComponent } from './demo/view/home/home.component';
import {LoginAdminComponent} from './module/admin/login-admin/login-admin.component';
import {RegisterAdminComponent} from './module/admin/register-admin/register-admin.component';
import {LoginChercheurComponent} from './module/chercheur/login-chercheur/login-chercheur.component';
import {RegisterChercheurComponent} from './module/chercheur/register-chercheur/register-chercheur.component';
import {LoginGestionnaireComponent} from './module/gestionnaire/login-gestionnaire/login-gestionnaire.component';
import {RegisterGestionnaireComponent} from './module/gestionnaire/register-gestionnaire/register-gestionnaire.component';
import {LoginAgentComponent} from './module/agent/login-agent/login-agent.component';
import {RegisterAgentComponent} from './module/agent/register-agent/register-agent.component';
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
          { path: '', component: HomeComponent },
        {path: 'admin/login', component: LoginAdminComponent },
        {path: 'admin/register', component: RegisterAdminComponent },
        {path: 'chercheur/login', component: LoginChercheurComponent },
        {path: 'chercheur/register', component: RegisterChercheurComponent },
        {path: 'gestionnaire/login', component: LoginGestionnaireComponent },
        {path: 'gestionnaire/register', component: RegisterGestionnaireComponent },
        {path: 'agent/login', component: LoginAgentComponent },
        {path: 'agent/register', component: RegisterAgentComponent },
         {
          path: 'app', // '\'' + root + '\'',
          component: AppMainComponent,
          children: [
            {
              path: 'admin',
              loadChildren: './module/admin/admin-routing.module#AdminRoutingModule',
              canActivate: [AuthGuard],
            },
            {
              path: 'chercheur',
              loadChildren: './module/chercheur/chercheur-routing.module#ChercheurRoutingModule',
              canActivate: [AuthGuard],
            },
            {
              path: 'gestionnaire',
              loadChildren: './module/gestionnaire/gestionnaire-routing.module#GestionnaireRoutingModule',
              canActivate: [AuthGuard],
            },
            {
              path: 'agent',
              loadChildren: './module/agent/agent-routing.module#AgentRoutingModule',
              canActivate: [AuthGuard],
            },
            { path: 'denied', component: AccessDeniedComponent },
          ],
          canActivate: [AuthGuard]
        },
      ],
      { scrollPositionRestoration: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
