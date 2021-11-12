import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  
  // i18nSelect
  nombre:string = 'Susana';
  genero:string = 'femenino'

  invitacionObj = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }
  cambiarCliente=() => {
    if(this.nombre === 'Susana'){
      this.nombre='Mario',
      this.genero='masculino'
    }else{
      this.nombre='Susana',
      this.genero='femenino'

    }
  }


  // i18nPlural
  clientes: string[]= ['Maria','Pedro','Juan','Susana' ]
  clientesMapa = {
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando',
  }
  
  borrarCliente = () => {
    this.clientes.length > 0 && this.clientes.pop();
  }

  agregarCliente = () => {
    this.clientes.unshift('Julio');
  }
  

  // keyValue Pipe
  persona = {
    nombre:'Fernando',
    edad: 35,
    direccion:'Ottawa, Canadá'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre:'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]


  // Async pipe
  miObservable = interval(1000); //0,1,2,3,4,5...
 
  valorPromesa = new Promise( (resolve,reject) => {
    setTimeout(() => {
      resolve('fin de la promesa')
    },3000)
  })
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
