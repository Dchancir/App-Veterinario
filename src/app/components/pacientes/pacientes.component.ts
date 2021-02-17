import { Component, OnInit, Input } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



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
  public step = 'step1';
  public step1:any;
  public step2:any;
  public step3:any;
  public step4:any;

  pacientes:any[] = [];
  pacientesFiltrados:any[] = [];

  constructor(private pacientesService:PacienteService, private router:Router) {
    this.pacientes = this.pacientesService.getPacientes();
   }

  ngOnInit(): void {
    //inicialización al empezar la página
    this.pacientesFiltrados = this.pacientes;
    this.step1 = document.getElementById('step1');
    this.step2 = document.getElementById('step2');
    this.step3 = document.getElementById('step3');
    this.step4 = document.getElementById('step4');
  }

  verPaciente(id:number){
    this.router.navigate(['/verPaciente',id]);
  }

  filtrar(){
    let filtros: string[]=[this.palabra,this.prioridad];
    const filtro = filtros.some(filtro => filtro !== "");
    let  pacientesAux: any[] = this.pacientes;
    if(filtro){
      console.log(filtros);
      pacientesAux = this.buscarPacientes(pacientesAux,filtros[0]);
      pacientesAux = this.filtrarPrioridad(pacientesAux,filtros[1]);
      console.log(pacientesAux);
    }
    this.pacientesFiltrados= pacientesAux;
  }

  obtenerBusqueda(busqueda:string){
    this.palabra = busqueda;
    this.filtrar();
  }

  buscarPacientes(pacientesAux:any[], palabra:string){
    if(palabra !== ""){
      const pacientesArr:any[] = pacientesAux.filter(paciente => (paciente.nombre.toLowerCase().indexOf(palabra.toLowerCase()) > -1) || (paciente.tipo.toLowerCase().indexOf(palabra.toLowerCase()) > -1));
      pacientesAux= pacientesArr;
      console.log(pacientesAux);
    }
    return pacientesAux;
  }

  obtenerPrioridad(valor:string){
    this.prioridad = valor;
    this.filtrar();
  }

  filtrarPrioridad(pacientesAux:any[], prioridad:string){
    if(prioridad !== ""){
      const pacientesArr:any[] = pacientesAux.filter(paciente => (paciente.prioridad.indexOf(prioridad) > -1));
      pacientesAux= pacientesArr;
    }
    return pacientesAux;
  }

  next() {
    if (this.step === 'step1') {
      this.step = 'step2';
      this.step1.classList.remove("is-active");
      this.step1.classList.add("is-complete");
      this.step2.classList.add("is-active");
  
    } else if (this.step === 'step2') {
      this.step = 'step3';
      this.step2.classList.remove("is-active");
      this.step2.classList.add("is-complete");
      this.step3.classList.add("is-active");
  
    } else if (this.step === 'step3') {
      this.step = 'complete';
      this.step3.classList.remove("is-active");
      this.step3.classList.add("is-complete");
  
    } else if (this.step === 'complete') {
      this.step = 'step1';
      this.step3.classList.remove("is-complete");
      this.step2.classList.remove("is-complete");
      this.step1.classList.remove("is-complete");
      this.step1.classList.add("is-active");
    }
  }

  previous() {
     if (this.step === 'step2') {
      this.step = 'step1';
      this.step2.classList.remove("is-active");
      this.step2.classList.remove("is-complete");
      this.step1.classList.remove("is-complete");
      this.step1.classList.add("is-active");
  
    } else if (this.step === 'step3') {
      this.step = 'step2';
      this.step3.classList.remove("is-active");
      this.step3.classList.remove("is-complete");
      this.step2.classList.remove("is-complete");
      this.step2.classList.add("is-active");
    } 
  }
}

