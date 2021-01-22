import { Component, OnInit, Input } from '@angular/core';
import { Paciente, PacienteService } from 'src/app/services/paciente.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})

export class PacientesComponent implements OnInit {
  public placeholder:string = "Buscar por nombre o tipo de animal ";
  public boton:string = "Agregar Paciente";
  public palabra:string ="";
  public prioridad:string="";

  pacientes:Paciente[] = [];
  pacientesAux:Paciente[] = [];

  constructor(private pacientesService:PacienteService) {
   }

  ngOnInit(): void {
    this.pacientes= this.pacientesService.getPacientes();
    //inicialización al empezar la página
    this.pacientesAux = this.pacientes;
  }

  buscarPacientes(busqueda:string){
    this.palabra = busqueda;
    console.log(this.palabra)
    if(this.palabra !== ""){
      const pacientesArr:Paciente[] = this.pacientesAux.filter(paciente => (paciente.nombre.toLowerCase().indexOf(this.palabra.toLowerCase()) > -1) || (paciente.tipo.toLowerCase().indexOf(this.palabra.toLowerCase()) > -1));
      this.pacientesAux= pacientesArr;
      console.log(this.pacientesAux.length)
    }
    else{
      this.pacientesAux = this.pacientes;
    }
  }

  filtrarPrioridad(valor:string){
    if(valor !== ""){
      const pacientesArr:Paciente[] = this.pacientesAux.filter(paciente => (paciente.prioridad.indexOf(valor) > -1));
      this.pacientesAux= pacientesArr;
      console.log(this.pacientesAux.length)
    }else{
      this.pacientesAux = this.pacientes;
    }
  }
}


