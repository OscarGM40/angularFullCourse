import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";
import { Color } from "../interfaces/ventas.interfaces";

@Pipe({
   name:"color"
})
export class ColorPipe implements PipeTransform {

   transform(input: Number ) {

      switch (input){
         case 0:
            return "rojo"
         case 1:
            return "negro"
         case 2:
            return "azul"
         case 3:
            return "verde"
         default:
            return "unkown Color number"   
      }
   }

}