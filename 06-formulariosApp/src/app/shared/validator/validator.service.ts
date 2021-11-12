import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  noPuedeSerStrider = (control: FormControl):ValidationErrors | null => {
    const valor = control.value?.trim().toLowerCase();
    if(valor==="strider"){
      //NOTA regresar un Object será considerado un error
      return {
        noStrider:true
      }
    }
    //NOTA cuando se regresa un null en una validación es que la pasa,es como un return true para una funcion boleana
    return null;
  }
  
  camposIguales(campo1:string,campo2:string){
    // NOTA en formGroup tengo todo el formulario
    return ( formGroup: AbstractControl):ValidationErrors | null => {
      // console.log(formGroup)
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

    /*   console.log(pass1)
      console.log(pass2) */
      
      if( pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({noIguales:true})
        return { noIguales: true}
      }
      
      formGroup.get(campo2)?.setErrors(null)
      return null;

    }
  }
  
  
  
  
  
  
  constructor() { }
}
