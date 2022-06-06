import {MarqueVo} from './Marque.model';
import {TypeVehiculeVo} from './TypeVehicule.model';
import {CarburantVo} from './Carburant.model';
import {ClientVo} from './Client.model';
import {ContratVo} from './Contrat.model';



export class VehiculeVo {

    public id: number;

    public reference: string;
    public codeVerification: string;
    public matricule: string;
     public cylindree: number;
    public version: string;
     public poidsEncharge: number;
     public nombrePlaces: number;
    public puissanceFiscale: string;
                public cylindreeMax: string ;
                public cylindreeMin: string ;
                public poidsEnchargeMax: string ;
                public poidsEnchargeMin: string ;
                public nombrePlacesMax: string ;
                public nombrePlacesMin: string ;
      public carburantVo: CarburantVo ;
      public typeVehiculeVo: TypeVehiculeVo ;
      public clientVo: ClientVo ;
      public contratVo: ContratVo ;
      public marqueVo: MarqueVo ;

}
