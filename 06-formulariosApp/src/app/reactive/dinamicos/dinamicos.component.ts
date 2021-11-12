import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre:["",[Validators.required,Validators.minLength(3)]],
    favoritos:this.fb.array( [ 
      ['Metal Gear'],
      ['Valkyrie Profile 2'] ] ,Validators.required)
  })
  // creo un control
  nuevoFavorito: FormControl = this.fb.control('',Validators.required);

  agregar(){
    if(this.nuevoFavorito.invalid){ return; }
    // de nuevo da igual usar fb.control o new FormControl
    this.favoritosArray.push(this.fb.control(this.nuevoFavorito.value,Validators.required));
    this.nuevoFavorito.reset();
  }

  eliminar(index:number){
    this.favoritosArray.removeAt(index);
  }

  get favoritosArray(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  campoEsValido(campo:string):boolean | null {
    return this.miFormulario.controls[campo].errors
           && this.miFormulario.controls[campo].touched;
  }

  guardar(){
      if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
