//Funciones de un objeto

const persona2= {
    nombre: 'Mauricio',
    trabajo: 'Desarrollador web',
    edad: 20,
    estudiante: true,
    mostrarInfo(){
        console.log(`Nombre: ${this.nombre}\nTrabajo: ${this.trabajo}`)
    }
}

persona2.mostrarInfo();

//Arreglos
const carrito = ['Obj1','Prod1','Prod2']
console.log(carrito);

//Acceder a un arrelgo por medio de for-each
// carrito.forEach(prod => {
//     console.log(`El producto es : ${prod}`)
// })

//Acceder a un areglo por medio de map
carrito.map(prod => {
    return "El producto es " + prod
});

//Object keys
console.log(Object.keys(persona2));


// let html = "";

// carrito.forEach(producto => {
//         html += `<li>${producto}</li>`;
//     }
// )

// document.querySelector("p").innerHTML = html;


//Spread operator
const lenguajes = ['Python','JavaScript','Java'];
const frameworks = ['laravel','Bottstrap','Angular']

// let combinacion = lenguajes.concat(frameworks);
let combinacion = [...lenguajes,...frameworks];
console.log(combinacion);

let [ultimo] = [...lenguajes].reverse();
console.log(ultimo);

const numeros = [4,4,4];

function sua(a,b,c){
    console.log(a+b+c);
}

sua(...numeros);