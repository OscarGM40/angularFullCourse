import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor( private router:Router,private authService:AuthService) { }

  login(){
    // hay que ir al backend y confirmar si el usuario existe
    this.authService.login().subscribe( console.log )
    // despues navegaremos a /heroes/listado
    this.router.navigate(['/heroes/listado']) 
  }

}
