import {SinistreVo} from './Sinistre.model';
import {QuittanceIndemniserVo} from './QuittanceIndemniser.model';
import {ClientVo} from './Client.model';



export class ClientSininstreVo {

    public id: number;

    public ref: string;
    public numPolice: string;
    public dateSinistre: Date;
    public responsabilite: string;
     public numOrdre: number;
    public refReglement: string;
     public montantExpertise: number;
     public montantIndemniser: number;
    public observation: string;
                public dateSinistreMax: string ;
                public dateSinistreMin: string ;
                public numOrdreMax: string ;
                public numOrdreMin: string ;
                public montantExpertiseMax: string ;
                public montantExpertiseMin: string ;
                public montantIndemniserMax: string ;
                public montantIndemniserMin: string ;
      public clientVo: ClientVo ;
      public sinistreVo: SinistreVo ;
      public quittanceIndemniserVo: QuittanceIndemniserVo ;

}
