import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthResponse, RenewResponse, Usuario } from 'src/app/interfaces/authInterfaces';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;
  
  get usuario(){
    return  this._usuario;
  }
  
  register(nombre: string, email: string, password: string) {
    
    // console.log(nombre,email,password);

    return this.http
      .post<AuthResponse>(`${this.baseUrl}/auth/new`, { name:nombre,email, password })
      .pipe(
        tap((resp) => {
          // console.log(resp);
          if (resp.ok) {
            localStorage.setItem('mongoToken', resp.Mongotoken);
            localStorage.setItem('mysqlToken', resp.MYSQLToken);
        /*     this._usuario = {
              name: resp.name,
              uidMongo: resp.uidMONGO,
              uidMySql: resp.uidSQL,
              email: resp.email,
            }; */
          }
        }),
        map(({ ok }) => ok),
        catchError((error) => of(error.error.errors))
      );
    
  }

  loginUsuario(email: string, password: string) {
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/auth`, { email, password })
      .pipe(
        tap((resp) => {
          // console.log(resp);
          if (resp.ok) {
            localStorage.setItem('mongoToken', resp.Mongotoken);
            localStorage.setItem('mysqlToken', resp.MYSQLToken);
         /*    this._usuario = {
              name: resp.name,
              uidMongo: resp.uidMONGO,
              uidMySql: resp.uidSQL,
              email: resp.email,
            }; */
          }
        }),
        map(({ ok }) => ok),
        catchError((error) => of(error.error.msg))
      );
  }

  validarToken(): Observable<boolean> {
    const url = this.baseUrl + '/auth/renew';
    const headers = new HttpHeaders()
      .set('mongo-token', localStorage.getItem('mongoToken') || "")
      .set('mysql-token', localStorage.getItem('mysqlToken') || "");

    // recuerda que solo puedo retornar Observables
    return this.http.get<RenewResponse>(url, { headers })
      .pipe(
        map(resp => {
          localStorage.setItem('mongoToken', resp.Mongotoken);
          localStorage.setItem('mysqlToken', resp.MYSQLToken);
          this._usuario = {
            name: resp.name,
            uidMongo: resp.mongoid,
            uidMySql: resp.mysqlid,
            email: resp.email,
          };
          return resp.ok
        }),
        catchError(error => of(false))
      );
  }

  logout() {
    localStorage.removeItem('mongoToken');
    localStorage.removeItem('mysqlToken');
  }


  constructor(private http: HttpClient) { }
}
  