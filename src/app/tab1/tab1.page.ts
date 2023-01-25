import { Datos, Producto } from './../interfaces/mis-interfaces';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http'
import { GestionListaService } from '../servicios/gestion-lista.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  datosProducto: Producto = {
    "id": 3,
    "titulo": 	"Mens Cotton Jacket",
    "foto": 	"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "valoracion": 4.7
  };

 constructor(private restServer: HttpClient, private gestionListaService: GestionListaService) {
    this.consultaRest();
 }

  
 // Método que realiza una consulta REST a fakestoreapi.com
 private consultaRest(): void {
  
       let observableGet: Observable<Datos> =
      this.restServer.get<Datos>("https://fakestoreapi.com/products/" + this.generaIndice());
        observableGet.subscribe( datos => {
          this.datosProducto.id = datos.id;
          this.datosProducto.titulo = datos.title;
          this.datosProducto.foto = datos.image;
          this.datosProducto.valoracion = datos.rating.rate;
        });
  
 }

 //Método que llama al servicio para añadir un nuevo producto a nuestra lista de productos
 addProduct(){
    this.gestionListaService.addProducto(this.datosProducto);
 }

 //Método que recupera un nuevo producto
 getNewProduct(){
  this.consultaRest();
 }

 // Método que genera un número aleatorio entre 1 y 20
 private generaIndice(): number {
   return Math.floor(Math.random() * 19) + 1;
 }
}
