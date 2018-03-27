import {Pipe,PipeTransform} from '@angular/core';
import {Listas} from '../../app/clases/index';
@Pipe({
       name:'filtroListas',
       pure:false
})
export class filtroPipe implements PipeTransform{
      
       transform(listas:Listas[],estado:boolean):Listas[]{
        
              let listasComprobados:Listas[]= [];
              for(let lista of listas){
                    if(lista.terminada == estado){
                            listasComprobados.push(lista);
                    } 
              }
              return listasComprobados;
       }
}