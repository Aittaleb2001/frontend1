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

import { GestionnaireCreateGestionnaireComponent } from './gestionnaire-gestionnaire/create-gestionnaire/gestionnaire-create-gestionnaire.component';
import { GestionnaireEditGestionnaireComponent } from './gestionnaire-gestionnaire/edit-gestionnaire/gestionnaire-edit-gestionnaire.component';
import { GestionnaireViewGestionnaireComponent } from './gestionnaire-gestionnaire/view-gestionnaire/gestionnaire-view-gestionnaire.component';
import { GestionnaireListGestionnaireComponent } from './gestionnaire-gestionnaire/list-gestionnaire/gestionnaire-list-gestionnaire.component';
import { GestionnaireGestionnaireComponent } from './gestionnaire-gestionnaire/gestionnaire-gestionnaire.component';
import { AdminCreateGestionnaireComponent } from './admin-gestionnaire/create-gestionnaire/admin-create-gestionnaire.component';
import { AdminEditGestionnaireComponent } from './admin-gestionnaire/edit-gestionnaire/admin-edit-gestionnaire.component';
import { AdminViewGestionnaireComponent } from './admin-gestionnaire/view-gestionnaire/admin-view-gestionnaire.component';
import { AdminListGestionnaireComponent } from './admin-gestionnaire/list-gestionnaire/admin-list-gestionnaire.component';
import { AdminGestionnaireComponent } from './admin-gestionnaire/admin-gestionnaire.component';
import { QuittancePrimeCreateGestionnaireComponent } from './quittance-prime-gestionnaire/create-gestionnaire/quittance-prime-create-gestionnaire.component';
import { QuittancePrimeEditGestionnaireComponent } from './quittance-prime-gestionnaire/edit-gestionnaire/quittance-prime-edit-gestionnaire.component';
import { QuittancePrimeViewGestionnaireComponent } from './quittance-prime-gestionnaire/view-gestionnaire/quittance-prime-view-gestionnaire.component';
import { QuittancePrimeListGestionnaireComponent } from './quittance-prime-gestionnaire/list-gestionnaire/quittance-prime-list-gestionnaire.component';
import { QuittancePrimeGestionnaireComponent } from './quittance-prime-gestionnaire/quittance-prime-gestionnaire.component';
import { AgentCreateGestionnaireComponent } from './agent-gestionnaire/create-gestionnaire/agent-create-gestionnaire.component';
import { AgentEditGestionnaireComponent } from './agent-gestionnaire/edit-gestionnaire/agent-edit-gestionnaire.component';
import { AgentViewGestionnaireComponent } from './agent-gestionnaire/view-gestionnaire/agent-view-gestionnaire.component';
import { AgentListGestionnaireComponent } from './agent-gestionnaire/list-gestionnaire/agent-list-gestionnaire.component';
import { AgentGestionnaireComponent } from './agent-gestionnaire/agent-gestionnaire.component';
import { ChercheurCreateGestionnaireComponent } from './chercheur-gestionnaire/create-gestionnaire/chercheur-create-gestionnaire.component';
import { ChercheurEditGestionnaireComponent } from './chercheur-gestionnaire/edit-gestionnaire/chercheur-edit-gestionnaire.component';
import { ChercheurViewGestionnaireComponent } from './chercheur-gestionnaire/view-gestionnaire/chercheur-view-gestionnaire.component';
import { ChercheurListGestionnaireComponent } from './chercheur-gestionnaire/list-gestionnaire/chercheur-list-gestionnaire.component';
import { ChercheurGestionnaireComponent } from './chercheur-gestionnaire/chercheur-gestionnaire.component';

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

    GestionnaireCreateGestionnaireComponent,
    GestionnaireListGestionnaireComponent,
    GestionnaireViewGestionnaireComponent,
    GestionnaireEditGestionnaireComponent,
    GestionnaireGestionnaireComponent,
    AdminCreateGestionnaireComponent,
    AdminListGestionnaireComponent,
    AdminViewGestionnaireComponent,
    AdminEditGestionnaireComponent,
    AdminGestionnaireComponent,
    QuittancePrimeCreateGestionnaireComponent,
    QuittancePrimeListGestionnaireComponent,
    QuittancePrimeViewGestionnaireComponent,
    QuittancePrimeEditGestionnaireComponent,
    QuittancePrimeGestionnaireComponent,
    AgentCreateGestionnaireComponent,
    AgentListGestionnaireComponent,
    AgentViewGestionnaireComponent,
    AgentEditGestionnaireComponent,
    AgentGestionnaireComponent,
    ChercheurCreateGestionnaireComponent,
    ChercheurListGestionnaireComponent,
    ChercheurViewGestionnaireComponent,
    ChercheurEditGestionnaireComponent,
    ChercheurGestionnaireComponent,
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
  GestionnaireCreateGestionnaireComponent,
  GestionnaireListGestionnaireComponent,
  GestionnaireViewGestionnaireComponent,
  GestionnaireEditGestionnaireComponent,
  GestionnaireGestionnaireComponent,
  AdminCreateGestionnaireComponent,
  AdminListGestionnaireComponent,
  AdminViewGestionnaireComponent,
  AdminEditGestionnaireComponent,
  AdminGestionnaireComponent,
  QuittancePrimeCreateGestionnaireComponent,
  QuittancePrimeListGestionnaireComponent,
  QuittancePrimeViewGestionnaireComponent,
  QuittancePrimeEditGestionnaireComponent,
  QuittancePrimeGestionnaireComponent,
  AgentCreateGestionnaireComponent,
  AgentListGestionnaireComponent,
  AgentViewGestionnaireComponent,
  AgentEditGestionnaireComponent,
  AgentGestionnaireComponent,
  ChercheurCreateGestionnaireComponent,
  ChercheurListGestionnaireComponent,
  ChercheurViewGestionnaireComponent,
  ChercheurEditGestionnaireComponent,
  ChercheurGestionnaireComponent,
  ],
  entryComponents: [],
})
export class ZeneratorGestionnaireModule { }
