import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      * {
        margin: 15px;
      }
    `,
  ],
})
export class DashboardComponent implements OnInit {

  get usuario(){
    // console.log(this.authService.usuario)
    return this.authService.usuario;
    
  }

  logout():void {
    this.authService.logout();    
    this.router.navigateByUrl("/auth/login")
  }

  constructor(private router:Router, private authService:AuthService) {}

  ngOnInit(): void {}
  
}