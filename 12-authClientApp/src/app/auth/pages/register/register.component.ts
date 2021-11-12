import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    nombre: ["", [Validators.required, Validators.minLength(3)],],
    email: ["", [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],],
    password: ["", [Validators.required, Validators.minLength(6)],],
  })

  register(): void {
    const { nombre, email, password } = this.registerForm.value;
    // console.log(this.registerForm.value);
    this.auth.register(nombre, email, password).subscribe(
      (ok) => {
        if (ok === true) {
          this.router.navigateByUrl('/dashboard');
        } else {
          // el mensaje de error es lo que devuelva,en este caso está en la variable 'ok'
          console.log(ok)
          if(ok === false){
            Swal.fire("Error", ok.msg, "error")
          } 
          if(ok.password){
            Swal.fire("Error", ok?.password?.msg, "error")
          } 
        }
      });


    // console.log(this.registerForm.valid);
  }
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

}
