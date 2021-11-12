import { Component } from "@angular/core";




//  cfx cambia hasta el caracter x incluyendolo
// dfx borra hasta el caracter x 
// till vs find = till x excluye la x find x incluye la x
// actual vs inner = actual con espacios inner sin espacios
// delete till W o delete till E borra hasta el final de la palabra
// delete till space(pulsar spacebar) borra hasta el espacio.Puedo usar find en vez de till.
@Component({
   selector: 'app-heroe',
   templateUrl:'heroe.component.html',
})
export class HeroeComponent {
   nombre: string = 'Ironman';
   edad: number = 45;

   get nombreCapitalizado(): string{
      return this.nombre.toUpperCase();
   }
   
   obtenerNombre(): string {
      return `${ this.nombre } - ${ this.edad }`;
   }
   
   cambiarNombre(): void {
      this.nombre = 'Spiderman';
   }

   cambiarEdad(): void { 
      this.edad = 30;
   }

   
}