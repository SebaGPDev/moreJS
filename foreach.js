// ``//JAVASCRIPT ES UN LENGUAJE SINCRONICO, NO ES BLOQUEANTE, SIMPLE THREAD 
// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// // expected output: "a"
// // expected output: "b"
// // expected output: "c"}

//CALLBACKS
//Ejemplo
// console.log("Me despierto")
// console.log("Me cepillo los dientes")
// console.log("Prendo la cafetera")
// for (let tiempo = 120; tiempo>0; tiempo--){
//     console.log(tiempo)
//     if (tiempo===1){
//         console.log("El cafe esta listo")
//     }
// }

//setTimeout
// EL PROCESO EL SEGUIRA Y LUEGO MOSTRARA SI ALGO ESTABA EN PROCESO
//setTimeout no es propio de javascript
//setTimeout consulta a la web, api y callback queue, luego espera que termine lo que esta en el script pero el evenloop lo manda

// COMENTAR alt shift a 
/* setTimeout(() => {
    console.log("El cafe esta listo")
}, 0)
console.log("desayuno")
console.log("voy al ipf") */

// Caso A
/* console.log("Teresa")
console.log("Hugo")
console.log("Rodrigo") */

// Caso B
/* setTimeout(()=>{
    console.log("Teresa"),1000
})
console.log("Hugo")
console.log("Rodrigo") */

// Caso c

// El callstack hace la ejecucion llega el setTimeout, eso pasa a la web api y a la callback queue a la espera que las demas operaciones se ejecuten y recien el setTimeout volvera a la callstack
/* setTimeout(()=>{
    console.log("Teresa"),0
})

for (let index = 0; index <=300; index++) {

    console.log(index)
    if(index===300) console.log("Rodrigo")
} */

//Ejercicio 3
// Definir una funcion

/* function primero(segundo){

    setTimeout(() => {
        console.log("Primero");
        segundo();
    }, 2000);

}

function segundo(){
    console.log("Segundo")

}

primero(segundo); */

const arreglo = [
    "Hugo",
    "Sebastian",
    "Flor"
]

arreglo.forEach((nombre, index) => {
    console.log(`Nombres: ${nombre} : ${index}`)
})

console.log(arreglo.filter( word => word.length > 4))