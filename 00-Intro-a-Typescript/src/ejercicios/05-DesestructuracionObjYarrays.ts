 /*
    ===== INTRO A TYPESCRIPT BY FERNANDO =====
        === DESESTRUCTURACIÓN ======
*/
 
 interface Reproductor {
     volumen: number;
     segundo: number;
     cancion: string;
     detalles: Detalles;
 }

 interface Detalles {
     autor: string;
     año: number;
 }

 const reproductor: Reproductor = {
     volumen: 90,
     segundo: 36,
     cancion: 'Mess',
     detalles: {
         autor: 'Ed Sheeran',
         año: 2015
     }
 }

 // Fernando no recomienda la desestructuración anidada
 // Recuerda que al desestructurar puedo renombrar cualquier propiedad
 const { volumen:vol,segundo:tiempo,cancion,detalles:{ autor,año} } = reproductor;

// Es mejor ir nivel por nivel,debido a la legibilidad:
//  const { autor,año } = reproductor.detalles;

 console.log('El volumen actual es de: ', vol)
 console.log('El segundo actual es: ', tiempo)
 console.log('La cancion actual es: ', reproductor.cancion)
 console.log('El autor actual es: ',reproductor.detalles.autor)
 console.log('El año de la cancion es: ',reproductor.detalles.año)

// DESESTRUCTURAR UN ARREGLO
const dbz: string [] = ['Goku','Vegeta','Trunks']
// SE USAN LLAVES CUADRADAS Y ARGUMENTOS POSICIONALES 
// EL NOMBRE NO ES IMPORTANTE,SOLO LA POSICION
const [ p1, p2, p3 ] = dbz;

console.log('Personaje 1: ', p1)
console.log('Personaje 2: ', p2)
console.log('Personaje 3: ', p3)

// DEBIDO A QUE UN ARREGLO ES UN OBJETO TAMBIEN SE PUEDEN DESESTRUCTURAR ASI
const db: string [] = ['Goku','Vegeta','Trunks']

const {0:gk,1:veg,2:tr} = db;
console.log('Personaje 1: ', gk);
console.log('Personaje 2: ', veg);
console.log('Personaje 3: ', tr);

