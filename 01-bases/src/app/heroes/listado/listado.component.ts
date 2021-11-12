import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes: string[]= ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string = "";

  constructor() {
    console.log('En el constructor')
   }

  ngOnInit(): void {
    console.log('En el ciclo de vida OnInit')
  }

  borrarPrimerHeroe(): void {
    console.log('borrando primer héroe...');
    this.heroeBorrado = this.heroes.shift() || '';
  }

  borrarUltimoHeroe(): void {
    console.log('borrando último héroe...')
    this.heroeBorrado = this.heroes.pop() || 'Ya no quedan más'
  }
}
