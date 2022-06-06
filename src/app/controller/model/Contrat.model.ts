import {VehiculeVo} from './Vehicule.model';
import {NatureContratVo} from './NatureContrat.model';
import {QuittancePrimeVo} from './QuittancePrime.model';
import {ClientVo} from './Client.model';
import {ContratGarantieVo} from './ContratGarantie.model';



export class ContratVo {

    public id: number;

    public numPolice: string;
    public numAttestation: string;
    public dateEffet: Date;
    public dateEcheance: Date;
    public dateSignature: Date;
    public periode: string;
                public dateEffetMax: string ;
                public dateEffetMin: string ;
                public dateEcheanceMax: string ;
                public dateEcheanceMin: string ;
                public dateSignatureMax: string ;
                public dateSignatureMin: string ;
      public quittancePrimeVo: QuittancePrimeVo ;
      public natureContratVo: NatureContratVo ;
      public vehiculeVo: VehiculeVo ;
      public clientVo: ClientVo ;
      public contratGarantiesVo: Array<ContratGarantieVo>;

}
