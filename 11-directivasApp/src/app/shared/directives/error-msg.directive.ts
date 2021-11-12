import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  //debo rescatar en variables privadas lo que traiga el @Input
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';
  
  htmlElement: ElementRef<HTMLElement>;
  
  //ya no usaré @Input() color:string="red" sino un setter y un getter.Esto me da control absoluto
  @Input() set color(valor: string) {
    this._color = valor;
    // mas claro llamando al método
    this.setColor(); //es lo mismo llamar al método que llamar al contenido del método =>
    // this.htmlElement.nativeElement.style.color = this._color;
  }

  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  // donde creo está clase?? Logicamente en el componente que llama a la directiva!!
  @Input() set valido(valid: boolean) {
      if(valid){
        this.htmlElement.nativeElement.classList.add("hidden")
      }else{
        this.htmlElement.nativeElement.classList.remove("hidden")
      }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // no se recomienda usar este ciclo de vida por motivos de eficiencia y poca claridad,repetición de código...
    // if ( changes.mensaje ) {
    //   const mensaje = changes.mensaje.currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
    // if ( changes.color ) {
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
    // console.log(changes)
  }
  
  // los métodos simplemente deben llamar a la propiedad privada,que no va a ser undefined
    setClase(): void {
      this.htmlElement.nativeElement.classList.add('form-text');
    }
  
    setColor(): void {
      this.htmlElement.nativeElement.style.color = this._color;
    }
  
    setMensaje(): void {
      this.htmlElement.nativeElement.innerText = this._mensaje;
    }
  // puedo llamar a estos métodos en el onInit perfectamente ya 
  ngOnInit(): void {
    this.setClase();
    this.setColor();
    this.setMensaje();
  }
}
