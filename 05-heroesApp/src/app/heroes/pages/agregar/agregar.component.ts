import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles:[`
  img{
    width: 100%;
    border-radius:5px
  }
  `]
})
export class AgregarComponent implements OnInit {

  publishers = [ 
    {
      id:'DC Comics',
      desc:'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel - Comics'
    },
  ]

  heroe:Heroe={
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_img:'',
  }
  
  guardar(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }
    // si hay un id actualizo
    if(this.heroe.id){
      this.heroesService.actualizaHeroe(this.heroe)
        .subscribe( heroe => {
          this.heroe = heroe;
          this.mostrarSnackbar('Héroe actualizado')
        }); 
        
      }else{
        //si el id es undefined creo
        this.heroesService.agregarHeroe(this.heroe)
        .subscribe( heroe => {
          this.router.navigate(['/heroes/listado',heroe.id]);
          this.mostrarSnackbar('Héroe agregado correctamente')
         });
    }

  }

  borrarHeroe(){
      
  const dialog = this.matDialog.open(ConfirmarComponent,{
    width:'300px',
    data: this.heroe
  } )    
    
 /*  dialog.afterClosed()
    .subscribe( result => {
      if(result) {
        this.heroesService.borrarHeroe(this.heroe.id!)
          .subscribe( heroe => {
            this.router.navigate(['/heroes/listado']);
            this.mostrarSnackbar('Héroe borrado exitosamente')
          })
        }
      }) */
      dialog.afterClosed()
      .pipe( switchMap( result => result ? this.heroesService.borrarHeroe(this.heroe.id!) :new BehaviorSubject(false)))
      .subscribe( result => {if(result){
        this.router.navigate(['/heroes/listado']);
        this.mostrarSnackbar('Héroe borrado exitosamente')
        
      }})
    
    
  }
  constructor( 
    private route: ActivatedRoute ,
    private heroesService: HeroesService,
    private router:Router,
    private snackbar: MatSnackBar,
    public matDialog:MatDialog
    ) { }

  mostrarSnackbar(mensaje:string){
    this.snackbar.open(mensaje,'Success',{duration:2500})
  }

  ngOnInit(): void {
    //puedo usar this.router.url || this.route.snapshot.params.id.Ojo que uno es router:Router y el otro es route:ActivatedRoute
    if(!this.router.url.includes('editar')){
      return;
    }
    if(this.route.snapshot.params.id){
      this.route.params
      .pipe( switchMap( ({id}) => this.heroesService.getHeroePorId(id)))
      .subscribe( heroe => this.heroe = heroe)
    }
  }

}
