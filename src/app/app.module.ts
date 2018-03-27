import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//Pipes
import {placeHolderPipe} from '../app/pipes/placeholder.pipe';
import {filtroPipe} from '../app/pipes/filtroListas.pipe';
//Componentes
import {Detalle} from '../pages/detalle/detalle.component';
import {Agregar} from '../pages/agregar/agregar.component';
import {Pendientes} from '../pages/pendientes/pendientes.component';
import {Terminados} from '../pages/terminados/teminados.component';
//Servicios 
import {ListaDeseosService} from './services/lista-deseos.service';
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    Pendientes,
    Terminados,
    Agregar,
    Detalle,
    filtroPipe,
    placeHolderPipe,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    Terminados,
    Pendientes,
    Agregar,
    Detalle
  ],
  providers: [
    StatusBar,
    ListaDeseosService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
