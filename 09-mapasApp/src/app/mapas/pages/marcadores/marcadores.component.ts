import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorCustom {
  color: string;
  marker?: mapboxgl.Marker;
  centro?:[number,number];
}


@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .mapa-container {
        width: 100%;
        height: 100%;
      }
      .list-group {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 999;
      }
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MarcadoresComponent implements OnInit, AfterViewInit {
  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] = [-3.034301518969713, 43.305257167909865];
  // arreglo de marcadores
  marcadores: MarcadorCustom[]=[];
  
  constructor() {}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    this.leerMarcadoresLocalStorage()

  }

  agregarMarcador(): void {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker(
      {draggable:true,color}
    )
      .setLngLat(this.center)
      .addTo(this.mapa);
    
    this.marcadores.push({color,marker:nuevoMarcador}); 
    nuevoMarcador.on("dragend", () => {
      this.guardarMarcadoresLocalStorage();
    }) 
    this.guardarMarcadoresLocalStorage();
  }

 irMarcador(marcador:mapboxgl.Marker){
   this.mapa.flyTo({
    center:marcador.getLngLat()
   })
 }

 guardarMarcadoresLocalStorage(){
   const lngLatArr: MarcadorCustom[]=[];

    this.marcadores.forEach( m => {
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();
      lngLatArr.push({color,centro:[lng,lat]});
    })

    localStorage.setItem("marcadores",JSON.stringify(lngLatArr));

 }

 leerMarcadoresLocalStorage(){
   if(!localStorage.getItem("marcadores")){
     return;
   }
   const lngLatArr: MarcadorCustom[]=JSON.parse(localStorage.getItem("marcadores")!);

   lngLatArr.forEach(m => {
      const newMarker = new mapboxgl.Marker({
        draggable:true,
        color:m.color})
      .setLngLat(m.centro!)
      .addTo(this.mapa);
      
      this.marcadores.push({
        marker:newMarker,
        color:m.color,
      })
      
      newMarker.on("dragend", () => {
        this.guardarMarcadoresLocalStorage();
      })
   })
  
 }
 
 borrarMarcador( i:number ) {
   this.marcadores[i].marker?.remove();
   this.marcadores.splice(i,1);
   this.guardarMarcadoresLocalStorage();
 }

  ngOnInit(): void {}
}
