 /*
    ===== INTRO A TYPESCRIPT BY FERNANDO =====
        =====  HERENCIA DE CLASES =====
*/

// al heredar se adquiere funcionalidad y/o propiedades extra.Se pueden heredar clases e interfaces también.

class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string,
        ){}
    }
    
    
    class Heroe3 extends PersonaNormal{
        constructor(
            public alterEgo: string,
            public edad: number,
            public nombreReal: string
    ){
        super(nombreReal,'New York, USA');
    }
}

const ironman3 = new Heroe3('Ironman',45,'Tony');

console.log(ironman);