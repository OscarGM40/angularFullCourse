import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img {
    width:50%;
    border-radius: 5px;
    display: block;
    margin: auto;
  },
  rana {
    justify-content: center;
    align-items: center;
  }
  `],
  
})
export class HeroeComponent implements OnInit {
  
  heroe!:Heroe;

  constructor(private route: ActivatedRoute,
              private heroeService: HeroesService,
              private router: Router) {}

  regresar() {
    this.router.navigate(['/heroes/listado'])
  }              

  ngOnInit(): void {
    this.route.params
    .pipe( switchMap( ({id}) => this.heroeService.getHeroePorId(id))) // ojo con los triples parentesis
    .subscribe( heroe => this.heroe = heroe);
  }

}
