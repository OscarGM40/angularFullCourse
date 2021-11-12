import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
   li {
     cursor: pointer,
     }   
     `
  ]
})
export class PorPaisComponent  {

  termino: string="";
  hayError: boolean = false; 
  paises: Country[] = [];  
  
  leyenda: string = "Introduzca un término para buscar paises coincidentes,por favor..."
  paisesSugeridos: Country[] = []; 
  mostrarSugerencias: boolean = false;

  buscar( termino: string) {
    this.hayError=false;
    this.termino=termino;
    this.mostrarSugerencias=false;

    this.paisService.buscarPais(this.termino)
    .subscribe(
      ( paises  ) => {
        this.paises = paises;       
        // console.log(paises)
      },error => {
        console.info(error)
        this.hayError=true;
      }
      );
    }
    
  sugerencias( termino: string) {
    this.hayError=false;
    this.termino= termino;
    this.mostrarSugerencias=true;

    this.paisService.buscarPais( termino)
      .subscribe( 
        paises => this.paisesSugeridos= paises.splice(0,5),        
        error => this.paisesSugeridos= []
      )}  

    buscarSugerido( termino:string ) {
      this.buscar(termino)
    }

    constructor( private paisService: PaisService) { }
    
}