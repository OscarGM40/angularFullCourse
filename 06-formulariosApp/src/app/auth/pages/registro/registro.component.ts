import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  
  noPuedeSerStrider (control: FormControl) {
    const valor = control.value?.trim().toLowerCase();
    if(valor==="strider"){
      //NOTA regresar un Object será considerado un error
      return {
        noStrider:true
      }
    }
    //NOTA cuando se regresa un null en una validación es que la pasa,es como un return true para una funcion boleana
    return null;
  }
  
  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)],],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)],[this.emailValidator]],
    username: ['', [Validators.required,this.vs.noPuedeSerStrider]],
    password: ['', [Validators.required,Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  },{
    validators:[this.vs.camposIguales("password","password2")]
  });

  get emailErrorMessage(): string {
    const errors = this.miFormulario.get("email")?.errors;
    return errors?.required && "Email requerido"
    || errors?.pattern && "formato inválido"
    || errors?.emailTomado && "email ya tomado";
  }

  constructor(
    private fb: FormBuilder,
    private vs:ValidatorService,
    private emailValidator:EmailValidatorService 
    ) {}
    
    ngOnInit(): void {
      this.miFormulario.reset({
      nombre: 'Fernando Herrera',
      email: 'test1@test.com',
      username:"strider4",
      password:"123456",
      password2:"123456"
    });
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
      );
    }
    
  /* emailRequired() {
    return (
      this.miFormulario.get('email')?.errors?.required &&
      this.miFormulario.get('email')?.touched
    );
  }
    
  emailInvalid() {
    return (
      this.miFormulario.get('email')?.errors?.pattern &&
      this.miFormulario.get('email')?.touched
    );
  }

  emailTaken() {
    return (
      this.miFormulario.get('email')?.errors?.emailTomado &&
      this.miFormulario.get('email')?.touched
    );
  } */
  
  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
