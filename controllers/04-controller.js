const utils = require("../utils");

/* ⚠️ No modificar nada arriba de esta línea ⚠️ */

/* 4️⃣ * EJERCICIO 4 * - deletePersonaje 4️⃣:

🟢 Busca un personaje por ID. Elimínalo de la base de datos y responde con el array de personajes teniendo en cuenta que no está más el que acabas de eliminar.
🟢 Si no existe el personaje con ese ID, arrojá un error que diga: `No existe el personaje con id: ${personajeID}`.
*/

const deletePersonaje = (personajeID) => {
  // Buscar el índice del personaje por ID
 
  // Busca el índice del personaje en el array
  const index = utils.personajes.findIndex((personaje) => personaje.id === personajeID);

  // Si el índice es -1, significa que no se encontró el personaje
  if (index === -1) {
    throw new Error(`No existe el personaje con id: ${personajeID}`);
  }

  // Elimina el personaje del array
  utils.personajes.splice(index, 1);

  // Devuelve el array de personajes actualizado
  return utils.personajes;
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = deletePersonaje;
