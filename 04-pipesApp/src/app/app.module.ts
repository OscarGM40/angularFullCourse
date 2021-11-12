import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { AppRoutingModule } from './app-routing.module';

// Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-HN';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common'
registerLocaleData( localeEs );
registerLocaleData( localeFr );
import { LOCALE_ID } from '@angular/core';
// Con hacer esto ya tengo registrado el español de Honduras

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    VentasModule,
    SharedModule,
  ],
  providers: [{
    provide: LOCALE_ID,useValue:'es-HN'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
