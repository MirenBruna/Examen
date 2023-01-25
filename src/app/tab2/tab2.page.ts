import { Component } from '@angular/core';
import { Producto } from '../interfaces/mis-interfaces';
import { GestionListaService } from '../servicios/gestion-lista.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public listaProductos: Producto[] = [];


  constructor(private gestionListaService: GestionListaService) {
    this.listaProductos = this.gestionListaService.getLista();
  }

}
