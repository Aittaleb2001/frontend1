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

import { DeviseCreateAdminComponent } from './devise-admin/create-admin/devise-create-admin.component';
import { DeviseEditAdminComponent } from './devise-admin/edit-admin/devise-edit-admin.component';
import { DeviseViewAdminComponent } from './devise-admin/view-admin/devise-view-admin.component';
import { DeviseListAdminComponent } from './devise-admin/list-admin/devise-list-admin.component';
import { DeviseAdminComponent } from './devise-admin/devise-admin.component';
import { TypeClientCreateAdminComponent } from './type-client-admin/create-admin/type-client-create-admin.component';
import { TypeClientEditAdminComponent } from './type-client-admin/edit-admin/type-client-edit-admin.component';
import { TypeClientViewAdminComponent } from './type-client-admin/view-admin/type-client-view-admin.component';
import { TypeClientListAdminComponent } from './type-client-admin/list-admin/type-client-list-admin.component';
import { TypeClientAdminComponent } from './type-client-admin/type-client-admin.component';
import { TypeSinistreCreateAdminComponent } from './type-sinistre-admin/create-admin/type-sinistre-create-admin.component';
import { TypeSinistreEditAdminComponent } from './type-sinistre-admin/edit-admin/type-sinistre-edit-admin.component';
import { TypeSinistreViewAdminComponent } from './type-sinistre-admin/view-admin/type-sinistre-view-admin.component';
import { TypeSinistreListAdminComponent } from './type-sinistre-admin/list-admin/type-sinistre-list-admin.component';
import { TypeSinistreAdminComponent } from './type-sinistre-admin/type-sinistre-admin.component';
import { TypeVehiculeCreateAdminComponent } from './type-vehicule-admin/create-admin/type-vehicule-create-admin.component';
import { TypeVehiculeEditAdminComponent } from './type-vehicule-admin/edit-admin/type-vehicule-edit-admin.component';
import { TypeVehiculeViewAdminComponent } from './type-vehicule-admin/view-admin/type-vehicule-view-admin.component';
import { TypeVehiculeListAdminComponent } from './type-vehicule-admin/list-admin/type-vehicule-list-admin.component';
import { TypeVehiculeAdminComponent } from './type-vehicule-admin/type-vehicule-admin.component';
import { VehiculeCreateAdminComponent } from './vehicule-admin/create-admin/vehicule-create-admin.component';
import { VehiculeEditAdminComponent } from './vehicule-admin/edit-admin/vehicule-edit-admin.component';
import { VehiculeViewAdminComponent } from './vehicule-admin/view-admin/vehicule-view-admin.component';
import { VehiculeListAdminComponent } from './vehicule-admin/list-admin/vehicule-list-admin.component';
import { VehiculeAdminComponent } from './vehicule-admin/vehicule-admin.component';
import { CarburantCreateAdminComponent } from './carburant-admin/create-admin/carburant-create-admin.component';
import { CarburantEditAdminComponent } from './carburant-admin/edit-admin/carburant-edit-admin.component';
import { CarburantViewAdminComponent } from './carburant-admin/view-admin/carburant-view-admin.component';
import { CarburantListAdminComponent } from './carburant-admin/list-admin/carburant-list-admin.component';
import { CarburantAdminComponent } from './carburant-admin/carburant-admin.component';
import { GarantieCreateAdminComponent } from './garantie-admin/create-admin/garantie-create-admin.component';
import { GarantieEditAdminComponent } from './garantie-admin/edit-admin/garantie-edit-admin.component';
import { GarantieViewAdminComponent } from './garantie-admin/view-admin/garantie-view-admin.component';
import { GarantieListAdminComponent } from './garantie-admin/list-admin/garantie-list-admin.component';
import { GarantieAdminComponent } from './garantie-admin/garantie-admin.component';
import { ContratGarantieCreateAdminComponent } from './contrat-garantie-admin/create-admin/contrat-garantie-create-admin.component';
import { ContratGarantieEditAdminComponent } from './contrat-garantie-admin/edit-admin/contrat-garantie-edit-admin.component';
import { ContratGarantieViewAdminComponent } from './contrat-garantie-admin/view-admin/contrat-garantie-view-admin.component';
import { ContratGarantieListAdminComponent } from './contrat-garantie-admin/list-admin/contrat-garantie-list-admin.component';
import { ContratGarantieAdminComponent } from './contrat-garantie-admin/contrat-garantie-admin.component';
import { ClientSininstreCreateAdminComponent } from './client-sininstre-admin/create-admin/client-sininstre-create-admin.component';
import { ClientSininstreEditAdminComponent } from './client-sininstre-admin/edit-admin/client-sininstre-edit-admin.component';
import { ClientSininstreViewAdminComponent } from './client-sininstre-admin/view-admin/client-sininstre-view-admin.component';
import { ClientSininstreListAdminComponent } from './client-sininstre-admin/list-admin/client-sininstre-list-admin.component';
import { ClientSininstreAdminComponent } from './client-sininstre-admin/client-sininstre-admin.component';
import { ClientCreateAdminComponent } from './client-admin/create-admin/client-create-admin.component';
import { ClientEditAdminComponent } from './client-admin/edit-admin/client-edit-admin.component';
import { ClientViewAdminComponent } from './client-admin/view-admin/client-view-admin.component';
import { ClientListAdminComponent } from './client-admin/list-admin/client-list-admin.component';
import { ClientAdminComponent } from './client-admin/client-admin.component';
import { NatureContratCreateAdminComponent } from './nature-contrat-admin/create-admin/nature-contrat-create-admin.component';
import { NatureContratEditAdminComponent } from './nature-contrat-admin/edit-admin/nature-contrat-edit-admin.component';
import { NatureContratViewAdminComponent } from './nature-contrat-admin/view-admin/nature-contrat-view-admin.component';
import { NatureContratListAdminComponent } from './nature-contrat-admin/list-admin/nature-contrat-list-admin.component';
import { NatureContratAdminComponent } from './nature-contrat-admin/nature-contrat-admin.component';
import { SinistreCreateAdminComponent } from './sinistre-admin/create-admin/sinistre-create-admin.component';
import { SinistreEditAdminComponent } from './sinistre-admin/edit-admin/sinistre-edit-admin.component';
import { SinistreViewAdminComponent } from './sinistre-admin/view-admin/sinistre-view-admin.component';
import { SinistreListAdminComponent } from './sinistre-admin/list-admin/sinistre-list-admin.component';
import { SinistreAdminComponent } from './sinistre-admin/sinistre-admin.component';
import { QuittanceIndemniserCreateAdminComponent } from './quittance-indemniser-admin/create-admin/quittance-indemniser-create-admin.component';
import { QuittanceIndemniserEditAdminComponent } from './quittance-indemniser-admin/edit-admin/quittance-indemniser-edit-admin.component';
import { QuittanceIndemniserViewAdminComponent } from './quittance-indemniser-admin/view-admin/quittance-indemniser-view-admin.component';
import { QuittanceIndemniserListAdminComponent } from './quittance-indemniser-admin/list-admin/quittance-indemniser-list-admin.component';
import { QuittanceIndemniserAdminComponent } from './quittance-indemniser-admin/quittance-indemniser-admin.component';
import { ContratCreateAdminComponent } from './contrat-admin/create-admin/contrat-create-admin.component';
import { ContratEditAdminComponent } from './contrat-admin/edit-admin/contrat-edit-admin.component';
import { ContratViewAdminComponent } from './contrat-admin/view-admin/contrat-view-admin.component';
import { ContratListAdminComponent } from './contrat-admin/list-admin/contrat-list-admin.component';
import { ContratAdminComponent } from './contrat-admin/contrat-admin.component';
import { MarqueCreateAdminComponent } from './marque-admin/create-admin/marque-create-admin.component';
import { MarqueEditAdminComponent } from './marque-admin/edit-admin/marque-edit-admin.component';
import { MarqueViewAdminComponent } from './marque-admin/view-admin/marque-view-admin.component';
import { MarqueListAdminComponent } from './marque-admin/list-admin/marque-list-admin.component';
import { MarqueAdminComponent } from './marque-admin/marque-admin.component';

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

    DeviseCreateAdminComponent,
    DeviseListAdminComponent,
    DeviseViewAdminComponent,
    DeviseEditAdminComponent,
    DeviseAdminComponent,
    TypeClientCreateAdminComponent,
    TypeClientListAdminComponent,
    TypeClientViewAdminComponent,
    TypeClientEditAdminComponent,
    TypeClientAdminComponent,
    TypeSinistreCreateAdminComponent,
    TypeSinistreListAdminComponent,
    TypeSinistreViewAdminComponent,
    TypeSinistreEditAdminComponent,
    TypeSinistreAdminComponent,
    TypeVehiculeCreateAdminComponent,
    TypeVehiculeListAdminComponent,
    TypeVehiculeViewAdminComponent,
    TypeVehiculeEditAdminComponent,
    TypeVehiculeAdminComponent,
    VehiculeCreateAdminComponent,
    VehiculeListAdminComponent,
    VehiculeViewAdminComponent,
    VehiculeEditAdminComponent,
    VehiculeAdminComponent,
    CarburantCreateAdminComponent,
    CarburantListAdminComponent,
    CarburantViewAdminComponent,
    CarburantEditAdminComponent,
    CarburantAdminComponent,
    GarantieCreateAdminComponent,
    GarantieListAdminComponent,
    GarantieViewAdminComponent,
    GarantieEditAdminComponent,
    GarantieAdminComponent,
    ContratGarantieCreateAdminComponent,
    ContratGarantieListAdminComponent,
    ContratGarantieViewAdminComponent,
    ContratGarantieEditAdminComponent,
    ContratGarantieAdminComponent,
    ClientSininstreCreateAdminComponent,
    ClientSininstreListAdminComponent,
    ClientSininstreViewAdminComponent,
    ClientSininstreEditAdminComponent,
    ClientSininstreAdminComponent,
    ClientCreateAdminComponent,
    ClientListAdminComponent,
    ClientViewAdminComponent,
    ClientEditAdminComponent,
    ClientAdminComponent,
    NatureContratCreateAdminComponent,
    NatureContratListAdminComponent,
    NatureContratViewAdminComponent,
    NatureContratEditAdminComponent,
    NatureContratAdminComponent,
    SinistreCreateAdminComponent,
    SinistreListAdminComponent,
    SinistreViewAdminComponent,
    SinistreEditAdminComponent,
    SinistreAdminComponent,
    QuittanceIndemniserCreateAdminComponent,
    QuittanceIndemniserListAdminComponent,
    QuittanceIndemniserViewAdminComponent,
    QuittanceIndemniserEditAdminComponent,
    QuittanceIndemniserAdminComponent,
    ContratCreateAdminComponent,
    ContratListAdminComponent,
    ContratViewAdminComponent,
    ContratEditAdminComponent,
    ContratAdminComponent,
    MarqueCreateAdminComponent,
    MarqueListAdminComponent,
    MarqueViewAdminComponent,
    MarqueEditAdminComponent,
    MarqueAdminComponent,
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
  DeviseCreateAdminComponent,
  DeviseListAdminComponent,
  DeviseViewAdminComponent,
  DeviseEditAdminComponent,
  DeviseAdminComponent,
  TypeClientCreateAdminComponent,
  TypeClientListAdminComponent,
  TypeClientViewAdminComponent,
  TypeClientEditAdminComponent,
  TypeClientAdminComponent,
  TypeSinistreCreateAdminComponent,
  TypeSinistreListAdminComponent,
  TypeSinistreViewAdminComponent,
  TypeSinistreEditAdminComponent,
  TypeSinistreAdminComponent,
  TypeVehiculeCreateAdminComponent,
  TypeVehiculeListAdminComponent,
  TypeVehiculeViewAdminComponent,
  TypeVehiculeEditAdminComponent,
  TypeVehiculeAdminComponent,
  VehiculeCreateAdminComponent,
  VehiculeListAdminComponent,
  VehiculeViewAdminComponent,
  VehiculeEditAdminComponent,
  VehiculeAdminComponent,
  CarburantCreateAdminComponent,
  CarburantListAdminComponent,
  CarburantViewAdminComponent,
  CarburantEditAdminComponent,
  CarburantAdminComponent,
  GarantieCreateAdminComponent,
  GarantieListAdminComponent,
  GarantieViewAdminComponent,
  GarantieEditAdminComponent,
  GarantieAdminComponent,
  ContratGarantieCreateAdminComponent,
  ContratGarantieListAdminComponent,
  ContratGarantieViewAdminComponent,
  ContratGarantieEditAdminComponent,
  ContratGarantieAdminComponent,
  ClientSininstreCreateAdminComponent,
  ClientSininstreListAdminComponent,
  ClientSininstreViewAdminComponent,
  ClientSininstreEditAdminComponent,
  ClientSininstreAdminComponent,
  ClientCreateAdminComponent,
  ClientListAdminComponent,
  ClientViewAdminComponent,
  ClientEditAdminComponent,
  ClientAdminComponent,
  NatureContratCreateAdminComponent,
  NatureContratListAdminComponent,
  NatureContratViewAdminComponent,
  NatureContratEditAdminComponent,
  NatureContratAdminComponent,
  SinistreCreateAdminComponent,
  SinistreListAdminComponent,
  SinistreViewAdminComponent,
  SinistreEditAdminComponent,
  SinistreAdminComponent,
  QuittanceIndemniserCreateAdminComponent,
  QuittanceIndemniserListAdminComponent,
  QuittanceIndemniserViewAdminComponent,
  QuittanceIndemniserEditAdminComponent,
  QuittanceIndemniserAdminComponent,
  ContratCreateAdminComponent,
  ContratListAdminComponent,
  ContratViewAdminComponent,
  ContratEditAdminComponent,
  ContratAdminComponent,
  MarqueCreateAdminComponent,
  MarqueListAdminComponent,
  MarqueViewAdminComponent,
  MarqueEditAdminComponent,
  MarqueAdminComponent,
  ],
  entryComponents: [],
})
export class AssuranceAdminModule { }
