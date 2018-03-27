import {Component,OnInit} from '@angular/core';
import {ListaItem,Listas} from '../../app/clases/index';
import {AlertController, NavController} from 'ionic-angular';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';
@Component({
       selector:'app-agregar',
       templateUrl:'agregar.component.html'
})
export class Agregar implements OnInit{
       nombreLista:string='';
       nombreItem:string='';
       items:ListaItem[] = [];

       constructor(
              public alertCtrl:AlertController,
              public navCtrl:NavController,
              public _listaDeseosService:ListaDeseosService
       ){
              console.log(this._listaDeseosService.listas);
       }
       ngOnInit(){

       }
       add(){
              if(this.nombreItem.length == 0){
                     return;
              }
              let item = new ListaItem();
              item.nombre = this.nombreItem;
              this.items.push(item);
              this.nombreItem = "";
       }
       deleteItem(i:number){
              this.items = this.items.filter((item,actualIndex)=>{
                     if(actualIndex!=i){
                            return item;
                     }
              });
       }
       guardarLista(){
              if(this.nombreLista.length == 0){
                     let alert = this.alertCtrl.create({
                            title:'Nombre de la lista es necesario',
                            subTitle:'El nombre de la lista es necesario',
                            buttons:['OK']
                     });
                     alert.present();
                     return ;
              }

              let lista = new Listas(this.nombreLista);
              lista.items = this.items;
              lista.terminada = false;
              this._listaDeseosService.addData(lista);
              this.navCtrl.pop();

       }
}