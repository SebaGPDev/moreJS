// Función tradicional
// function validar(a) {
//     return a + 100;
//   }

//   // Desglose de la función flecha

//   // 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
//   (a) => {
//     return a + 100;
//   }

//   // 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
//   (a) => a + 100;

// 3. Suprime los paréntesis de los argumentos
//a => a + 100;

//console.log(validar(100))

//Hacer una funcion llamada numeros que el primer parametro indique el valor que tengo que agregar
//al arreglo objetosNumericos, y el segundo parametro me indique el indice donde sera agregado y ademas
//muestre por consola el nuevo arreglo

// const objetosNumericos = ["Gabriel", "Felipe"];

//FUNCION TRADICIONAL
// function numero(primerParametro, segundoParametro) {
//   return objetosNumericos.splice(primerParametro, segundoParametro, "Sebastian");

// }

// numero(0, 0);
// console.log(objetosNumericos);

//FUNCION FLECHA
// const sumar = (primerParametro, segundoParametro) => {
//   objetosNumericos.splice(primerParametro, segundoParametro, "Sebastian");
//   return console.log(objetosNumericos);
// };

// sumar(0, 0);
