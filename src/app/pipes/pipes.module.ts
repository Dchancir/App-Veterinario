import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrioridadPipe } from './prioridad.pipe';
import { CambioPipe } from './cambio.pipe';



@NgModule({
  declarations: [PrioridadPipe, CambioPipe],
  exports: [CambioPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
