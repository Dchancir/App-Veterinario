import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-pacientes',
  templateUrl: './form-pacientes.component.html',
  styleUrls: ['./form-pacientes.component.scss']
})
export class FormPacientesComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb:FormBuilder) {
      this.crearFormularo();
   }

  ngOnInit(): void {
  }

  crearFormularo(){
    this.forma = this.fb.group({
      nombre:[''],
      gravedad:[''],
      edad:[''],
      diagnostico:[''],
      peso:[''],
      tipo:[''],
      duracion:[''],
    });
  }

  agregar(){

  }

}
