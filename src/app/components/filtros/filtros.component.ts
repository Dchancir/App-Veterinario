import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
  @Output() filtroSelect = new EventEmitter<string>();

  options: any[] = [
    { name: 'Todos', value: '' },
    { name: 'Sí', value: 'Sí' },
    { name: 'No', value: 'No' }
  ];
  prioridadSeleccionada:any;

  constructor() {
  }
  
  ngOnInit() {
  }
  
  selectOption() {
    //console.log(this.prioridadSeleccionada.value);
    this.filtroSelect.emit(this.prioridadSeleccionada.value);
  }

}
