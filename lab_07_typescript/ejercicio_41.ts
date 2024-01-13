/**
 * Ejercicio 4.1
 *
 * 1. Declarar una constante nombre 'dimensiones', tipificada como un conjunto de números con solo
 * tres (3) índices, nombrar cada índice de la siguiente manera:
 * - Índice (0): alto
 * - Índice (1): ancho
 * - Índice (2): largo
 *
 * 2. Inicializar la constante 'dimensiones' con los siguientes datos:
 * - Índice (0): 20
 * - Índice (1): 35
 * - Índice (2): 20
 *
 * 3. Declarar una variable con nombre 'm3' tipificada como un número
 *
 * 4. Calcular los metros cúbicos en una variable con nombre 'm3' utilizando un bucle 'for'
 */
type Dimensiones = [alto: number, ancho: number, largo: number];
const dimensiones: Dimensiones = [20, 35, 20];
let m3: number = 1;
// Ejercicio Básico
const cantidadDeDimensiones: number = dimensiones.length;
for (let iterador = 0; iterador < cantidadDeDimensiones; iterador++) {
  m3 *= dimensiones[iterador];
  console.log("Dimensión", iterador, ":", dimensiones[iterador]);
}
console.log("Metros Cúbicos:", m3);
// Ejercicio con Función
type CalculoDeM3 = (dimensiones: Dimensiones) => void;
const calculoDeM3: CalculoDeM3 = function (dimensiones) {
  let mCubicos: number = 1;
  for (let i = 0; i < cantidadDeDimensiones; i++) {
    mCubicos *= dimensiones[i];
    console.log("Dimensión", i, ":", dimensiones[i]);
  }
  return mCubicos;
};
console.log("Metros Cúbicos Función: ", calculoDeM3(dimensiones));
