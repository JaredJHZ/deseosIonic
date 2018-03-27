import {Component, OnInit} from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';
import {NavController} from 'ionic-angular';
import {Agregar} from '../agregar/agregar.component';
import {Detalle} from '../detalle/detalle.component';
import { ListaItem } from '../../app/clases/lista-item';
@Component({
       selector:'app-pendientes',
       templateUrl:'pendientes.component.html'
})
export class Pendientes implements OnInit{
       constructor(
             private _listaDeseosService:ListaDeseosService,
             private _navController:NavController
       ){
            
       }
       ngOnInit(){

       }
       irAgregar(){
            this._navController.push(Agregar);
       }
       verDetalle(lista, idx){
             this._navController.push(Detalle,{
                   lista,
                   idx
             })
       }
}