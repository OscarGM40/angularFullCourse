import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  // SE enlazará con el formulario con name=nombre + [(ngModel)="nuevo.nombre"] && name=poder + [(ngModel)]="..."
  @Input('personaje')
  nuevo: Personaje = {
    nombre:'',
    poder:0 
  };
  
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  // recuerda que agregar viene de <form (ngSubmit)="agregar()""></form>)
  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 };
  }

  constructor(private dbzService:DbzService) {}
}
