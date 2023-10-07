const utils = require("../utils");

/*⚠️ No modificar nada arriba de esta línea ⚠️
  3️⃣ * EJERCICIO 3 * - updatePersonaje 3️⃣:
 
  🟢 Debes buscar por ID un personaje recibido por parámetro dentro del array de utils.personajes y actualizar las propiedades: nombre y numeroEpisodio. También agrégale una nueva propiedad llamada "casa".
  🟢 Si no encuentras el personaje debes arrojar un error que diga: "No se encontró el personaje solicitado".
  🟢 Si alguna de las propiedades {nombre, numeroEpisodio o casa} del personaje es undefined, debe arrojar un error que diga: "Faltan datos a completar".

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recuerda que el mensaje de error debe ser exactamente como lo pide el enunciado.
  2) Recuerda agregar la nueva propiedad "casa", ésta no se encuentra en examples.js
*/

const updatePersonaje = (personaje) => {
  // Buscar el personaje por ID
  const personajeEncontrado = utils.personajes.find((p) => p.id === personaje.id);

  // Si no se encuentra el personaje, arrojar un error
  if (!personajeEncontrado) {
    throw new Error("No se encontró el personaje solicitado");
  }

  // Verificar si alguna propiedad es undefined
  if (personaje.nombre === undefined || personaje.numeroEpisodio === undefined || personaje.casa === undefined) {
    throw new Error("Faltan datos a completar");
  }

  // Actualizar las propiedades del personaje
  personajeEncontrado.nombre = personaje.nombre;
  personajeEncontrado.numeroEpisodio = personaje.numeroEpisodio;
  personajeEncontrado.casa = personaje.casa;

  // Devolver el personaje actualizado
  return personajeEncontrado;
};


// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = updatePersonaje;
