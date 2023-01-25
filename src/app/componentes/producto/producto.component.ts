import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/mis-interfaces';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {

  @Input() producto : Producto;
  
  constructor() { }

  ngOnInit() {}

}
