import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false,
    });
// [ ] subscripcion en tiempo real al formulario
    this.miFormulario.valueChanges.subscribe( ({condiciones, ...rest}) => {
      this.persona = rest;
      console.log(rest)
    })
// [ ] subscripcion a un único campo 
    this.miFormulario.get('condiciones')?.valueChanges.subscribe( (condiciones) => {
      console.log(condiciones)
    })
    
    
  }

  guardar() {
    this.miFormulario.value
  }
}
