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

import { GestionnaireCreateAgentComponent } from './gestionnaire-agent/create-agent/gestionnaire-create-agent.component';
import { GestionnaireEditAgentComponent } from './gestionnaire-agent/edit-agent/gestionnaire-edit-agent.component';
import { GestionnaireViewAgentComponent } from './gestionnaire-agent/view-agent/gestionnaire-view-agent.component';
import { GestionnaireListAgentComponent } from './gestionnaire-agent/list-agent/gestionnaire-list-agent.component';
import { GestionnaireAgentComponent } from './gestionnaire-agent/gestionnaire-agent.component';
import { AdminCreateAgentComponent } from './admin-agent/create-agent/admin-create-agent.component';
import { AdminEditAgentComponent } from './admin-agent/edit-agent/admin-edit-agent.component';
import { AdminViewAgentComponent } from './admin-agent/view-agent/admin-view-agent.component';
import { AdminListAgentComponent } from './admin-agent/list-agent/admin-list-agent.component';
import { AdminAgentComponent } from './admin-agent/admin-agent.component';
import { QuittancePrimeCreateAgentComponent } from './quittance-prime-agent/create-agent/quittance-prime-create-agent.component';
import { QuittancePrimeEditAgentComponent } from './quittance-prime-agent/edit-agent/quittance-prime-edit-agent.component';
import { QuittancePrimeViewAgentComponent } from './quittance-prime-agent/view-agent/quittance-prime-view-agent.component';
import { QuittancePrimeListAgentComponent } from './quittance-prime-agent/list-agent/quittance-prime-list-agent.component';
import { QuittancePrimeAgentComponent } from './quittance-prime-agent/quittance-prime-agent.component';
import { AgentCreateAgentComponent } from './agent-agent/create-agent/agent-create-agent.component';
import { AgentEditAgentComponent } from './agent-agent/edit-agent/agent-edit-agent.component';
import { AgentViewAgentComponent } from './agent-agent/view-agent/agent-view-agent.component';
import { AgentListAgentComponent } from './agent-agent/list-agent/agent-list-agent.component';
import { AgentAgentComponent } from './agent-agent/agent-agent.component';
import { ChercheurCreateAgentComponent } from './chercheur-agent/create-agent/chercheur-create-agent.component';
import { ChercheurEditAgentComponent } from './chercheur-agent/edit-agent/chercheur-edit-agent.component';
import { ChercheurViewAgentComponent } from './chercheur-agent/view-agent/chercheur-view-agent.component';
import { ChercheurListAgentComponent } from './chercheur-agent/list-agent/chercheur-list-agent.component';
import { ChercheurAgentComponent } from './chercheur-agent/chercheur-agent.component';

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

    GestionnaireCreateAgentComponent,
    GestionnaireListAgentComponent,
    GestionnaireViewAgentComponent,
    GestionnaireEditAgentComponent,
    GestionnaireAgentComponent,
    AdminCreateAgentComponent,
    AdminListAgentComponent,
    AdminViewAgentComponent,
    AdminEditAgentComponent,
    AdminAgentComponent,
    QuittancePrimeCreateAgentComponent,
    QuittancePrimeListAgentComponent,
    QuittancePrimeViewAgentComponent,
    QuittancePrimeEditAgentComponent,
    QuittancePrimeAgentComponent,
    AgentCreateAgentComponent,
    AgentListAgentComponent,
    AgentViewAgentComponent,
    AgentEditAgentComponent,
    AgentAgentComponent,
    ChercheurCreateAgentComponent,
    ChercheurListAgentComponent,
    ChercheurViewAgentComponent,
    ChercheurEditAgentComponent,
    ChercheurAgentComponent,
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
  GestionnaireCreateAgentComponent,
  GestionnaireListAgentComponent,
  GestionnaireViewAgentComponent,
  GestionnaireEditAgentComponent,
  GestionnaireAgentComponent,
  AdminCreateAgentComponent,
  AdminListAgentComponent,
  AdminViewAgentComponent,
  AdminEditAgentComponent,
  AdminAgentComponent,
  QuittancePrimeCreateAgentComponent,
  QuittancePrimeListAgentComponent,
  QuittancePrimeViewAgentComponent,
  QuittancePrimeEditAgentComponent,
  QuittancePrimeAgentComponent,
  AgentCreateAgentComponent,
  AgentListAgentComponent,
  AgentViewAgentComponent,
  AgentEditAgentComponent,
  AgentAgentComponent,
  ChercheurCreateAgentComponent,
  ChercheurListAgentComponent,
  ChercheurViewAgentComponent,
  ChercheurEditAgentComponent,
  ChercheurAgentComponent,
  ],
  entryComponents: [],
})
export class ZeneratorAgentModule { }
