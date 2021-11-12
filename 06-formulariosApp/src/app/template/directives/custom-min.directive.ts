import { Directive, Input } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

// la directiva se llama customMin y además está asociada a que tenga además la directiva ngModel.Si no la tiene también,no entrará en juego,no extendiendo la funcionalidad
@Directive({
   selector: '[customMin][ngModel]',
   providers:[{
      provide:NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi:true
   }]
})
export class CustomMinDirective implements Validator {

   @Input() minimo! : number;
   
   constructor() { }

   validate(control: FormControl): ValidationErrors | null {
      const inputValue = control.value;

      return (inputValue < this.minimo)
      ? { customMin: true }
      : null;
   }
   
   
}