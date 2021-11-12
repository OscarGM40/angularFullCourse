
export enum Color {
   rojo,negro,azul,verde
   // internamente una enum se resuelve a numeros,asi rojo es el 0,negro es el 1,azul el 2....
}


export interface Heroe{
  nombre: string;
  vuela: boolean;
  color: Color
}