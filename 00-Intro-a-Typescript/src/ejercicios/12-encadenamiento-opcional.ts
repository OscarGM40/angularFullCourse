/*
    ===== INTRO A TYPESCRIPT BY FERNANDO =====
        ===== ENCADENAMIENTO OPCIONAL  =====
 */

// El encadenamiento opcional es propio de Javascript e indica que una propiedad puede ser nula y si lo es puedo ejecutar lo de la derecha con el operador de cortocircuito

interface Pasajero {
  nombre: string;
  hijos?: string[]
}

const pasajero1: Pasajero = {
  nombre:'Fernando'
}

const pasajero2: Pasajero = {
  nombre:'Melissa',
  hijos:['Natalia','Gabriel']
}

function imprimeHijos( pasajero: Pasajero ): void {
  const cuantosHijos= pasajero.hijos?.length || 0;
  console.log( cuantosHijos );
}

imprimeHijos( pasajero2 )
imprimeHijos( pasajero1 )