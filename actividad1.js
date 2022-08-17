let invitados = [
    "Lucas",
    "Matias",
    "Jose",
    "Pedro",
    "Martina",
    "Marcelo",
    "Esteban",
    "Marcela",
    "Martin",
]

console.log(invitados.length)
console.log(invitados[invitados.length - 1])

invitados.push("Pedro")
console.log(invitados)

const indice = invitados.indexOf("Marcela")
invitados.splice(indice, 1)

console.log(invitados)

invitados.map((invitado, index) => {console.log(`${invitado} Orden: ${index}`) } )

console.log(invitados)

invitados.sort()

console.log(invitados)