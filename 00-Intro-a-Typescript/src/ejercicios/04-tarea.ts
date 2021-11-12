/*
    ===== INTRO A TYPESCRIPT BY FERNANDO =====
        === TAREA ======
*/


interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 38,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return `${this.nombre} ${this.direccion.ciudad} ${this.direccion.pais}` 
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion );
