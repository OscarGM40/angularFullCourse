/*
    ===== INTRO A TYPESCRIPT BY FERNANDO =====
        ===== DECORADORES   =====
*/

// Los decoradores son propios de las clases Typescript.No pertenecen sólo a Angular, son de Typescript.Infieren funcionalidades extra al compilar a JS.Angular los usa mucho para diferenciar si la clase es un componente,un pipe,una directiva,un servicio...

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class MiSuperClase {
  public miPropiedad: string = "ABC123";
  
  imprimir() {
    console.log("Hola mundo");
  }
}

console.log( MiSuperClase );

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);
