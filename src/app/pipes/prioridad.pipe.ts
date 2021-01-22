import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prioridad'
})
export class PrioridadPipe implements PipeTransform {

  transform(prioridad:boolean): string {
    if(prioridad){
      return 'Sí';
    }else{
      return 'No';
    }
  }

}
