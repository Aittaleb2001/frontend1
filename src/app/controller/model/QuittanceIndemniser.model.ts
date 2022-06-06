import {DeviseVo} from './Devise.model';



export class QuittanceIndemniserVo {

    public id: number;

    public reference: string;
    public dateReception: Date;
    public dateAjout: Date;
    public objet: string;
    public libelle: string;
                public dateReceptionMax: string ;
                public dateReceptionMin: string ;
                public dateAjoutMax: string ;
                public dateAjoutMin: string ;
      public deviseVo: DeviseVo ;

}
