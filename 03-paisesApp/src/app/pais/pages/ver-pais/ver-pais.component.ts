import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { switchMap,tap } from 'rxjs/operators'

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  translations!: string[];

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    // el operador switchMap(param=>Observable es mucho más cómodo)
  this.activatedRoute.params
    .pipe( 
      switchMap( ({id}) => this.paisService.buscarPorCode(id)),
      // tap(console.log)
      )    
    .subscribe(pais => {
      this.pais=pais;
      this.translations=Object.values(this.pais.translations);
    } );
    




    /*   this.activatedRoute.params
      .subscribe((params) => {
        console.log(params.id);

        this.paisService.buscarPorCode(params.id)
          .subscribe(pais => {
            console.log(pais)
          },err => {
            console.info(err);
          });
     })*/
     
  }

}
