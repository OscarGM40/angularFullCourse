import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  //ViewChild('localRef) se usa para sacar una referencia local de la template de este componente a una variable
  @ViewChild('miFormulario') miFormulario!: NgForm;

    initForm = {
      producto: "nuevo producto",
      precio:0,
      stock:10,
    }
  
  nombreValido(): boolean { 
    return this.miFormulario?.controls.producto?.invalid
    && this.miFormulario?.controls.producto?.touched;
  }

  precioValido(): boolean { 
    return this.miFormulario?.controls.precio?.invalid 
    && this.miFormulario?.controls.precio?.touched;
  }

  
  guardar( ) {
    console.log(this.miFormulario.value)
    this.miFormulario.resetForm({
      producto:'inserta otro producto',
      precio:0,
      stock:10
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
