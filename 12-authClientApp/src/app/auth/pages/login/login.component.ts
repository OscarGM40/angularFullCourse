import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: [
      'test01@test.com',
      [
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Validators.required,
      ],
    ],
    password: ['ABCabc123', [Validators.required, Validators.minLength(6)]],
  });

  login(): void {
    // this.as.validarToken().subscribe(data => console.log(data))
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    //fijate que me va a devolver un ok===true o un error,pues hemos manipulado la respuesta
    this.as.loginUsuario(email, password).subscribe((ok) => {
      if (ok === true) {
        this.router.navigateByUrl('/dashboard');
      } else {
        // NOTA el mensaje de error es lo que devuelva,en este caso está en la variable 'ok'
        // console.log(ok)
        Swal.fire("Error",ok,"error")
      }
    }); 
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private as: AuthService
  ) {}

  ngOnInit(): void {}
}
