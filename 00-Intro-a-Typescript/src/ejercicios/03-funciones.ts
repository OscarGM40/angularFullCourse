/*
    ===== INTRO A TYPESCRIPT BY FERNANDO =====
        === FUNCIONES ======
*/

// Debo especificar el tipo de retorno justo despues de los argumentos en las funciones

function sumar (a: number, b: number) {
    return (a + b).toLocaleString();
}

const sumarFlecha = (a: number, b: number):number => {
    return (a + b);
} 

// Puedo usar parametros opcionales con ? o con valores por defecto con =
// Siempre van primero los parametros obligatorios,despues los opcionales.Si un parametro obligatorio tiene un valor por defecto no importa donde vaya entonces.
function multiplicar ( numero: number, otroNumero?: number, base: number = 2):number {
    return numero * base;
}

// Las interfaces permiten asegurarse que un objeto cumple reglas,como tener la funcion mostrarHp o la propiedad pv como number
interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp:() => void;
}

function curar( personaje: PersonajeLOR, curarX: number ): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log(`Puntos de vida ${this.pv}`)
    }
}

curar( nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();


const resultado = sumar(10,20);
const resultado2 = multiplicar(10,20);

console.log(resultado,resultado2);