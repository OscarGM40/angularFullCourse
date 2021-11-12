import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button {
    margin-right: 5px;

  }`],
})
export class PorRegionComponent  {
  
  regiones: string[] = ['africa', 'americas', 'asia','europe','oceania'];
  regionActiva: string = 'Ninguna';

  hayError: boolean = false; 
  paises: Country[] = [];  

  activarRegion( region: string ) {
    if( region === this.regionActiva ){ return };
    this.regionActiva = region;
    this.paises =[];
    this.hayError = false;

    this.paisService.buscarPorRegion( region)
      .subscribe( paises => {
        this.paises = paises;
      },(error) => {
        this.hayError = true;
        console.info(error)
      })
  }

  getClase( region: string ) {
    return (region === this.regionActiva) 
    ? 'btn-primary border border-warning border-1'
    : 'btn-outline-warning';
  }
  // TODO llamar al método del servicio con la peticion  
  

  
  constructor( private paisService: PaisService) {}

}
