import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.eu/rest/v2";

  get httpParams() {
    return new HttpParams()
      .set('fields','name;capital;alpha2Code;translations;flag;population');
  }

  constructor( private http: HttpClient) { }
  
  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
    // return this.http.get(url).pipe(catchError(err=> of(['Hay un error'])));
  }
 buscarCapital( termino: string) : Observable<Country[]> {
   const url = `${ this.apiUrl }/capital/${ termino }`;
   return this.http.get<Country[]>(url, { params: this.httpParams });
 }  

 buscarPorCode( id: string) : Observable<Country> {
   const url = `${ this.apiUrl }/alpha/${ id }`;
   return this.http.get<Country>(url);
  }  
  
  buscarPorRegion( region: string) : Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>(url, { params: this.httpParams })
      // .pipe( tap(console.log))
      ;
 }
 
}
