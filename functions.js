//template strings
var string = `Texto
                multilinea
                en variables`;

//function declaration
function saludar(nombre){
    console.log(`Bienvenido ${nombre}`);
}

saludar('Mauricio')

function actividad(nombre = "Random", actividad = "manejar uber"){
    console.log(`A ${nombre} le gusta ${actividad}`)
}

actividad('Marco', 'volar');
actividad();
actividad(undefined, 'jugar')

//function expression
const cliente = function(nomCliente){
    console.log("Mostrar nombre de cliente: " + nomCliente)
}

cliente('Mauri');

//arrow functions

let viajando = (destino) => `Viajando a la ciudad de ${destino}`;

let viaje = viajando('Cancun');
console.log(viaje);

// export const myName = 'Mauri';

// const myLastName = 'García';
// export default myLastName;

export default class Obj{
    constructor(nombre){
this.nombre = nombre;
    }
}