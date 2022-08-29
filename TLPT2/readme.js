//1
const realizaSaludo = nombre => console.log(nombre);

realizaSaludo("Juan")

// //2
const multiplicadorDeNumeros = (valorUno, ValorDos) => console.log(valorUno * ValorDos);

multiplicadorDeNumeros(2,2)

//3
const alumno = (nombre, apellido, edad, materias) => console.log({nombre: nombre, apellido: apellido, edad: edad, materias: materias})
alumno("Sebastian", "Prieto", 20, ['TLPA','Base de Datos','Inglés'])

//4
const devolverFechaHoy = (dia, mes, anio) => console.log(`Hoy es ${dia} ${mes} ${anio}`)
devolverFechaHoy('10','09','2022')