import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() placeholder:string = "";
  @Input() boton:string = "";

  @Output() busqueda = new EventEmitter<string>();


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buscar(valor: string) {
    if(valor.length >= 3){
      this.busqueda.emit(valor);
    }else{
      this.busqueda.emit("");
    }
  }

  agregarPaciente(){
    this.router.navigate(['/agregarPacientes']);
    //this.heroeSeleccionado.emit(this.indice);
  }

}
