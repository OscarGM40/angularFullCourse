import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string="";
  hayError: boolean = false; 
  paises: Country[] = [];
  leyenda: string = "Introduzca un término para buscar paises con capitales coincidentes..."

  buscar( termino: string) {
    this.hayError=false;
    this.termino=termino;

    this.paisService.buscarCapital(this.termino)
    .subscribe(
      ( paises  ) => {
        this.paises = paises;       
        // console.log(paises)
      },
      ( error ) => {
        this.hayError=true;
        console.info(error);
      }
      );
    }
    

  constructor( private paisService: PaisService) { }
  

  ngOnInit(): void {
  }

}
