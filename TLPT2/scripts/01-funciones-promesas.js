//Primer Promesa
const promesa = new Promise((resolve, reject) => {
  10 === 11
    ? resolve("Los valores son iguales")
    : reject("Los valores son distintos");
});

promesa
  .then((correcto) => console.log(correcto))
  .catch((error) => console.error(error));

//Segunda Promesa
// Promesa dentro en una función.
const promesaDos = (provincia) => {
  const promesa = new Promise((resolve, reject) => {
    "Formosa" === provincia
      ? resolve("Usted está ubicado en Formosa")
      : reject("Error al realizar la consulta");
  });
  promesa
    .then((correcto) => console.log(correcto))
    .catch((error) => console.error(error));
};
promesaDos("Formosa");

//Tercera Promesa
const promesaTres = async (valorBooleano) => {
  return true === valorBooleano
    ? "Los valores son iguales"
    : "Los valores son distintos";
};

promesaTres(true)
  .then((correcto) => console.log(correcto))
  .catch((error) => console.error(error));

const promesaCuatro = async (arguments) => {
  return true === arguments
    ? "Los valores son iguales"
    : "Los valores son distintos";
};

promesaCuatro(true)
  .then((correcto) => console.log(correcto))
  .catch((error) => console.error(error));