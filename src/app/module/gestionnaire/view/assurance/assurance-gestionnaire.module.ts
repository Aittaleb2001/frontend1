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

import { DeviseCreateGestionnaireComponent } from './devise-gestionnaire/create-gestionnaire/devise-create-gestionnaire.component';
import { DeviseEditGestionnaireComponent } from './devise-gestionnaire/edit-gestionnaire/devise-edit-gestionnaire.component';
import { DeviseViewGestionnaireComponent } from './devise-gestionnaire/view-gestionnaire/devise-view-gestionnaire.component';
import { DeviseListGestionnaireComponent } from './devise-gestionnaire/list-gestionnaire/devise-list-gestionnaire.component';
import { DeviseGestionnaireComponent } from './devise-gestionnaire/devise-gestionnaire.component';
import { TypeClientCreateGestionnaireComponent } from './type-client-gestionnaire/create-gestionnaire/type-client-create-gestionnaire.component';
import { TypeClientEditGestionnaireComponent } from './type-client-gestionnaire/edit-gestionnaire/type-client-edit-gestionnaire.component';
import { TypeClientViewGestionnaireComponent } from './type-client-gestionnaire/view-gestionnaire/type-client-view-gestionnaire.component';
import { TypeClientListGestionnaireComponent } from './type-client-gestionnaire/list-gestionnaire/type-client-list-gestionnaire.component';
import { TypeClientGestionnaireComponent } from './type-client-gestionnaire/type-client-gestionnaire.component';
import { TypeSinistreCreateGestionnaireComponent } from './type-sinistre-gestionnaire/create-gestionnaire/type-sinistre-create-gestionnaire.component';
import { TypeSinistreEditGestionnaireComponent } from './type-sinistre-gestionnaire/edit-gestionnaire/type-sinistre-edit-gestionnaire.component';
import { TypeSinistreViewGestionnaireComponent } from './type-sinistre-gestionnaire/view-gestionnaire/type-sinistre-view-gestionnaire.component';
import { TypeSinistreListGestionnaireComponent } from './type-sinistre-gestionnaire/list-gestionnaire/type-sinistre-list-gestionnaire.component';
import { TypeSinistreGestionnaireComponent } from './type-sinistre-gestionnaire/type-sinistre-gestionnaire.component';
import { TypeVehiculeCreateGestionnaireComponent } from './type-vehicule-gestionnaire/create-gestionnaire/type-vehicule-create-gestionnaire.component';
import { TypeVehiculeEditGestionnaireComponent } from './type-vehicule-gestionnaire/edit-gestionnaire/type-vehicule-edit-gestionnaire.component';
import { TypeVehiculeViewGestionnaireComponent } from './type-vehicule-gestionnaire/view-gestionnaire/type-vehicule-view-gestionnaire.component';
import { TypeVehiculeListGestionnaireComponent } from './type-vehicule-gestionnaire/list-gestionnaire/type-vehicule-list-gestionnaire.component';
import { TypeVehiculeGestionnaireComponent } from './type-vehicule-gestionnaire/type-vehicule-gestionnaire.component';
import { VehiculeCreateGestionnaireComponent } from './vehicule-gestionnaire/create-gestionnaire/vehicule-create-gestionnaire.component';
import { VehiculeEditGestionnaireComponent } from './vehicule-gestionnaire/edit-gestionnaire/vehicule-edit-gestionnaire.component';
import { VehiculeViewGestionnaireComponent } from './vehicule-gestionnaire/view-gestionnaire/vehicule-view-gestionnaire.component';
import { VehiculeListGestionnaireComponent } from './vehicule-gestionnaire/list-gestionnaire/vehicule-list-gestionnaire.component';
import { VehiculeGestionnaireComponent } from './vehicule-gestionnaire/vehicule-gestionnaire.component';
import { CarburantCreateGestionnaireComponent } from './carburant-gestionnaire/create-gestionnaire/carburant-create-gestionnaire.component';
import { CarburantEditGestionnaireComponent } from './carburant-gestionnaire/edit-gestionnaire/carburant-edit-gestionnaire.component';
import { CarburantViewGestionnaireComponent } from './carburant-gestionnaire/view-gestionnaire/carburant-view-gestionnaire.component';
import { CarburantListGestionnaireComponent } from './carburant-gestionnaire/list-gestionnaire/carburant-list-gestionnaire.component';
import { CarburantGestionnaireComponent } from './carburant-gestionnaire/carburant-gestionnaire.component';
import { GarantieCreateGestionnaireComponent } from './garantie-gestionnaire/create-gestionnaire/garantie-create-gestionnaire.component';
import { GarantieEditGestionnaireComponent } from './garantie-gestionnaire/edit-gestionnaire/garantie-edit-gestionnaire.component';
import { GarantieViewGestionnaireComponent } from './garantie-gestionnaire/view-gestionnaire/garantie-view-gestionnaire.component';
import { GarantieListGestionnaireComponent } from './garantie-gestionnaire/list-gestionnaire/garantie-list-gestionnaire.component';
import { GarantieGestionnaireComponent } from './garantie-gestionnaire/garantie-gestionnaire.component';
import { ContratGarantieCreateGestionnaireComponent } from './contrat-garantie-gestionnaire/create-gestionnaire/contrat-garantie-create-gestionnaire.component';
import { ContratGarantieEditGestionnaireComponent } from './contrat-garantie-gestionnaire/edit-gestionnaire/contrat-garantie-edit-gestionnaire.component';
import { ContratGarantieViewGestionnaireComponent } from './contrat-garantie-gestionnaire/view-gestionnaire/contrat-garantie-view-gestionnaire.component';
import { ContratGarantieListGestionnaireComponent } from './contrat-garantie-gestionnaire/list-gestionnaire/contrat-garantie-list-gestionnaire.component';
import { ContratGarantieGestionnaireComponent } from './contrat-garantie-gestionnaire/contrat-garantie-gestionnaire.component';
import { ClientSininstreCreateGestionnaireComponent } from './client-sininstre-gestionnaire/create-gestionnaire/client-sininstre-create-gestionnaire.component';
import { ClientSininstreEditGestionnaireComponent } from './client-sininstre-gestionnaire/edit-gestionnaire/client-sininstre-edit-gestionnaire.component';
import { ClientSininstreViewGestionnaireComponent } from './client-sininstre-gestionnaire/view-gestionnaire/client-sininstre-view-gestionnaire.component';
import { ClientSininstreListGestionnaireComponent } from './client-sininstre-gestionnaire/list-gestionnaire/client-sininstre-list-gestionnaire.component';
import { ClientSininstreGestionnaireComponent } from './client-sininstre-gestionnaire/client-sininstre-gestionnaire.component';
import { ClientCreateGestionnaireComponent } from './client-gestionnaire/create-gestionnaire/client-create-gestionnaire.component';
import { ClientEditGestionnaireComponent } from './client-gestionnaire/edit-gestionnaire/client-edit-gestionnaire.component';
import { ClientViewGestionnaireComponent } from './client-gestionnaire/view-gestionnaire/client-view-gestionnaire.component';
import { ClientListGestionnaireComponent } from './client-gestionnaire/list-gestionnaire/client-list-gestionnaire.component';
import { ClientGestionnaireComponent } from './client-gestionnaire/client-gestionnaire.component';
import { NatureContratCreateGestionnaireComponent } from './nature-contrat-gestionnaire/create-gestionnaire/nature-contrat-create-gestionnaire.component';
import { NatureContratEditGestionnaireComponent } from './nature-contrat-gestionnaire/edit-gestionnaire/nature-contrat-edit-gestionnaire.component';
import { NatureContratViewGestionnaireComponent } from './nature-contrat-gestionnaire/view-gestionnaire/nature-contrat-view-gestionnaire.component';
import { NatureContratListGestionnaireComponent } from './nature-contrat-gestionnaire/list-gestionnaire/nature-contrat-list-gestionnaire.component';
import { NatureContratGestionnaireComponent } from './nature-contrat-gestionnaire/nature-contrat-gestionnaire.component';
import { SinistreCreateGestionnaireComponent } from './sinistre-gestionnaire/create-gestionnaire/sinistre-create-gestionnaire.component';
import { SinistreEditGestionnaireComponent } from './sinistre-gestionnaire/edit-gestionnaire/sinistre-edit-gestionnaire.component';
import { SinistreViewGestionnaireComponent } from './sinistre-gestionnaire/view-gestionnaire/sinistre-view-gestionnaire.component';
import { SinistreListGestionnaireComponent } from './sinistre-gestionnaire/list-gestionnaire/sinistre-list-gestionnaire.component';
import { SinistreGestionnaireComponent } from './sinistre-gestionnaire/sinistre-gestionnaire.component';
import { QuittanceIndemniserCreateGestionnaireComponent } from './quittance-indemniser-gestionnaire/create-gestionnaire/quittance-indemniser-create-gestionnaire.component';
import { QuittanceIndemniserEditGestionnaireComponent } from './quittance-indemniser-gestionnaire/edit-gestionnaire/quittance-indemniser-edit-gestionnaire.component';
import { QuittanceIndemniserViewGestionnaireComponent } from './quittance-indemniser-gestionnaire/view-gestionnaire/quittance-indemniser-view-gestionnaire.component';
import { QuittanceIndemniserListGestionnaireComponent } from './quittance-indemniser-gestionnaire/list-gestionnaire/quittance-indemniser-list-gestionnaire.component';
import { QuittanceIndemniserGestionnaireComponent } from './quittance-indemniser-gestionnaire/quittance-indemniser-gestionnaire.component';
import { ContratCreateGestionnaireComponent } from './contrat-gestionnaire/create-gestionnaire/contrat-create-gestionnaire.component';
import { ContratEditGestionnaireComponent } from './contrat-gestionnaire/edit-gestionnaire/contrat-edit-gestionnaire.component';
import { ContratViewGestionnaireComponent } from './contrat-gestionnaire/view-gestionnaire/contrat-view-gestionnaire.component';
import { ContratListGestionnaireComponent } from './contrat-gestionnaire/list-gestionnaire/contrat-list-gestionnaire.component';
import { ContratGestionnaireComponent } from './contrat-gestionnaire/contrat-gestionnaire.component';
import { MarqueCreateGestionnaireComponent } from './marque-gestionnaire/create-gestionnaire/marque-create-gestionnaire.component';
import { MarqueEditGestionnaireComponent } from './marque-gestionnaire/edit-gestionnaire/marque-edit-gestionnaire.component';
import { MarqueViewGestionnaireComponent } from './marque-gestionnaire/view-gestionnaire/marque-view-gestionnaire.component';
import { MarqueListGestionnaireComponent } from './marque-gestionnaire/list-gestionnaire/marque-list-gestionnaire.component';
import { MarqueGestionnaireComponent } from './marque-gestionnaire/marque-gestionnaire.component';

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

    DeviseCreateGestionnaireComponent,
    DeviseListGestionnaireComponent,
    DeviseViewGestionnaireComponent,
    DeviseEditGestionnaireComponent,
    DeviseGestionnaireComponent,
    TypeClientCreateGestionnaireComponent,
    TypeClientListGestionnaireComponent,
    TypeClientViewGestionnaireComponent,
    TypeClientEditGestionnaireComponent,
    TypeClientGestionnaireComponent,
    TypeSinistreCreateGestionnaireComponent,
    TypeSinistreListGestionnaireComponent,
    TypeSinistreViewGestionnaireComponent,
    TypeSinistreEditGestionnaireComponent,
    TypeSinistreGestionnaireComponent,
    TypeVehiculeCreateGestionnaireComponent,
    TypeVehiculeListGestionnaireComponent,
    TypeVehiculeViewGestionnaireComponent,
    TypeVehiculeEditGestionnaireComponent,
    TypeVehiculeGestionnaireComponent,
    VehiculeCreateGestionnaireComponent,
    VehiculeListGestionnaireComponent,
    VehiculeViewGestionnaireComponent,
    VehiculeEditGestionnaireComponent,
    VehiculeGestionnaireComponent,
    CarburantCreateGestionnaireComponent,
    CarburantListGestionnaireComponent,
    CarburantViewGestionnaireComponent,
    CarburantEditGestionnaireComponent,
    CarburantGestionnaireComponent,
    GarantieCreateGestionnaireComponent,
    GarantieListGestionnaireComponent,
    GarantieViewGestionnaireComponent,
    GarantieEditGestionnaireComponent,
    GarantieGestionnaireComponent,
    ContratGarantieCreateGestionnaireComponent,
    ContratGarantieListGestionnaireComponent,
    ContratGarantieViewGestionnaireComponent,
    ContratGarantieEditGestionnaireComponent,
    ContratGarantieGestionnaireComponent,
    ClientSininstreCreateGestionnaireComponent,
    ClientSininstreListGestionnaireComponent,
    ClientSininstreViewGestionnaireComponent,
    ClientSininstreEditGestionnaireComponent,
    ClientSininstreGestionnaireComponent,
    ClientCreateGestionnaireComponent,
    ClientListGestionnaireComponent,
    ClientViewGestionnaireComponent,
    ClientEditGestionnaireComponent,
    ClientGestionnaireComponent,
    NatureContratCreateGestionnaireComponent,
    NatureContratListGestionnaireComponent,
    NatureContratViewGestionnaireComponent,
    NatureContratEditGestionnaireComponent,
    NatureContratGestionnaireComponent,
    SinistreCreateGestionnaireComponent,
    SinistreListGestionnaireComponent,
    SinistreViewGestionnaireComponent,
    SinistreEditGestionnaireComponent,
    SinistreGestionnaireComponent,
    QuittanceIndemniserCreateGestionnaireComponent,
    QuittanceIndemniserListGestionnaireComponent,
    QuittanceIndemniserViewGestionnaireComponent,
    QuittanceIndemniserEditGestionnaireComponent,
    QuittanceIndemniserGestionnaireComponent,
    ContratCreateGestionnaireComponent,
    ContratListGestionnaireComponent,
    ContratViewGestionnaireComponent,
    ContratEditGestionnaireComponent,
    ContratGestionnaireComponent,
    MarqueCreateGestionnaireComponent,
    MarqueListGestionnaireComponent,
    MarqueViewGestionnaireComponent,
    MarqueEditGestionnaireComponent,
    MarqueGestionnaireComponent,
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
  DeviseCreateGestionnaireComponent,
  DeviseListGestionnaireComponent,
  DeviseViewGestionnaireComponent,
  DeviseEditGestionnaireComponent,
  DeviseGestionnaireComponent,
  TypeClientCreateGestionnaireComponent,
  TypeClientListGestionnaireComponent,
  TypeClientViewGestionnaireComponent,
  TypeClientEditGestionnaireComponent,
  TypeClientGestionnaireComponent,
  TypeSinistreCreateGestionnaireComponent,
  TypeSinistreListGestionnaireComponent,
  TypeSinistreViewGestionnaireComponent,
  TypeSinistreEditGestionnaireComponent,
  TypeSinistreGestionnaireComponent,
  TypeVehiculeCreateGestionnaireComponent,
  TypeVehiculeListGestionnaireComponent,
  TypeVehiculeViewGestionnaireComponent,
  TypeVehiculeEditGestionnaireComponent,
  TypeVehiculeGestionnaireComponent,
  VehiculeCreateGestionnaireComponent,
  VehiculeListGestionnaireComponent,
  VehiculeViewGestionnaireComponent,
  VehiculeEditGestionnaireComponent,
  VehiculeGestionnaireComponent,
  CarburantCreateGestionnaireComponent,
  CarburantListGestionnaireComponent,
  CarburantViewGestionnaireComponent,
  CarburantEditGestionnaireComponent,
  CarburantGestionnaireComponent,
  GarantieCreateGestionnaireComponent,
  GarantieListGestionnaireComponent,
  GarantieViewGestionnaireComponent,
  GarantieEditGestionnaireComponent,
  GarantieGestionnaireComponent,
  ContratGarantieCreateGestionnaireComponent,
  ContratGarantieListGestionnaireComponent,
  ContratGarantieViewGestionnaireComponent,
  ContratGarantieEditGestionnaireComponent,
  ContratGarantieGestionnaireComponent,
  ClientSininstreCreateGestionnaireComponent,
  ClientSininstreListGestionnaireComponent,
  ClientSininstreViewGestionnaireComponent,
  ClientSininstreEditGestionnaireComponent,
  ClientSininstreGestionnaireComponent,
  ClientCreateGestionnaireComponent,
  ClientListGestionnaireComponent,
  ClientViewGestionnaireComponent,
  ClientEditGestionnaireComponent,
  ClientGestionnaireComponent,
  NatureContratCreateGestionnaireComponent,
  NatureContratListGestionnaireComponent,
  NatureContratViewGestionnaireComponent,
  NatureContratEditGestionnaireComponent,
  NatureContratGestionnaireComponent,
  SinistreCreateGestionnaireComponent,
  SinistreListGestionnaireComponent,
  SinistreViewGestionnaireComponent,
  SinistreEditGestionnaireComponent,
  SinistreGestionnaireComponent,
  QuittanceIndemniserCreateGestionnaireComponent,
  QuittanceIndemniserListGestionnaireComponent,
  QuittanceIndemniserViewGestionnaireComponent,
  QuittanceIndemniserEditGestionnaireComponent,
  QuittanceIndemniserGestionnaireComponent,
  ContratCreateGestionnaireComponent,
  ContratListGestionnaireComponent,
  ContratViewGestionnaireComponent,
  ContratEditGestionnaireComponent,
  ContratGestionnaireComponent,
  MarqueCreateGestionnaireComponent,
  MarqueListGestionnaireComponent,
  MarqueViewGestionnaireComponent,
  MarqueEditGestionnaireComponent,
  MarqueGestionnaireComponent,
  ],
  entryComponents: [],
})
export class AssuranceGestionnaireModule { }
