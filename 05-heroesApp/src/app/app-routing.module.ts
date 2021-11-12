import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

// la clave del lazy load es no traer los component aqui,sino usar loadChildren: () => import().then() y cargar condicionalmente los hijos de esa ruta,solo cuando se pida.Fijate que AuthModule es la clase del modulo.

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule)
  },
  {
    path:'heroes',
    loadChildren: () => import('./heroes/heroes.module').then((module) => module.HeroesModule),
    canLoad:[ AuthGuard ],
    canActivate: [ AuthGuard ]
  },
  {
      path:'404',
      component:ErrorPageComponent, 
      pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'404'
  }
]


@NgModule({
  declarations: [],
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
