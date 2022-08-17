/* const objeto1 = new Object();

const objeto2 = {
    nombre: "Teresa",
    edad: 25,
    domicilio: {
        real: "casa",
        legal: "Depto",
        "tercer domicilio" : "Quinta"
    },
};

objeto2.apellido = "Gonzalez"

/* console.log(objeto2);
console.log(objeto2["domicilio"])
console.log(objeto2["domicilio"].real)
console.log(objeto2.domicilio.legal)
objeto2.apellido = "Diaz"
console.log(objeto2)

console.log(objeto2["domicilio"]["real"]) */

/* delete objeto2.edad
console.log(objeto2)
console.log(objeto2.domicilio["tercer domicilio"])

console.log("edad" in objeto2)
console.log("nombre" in objeto2)  */

//EJERCISIO:

/* const user = {}

user.name = "John"
user.surname = "Smith"

console.log(user)

user.name = "Peter"
console.log(user)

delete user.name
console.log(user) */

//RECORRER OBJECTO CON FOREACH

/* let perro = {
    nombre: "Scott",
    color: "Negro",
    macho: true,
    edad: 5
  };

  Object.entries(perro).forEach(([key, val]) => {
    console.log(val)
  }) */

// EJERCISIO

/*   let prodAlgodon = {
    pirane: 420,
    laishi: 100,
    Ibarreta: 250,
    "Palo Santo" : 120,
  } */
  //escribir el codigo para sumar todas las cantidades y almacena el regultado 
  //en la suma
/* let sum = 0;
  Object.entries(prodAlgodon).forEach(([key, val]) => {
    sum += val;
  })
  console.log(sum) */