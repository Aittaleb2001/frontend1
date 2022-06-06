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

import { DeviseCreateChercheurComponent } from './devise-chercheur/create-chercheur/devise-create-chercheur.component';
import { DeviseEditChercheurComponent } from './devise-chercheur/edit-chercheur/devise-edit-chercheur.component';
import { DeviseViewChercheurComponent } from './devise-chercheur/view-chercheur/devise-view-chercheur.component';
import { DeviseListChercheurComponent } from './devise-chercheur/list-chercheur/devise-list-chercheur.component';
import { DeviseChercheurComponent } from './devise-chercheur/devise-chercheur.component';
import { TypeClientCreateChercheurComponent } from './type-client-chercheur/create-chercheur/type-client-create-chercheur.component';
import { TypeClientEditChercheurComponent } from './type-client-chercheur/edit-chercheur/type-client-edit-chercheur.component';
import { TypeClientViewChercheurComponent } from './type-client-chercheur/view-chercheur/type-client-view-chercheur.component';
import { TypeClientListChercheurComponent } from './type-client-chercheur/list-chercheur/type-client-list-chercheur.component';
import { TypeClientChercheurComponent } from './type-client-chercheur/type-client-chercheur.component';
import { TypeSinistreCreateChercheurComponent } from './type-sinistre-chercheur/create-chercheur/type-sinistre-create-chercheur.component';
import { TypeSinistreEditChercheurComponent } from './type-sinistre-chercheur/edit-chercheur/type-sinistre-edit-chercheur.component';
import { TypeSinistreViewChercheurComponent } from './type-sinistre-chercheur/view-chercheur/type-sinistre-view-chercheur.component';
import { TypeSinistreListChercheurComponent } from './type-sinistre-chercheur/list-chercheur/type-sinistre-list-chercheur.component';
import { TypeSinistreChercheurComponent } from './type-sinistre-chercheur/type-sinistre-chercheur.component';
import { TypeVehiculeCreateChercheurComponent } from './type-vehicule-chercheur/create-chercheur/type-vehicule-create-chercheur.component';
import { TypeVehiculeEditChercheurComponent } from './type-vehicule-chercheur/edit-chercheur/type-vehicule-edit-chercheur.component';
import { TypeVehiculeViewChercheurComponent } from './type-vehicule-chercheur/view-chercheur/type-vehicule-view-chercheur.component';
import { TypeVehiculeListChercheurComponent } from './type-vehicule-chercheur/list-chercheur/type-vehicule-list-chercheur.component';
import { TypeVehiculeChercheurComponent } from './type-vehicule-chercheur/type-vehicule-chercheur.component';
import { VehiculeCreateChercheurComponent } from './vehicule-chercheur/create-chercheur/vehicule-create-chercheur.component';
import { VehiculeEditChercheurComponent } from './vehicule-chercheur/edit-chercheur/vehicule-edit-chercheur.component';
import { VehiculeViewChercheurComponent } from './vehicule-chercheur/view-chercheur/vehicule-view-chercheur.component';
import { VehiculeListChercheurComponent } from './vehicule-chercheur/list-chercheur/vehicule-list-chercheur.component';
import { VehiculeChercheurComponent } from './vehicule-chercheur/vehicule-chercheur.component';
import { CarburantCreateChercheurComponent } from './carburant-chercheur/create-chercheur/carburant-create-chercheur.component';
import { CarburantEditChercheurComponent } from './carburant-chercheur/edit-chercheur/carburant-edit-chercheur.component';
import { CarburantViewChercheurComponent } from './carburant-chercheur/view-chercheur/carburant-view-chercheur.component';
import { CarburantListChercheurComponent } from './carburant-chercheur/list-chercheur/carburant-list-chercheur.component';
import { CarburantChercheurComponent } from './carburant-chercheur/carburant-chercheur.component';
import { GarantieCreateChercheurComponent } from './garantie-chercheur/create-chercheur/garantie-create-chercheur.component';
import { GarantieEditChercheurComponent } from './garantie-chercheur/edit-chercheur/garantie-edit-chercheur.component';
import { GarantieViewChercheurComponent } from './garantie-chercheur/view-chercheur/garantie-view-chercheur.component';
import { GarantieListChercheurComponent } from './garantie-chercheur/list-chercheur/garantie-list-chercheur.component';
import { GarantieChercheurComponent } from './garantie-chercheur/garantie-chercheur.component';
import { ContratGarantieCreateChercheurComponent } from './contrat-garantie-chercheur/create-chercheur/contrat-garantie-create-chercheur.component';
import { ContratGarantieEditChercheurComponent } from './contrat-garantie-chercheur/edit-chercheur/contrat-garantie-edit-chercheur.component';
import { ContratGarantieViewChercheurComponent } from './contrat-garantie-chercheur/view-chercheur/contrat-garantie-view-chercheur.component';
import { ContratGarantieListChercheurComponent } from './contrat-garantie-chercheur/list-chercheur/contrat-garantie-list-chercheur.component';
import { ContratGarantieChercheurComponent } from './contrat-garantie-chercheur/contrat-garantie-chercheur.component';
import { ClientSininstreCreateChercheurComponent } from './client-sininstre-chercheur/create-chercheur/client-sininstre-create-chercheur.component';
import { ClientSininstreEditChercheurComponent } from './client-sininstre-chercheur/edit-chercheur/client-sininstre-edit-chercheur.component';
import { ClientSininstreViewChercheurComponent } from './client-sininstre-chercheur/view-chercheur/client-sininstre-view-chercheur.component';
import { ClientSininstreListChercheurComponent } from './client-sininstre-chercheur/list-chercheur/client-sininstre-list-chercheur.component';
import { ClientSininstreChercheurComponent } from './client-sininstre-chercheur/client-sininstre-chercheur.component';
import { ClientCreateChercheurComponent } from './client-chercheur/create-chercheur/client-create-chercheur.component';
import { ClientEditChercheurComponent } from './client-chercheur/edit-chercheur/client-edit-chercheur.component';
import { ClientViewChercheurComponent } from './client-chercheur/view-chercheur/client-view-chercheur.component';
import { ClientListChercheurComponent } from './client-chercheur/list-chercheur/client-list-chercheur.component';
import { ClientChercheurComponent } from './client-chercheur/client-chercheur.component';
import { NatureContratCreateChercheurComponent } from './nature-contrat-chercheur/create-chercheur/nature-contrat-create-chercheur.component';
import { NatureContratEditChercheurComponent } from './nature-contrat-chercheur/edit-chercheur/nature-contrat-edit-chercheur.component';
import { NatureContratViewChercheurComponent } from './nature-contrat-chercheur/view-chercheur/nature-contrat-view-chercheur.component';
import { NatureContratListChercheurComponent } from './nature-contrat-chercheur/list-chercheur/nature-contrat-list-chercheur.component';
import { NatureContratChercheurComponent } from './nature-contrat-chercheur/nature-contrat-chercheur.component';
import { SinistreCreateChercheurComponent } from './sinistre-chercheur/create-chercheur/sinistre-create-chercheur.component';
import { SinistreEditChercheurComponent } from './sinistre-chercheur/edit-chercheur/sinistre-edit-chercheur.component';
import { SinistreViewChercheurComponent } from './sinistre-chercheur/view-chercheur/sinistre-view-chercheur.component';
import { SinistreListChercheurComponent } from './sinistre-chercheur/list-chercheur/sinistre-list-chercheur.component';
import { SinistreChercheurComponent } from './sinistre-chercheur/sinistre-chercheur.component';
import { QuittanceIndemniserCreateChercheurComponent } from './quittance-indemniser-chercheur/create-chercheur/quittance-indemniser-create-chercheur.component';
import { QuittanceIndemniserEditChercheurComponent } from './quittance-indemniser-chercheur/edit-chercheur/quittance-indemniser-edit-chercheur.component';
import { QuittanceIndemniserViewChercheurComponent } from './quittance-indemniser-chercheur/view-chercheur/quittance-indemniser-view-chercheur.component';
import { QuittanceIndemniserListChercheurComponent } from './quittance-indemniser-chercheur/list-chercheur/quittance-indemniser-list-chercheur.component';
import { QuittanceIndemniserChercheurComponent } from './quittance-indemniser-chercheur/quittance-indemniser-chercheur.component';
import { ContratCreateChercheurComponent } from './contrat-chercheur/create-chercheur/contrat-create-chercheur.component';
import { ContratEditChercheurComponent } from './contrat-chercheur/edit-chercheur/contrat-edit-chercheur.component';
import { ContratViewChercheurComponent } from './contrat-chercheur/view-chercheur/contrat-view-chercheur.component';
import { ContratListChercheurComponent } from './contrat-chercheur/list-chercheur/contrat-list-chercheur.component';
import { ContratChercheurComponent } from './contrat-chercheur/contrat-chercheur.component';
import { MarqueCreateChercheurComponent } from './marque-chercheur/create-chercheur/marque-create-chercheur.component';
import { MarqueEditChercheurComponent } from './marque-chercheur/edit-chercheur/marque-edit-chercheur.component';
import { MarqueViewChercheurComponent } from './marque-chercheur/view-chercheur/marque-view-chercheur.component';
import { MarqueListChercheurComponent } from './marque-chercheur/list-chercheur/marque-list-chercheur.component';
import { MarqueChercheurComponent } from './marque-chercheur/marque-chercheur.component';

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

    DeviseCreateChercheurComponent,
    DeviseListChercheurComponent,
    DeviseViewChercheurComponent,
    DeviseEditChercheurComponent,
    DeviseChercheurComponent,
    TypeClientCreateChercheurComponent,
    TypeClientListChercheurComponent,
    TypeClientViewChercheurComponent,
    TypeClientEditChercheurComponent,
    TypeClientChercheurComponent,
    TypeSinistreCreateChercheurComponent,
    TypeSinistreListChercheurComponent,
    TypeSinistreViewChercheurComponent,
    TypeSinistreEditChercheurComponent,
    TypeSinistreChercheurComponent,
    TypeVehiculeCreateChercheurComponent,
    TypeVehiculeListChercheurComponent,
    TypeVehiculeViewChercheurComponent,
    TypeVehiculeEditChercheurComponent,
    TypeVehiculeChercheurComponent,
    VehiculeCreateChercheurComponent,
    VehiculeListChercheurComponent,
    VehiculeViewChercheurComponent,
    VehiculeEditChercheurComponent,
    VehiculeChercheurComponent,
    CarburantCreateChercheurComponent,
    CarburantListChercheurComponent,
    CarburantViewChercheurComponent,
    CarburantEditChercheurComponent,
    CarburantChercheurComponent,
    GarantieCreateChercheurComponent,
    GarantieListChercheurComponent,
    GarantieViewChercheurComponent,
    GarantieEditChercheurComponent,
    GarantieChercheurComponent,
    ContratGarantieCreateChercheurComponent,
    ContratGarantieListChercheurComponent,
    ContratGarantieViewChercheurComponent,
    ContratGarantieEditChercheurComponent,
    ContratGarantieChercheurComponent,
    ClientSininstreCreateChercheurComponent,
    ClientSininstreListChercheurComponent,
    ClientSininstreViewChercheurComponent,
    ClientSininstreEditChercheurComponent,
    ClientSininstreChercheurComponent,
    ClientCreateChercheurComponent,
    ClientListChercheurComponent,
    ClientViewChercheurComponent,
    ClientEditChercheurComponent,
    ClientChercheurComponent,
    NatureContratCreateChercheurComponent,
    NatureContratListChercheurComponent,
    NatureContratViewChercheurComponent,
    NatureContratEditChercheurComponent,
    NatureContratChercheurComponent,
    SinistreCreateChercheurComponent,
    SinistreListChercheurComponent,
    SinistreViewChercheurComponent,
    SinistreEditChercheurComponent,
    SinistreChercheurComponent,
    QuittanceIndemniserCreateChercheurComponent,
    QuittanceIndemniserListChercheurComponent,
    QuittanceIndemniserViewChercheurComponent,
    QuittanceIndemniserEditChercheurComponent,
    QuittanceIndemniserChercheurComponent,
    ContratCreateChercheurComponent,
    ContratListChercheurComponent,
    ContratViewChercheurComponent,
    ContratEditChercheurComponent,
    ContratChercheurComponent,
    MarqueCreateChercheurComponent,
    MarqueListChercheurComponent,
    MarqueViewChercheurComponent,
    MarqueEditChercheurComponent,
    MarqueChercheurComponent,
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
  DeviseCreateChercheurComponent,
  DeviseListChercheurComponent,
  DeviseViewChercheurComponent,
  DeviseEditChercheurComponent,
  DeviseChercheurComponent,
  TypeClientCreateChercheurComponent,
  TypeClientListChercheurComponent,
  TypeClientViewChercheurComponent,
  TypeClientEditChercheurComponent,
  TypeClientChercheurComponent,
  TypeSinistreCreateChercheurComponent,
  TypeSinistreListChercheurComponent,
  TypeSinistreViewChercheurComponent,
  TypeSinistreEditChercheurComponent,
  TypeSinistreChercheurComponent,
  TypeVehiculeCreateChercheurComponent,
  TypeVehiculeListChercheurComponent,
  TypeVehiculeViewChercheurComponent,
  TypeVehiculeEditChercheurComponent,
  TypeVehiculeChercheurComponent,
  VehiculeCreateChercheurComponent,
  VehiculeListChercheurComponent,
  VehiculeViewChercheurComponent,
  VehiculeEditChercheurComponent,
  VehiculeChercheurComponent,
  CarburantCreateChercheurComponent,
  CarburantListChercheurComponent,
  CarburantViewChercheurComponent,
  CarburantEditChercheurComponent,
  CarburantChercheurComponent,
  GarantieCreateChercheurComponent,
  GarantieListChercheurComponent,
  GarantieViewChercheurComponent,
  GarantieEditChercheurComponent,
  GarantieChercheurComponent,
  ContratGarantieCreateChercheurComponent,
  ContratGarantieListChercheurComponent,
  ContratGarantieViewChercheurComponent,
  ContratGarantieEditChercheurComponent,
  ContratGarantieChercheurComponent,
  ClientSininstreCreateChercheurComponent,
  ClientSininstreListChercheurComponent,
  ClientSininstreViewChercheurComponent,
  ClientSininstreEditChercheurComponent,
  ClientSininstreChercheurComponent,
  ClientCreateChercheurComponent,
  ClientListChercheurComponent,
  ClientViewChercheurComponent,
  ClientEditChercheurComponent,
  ClientChercheurComponent,
  NatureContratCreateChercheurComponent,
  NatureContratListChercheurComponent,
  NatureContratViewChercheurComponent,
  NatureContratEditChercheurComponent,
  NatureContratChercheurComponent,
  SinistreCreateChercheurComponent,
  SinistreListChercheurComponent,
  SinistreViewChercheurComponent,
  SinistreEditChercheurComponent,
  SinistreChercheurComponent,
  QuittanceIndemniserCreateChercheurComponent,
  QuittanceIndemniserListChercheurComponent,
  QuittanceIndemniserViewChercheurComponent,
  QuittanceIndemniserEditChercheurComponent,
  QuittanceIndemniserChercheurComponent,
  ContratCreateChercheurComponent,
  ContratListChercheurComponent,
  ContratViewChercheurComponent,
  ContratEditChercheurComponent,
  ContratChercheurComponent,
  MarqueCreateChercheurComponent,
  MarqueListChercheurComponent,
  MarqueViewChercheurComponent,
  MarqueEditChercheurComponent,
  MarqueChercheurComponent,
  ],
  entryComponents: [],
})
export class AssuranceChercheurModule { }
