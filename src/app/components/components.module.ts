import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [PacientesComponent, ProductosComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
