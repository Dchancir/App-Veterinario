import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ProductosComponent } from './productos/productos.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ImagenComponent } from './imagen/imagen.component';
import { PipesModule } from '../pipes/pipes.module';
import { FiltrosComponent } from './filtros/filtros.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPacientesComponent } from './form-pacientes/form-pacientes.component';
import { DatosComponent } from './shared/datos/datos.component';



@NgModule({
  declarations: [PacientesComponent, ProductosComponent, PacienteComponent, ImagenComponent, FiltrosComponent, SearchComponent, FormPacientesComponent, DatosComponent],
  exports:[PacientesComponent, ProductosComponent, PacientesComponent, ImagenComponent],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
