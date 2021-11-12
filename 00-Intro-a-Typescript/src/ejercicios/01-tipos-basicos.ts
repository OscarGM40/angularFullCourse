/*
    ===== INTRO A TYPESCRIPT BY FERNANDO =====
      =====    TIPOS BÁSICOS  ========
*/

// En typescript hay que dar un tipo a las variables(let variable:type).
// Las variables pueden ser de más de un tipo( number | string o de cualquiera con any)

let nombre: string = "Strider";
let hp: number | string = 95;
let estaVivo: boolean = true;

hp = 'FULL'

console.log(nombre,hp)