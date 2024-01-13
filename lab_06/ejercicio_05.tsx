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

type Categoria = {
  nombre: string,
  precio: number
}[];

const entretenimientoColombiaDos: Categoria = [
  { nombre: "PS5", precio: 2_500_000 },
  { nombre: "Echo Show 5", precio: 180_000 },
  { nombre: "Fire TV", precio: 80_000 },
];

const sonidoColombiaDos: Categoria = [
  { nombre: "Echo Studio", precio: 850_000 },
  { nombre: "Sonos One", precio: 1_200_000 },
  { nombre: "JBL Flip 6", precio: 450_000 },
];

const tarjetasDeRegaloDos: Categoria = [
  { nombre: "Amazon Card", precio: 150_000 },
  { nombre: "Netflix Card", precio: 350_000 },
];

type CatalogoDos = (tipo: string, pais: string) => {nombre: string, precio: number}[] | undefined;

const catalogoDos: CatalogoDos = function (tipo, pais) {
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

type Catalogo2Dos = (tipo: string, pais: string) => void;

const catalogo2Dos:Catalogo2Dos = function (tipo, pais) {
  if (tipo === "entretenimiento" && pais === "Colombia") {
    console.log("productos de entretenimiento encontrados");
    for (let entcol of entretenimientoColombiaDos) {
      console.log(entcol.nombre, ":", entcol.precio);
    }
  } else if (tipo === "sonido" && pais === "Colombia") {
    console.log("productos de sonido encontrados");
    for (let soncol of sonidoColombiaDos) {
      console.log(soncol.nombre, ":", soncol.precio);
    }
  } else if (tipo === "tarjetas de regalo") {
    console.log("productos de digitales encontrados");
    for (let tarjeta of tarjetasDeRegaloDos) {
      console.log(tarjeta.nombre, ":", tarjeta.precio);
    }
  } else {
    console.log("no existe disponibilidad de los productos indicados");
  }
};
console.log("Ropa - Noruega", catalogoDos("ropa", "Noruega"));
console.log(
  "Entrenamiento - Colombia",
  catalogoDos("entretenimiento", "Colombia")
);
console.log(
  "Tarjetas de Regalo - Colombia",
  catalogoDos("tarjetas de regalo", "Colombia")
);
console.log("Sonido - Bélgica", catalogoDos("sonido", "Bélgica"));

catalogo2Dos("ropa", "Noruega");
catalogo2Dos("entretenimiento", "Colombia");
catalogo2Dos("tarjetas de regalo", "Colombia");
catalogo2Dos("sonido", "Bélgica");
