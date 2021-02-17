import { Injectable } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

interface ErrorValidate{
  [s:string]:boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noCaracteres(control:FormControl):ErrorValidate | null{
    if(!/^[^`~ !-@#$%\^&*()_+={}|[\]\\:';"<>?,.-/]*$/.test(control.value.toLowerCase())){
      return {
        noCaracteres:true
      }
    }
    return null;
  }

  noCompleto(){
    return ( formGroup:FormGroup ) => {
      const valorcontrol = formGroup.get('valor');
      const metricacontrol = formGroup.get('metrica');
      if ((valorcontrol.value === null && metricacontrol.value === "") || (valorcontrol.value !== null && metricacontrol.value !== "")){
        valorcontrol.setErrors(null);
        metricacontrol.setErrors(null);

      }else{
        valorcontrol.setErrors({noCompleto: true});
        metricacontrol.setErrors({noCompleto: true});
      }
    }
  }

  noCompletoDuracion(){
    return ( formGroup:FormGroup ) => {
      const valorcontrol = formGroup.get('valor');
      const metricacontrol = formGroup.get('metrica');
      if (valorcontrol.value !== null && metricacontrol.value !== ""){
        valorcontrol.setErrors(null);
        metricacontrol.setErrors(null);

      }else{
        valorcontrol.setErrors({noCompleto: true});
        metricacontrol.setErrors({noCompleto: true});
      }
    }
  }
}
