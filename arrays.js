//Forma de declarar un array
// const arreglo = [
//     "nombre", 1, ()=>{},[]
// ];

//Manipulacion de arrays

// const frutas = [
//     "Manzana",
//     "Pera",
//     "Banana",
//     "Frutillas"
// ]

// console.log(frutas[2]);
// console.log(frutas.length);

// //Modificar arrays
// frutas[2] = "Kiwi"
// console.log(frutas[2]);

// const objeto = frutas[0]
// console.log(objeto);

// const ultimoElemento = frutas[frutas.length - 1]
// console.log(ultimoElemento);

//indexOf

const personas = [
    "Susana", 
    "Ruth",
    "Lautaro",
]

const persona1 = "Lautaro"
const indice = personas.indexOf(persona1)
console.log(indice)

personas [personas.indexOf("Lautaro")]= "Ruben"
console.log(personas)
