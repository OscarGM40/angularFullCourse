import { FormControl } from '@angular/forms';

export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const noPuedeSerStrider = (control: FormControl) => {
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
  
