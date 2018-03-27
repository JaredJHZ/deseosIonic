import {Injectable} from '@angular/core';
import {Listas} from '../clases/listas';
@Injectable()
export class ListaDeseosService{

listas:Listas[] = [];

       constructor(){  
              this.getData();           
       }
       updateData(){
              localStorage.setItem('data',JSON.stringify(this.listas));
       };
       getData(){
              if(localStorage.getItem('data')){
                     this.listas = JSON.parse(localStorage.getItem('data'));
              }
       };
       addData(lista:Listas){
              this.listas.push(lista);
              this.updateData();
       };
       deleteList(nombre:string,idx:number){
              this.listas = this.listas.filter((lista,actualIndex)=>{
                     if(nombre!=lista.nombre && idx != actualIndex ){
                            return lista;
                     }
              });

}
}