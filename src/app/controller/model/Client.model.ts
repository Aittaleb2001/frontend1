import {ClientSininstreVo} from './ClientSininstre.model';
import {VehiculeVo} from './Vehicule.model';
import {TypeClientVo} from './TypeClient.model';
import {ContratVo} from './Contrat.model';



export class ClientVo {

    public id: number;

    public reference: string;
    public cin: string;
    public nom: string;
    public prenom: string;
    public activite: string;
    public adresse: string;
    public datedeNaissance: Date;
     public numTelephone: number;
                public datedeNaissanceMax: string ;
                public datedeNaissanceMin: string ;
                public numTelephoneMax: string ;
                public numTelephoneMin: string ;
      public typeClientVo: TypeClientVo ;
      public clientSininstresVo: Array<ClientSininstreVo>;
      public vehiculeVo: Array<VehiculeVo>;
      public contratVo: Array<ContratVo>;

}
