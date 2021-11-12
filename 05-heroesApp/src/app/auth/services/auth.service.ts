import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth():Auth {
    return { ...this._auth! };
  }

  verificaAutenticacion():Observable<boolean>{
    if( !localStorage.getItem('heroesAngularID')){
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        map ( auth => { 
          this._auth = auth;
           return true
          }));

    // return of(true);
  }
  
  constructor( private http:HttpClient) { }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe( 
        tap(auth => this._auth = auth ),
        tap( auth => localStorage.setItem('heroesAngularID',auth.id)) );
  }
  
  logout() {
    this._auth = undefined;
  }
}
