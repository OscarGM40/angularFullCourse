 /*
    ===== INTRO A TYPESCRIPT BY FERNANDO =====
        === DESESTRUCTURACIÓN ======
*/
 
export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc:'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc:'iPad Air',
    precio: 350
}

// Fijate que devuelvo una tupla,que es un arreglo,asi que la podré desestructurar
/* function calculaISV (productos: Producto[]): [number,number]{

    let total= 0;

    productos.forEach( ({ precio}) =>{
        total += precio;
    })

    return [total,total * 0.15];
} */

export function calculaISV (productos: Producto[]):[number,number] {
    let total=productos.reduce( (acumulator,product) => acumulator += product.precio,0);

    return [total,total * 0.15];
}
const articulos = [ telefono, tableta ] 


const { 0:total,1:iva } = calculaISV(articulos)

console.log('Total:', total);
console.log('ISV:', iva);