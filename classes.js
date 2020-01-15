

class Tarea{
    constructor(nombre,descripcion){
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    mostrar(){
        console.log(`${this.nombre} tiene una prioridad ${this.descripcion}`);
    }

}

let tarea1 = new Tarea('Aprender JavaScript','Aprender');
let tarea2 = new Tarea('Preparar café', 'Urgente');

tarea1.mostrar();

//herencia

class ComprasPendientes extends Tarea{
    constructor(nombre,descripcion,cant){
        super(nombre,descripcion);
        this.cant = cant;
    }

    
}

let pend = new ComprasPendientes('commprar','Alta','15');
pend.mostrar();

//modulos
// import { myName } from './functions.js';


import Obj from './functions';

const objeto = new Obj(Pelota);
console.log(objeto.nombre);


