import {Component, OnInit} from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';
import {NavController} from 'ionic-angular';
import {Agregar} from '../agregar/agregar.component';
import {Detalle} from '../detalle/detalle.component';
import { ListaItem } from '../../app/clases/lista-item';
@Component({
       selector:'app-terminados',
       templateUrl:'terminados.component.html'
})
export class Terminados implements OnInit{
       constructor(
             private _listaDeseosService:ListaDeseosService,
             private _navController:NavController
       ){
             console.log(this._listaDeseosService.listas.length);
       }
       ngOnInit(){

       }
       verDetalle(lista, idx){
             this._navController.push(Detalle,{
                   lista,
                   idx
             })
       }
}