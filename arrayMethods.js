
const personas = [
    {nombre: 'Mauricio', edad:20, estudiante: true},
    {nombre: 'Ramon', edad:21, estudiante: true},
    {nombre: 'Ivan', edad:20, estudiante: true},
    {nombre: 'Señor', edad:53, estudiante: false}
]

//filter

const mayores = personas.filter( pers => {
    return pers.edad < 40;
});

console.log(mayores);

//buscar
const buscar = personas.find( pers =>{
    return pers.nombre == 'Ivan';
});

console.log(buscar);

//reduce
const x = personas.reduce((edadTotal, pers) => {
    return edadTotal + pers.edad;
},0);

console.log('El promedio de edad es ' + x/personas.length);