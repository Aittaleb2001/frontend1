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
import { LoginGestionnaireComponent } from './login-gestionnaire/login-gestionnaire.component';
import { RegisterGestionnaireComponent } from './register-gestionnaire/register-gestionnaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import { AssuranceGestionnaireModule } from './view/assurance/assurance-gestionnaire.module';
import { AssuranceGestionnaireRoutingModule } from './view/assurance/assurance-gestionnaire-routing.module';
import { ZeneratorGestionnaireModule } from './view/zenerator/zenerator-gestionnaire.module';
import { ZeneratorGestionnaireRoutingModule } from './view/zenerator/zenerator-gestionnaire-routing.module';


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
   LoginGestionnaireComponent,
   RegisterGestionnaireComponent,
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
  AssuranceGestionnaireModule,
  AssuranceGestionnaireRoutingModule,
  ZeneratorGestionnaireModule,
  ZeneratorGestionnaireRoutingModule,
  ],
  exports: [
  LoginGestionnaireComponent,
  RegisterGestionnaireComponent,
    AssuranceGestionnaireModule,
    ZeneratorGestionnaireModule,
  ],
  entryComponents: [],
})
export class GestionnaireModule { }
