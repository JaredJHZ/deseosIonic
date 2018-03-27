import { Component } from '@angular/core';
import {Terminados} from '../terminados/teminados.component';
import {Pendientes} from '../pendientes/pendientes.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Pendientes;
  tab2Root = Terminados;

  constructor() {

  }
}
