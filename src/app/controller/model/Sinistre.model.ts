import {TypeSinistreVo} from './TypeSinistre.model';
import {ClientVo} from './Client.model';



export class SinistreVo {

    public id: number;

    public reference: string;
    public description: string;
    public cause: string;
    public objet: string;
      public typeSinistreVo: TypeSinistreVo ;
      public clientVo: ClientVo ;

}
