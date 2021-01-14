import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ProductosComponent } from './productos/productos.component';
import { SearchComponent } from './search/search.component';
import { PacienteComponent } from './paciente/paciente.component';



@NgModule({
  declarations: [PacientesComponent, ProductosComponent, SearchComponent, PacienteComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
