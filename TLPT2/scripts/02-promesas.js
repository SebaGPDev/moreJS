const retrasar = (milisegundos) =>
  new Promise((resolve) => setTimeout(resolve, milisegundos));

const urlProvincias = "https://apis.datos.gob.ar/georef/api/provincias";
const urlDepartamentos = "https://apis.datos.gob.ar/georef/api/municipios";
const urlLocalidades = "https://apis.datos.gob.ar/georef/api/localidades";

// Función que retorna los datos de provincias
const obternerProvincias = async () => {
  try {
    await retrasar(1800);
    const buscar = await fetch(urlProvincias);
    const respuesta = await buscar.json();
    // return console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// Función que retorna los datos de departamentos
const obtenerDepartamentos = async () => {
  try {
    await retrasar(1391);
    const buscar = await fetch(urlDepartamentos);
    const respuesta = await buscar.json();
    // return console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// Función que retorna los datos de localidades
const obtenerLocalidades = async () => {
  try {
    await retrasar(900);
    const buscar = await fetch(urlLocalidades);
    const respuesta = await buscar.json();
    // return console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// Funcion para obtener todos los datos
const consultarDatos = async () => {
  const provincias = await obternerProvincias();
  const departamentos = await obtenerDepartamentos();
  const localidades = await obtenerLocalidades();

  console.log(provincias);
  console.log(departamentos);
  console.log(localidades);
};

consultarDatos();