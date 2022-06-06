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

import { GestionnaireCreateAdminComponent } from './gestionnaire-admin/create-admin/gestionnaire-create-admin.component';
import { GestionnaireEditAdminComponent } from './gestionnaire-admin/edit-admin/gestionnaire-edit-admin.component';
import { GestionnaireViewAdminComponent } from './gestionnaire-admin/view-admin/gestionnaire-view-admin.component';
import { GestionnaireListAdminComponent } from './gestionnaire-admin/list-admin/gestionnaire-list-admin.component';
import { GestionnaireAdminComponent } from './gestionnaire-admin/gestionnaire-admin.component';
import { AdminCreateAdminComponent } from './admin-admin/create-admin/admin-create-admin.component';
import { AdminEditAdminComponent } from './admin-admin/edit-admin/admin-edit-admin.component';
import { AdminViewAdminComponent } from './admin-admin/view-admin/admin-view-admin.component';
import { AdminListAdminComponent } from './admin-admin/list-admin/admin-list-admin.component';
import { AdminAdminComponent } from './admin-admin/admin-admin.component';
import { QuittancePrimeCreateAdminComponent } from './quittance-prime-admin/create-admin/quittance-prime-create-admin.component';
import { QuittancePrimeEditAdminComponent } from './quittance-prime-admin/edit-admin/quittance-prime-edit-admin.component';
import { QuittancePrimeViewAdminComponent } from './quittance-prime-admin/view-admin/quittance-prime-view-admin.component';
import { QuittancePrimeListAdminComponent } from './quittance-prime-admin/list-admin/quittance-prime-list-admin.component';
import { QuittancePrimeAdminComponent } from './quittance-prime-admin/quittance-prime-admin.component';
import { AgentCreateAdminComponent } from './agent-admin/create-admin/agent-create-admin.component';
import { AgentEditAdminComponent } from './agent-admin/edit-admin/agent-edit-admin.component';
import { AgentViewAdminComponent } from './agent-admin/view-admin/agent-view-admin.component';
import { AgentListAdminComponent } from './agent-admin/list-admin/agent-list-admin.component';
import { AgentAdminComponent } from './agent-admin/agent-admin.component';
import { ChercheurCreateAdminComponent } from './chercheur-admin/create-admin/chercheur-create-admin.component';
import { ChercheurEditAdminComponent } from './chercheur-admin/edit-admin/chercheur-edit-admin.component';
import { ChercheurViewAdminComponent } from './chercheur-admin/view-admin/chercheur-view-admin.component';
import { ChercheurListAdminComponent } from './chercheur-admin/list-admin/chercheur-list-admin.component';
import { ChercheurAdminComponent } from './chercheur-admin/chercheur-admin.component';

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

    GestionnaireCreateAdminComponent,
    GestionnaireListAdminComponent,
    GestionnaireViewAdminComponent,
    GestionnaireEditAdminComponent,
    GestionnaireAdminComponent,
    AdminCreateAdminComponent,
    AdminListAdminComponent,
    AdminViewAdminComponent,
    AdminEditAdminComponent,
    AdminAdminComponent,
    QuittancePrimeCreateAdminComponent,
    QuittancePrimeListAdminComponent,
    QuittancePrimeViewAdminComponent,
    QuittancePrimeEditAdminComponent,
    QuittancePrimeAdminComponent,
    AgentCreateAdminComponent,
    AgentListAdminComponent,
    AgentViewAdminComponent,
    AgentEditAdminComponent,
    AgentAdminComponent,
    ChercheurCreateAdminComponent,
    ChercheurListAdminComponent,
    ChercheurViewAdminComponent,
    ChercheurEditAdminComponent,
    ChercheurAdminComponent,
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
  GestionnaireCreateAdminComponent,
  GestionnaireListAdminComponent,
  GestionnaireViewAdminComponent,
  GestionnaireEditAdminComponent,
  GestionnaireAdminComponent,
  AdminCreateAdminComponent,
  AdminListAdminComponent,
  AdminViewAdminComponent,
  AdminEditAdminComponent,
  AdminAdminComponent,
  QuittancePrimeCreateAdminComponent,
  QuittancePrimeListAdminComponent,
  QuittancePrimeViewAdminComponent,
  QuittancePrimeEditAdminComponent,
  QuittancePrimeAdminComponent,
  AgentCreateAdminComponent,
  AgentListAdminComponent,
  AgentViewAdminComponent,
  AgentEditAdminComponent,
  AgentAdminComponent,
  ChercheurCreateAdminComponent,
  ChercheurListAdminComponent,
  ChercheurViewAdminComponent,
  ChercheurEditAdminComponent,
  ChercheurAdminComponent,
  ],
  entryComponents: [],
})
export class ZeneratorAdminModule { }
