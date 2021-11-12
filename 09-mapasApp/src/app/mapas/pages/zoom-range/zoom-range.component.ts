import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .mapa-container {
        width: 100%;
        height: 100%;
      }

      .row {
        background-color: white;
        border-radius: 5px;
        position: fixed;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        z-index: 9999;
      }
    `,
  ],
})
export class ZoomRangeComponent implements AfterViewInit,OnDestroy {

  @ViewChild("mapa") divMapa!: ElementRef;
  
  mapa!: mapboxgl.Map;

  zoomLevel: number=10;

  center: [number,number] = [-3.034301518969713, 43.305257167909865];
  
  constructor () {}

  ngOnDestroy(): void {

   this.mapa.off("zoom", () => {}); 
   this.mapa.off("zoomend", () => {}); 
   this.mapa.off("move", () => {}); 
  }
  
  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });
    //mapbox permite crear un listener con .on(accion disparadora)
    this.mapa.on("zoom", (ev) => {
      this.zoomLevel = this.mapa.getZoom();
    })

    this.mapa.on("zoomend", (ev) => {
      if(this.mapa.getZoom() > 19){
        this.mapa.zoomTo(19)
      }  
    })

    this.mapa.on("move", (ev) => {
      const { lng, lat }  = ev.target.getCenter();
      this.center = [lng, lat];
    })
  }

  zoomOut() {
    this.mapa.zoomOut();
  }

  zoomIn() {
    this.mapa.zoomIn();
  }
 
  zoomChange(value: string) {
   this.mapa.zoomTo(parseFloat(value));
 }
  
}
