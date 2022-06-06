import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';

import { GestionnaireCreateChercheurComponent } from './gestionnaire-chercheur/create-chercheur/gestionnaire-create-chercheur.component';
import { GestionnaireEditChercheurComponent } from './gestionnaire-chercheur/edit-chercheur/gestionnaire-edit-chercheur.component';
import { GestionnaireViewChercheurComponent } from './gestionnaire-chercheur/view-chercheur/gestionnaire-view-chercheur.component';
import { GestionnaireListChercheurComponent } from './gestionnaire-chercheur/list-chercheur/gestionnaire-list-chercheur.component';
import { GestionnaireChercheurComponent } from './gestionnaire-chercheur/gestionnaire-chercheur.component';
import { AdminCreateChercheurComponent } from './admin-chercheur/create-chercheur/admin-create-chercheur.component';
import { AdminEditChercheurComponent } from './admin-chercheur/edit-chercheur/admin-edit-chercheur.component';
import { AdminViewChercheurComponent } from './admin-chercheur/view-chercheur/admin-view-chercheur.component';
import { AdminListChercheurComponent } from './admin-chercheur/list-chercheur/admin-list-chercheur.component';
import { AdminChercheurComponent } from './admin-chercheur/admin-chercheur.component';
import { QuittancePrimeCreateChercheurComponent } from './quittance-prime-chercheur/create-chercheur/quittance-prime-create-chercheur.component';
import { QuittancePrimeEditChercheurComponent } from './quittance-prime-chercheur/edit-chercheur/quittance-prime-edit-chercheur.component';
import { QuittancePrimeViewChercheurComponent } from './quittance-prime-chercheur/view-chercheur/quittance-prime-view-chercheur.component';
import { QuittancePrimeListChercheurComponent } from './quittance-prime-chercheur/list-chercheur/quittance-prime-list-chercheur.component';
import { QuittancePrimeChercheurComponent } from './quittance-prime-chercheur/quittance-prime-chercheur.component';
import { AgentCreateChercheurComponent } from './agent-chercheur/create-chercheur/agent-create-chercheur.component';
import { AgentEditChercheurComponent } from './agent-chercheur/edit-chercheur/agent-edit-chercheur.component';
import { AgentViewChercheurComponent } from './agent-chercheur/view-chercheur/agent-view-chercheur.component';
import { AgentListChercheurComponent } from './agent-chercheur/list-chercheur/agent-list-chercheur.component';
import { AgentChercheurComponent } from './agent-chercheur/agent-chercheur.component';
import { ChercheurCreateChercheurComponent } from './chercheur-chercheur/create-chercheur/chercheur-create-chercheur.component';
import { ChercheurEditChercheurComponent } from './chercheur-chercheur/edit-chercheur/chercheur-edit-chercheur.component';
import { ChercheurViewChercheurComponent } from './chercheur-chercheur/view-chercheur/chercheur-view-chercheur.component';
import { ChercheurListChercheurComponent } from './chercheur-chercheur/list-chercheur/chercheur-list-chercheur.component';
import { ChercheurChercheurComponent } from './chercheur-chercheur/chercheur-chercheur.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';


@NgModule({
  declarations: [

    GestionnaireCreateChercheurComponent,
    GestionnaireListChercheurComponent,
    GestionnaireViewChercheurComponent,
    GestionnaireEditChercheurComponent,
    GestionnaireChercheurComponent,
    AdminCreateChercheurComponent,
    AdminListChercheurComponent,
    AdminViewChercheurComponent,
    AdminEditChercheurComponent,
    AdminChercheurComponent,
    QuittancePrimeCreateChercheurComponent,
    QuittancePrimeListChercheurComponent,
    QuittancePrimeViewChercheurComponent,
    QuittancePrimeEditChercheurComponent,
    QuittancePrimeChercheurComponent,
    AgentCreateChercheurComponent,
    AgentListChercheurComponent,
    AgentViewChercheurComponent,
    AgentEditChercheurComponent,
    AgentChercheurComponent,
    ChercheurCreateChercheurComponent,
    ChercheurListChercheurComponent,
    ChercheurViewChercheurComponent,
    ChercheurEditChercheurComponent,
    ChercheurChercheurComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
  ],
  exports: [
  GestionnaireCreateChercheurComponent,
  GestionnaireListChercheurComponent,
  GestionnaireViewChercheurComponent,
  GestionnaireEditChercheurComponent,
  GestionnaireChercheurComponent,
  AdminCreateChercheurComponent,
  AdminListChercheurComponent,
  AdminViewChercheurComponent,
  AdminEditChercheurComponent,
  AdminChercheurComponent,
  QuittancePrimeCreateChercheurComponent,
  QuittancePrimeListChercheurComponent,
  QuittancePrimeViewChercheurComponent,
  QuittancePrimeEditChercheurComponent,
  QuittancePrimeChercheurComponent,
  AgentCreateChercheurComponent,
  AgentListChercheurComponent,
  AgentViewChercheurComponent,
  AgentEditChercheurComponent,
  AgentChercheurComponent,
  ChercheurCreateChercheurComponent,
  ChercheurListChercheurComponent,
  ChercheurViewChercheurComponent,
  ChercheurEditChercheurComponent,
  ChercheurChercheurComponent,
  ],
  entryComponents: [],
})
export class ZeneratorChercheurModule { }
