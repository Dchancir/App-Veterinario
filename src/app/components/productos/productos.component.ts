import { Component, Input, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  public placeholder:string = "Buscar por nombre del producto ";
  public boton:string = "Agregar Producto";

  constructor() { }

  ngOnInit(): void {
  }

}
