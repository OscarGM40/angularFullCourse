import { Component,OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  nombre: string = 'ferNando heRrerA'
  valor: number = 1000;
  obj = {
    nombre: 'ferNando'
  }

  mostrarNombre() {
    console.log(this.nombre)
    console.log(this.valor)
  }

  constructor( private primeNGConfig: PrimeNGConfig){

  }

  ngOnInit(): void {
  this.primeNGConfig.ripple= true;    
  }
}
