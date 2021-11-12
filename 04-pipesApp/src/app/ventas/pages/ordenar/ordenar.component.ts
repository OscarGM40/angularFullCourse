import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas:boolean = false;
  orderBy: string = 'dfsd';

  // una primeTable necesita un arreglo de objetos como value
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre:'Robin',
      vuela: false,
      color: Color.verde

    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ] 

  heroes2: Heroe[] = [...this.heroes]

  toggle ():void {
     this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden( valor: string ) {
    this.orderBy=valor;
    // console.log(valor)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
