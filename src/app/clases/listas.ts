import {ListaItem} from './lista-item';
export class Listas {
       nombre:string;
       terminada:boolean;
       items:ListaItem[];
       constructor(nombre:string,terminada:boolean=false){
              this.nombre = nombre;
       }

}