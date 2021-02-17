import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit{
  @Input() id:string = "";
  @Input() opciones:any[] = [];
  @Input() funcion:any;
  @Input() dataForm: FormGroup;



  constructor() {
  }
  
  ngOnInit(){

  }






}
