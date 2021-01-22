import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambio'
})
export class CambioPipe implements PipeTransform {

  transform(prioridad:boolean): string {
    if(prioridad){
      return 'Sí';
    }else{
      return 'No';
    }
  }
}
