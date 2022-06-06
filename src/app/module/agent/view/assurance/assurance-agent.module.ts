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

import { DeviseCreateAgentComponent } from './devise-agent/create-agent/devise-create-agent.component';
import { DeviseEditAgentComponent } from './devise-agent/edit-agent/devise-edit-agent.component';
import { DeviseViewAgentComponent } from './devise-agent/view-agent/devise-view-agent.component';
import { DeviseListAgentComponent } from './devise-agent/list-agent/devise-list-agent.component';
import { DeviseAgentComponent } from './devise-agent/devise-agent.component';
import { TypeClientCreateAgentComponent } from './type-client-agent/create-agent/type-client-create-agent.component';
import { TypeClientEditAgentComponent } from './type-client-agent/edit-agent/type-client-edit-agent.component';
import { TypeClientViewAgentComponent } from './type-client-agent/view-agent/type-client-view-agent.component';
import { TypeClientListAgentComponent } from './type-client-agent/list-agent/type-client-list-agent.component';
import { TypeClientAgentComponent } from './type-client-agent/type-client-agent.component';
import { TypeSinistreCreateAgentComponent } from './type-sinistre-agent/create-agent/type-sinistre-create-agent.component';
import { TypeSinistreEditAgentComponent } from './type-sinistre-agent/edit-agent/type-sinistre-edit-agent.component';
import { TypeSinistreViewAgentComponent } from './type-sinistre-agent/view-agent/type-sinistre-view-agent.component';
import { TypeSinistreListAgentComponent } from './type-sinistre-agent/list-agent/type-sinistre-list-agent.component';
import { TypeSinistreAgentComponent } from './type-sinistre-agent/type-sinistre-agent.component';
import { TypeVehiculeCreateAgentComponent } from './type-vehicule-agent/create-agent/type-vehicule-create-agent.component';
import { TypeVehiculeEditAgentComponent } from './type-vehicule-agent/edit-agent/type-vehicule-edit-agent.component';
import { TypeVehiculeViewAgentComponent } from './type-vehicule-agent/view-agent/type-vehicule-view-agent.component';
import { TypeVehiculeListAgentComponent } from './type-vehicule-agent/list-agent/type-vehicule-list-agent.component';
import { TypeVehiculeAgentComponent } from './type-vehicule-agent/type-vehicule-agent.component';
import { VehiculeCreateAgentComponent } from './vehicule-agent/create-agent/vehicule-create-agent.component';
import { VehiculeEditAgentComponent } from './vehicule-agent/edit-agent/vehicule-edit-agent.component';
import { VehiculeViewAgentComponent } from './vehicule-agent/view-agent/vehicule-view-agent.component';
import { VehiculeListAgentComponent } from './vehicule-agent/list-agent/vehicule-list-agent.component';
import { VehiculeAgentComponent } from './vehicule-agent/vehicule-agent.component';
import { CarburantCreateAgentComponent } from './carburant-agent/create-agent/carburant-create-agent.component';
import { CarburantEditAgentComponent } from './carburant-agent/edit-agent/carburant-edit-agent.component';
import { CarburantViewAgentComponent } from './carburant-agent/view-agent/carburant-view-agent.component';
import { CarburantListAgentComponent } from './carburant-agent/list-agent/carburant-list-agent.component';
import { CarburantAgentComponent } from './carburant-agent/carburant-agent.component';
import { GarantieCreateAgentComponent } from './garantie-agent/create-agent/garantie-create-agent.component';
import { GarantieEditAgentComponent } from './garantie-agent/edit-agent/garantie-edit-agent.component';
import { GarantieViewAgentComponent } from './garantie-agent/view-agent/garantie-view-agent.component';
import { GarantieListAgentComponent } from './garantie-agent/list-agent/garantie-list-agent.component';
import { GarantieAgentComponent } from './garantie-agent/garantie-agent.component';
import { ContratGarantieCreateAgentComponent } from './contrat-garantie-agent/create-agent/contrat-garantie-create-agent.component';
import { ContratGarantieEditAgentComponent } from './contrat-garantie-agent/edit-agent/contrat-garantie-edit-agent.component';
import { ContratGarantieViewAgentComponent } from './contrat-garantie-agent/view-agent/contrat-garantie-view-agent.component';
import { ContratGarantieListAgentComponent } from './contrat-garantie-agent/list-agent/contrat-garantie-list-agent.component';
import { ContratGarantieAgentComponent } from './contrat-garantie-agent/contrat-garantie-agent.component';
import { ClientSininstreCreateAgentComponent } from './client-sininstre-agent/create-agent/client-sininstre-create-agent.component';
import { ClientSininstreEditAgentComponent } from './client-sininstre-agent/edit-agent/client-sininstre-edit-agent.component';
import { ClientSininstreViewAgentComponent } from './client-sininstre-agent/view-agent/client-sininstre-view-agent.component';
import { ClientSininstreListAgentComponent } from './client-sininstre-agent/list-agent/client-sininstre-list-agent.component';
import { ClientSininstreAgentComponent } from './client-sininstre-agent/client-sininstre-agent.component';
import { ClientCreateAgentComponent } from './client-agent/create-agent/client-create-agent.component';
import { ClientEditAgentComponent } from './client-agent/edit-agent/client-edit-agent.component';
import { ClientViewAgentComponent } from './client-agent/view-agent/client-view-agent.component';
import { ClientListAgentComponent } from './client-agent/list-agent/client-list-agent.component';
import { ClientAgentComponent } from './client-agent/client-agent.component';
import { NatureContratCreateAgentComponent } from './nature-contrat-agent/create-agent/nature-contrat-create-agent.component';
import { NatureContratEditAgentComponent } from './nature-contrat-agent/edit-agent/nature-contrat-edit-agent.component';
import { NatureContratViewAgentComponent } from './nature-contrat-agent/view-agent/nature-contrat-view-agent.component';
import { NatureContratListAgentComponent } from './nature-contrat-agent/list-agent/nature-contrat-list-agent.component';
import { NatureContratAgentComponent } from './nature-contrat-agent/nature-contrat-agent.component';
import { SinistreCreateAgentComponent } from './sinistre-agent/create-agent/sinistre-create-agent.component';
import { SinistreEditAgentComponent } from './sinistre-agent/edit-agent/sinistre-edit-agent.component';
import { SinistreViewAgentComponent } from './sinistre-agent/view-agent/sinistre-view-agent.component';
import { SinistreListAgentComponent } from './sinistre-agent/list-agent/sinistre-list-agent.component';
import { SinistreAgentComponent } from './sinistre-agent/sinistre-agent.component';
import { QuittanceIndemniserCreateAgentComponent } from './quittance-indemniser-agent/create-agent/quittance-indemniser-create-agent.component';
import { QuittanceIndemniserEditAgentComponent } from './quittance-indemniser-agent/edit-agent/quittance-indemniser-edit-agent.component';
import { QuittanceIndemniserViewAgentComponent } from './quittance-indemniser-agent/view-agent/quittance-indemniser-view-agent.component';
import { QuittanceIndemniserListAgentComponent } from './quittance-indemniser-agent/list-agent/quittance-indemniser-list-agent.component';
import { QuittanceIndemniserAgentComponent } from './quittance-indemniser-agent/quittance-indemniser-agent.component';
import { ContratCreateAgentComponent } from './contrat-agent/create-agent/contrat-create-agent.component';
import { ContratEditAgentComponent } from './contrat-agent/edit-agent/contrat-edit-agent.component';
import { ContratViewAgentComponent } from './contrat-agent/view-agent/contrat-view-agent.component';
import { ContratListAgentComponent } from './contrat-agent/list-agent/contrat-list-agent.component';
import { ContratAgentComponent } from './contrat-agent/contrat-agent.component';
import { MarqueCreateAgentComponent } from './marque-agent/create-agent/marque-create-agent.component';
import { MarqueEditAgentComponent } from './marque-agent/edit-agent/marque-edit-agent.component';
import { MarqueViewAgentComponent } from './marque-agent/view-agent/marque-view-agent.component';
import { MarqueListAgentComponent } from './marque-agent/list-agent/marque-list-agent.component';
import { MarqueAgentComponent } from './marque-agent/marque-agent.component';

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

    DeviseCreateAgentComponent,
    DeviseListAgentComponent,
    DeviseViewAgentComponent,
    DeviseEditAgentComponent,
    DeviseAgentComponent,
    TypeClientCreateAgentComponent,
    TypeClientListAgentComponent,
    TypeClientViewAgentComponent,
    TypeClientEditAgentComponent,
    TypeClientAgentComponent,
    TypeSinistreCreateAgentComponent,
    TypeSinistreListAgentComponent,
    TypeSinistreViewAgentComponent,
    TypeSinistreEditAgentComponent,
    TypeSinistreAgentComponent,
    TypeVehiculeCreateAgentComponent,
    TypeVehiculeListAgentComponent,
    TypeVehiculeViewAgentComponent,
    TypeVehiculeEditAgentComponent,
    TypeVehiculeAgentComponent,
    VehiculeCreateAgentComponent,
    VehiculeListAgentComponent,
    VehiculeViewAgentComponent,
    VehiculeEditAgentComponent,
    VehiculeAgentComponent,
    CarburantCreateAgentComponent,
    CarburantListAgentComponent,
    CarburantViewAgentComponent,
    CarburantEditAgentComponent,
    CarburantAgentComponent,
    GarantieCreateAgentComponent,
    GarantieListAgentComponent,
    GarantieViewAgentComponent,
    GarantieEditAgentComponent,
    GarantieAgentComponent,
    ContratGarantieCreateAgentComponent,
    ContratGarantieListAgentComponent,
    ContratGarantieViewAgentComponent,
    ContratGarantieEditAgentComponent,
    ContratGarantieAgentComponent,
    ClientSininstreCreateAgentComponent,
    ClientSininstreListAgentComponent,
    ClientSininstreViewAgentComponent,
    ClientSininstreEditAgentComponent,
    ClientSininstreAgentComponent,
    ClientCreateAgentComponent,
    ClientListAgentComponent,
    ClientViewAgentComponent,
    ClientEditAgentComponent,
    ClientAgentComponent,
    NatureContratCreateAgentComponent,
    NatureContratListAgentComponent,
    NatureContratViewAgentComponent,
    NatureContratEditAgentComponent,
    NatureContratAgentComponent,
    SinistreCreateAgentComponent,
    SinistreListAgentComponent,
    SinistreViewAgentComponent,
    SinistreEditAgentComponent,
    SinistreAgentComponent,
    QuittanceIndemniserCreateAgentComponent,
    QuittanceIndemniserListAgentComponent,
    QuittanceIndemniserViewAgentComponent,
    QuittanceIndemniserEditAgentComponent,
    QuittanceIndemniserAgentComponent,
    ContratCreateAgentComponent,
    ContratListAgentComponent,
    ContratViewAgentComponent,
    ContratEditAgentComponent,
    ContratAgentComponent,
    MarqueCreateAgentComponent,
    MarqueListAgentComponent,
    MarqueViewAgentComponent,
    MarqueEditAgentComponent,
    MarqueAgentComponent,
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
  DeviseCreateAgentComponent,
  DeviseListAgentComponent,
  DeviseViewAgentComponent,
  DeviseEditAgentComponent,
  DeviseAgentComponent,
  TypeClientCreateAgentComponent,
  TypeClientListAgentComponent,
  TypeClientViewAgentComponent,
  TypeClientEditAgentComponent,
  TypeClientAgentComponent,
  TypeSinistreCreateAgentComponent,
  TypeSinistreListAgentComponent,
  TypeSinistreViewAgentComponent,
  TypeSinistreEditAgentComponent,
  TypeSinistreAgentComponent,
  TypeVehiculeCreateAgentComponent,
  TypeVehiculeListAgentComponent,
  TypeVehiculeViewAgentComponent,
  TypeVehiculeEditAgentComponent,
  TypeVehiculeAgentComponent,
  VehiculeCreateAgentComponent,
  VehiculeListAgentComponent,
  VehiculeViewAgentComponent,
  VehiculeEditAgentComponent,
  VehiculeAgentComponent,
  CarburantCreateAgentComponent,
  CarburantListAgentComponent,
  CarburantViewAgentComponent,
  CarburantEditAgentComponent,
  CarburantAgentComponent,
  GarantieCreateAgentComponent,
  GarantieListAgentComponent,
  GarantieViewAgentComponent,
  GarantieEditAgentComponent,
  GarantieAgentComponent,
  ContratGarantieCreateAgentComponent,
  ContratGarantieListAgentComponent,
  ContratGarantieViewAgentComponent,
  ContratGarantieEditAgentComponent,
  ContratGarantieAgentComponent,
  ClientSininstreCreateAgentComponent,
  ClientSininstreListAgentComponent,
  ClientSininstreViewAgentComponent,
  ClientSininstreEditAgentComponent,
  ClientSininstreAgentComponent,
  ClientCreateAgentComponent,
  ClientListAgentComponent,
  ClientViewAgentComponent,
  ClientEditAgentComponent,
  ClientAgentComponent,
  NatureContratCreateAgentComponent,
  NatureContratListAgentComponent,
  NatureContratViewAgentComponent,
  NatureContratEditAgentComponent,
  NatureContratAgentComponent,
  SinistreCreateAgentComponent,
  SinistreListAgentComponent,
  SinistreViewAgentComponent,
  SinistreEditAgentComponent,
  SinistreAgentComponent,
  QuittanceIndemniserCreateAgentComponent,
  QuittanceIndemniserListAgentComponent,
  QuittanceIndemniserViewAgentComponent,
  QuittanceIndemniserEditAgentComponent,
  QuittanceIndemniserAgentComponent,
  ContratCreateAgentComponent,
  ContratListAgentComponent,
  ContratViewAgentComponent,
  ContratEditAgentComponent,
  ContratAgentComponent,
  MarqueCreateAgentComponent,
  MarqueListAgentComponent,
  MarqueViewAgentComponent,
  MarqueEditAgentComponent,
  MarqueAgentComponent,
  ],
  entryComponents: [],
})
export class AssuranceAgentModule { }
