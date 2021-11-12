import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  persona: Persona = {
    nombre:'Fernando',
    favoritos: [
      { id:1, nombre:'Metal Gear'},
      { id:2, nombre:'Metal Gear Solid'},
    ]
  }
  nuevoJuego: string='';

  @ViewChild('txtAgregar') termino_a_Agregar!: ElementRef<HTMLInputElement>;
  @ViewChild('miOtroFormulario') miFormulario!: NgForm;

  validaNombre(): boolean {
    return this.miFormulario?.controls.nombre?.value.length === 0
    && this.miFormulario?.controls.nombre?.touched;
  }

agregarJuego(): void {
  // console.log(this.nuevoJuego) 
  const nuevoFavorito:Favorito = {
    id:this.persona.favoritos.length+1,
    nombre: this.nuevoJuego
  }
  this.persona.favoritos.push({...nuevoFavorito});
  this.nuevoJuego="";
}

eliminar(i:number){
     return this.persona.favoritos.splice(i,1);
    // return this.persona.favoritos.filter( fav =>  fav.id === i);
}

  agregarPorIntro():void
  {
    const termino = this.termino_a_Agregar.nativeElement.value;
    if(termino !== ""){
       this.persona.favoritos.push({id:this.persona.favoritos.length+1,nombre:termino})
    }
  }
  
  guardar( ){
    this.persona.favoritos.push({
      id:this.persona.favoritos.length+1,
      nombre:this.nuevoJuego });
  }
  
  constructor() { }

  ngOnInit() {
  }

}
