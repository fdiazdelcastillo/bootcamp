/**
 * Ejercicio 5.1
 *
 * 1. Declarar un función con nombre 'multiplicar', tipificada de la siguiente manera:
 *
 * Parámetros:
 * - x: número
 * - y: número
 *
 * Retorno: número
 *
 * 2. Colocar las instrucciones necesarias dentro de la función 'multiplicar' para retornar la
 * multiplicación de x por y;
 *
 * 3. Ejecutar e imprimir en la consola el resultado de la función 'multiplicar'
 * con los siguientes parámetros:
 * - x: 40
 * - y: 70
 *
 * 4. Ejecutar e imprimir en la consola el resultado de la función 'multiplicar'
 * con los siguientes parámetros:
 * - x: 10
 * - y: 5
 */
function multiplicar(x: number, y: number): number {
  let resultado = x * y;
  return resultado;
}
type MultiplicarDos = (x: number, y: number) => number;
const multiplicarDos: MultiplicarDos = function (x: number, y: number): number {
  let resultado = x * y;
  return resultado;
};
console.log("Función 1");
let x: number = 40;
let y: number = 70;
console.log("Multiplicación de", x, "*", y, ":", multiplicar(x, y));
x = 10;
y = 5;
console.log("Multiplicación de", x, "*", y, ":", multiplicar(x, y));
console.log("Función 2");
x = 40;
y = 70;
console.log("Multiplicación de", x, "*", y, ":", multiplicarDos(x, y));
x = 10;
y = 5;
console.log("Multiplicación de", x, "*", y, ":", multiplicarDos(x, y));
