import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {


  public PACIENTES:any[] = [
    {
      nombre:"Rocky",
      diagnostico:"Tiene sangrado en los dientes",
      fecha:"1/14/2021",
      gravedad: {
        "fractura": false,
        "sangrado":true,
        "inconsciente": false,
        "inmovilidad": false
      },
      prioridad:"Sí",
      edadValor:5,
      edadMetrica:'año(s)',
      duracionValor:15,
      duracionMetrica:'minuto(s)',
      peso:40,
      tipo:"perro",
      idx:0
      
    },
    {
      nombre:"Rocky-II",
      diagnostico:"Tiene sangrado en los dientes y fractura craneal",
      fecha:"1/14/2021",
      gravedad: {
        "fractura": true,
        "sangrado":true,
        "inconsciente": false,
        "inmovilidad": false
      },
      prioridad:"Sí",
      edadValor:9,
      edadMetrica:'mes(es)',
      duracionValor:1,
      duracionMetrica:'hora(s)',
      peso:40,
      tipo:"perro",
      idx:1
    },
    {
      nombre:"Rocky-III",
      diagnostico:"Tiene sangrado en los dientes",
      fecha:"1/14/2021",
      gravedad: {
        "fractura": false,
        "sangrado":true,
        "inconsciente": false,
        "inmovilidad": false
      },
      prioridad:"Sí",
      edadValor:9,
      edadMetrica:'mes(es)',
      duracionValor:1,
      duracionMetrica:'hora(s)',
      peso:40,
      tipo:"perro",
      idx:2
    },
    {
      nombre:"Rocky-IV",
      diagnostico:"",
      fecha:"1/14/2021",
      gravedad: {
        "fractura": false,
        "sangrado":false,
        "inconsciente": false,
        "inmovilidad": false
      },
      prioridad:"No",
      edadValor:9,
      edadMetrica:'mes(es)',
      duracionValor:1,
      duracionMetrica:'hora(s)',
      peso:40,
      tipo:"perro",
      idx:3
    },
    {
      nombre:"Michi",
      diagnostico:"",
      fecha:"1/14/2021",
      gravedad: {
        "fractura": false,
        "sangrado":false,
        "inconsciente": false,
        "inmovilidad": false
      },
      prioridad:"No",
      edadValor:9,
      edadMetrica:'mes(es)',
      duracionValor:1,
      duracionMetrica:'hora(s)',
      peso:40,
      tipo:"gato",
      idx:4
    }
  ];

  constructor() {

  }

  addPacientes(paciente:any){
    this.PACIENTES.push(paciente);
  }

  getPacientes():any[]{
    return this.PACIENTES;
  }

  getPaciente(id:number){
    return this.PACIENTES[id];
  }

  editarPaciente(paciente:Paciente, id:number){
    this.PACIENTES[id] = paciente;
  }

}

export interface Paciente {
  nombre:string,
  diagnostico?:string,
  fecha?:string,
  gravedad:string[],
  prioridad:string,
  edadValor?:number,
  edadMetrica?:string,
  duracionValor?:number,
  duracionMetrica?:string,
  peso?:number,
  tipo:string,
  idx?:number
}