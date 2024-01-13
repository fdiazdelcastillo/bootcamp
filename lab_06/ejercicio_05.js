// Catálogo
/**
 * Ejercicio Nº 5
 *
 * 1. Crear una función llamada (camelCase) 'catalogo', la función debe contener lo siguiente:
 *
 * Parámetros (camelCase):
 * - tipo
 * - país
 *
 * Instrucciones:
 * - Si el parámetro 'tipo' es igual a "entretenimiento" y el país es igual a "Colombia", realizar
 * las siguientes instrucciones:
 *   * Imprimir en la consola: productos de entretenimiento encontrados
 *   * Retornar un conjunto de datos con los siguientes objetos:
 *     - Primer objeto
 *       * nombre (cadena de texto): PS5
 *       * precio: 2_500_000
 *     - Segundo objeto
 *       * nombre (cadena de texto): Echo Show 5
 *       * precio (número): 180_000
 *     - Tercer objeto
 *       * nombre (cadena de texto): Fire TV
 *       * precio (número): 80_000
 * - De lo contrario si el parámetro 'tipo' es igual a "sonido" y el país es igual a "Colombia", realizar las siguientes
 * instrucciones:
 *   * Imprimir en la consola: productos de sonido encontrados
 *   * Retornar un conjunto de datos con los siguientes objetos:
 *     - Primer objeto:
 *       * nombre (cadena de texto): Echo Studio
 *       * precio (número): 850_000
 *     - Secundo objeto:
 *       * nombre (cadena de texto): Sonos One
 *       * precio (número): 1_200_000
 *     - Tercer objeto:
 *       * nombre (cadena de texto): JBL Flip 6
 *       * precio (número): 450_000
 * - De lo contrario si el parámetro 'tipo' es igual a "tarjetas de regalo", realizar las
 * siguientes instrucciones:
 *   * Imprimir en la consola: productos digitales encontrados
 *   * Retornar un conjunto de datos con los siguientes objetos:
 *     - Primer objeto
 *       * nombre (cadena de texto): Amazon Card
 *       * precio (número): 150_000
 *     - Segundo objeto
 *       * nombre (cadena de texto): Netflix Card
 *       * precio (número): 350_000
 * - De lo contrario, realizar las siguientes instrucciones:
 *   * Imprimir en la consola: no existe disponibilidad de los productos indicados
 *
 * 2. Ejecutar la función 'catalogo' pasando como parámetros los siguientes valores:
 *   - tipo (string): ropa
 *   - país (string): Noruega
 *
 * 3. Ejecutar la función 'catalogo' pasando como parámetros los siguientes valores:
 *   - tipo (string): entretenimiento
 *   - pais (string): Colombia
 *
 * 4. Ejecutar la función 'catalogo' pasando como parámetros los siguientes valores:
 *   - tipo (string): tarjetas de regalo
 *   - pais (string): Colombia
 *
 * 5. Ejecutar la función 'catalogo' pasando como parámetros los siguientes valores:
 *   - tipo (string): sonido
 *   - pais (string): Bélgica
 */

const entretenimientoColombia = [
  { nombre: "PS5", precio: 2_500_000 },
  { nombre: "Echo Show 5", precio: 180_000 },
  { nombre: "Fire TV", precio: 80_000 },
];

const sonidoColombia = [
  { nombre: "Echo Studio", precio: 850_000 },
  { nombre: "Sonos One", precio: 1_200_000 },
  { nombre: "JBL Flip 6", precio: 450_000 },
];

const tarjetasDeRegalo = [
  { nombre: "Amazon Card", precio: 150_000 },
  { nombre: "Netflix Card", precio: 350_000 },
];

const catalogo = function (tipo, pais) {
  if (tipo === "entretenimiento" && pais === "Colombia") {
    console.log("productos de entretenimiento encontrados");
    return [
      { nombre: "PS5", precio: 2_500_000 },
      { nombre: "Echo Show 5", precio: 180_000 },
      { nombre: "Fire TV", precio: 80_000 },
    ];
  } else if (tipo === "sonido" && pais === "Colombia") {
    console.log("productos de sonido encontrados");
    return [
      { nombre: "Echo Studio", precio: 850_000 },
      { nombre: "Sonos One", precio: 1_200_000 },
      { nombre: "JBL Flip 6", precio: 450_000 },
    ];
  } else if (tipo === "tarjetas de regalo") {
    console.log("productos de digitales encontrados");
    return [
      { nombre: "Amazon Card", precio: 150_000 },
      { nombre: "Netflix Card", precio: 350_000 },
    ];
  } else {
    console.log("no existe disponibilidad de los productos indicados");
  }
};

const catalogo2 = function (tipo, pais) {
  if (tipo === "entretenimiento" && pais === "Colombia") {
    console.log("productos de entretenimiento encontrados");
    for (let entcol of entretenimientoColombia) {
      console.log(entcol.nombre, ":", entcol.precio);
    }
  } else if (tipo === "sonido" && pais === "Colombia") {
    console.log("productos de sonido encontrados");
    for (let soncol of sonidoColombia) {
      console.log(soncol.nombre, ":", soncol.precio);
    }
  } else if (tipo === "tarjetas de regalo") {
    console.log("productos de digitales encontrados");
    for (let tarjeta of tarjetasDeRegalo) {
      console.log(tarjeta.nombre, ":", tarjeta.precio);
    }
  } else {
    console.log("no existe disponibilidad de los productos indicados");
  }
};
console.log("Ropa - Noruega", catalogo("ropa", "Noruega"));
console.log(
  "Entrenamiento - Colombia",
  catalogo("entretenimiento", "Colombia")
);
console.log(
  "Tarjetas de Regalo - Colombia",
  catalogo("tarjetas de regalo", "Colombia")
);
console.log("Sonido - Bélgica", catalogo("sonido", "Bélgica"));

catalogo2("ropa", "Noruega");
catalogo2("entretenimiento", "Colombia");
catalogo2("tarjetas de regalo", "Colombia");
catalogo2("sonido", "Bélgica");
