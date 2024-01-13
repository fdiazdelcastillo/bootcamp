/**
 * Ejercicio 4.2
 *
 * 1. Declarar una constante con nombre 'carritoDeCompras' tipificada como un conjunto de objetos,
 * el objeto debe ser tipificado así:
 * - nombre: cadena de texto
 * - precio: número
 *
 * 2. Inicializar la constante 'carritoDeCompras' con al menos tres (3) objetos
 *
 * 3. Declarar una variable con nombre 'precioTotal' tipificada como un número
 *
 * 4. Calcular el precio total utilizando un bucle 'for'
 *
 * 5. Imprimir en la consola la variable 'precioTotal'
 */
type Articulo = { nombre: string; precio: number };
type CarritoDeComprasItem = { item: Articulo; cantidad: number };
type CarritoDeCompras = CarritoDeComprasItem[];
const Iphone: Articulo = { nombre: "IPhone", precio: 5_000_000 };
const Ipad: Articulo = { nombre: "IPad", precio: 3_000_000 };
const macBook: Articulo = {
  nombre: "MacBook",
  precio: 4_000_000,
};
const macBookPro: Articulo = {
  nombre: "MacBook Pro",
  precio: 7_500_000,
};
const macBookAir: Articulo = {
  nombre: "MacBook Air",
  precio: 3_500_000,
};
const airPods: Articulo = {
  nombre: "Air Pods",
  precio: 2_500_000,
};
const carritoDeCompras: CarritoDeCompras = [
  { item: Iphone, cantidad: 10 },
  { item: Ipad, cantidad: 20 },
  { item: macBook, cantidad: 30 },
];
const carritoDeCompras2: CarritoDeCompras = [
  { item: macBook, cantidad: 40 },
  { item: macBookAir, cantidad: 50 },
  { item: macBookPro, cantidad: 60 },
];
const carritoDeCompras3: CarritoDeCompras = [
  { item: Iphone, cantidad: 70 },
  { item: airPods, cantidad: 80 },
  { item: macBookPro, cantidad: 90 },
];
const numeroDeArticulos = carritoDeCompras.length;
let precioTotal = 0;
for (let iterador = 0; iterador < numeroDeArticulos; iterador++) {
  precioTotal +=
    carritoDeCompras[iterador].item.precio *
    carritoDeCompras[iterador].cantidad;
}
console.log("Precio Total:", precioTotal);
type CalculoDePrecioDeCarrito = (carritoDeCompras: CarritoDeCompras) => number;
const calculoDePrecioDeCarrito: CalculoDePrecioDeCarrito = function (carrito) {
  let precioTotal = 0;
  let numeroDeArticulos = carrito.length;
  for (let iterador = 0; iterador < numeroDeArticulos; iterador++) {
    console.log(
      "Nombre:",
      carrito[iterador].item.nombre,
      ":",
      "Precio:",
      carrito[iterador].item.precio,
      "Cantidad:",
      carrito[iterador].cantidad,
      "Total",
      carrito[iterador].item.nombre,
      ":",
      carrito[iterador].item.precio * carrito[iterador].cantidad
    ),
      carrito[iterador].cantidad;
    precioTotal += carrito[iterador].item.precio * carrito[iterador].cantidad;
  }
  return precioTotal;
};
console.log(
  "Precio Total Función:",
  calculoDePrecioDeCarrito(carritoDeCompras)
);
console.log(
  "Precio Total Función:",
  calculoDePrecioDeCarrito(carritoDeCompras2)
);
console.log(
  "Precio Total Función:",
  calculoDePrecioDeCarrito(carritoDeCompras3)
);
