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

// const personas = [
//     "Susana", 
//     "Ruth",
//     "Lautaro",
// ]

// const persona1 = "Lautaro"
// const indice = personas.indexOf(persona1)
// console.log(indice)

// personas [personas.indexOf("Lautaro")]= "Ruben"
// console.log(personas)

// //push agrega elemento al final
// personas [personas.push("Sebastian")]
// console.log(personas)

// //pop elemina o remueve elemento
// personas [personas.pop("Sebastian")]
// console.log(personas)

// //unshift agrega el primer elemento
// personas [personas.unshift("Matias")]
// console.log(personas)

// //Elemina el primer elemento
// personas [personas.shift()]
// console.log(personas)

// const meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
// ]

//splice sirve para agregar, remover
//elemento.splice(0,0, "Enero"), Agrega en la posicion 0
//elemento.splice(0,1, "Enero"), Remueve en la posicion 0

// meses.splice(0,1,"Sebastian")
// console.log(meses)