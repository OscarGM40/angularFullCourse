/*
    ===== INTRO A TYPESCRIPT BY FERNANDO =====
        === ARRAYS,OBJETOS E INTERFACES ======
*/

// Para definir el tipo de un array se usa :type[]
// Puede tener más de un tipo o incluso ser de tipo any[]

let habilidades: string[] = ['Bash','Counter','Healing'];
let poderes: (number | string)[] =[2,'salto',4,'cura'];

// las tuplas permiten crear arreglos con tipos definidos,sin embargo se quedan cortas frente al map,pues tengo que especificarlo en todas las posiciones
let tupla: [string,number];
// tupla=['paco',34,'paca',45]; no pueden ser 4,solo 2
tupla=['paca',45]; 

// tambien hay enums

enum Datos {
    Red=1,
    Green=2,
    Blue=3
}
let c= Datos.Blue;
console.log('Deberia ser un 3',c);

// y también hay tipo unkown,que me permite cambiar el tipo
let notSure: unknown = 4;
notSure = 'maybe a string';
notSure = false;

// Los objetos siempre van a necesitar una interface que le infiera su tipo.Puedo crear incluso propiedades opcionales:

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje01: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades:['Bash','Counter','Healing']
}

personaje01.puebloNatal = 'Pueblo Paleta'
console.table(personaje01);