import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  // forma Uno => demasiado verbosa para formularios grandes
/*   miFormulario: FormGroup = new FormGroup({
    "nombre": new FormControl('RTX 4080ti'),
    precio  : new FormControl(),
    stock : new FormControl()
  }); */

  // aun con una inyeccion el codigo es mas claro
  miFormulario: FormGroup = this.fb.group({
   nombre: ['', [Validators.required,Validators.minLength(3)] ],
   precio: [, [Validators.required,Validators.min(0)] ],
   stock: [,[Validators.required,Validators.min(0)] ],
  })

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
  
  constructor(private fb: FormBuilder) {}
    


  ngOnInit(): void {
    this.miFormulario.setValue({
      nombre: "Graphic prehistorica",
      precio: 3,
      stock: 5000
    })
  }
}
