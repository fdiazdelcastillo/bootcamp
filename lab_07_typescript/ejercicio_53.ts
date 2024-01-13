import { Plato, Platos, menu } from "./ejercicio_52";

/**
 * Ejercicios 5.3
 *
 * 1. Almacenar la siguiente tipificación de un objeto en un tipo llamado 'ItemDePedido':
 * - cantidad: número
 * - plato: Plato
 *
 * 2. Crear un constante llamada 'pedido', tipificada como un conjunto de Items de Pedido,
 * inicializarla con por lo menos cuatro (4) ítems que cumplan la condición.
 *
 * 3. Declarar un función con nombre 'precioDelPedido' tipificada de la siguiente
 * manera:
 *
 * Parámetros
 * - platos: conjunto de Items de Pedido
 *
 * Retorno: número
 *
 * 4. La función 'precioDelPedido' debe contener las siguientes instrucciones:
 * - Declarar una variable con nombre 'acumuladorDePrecio', tipificada como un número e
 * inicializada con 0;
 * - Iterar sobre el conjunto de Items de Pedido almacenados en el parámetro 'platos'
 * con un bucle 'for' para sumar en el 'acumuladorDePrecio', en cada iteración, el 'precio'
 * por la 'cantidad' de cada 'plato'
 * - Retornar el 'acumuladorDePrecio'
 *
 * 5. Ejecutar e imprimir en la consola el resultado de la función 'precioDelPedido'
 * con los siguientes parámetros:
 * - platos: constante 'pedido'
 */

type ItemDePedido = {
  cantidad: number;
  plato: Plato;
};
type Pedido = ItemDePedido[];
const pedido: Pedido = [
  { cantidad: 10, plato: menu[0] },
  { cantidad: 10, plato: menu[1] },
  { cantidad: 10, plato: menu[2] },
  { cantidad: 15, plato: menu[3] },
  { cantidad: 15, plato: menu[4] },
  { cantidad: 20, plato: menu[5] },
  { cantidad: 25, plato: menu[6] },
  { cantidad: 25, plato: menu[7] },
  { cantidad: 25, plato: menu[8] },
];
type PrecioDelPedido = (platos: Pedido) => number;
const precioDelPedido: PrecioDelPedido = function (platos) {
  let acumuladorDePrecio: number = 0;
  for (let i = 0; i < platos.length; i++) {
    acumuladorDePrecio += platos[i].cantidad * platos[i].plato.precio;
    console.log(
      platos[i].plato.nombre,
      platos[i].plato.precio,
      platos[i].cantidad,
      "=",
      platos[i].plato.precio * platos[i].cantidad
    );
  }
  return acumuladorDePrecio;
};
console.log("Precio Total:", precioDelPedido(pedido));
const costoDelPedido: PrecioDelPedido = function (platos) {
  let acumuladorDeCosto: number = 0;
  for (let i = 0; i < platos.length; i++) {
    acumuladorDeCosto += platos[i].cantidad * platos[i].plato.costo;
    console.log(
      platos[i].plato.nombre,
      platos[i].plato.costo,
      platos[i].cantidad,
      "=",
      platos[i].plato.costo * platos[i].cantidad
    );
  }
  return acumuladorDeCosto;
};
console.log("Costo Total:", costoDelPedido(pedido));
const utilidadDelPedido: PrecioDelPedido = function (platos) {
  let acumuladorDeUtilidad = 0;
  for (let i = 0; i < platos.length; i++) {
    acumuladorDeUtilidad +=
      (platos[i].plato.precio - platos[i].plato.costo) * platos[i].cantidad;
  }
  return acumuladorDeUtilidad;
};
console.log(
  "Precio del pedido:",
  precioDelPedido(pedido),
  "Costo del pedido:",
  costoDelPedido(pedido),
  "Utilidad del pedido:",
  utilidadDelPedido(pedido)
);
