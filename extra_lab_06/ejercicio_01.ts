/**
 * Conjunto de datos
 */

const cenaDeNavidad: string[] = [
  "Lomo de cerdo",
  "Vino rosado",
  "Papa",
  "Aguacate",
  "Mango",
];

for (const ingrediente of cenaDeNavidad) {
  console.log(ingrediente);
}

const productos: { precio: number; nombre: string }[] = [
  { nombre: "Echo Dot", precio: 70_000 },
  { nombre: "Fire TV", precio: 60_000 },
];

let precioTotal: number = 0;

for (const producto of productos) {
  precioTotal += producto.precio;
}

console.log("for...of (Precio Total):", precioTotal);

precioTotal = 0;

for (let i = 0; i < productos.length; i++) {
  precioTotal += productos[i].precio;
}

console.log("for (Precio Total):", precioTotal);

/**
 * 1. Declarar una variable constante con nombre 'datos1' tipificado como un conjunto de números,
 * e inicializarla con los siguientes datos:
 * - 70
 * - 160
 * - 12
 * - 40
 * 2. Ejecutar un bucle for...of con la variable 'datos1', la instrucciones de cada iteración deben ser:
 * - Imprimir en la consola el dato de la iteración dividido 2;
 */

let datos1: number[] = [70, 160, 12, 40];
// for (const dato of datos1) {
//     console.log(dato / 2);
// }

// for (let i = 0; i < datos1.length; i++) {
//     console.log(datos1[i] / 2);
// }
// let i = 0;
// do {
//   console.log(datos1[i] / 2)
//   i++
// } while (i < datos1.length)

let j: number = 0;
do {
  console.log(j);
  j++;
} while (j < 0);

// let k = 0;
// while (k < 10) {
//   console.log(k);
//   k++;
// }
