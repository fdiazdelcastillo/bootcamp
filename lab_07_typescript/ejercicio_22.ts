/**
 * Ejercicio 2.2
 *
 * 1. Declarar una variable constante con nombre 'paisUsuario', tipificada como un conjunto de datos con dos (2) datos
 * en especifico, tipificar cada dato de la siguiente manera:
 *
 * - dato1 tipificado como un string, nombrarlo como país
 * - dato2 tipificado como un objeto, nombrarlo como usuario y tipificarlo de la siguiente manera:
 *   * nombre: string
 *   * rol: string
 *
 * 2. Inicializar la constante 'paisUsuario' con datos de muestra para la tipificación
 */

const paisUsuario: [
  pais: string,
  usuario: {
    nombre: string;
    rol: string;
  }
] = ["Colombia", { nombre: "Fernando", rol: "admin" }];

type PaisUsuario = [
  pais: string,
  usuario: {
    nombre: string;
    rol: string;
  }
];

const paisUsuario2: PaisUsuario = [
  "Colombia",
  { nombre: "Fernando", rol: "admin" },
];
const paisUsuario3: PaisUsuario = ["USA", { nombre: "Fernando", rol: "admin" }];
