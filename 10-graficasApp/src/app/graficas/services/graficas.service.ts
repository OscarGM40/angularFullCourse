import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private http: HttpClient) {}

  getUsuariosPorRedSocial() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosConDataCorrecta() {
    return this.getUsuariosPorRedSocial()
    .pipe(
      delay(1000),  
      map((data) => {
        return {
          labels: Object.keys(data),
          values: Object.values(data),
        };
      })
    );
  }
}
