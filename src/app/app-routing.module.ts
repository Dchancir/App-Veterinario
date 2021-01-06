import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  { path: 'pacientes', component: PacientesComponent },
  { path: 'productos', component: ProductosComponent },
  {path:'**', pathMatch: 'full', redirectTo:'pacientes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

