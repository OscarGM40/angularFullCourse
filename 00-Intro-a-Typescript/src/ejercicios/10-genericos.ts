 /*
    ===== INTRO A TYPESCRIPT BY FERNANDO =====
        =====  TIPOS GENERICOS =====
*/

// Muchas veces necesitaré que el tipo de una funcion o un retorno pueda mutar.Es aqui donde entran los genéricos

function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola mundo'); 
let soyNumero = queTipoSoy( 100 ); 
let soyArreglo = queTipoSoy( [1,2,3,4,5] ); 

let soyExplicito = queTipoSoy<string>('Hola mundo');