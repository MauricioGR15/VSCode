//Objects

//Object literal
const persona = {
    nombre: 'Mauricio',
    profesion: 'Estudiante',
    edad: 20
}

console.log(persona);
console.log(`La edad de ${persona.nombre} es ${persona.edad}`);

//Object constructor
function Tarea(nombre,fecha){
    this.nombre = nombre;
    this.fecha = fecha;
}

const tarea1 = new Tarea('Aprender JS','Hoy');
console.log(tarea1);
console.log(tarea1.nombre);

//Prototype
Tarea.prototype.mostarInfo = function(){
    return `la tarea es ${this.nombre} y su fecha es ${this.fecha}`;
}

console.log(tarea1.mostarInfo());


//Destructuring objects
const desarrollador = {
    nombre: 'Mauricio',
    lenguajes: ['Java','JavaScript','Python']

}
    //antes
let nombreDesarrollador= desarrollador.nombre;
    //version nueva
let {nombre} = desarrollador;
console.log(nombre);

//Object literal enhancement
const banda = 'Metallica';
const genero = 'Rock';
const canciones = ['One','Master of puppets','Enter sandman'];

const grupo = {banda,genero,canciones};
console.log(grupo);