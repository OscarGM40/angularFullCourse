 /*
    ===== INTRO A TYPESCRIPT BY FERNANDO =====
        === IMPORTACIONES ======
*/

// Siempre que quiera importar algo debo exportarlo primero

import { calculaISV, Producto } from "./06-DesestructurarArgumentos"; 

// La interfaz Producto,que ya he definido debe ser importada 


const carritoCompras: Producto[] = [
    {
        desc:'Telefono 1',
        precio: 100
    },
    {
        desc:'Telefono 2',
        precio:150
    }
];

const [ total, isv ] = calculaISV( carritoCompras );

console.log('Total:', total);
console.log('ISV:', isv);