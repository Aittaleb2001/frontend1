import {ContratVo} from './Contrat.model';



export class QuittancePrimeVo {

    public id: number;

     public primeNette: number;
     public taxe: number;
    public accessoires: string;
     public totalTtc: number;
     public totalQuittance: number;
     public totalPaye: number;
     public rest: number;
                public primeNetteMax: string ;
                public primeNetteMin: string ;
                public taxeMax: string ;
                public taxeMin: string ;
                public totalTtcMax: string ;
                public totalTtcMin: string ;
                public totalQuittanceMax: string ;
                public totalQuittanceMin: string ;
                public totalPayeMax: string ;
                public totalPayeMin: string ;
                public restMax: string ;
                public restMin: string ;
      public contratVo: ContratVo ;

}
