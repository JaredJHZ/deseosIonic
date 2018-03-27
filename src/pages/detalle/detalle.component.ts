import {Component,OnInit} from '@angular/core';
import {NavController,NavParams,AlertController} from 'ionic-angular';
import {ListaItem,Listas} from '../../app/clases/index';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';
@Component({
       selector:'detalle-app',
       templateUrl:'detalle.component.html'
})
export class Detalle implements OnInit{
       idx:number;
       lista:Listas;
       constructor(
              public navCtrl:NavController,
              public navParams:NavParams,
              public _listaDeseosService:ListaDeseosService,
              public alert:AlertController
       ){
              this.idx = navParams.get("idx");
              this.lista = navParams.get("lista");
              console.log(this.lista);
       }
       ngOnInit(){
              
       }
       actualizar(item:ListaItem){
              item.completado = !item.completado;
              let completados = true;
              for(let item of this.lista.items){
                     if(!item.completado){
                            completados = false;
                            break;
                     }
              }
              this.lista.terminada = completados;
              this._listaDeseosService.updateData();
       }
       borrarLista(){
             let del = this.alert.create({
                     title:'Borrar',
                     message:'Desea borrar la lista?',
                     buttons : [
                            {
                                   text:'Cancelar',
                                   handler:()=>{
                                          return;
                                   }
                            },
                            {
                                   text:'Confirmar',
                                   handler: ()=>{
                                          this._listaDeseosService.deleteList(this.lista.nombre,this.idx);
                                          this._listaDeseosService.updateData();
                                          this.navCtrl.pop();
                                   }
                            }
                     ]
             });
             del.present();
       }
}