 /*
    ===== INTRO A TYPESCRIPT BY FERNANDO =====
        =====  CLASES BÁSICAS =====
*/

// Typescript también tiene sus clases,además de tener modificadores de acceso

class Heroe {
   private alterEgo: string;
   public edad: number;
   static nombreReal: string;

   constructor(alterEgo: string,edad?: number) {
       this.alterEgo = alterEgo;
       this.edad=edad;
   }

   imprimirNombre () {
       return this.alterEgo + " " + this.edad
   }
}

class Heroe2 {
   constructor(
       public alterEgo: string,
       public edad?: number,
       public nombreReal?: string
   ){}
}

const thor:Heroe2 = new Heroe2('Thor',34,'Monstruzzio');
console.log(thor);

interface Personaje2 {
   alterEgo?: string;
   edad?: number;
   nombreReal?: number
}

Heroe.nombreReal= 'macario';
const ironman:Heroe = new Heroe('Ironman',45);
const spiderman: Personaje2 = {};

console.log(ironman);