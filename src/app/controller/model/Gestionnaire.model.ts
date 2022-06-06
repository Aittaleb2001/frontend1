import {User} from './User.model';



export class GestionnaireVo  extends User{


    public reference: string;
     public numeroTelephone: number;
    public email: string;
    public role: string;
    public credentialsNonExpired: null | boolean;
    public enabled: null | boolean;
    public accountNonExpired: null | boolean;
    public accountNonLocked: null | boolean;
    public passwordChanged: null | boolean;
    public createdAt: Date;
    public updatedAt: Date;
    public username: string;
    public password: string;
    public prenom: string;
    public nom: string;
                public numeroTelephoneMax: string ;
                public numeroTelephoneMin: string ;
                public createdAtMax: string ;
                public createdAtMin: string ;
                public updatedAtMax: string ;
                public updatedAtMin: string ;

}
