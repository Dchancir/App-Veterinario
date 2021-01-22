import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {


  private PACIENTES:Paciente[] = [
    {
      nombre:"Rocky",
      diagnostico:"Tiene sangrado en los dientes",
      fecha:"1/14/2021",
      prioridad:"Sí",
      edad:5,
      duracion:15,
      peso:40,
      tipo:"perro"
      
    },
    {
      nombre:"Rocky-II",
      diagnostico:"Tiene sangrado en los dientes",
      fecha:"1/14/2021",
      prioridad:"Sí",
      edad:5,
      duracion:15,
      peso:40,
      tipo:"perro"
    },
    {
      nombre:"Rocky-III",
      diagnostico:"Tiene sangrado en los dientes",
      fecha:"1/14/2021",
      prioridad:"Sí",
      edad:5,
      duracion:15,
      peso:40,
      tipo:"perro"
    },
    {
      nombre:"Rocky-IV",
      diagnostico:"Tiene sangrado en los dientes",
      fecha:"1/14/2021",
      prioridad:"No",
      edad:5,
      duracion:15,
      peso:40,
      tipo:"perro"
    },
    {
      nombre:"Michi",
      diagnostico:"Tiene sangrado en los dientes",
      fecha:"1/14/2021",
      prioridad:"No",
      edad:5,
      duracion:15,
      peso:40,
      tipo:"gato"
    }
  ];

  constructor() {

  }

  getPacientes():Paciente[]{
    return this.PACIENTES;
 }


}

export interface Paciente {
  nombre:string,
  diagnostico?:string,
  fecha:string,
  prioridad:string,
  edad?:number,
  duracion:number,
  peso?:number,
  tipo:string,
  idx?:number
}