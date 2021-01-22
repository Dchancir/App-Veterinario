import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPacientesComponent } from './components/form-pacientes/form-pacientes.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  { path: 'pacientes', component: PacientesComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'agregarPacientes', component: FormPacientesComponent },
  {path:'**', pathMatch: 'full', redirectTo:'pacientes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

