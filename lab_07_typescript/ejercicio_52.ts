/**
 * Ejercicio 5.2
 *
 * 1. Almacenar la siguiente tipificación de un objeto en un tipo con nombre 'Plato':
 * - nombre: cadena de texto
 * - ingredientes: conjunto de cadenas de texto
 * - categoria: "asiática", "mexicana", "colombiana"
 * - precio: número
 *
 * 2. Declarar una constante con nombre 'menu', tipificada como un conjunto de Platos,
 * e inicializarla con por lo menos tres (3) Platos por cada categoría, para un
 * total de nueve (9) platos.
 *
 * 3. Declarar un función con nombre 'filtrarMenuPorCategoria' tipificada de la siguiente
 * manera:
 *
 * Parámetros
 * - platos: conjunto de Platos
 * - categoria: "asiática", "mexicana", "colombiana"
 *
 * Retorno: conjunto de Platos
 *
 * 4. Almacenar las siguientes instrucciones en la función 'filtrarMenuPorCategoria':
 * - Declarar una constante con nombre 'acumuladorDePlatos' tipificada como un conjunto
 * de Platos, e inicializada como un conjunto de datos vacío
 * - Bucle 'for' que itere sobre el parámetro 'platos' y añada al conjunto de la constante
 * 'acumuladorDePlatos' los platos que cumplan la condición de pertenecer a la categoría indicada
 * en el parámetro 'categoría'
 * - Retornar la constante 'acumuladorDePlatos'
 *
 * 5. Ejecutar e imprimir en la consola el resultado de la función 'filtrarMenuPorCategoria'
 * con los siguientes parámetros:
 * - platos: constante 'menu'
 * - categoria: "asiática"
 *
 * 6. Ejecutar e imprimir en la consola el resultado de la función 'filtrarMenuPorCategoria'
 * con los siguientes parámetros:
 * - platos: constante 'menu'
 * - categoria: "mexicana"
 *
 * 7. Ejecutar e imprimir en la consola el resultado de la función 'filtrarMenuPorCategoria'
 * con los siguientes parámetros:
 * - platos: constante 'menu'
 * - categoria: "colombiana"
 *
 * 8. Enviar código del ejercicio al correo jsdiazp@icloud.com
 *
 * Referencias útiles:
 *
 * - Tipos (TypeScript)
 * - Extender conjunto (JavaScript)
 */

export type Plato = {
  nombre: string;
  ingredientes: string[];
  categoria: "asiática" | "mexicana" | "colombiana";
  precio: number;
  costo: number;
};
export type Platos = Plato[];
const arrozConLeche: Plato = {
  nombre: "Arroz con Leche",
  ingredientes: [
    "Arroz",
    "Leche",
    "Leche Condensada",
    "Crema de Leche",
    "Azúcar",
  ],
  categoria: "colombiana",
  precio: 20_000,
  costo: 15_000,
};
const bandejaPaisa: Plato = {
  nombre: "Bandeja Paisa",
  ingredientes: ["Arroz", "Chorizo", "Carne Molida", "Chicharrón", "Huevo"],
  categoria: "colombiana",
  precio: 50_000,
  costo: 45_000,
};
const tamal: Plato = {
  nombre: "Tamal",
  ingredientes: ["Harina", "Tocino", "Pollo", "Huevo", "Alverjas"],
  categoria: "colombiana",
  precio: 40_000,
  costo: 35_000,
};
const arrozTresDelicias: Plato = {
  nombre: "Arroz Tres Delicias",
  ingredientes: [
    "Arroz",
    "Zanahoria",
    "Gamba",
    "Guisantes",
    "Jamón de York en taquitos",
    "Huevos",
    "Salsa de soja",
    "Azúcar",
    "Aceite de oliva virgen extra",
  ],
  categoria: "asiática",
  precio: 50_000,
  costo: 45_000,
};
const polloConAlmendras: Plato = {
  nombre: "Pollo con almendras",
  ingredientes: [
    "Pechuga de pollo sin piel y sin hueso",
    "Salsa de soja",
    "Jengibre molido 1 cucharadita",
    "Azúcar moreno 1 cucharada",
    "Almendras crudas sin piel",
    "Zanahoria",
    "Cebolla",
    "Caldo de pollo",
    "Harina de maíz refinada",
    "Aceite de girasol",
  ],
  categoria: "asiática",
  precio: 50_000,
  costo: 45_000,
};
const kimchi: Plato = {
  nombre: "Kimchi",
  ingredientes: [
    "Medio repollo",
    "Media cebolleta",
    "1 zanahoria",
    "1 cucharada de chile en copos",
    "1 diente de ajo",
    "Harina de arroz",
  ],
  categoria: "asiática",
  precio: 30_000,
  costo: 25_000,
};
const tacosDeCarne: Plato = {
  nombre: "Tacos mexicanos de carne",
  ingredientes: [
    "Pimiento rojo o verde",
    "Cebolla roja",
    "Tomate de ensalada",
    "Maíz dulce",
    "Jalapeños encurtidos en rodajas",
    "Carne de ternera picada o en tiras",
    "Aceite de oliva virgen extra",
    "Sazonador para carne",
    "Tortillas de maíz",
  ],
  categoria: "mexicana",
  precio: 30_000,
  costo: 25_000,
};
const burritosDeCarnePicada: Plato = {
  nombre: "Burritos mexicanos de carne picada",
  ingredientes: [
    "Aceite de oliva",
    "Cebolla",
    "Dientes de ajo",
    "Carne picada de ternera",
    "Sazonador de carne mexicano",
    "Sal",
    "Tomate de ensalada",
    "Aguacate",
    "Cebolla fresca",
    "Tortillas de trigo para burritos",
  ],
  categoria: "mexicana",
  precio: 35_000,
  costo: 30_000,
};
const guacamole: Plato = {
  nombre: "Guacamole",
  ingredientes: [
    "Tomate natural",
    "Cebolla roja",
    "Chile ",
    "Cilantro fresco",
    "Acates maduros",
    "Lima",
    "Sal",
  ],
  categoria: "mexicana",
  precio: 30_000,
  costo: 25_000,
};
export const menu: Platos = [
  arrozConLeche,
  bandejaPaisa,
  tamal,
  arrozTresDelicias,
  polloConAlmendras,
  kimchi,
  tacosDeCarne,
  burritosDeCarnePicada,
  guacamole,
];
type FiltrarMenuPorCategoria = (
  platos: Platos,
  categoria: "asiática" | "mexicana" | "colombiana"
) => Platos;
const filtrarMenuPorCategoria: FiltrarMenuPorCategoria = function (
  platos,
  categoria
) {
  let acumuladorDePlatos: Platos = [];
  for (let i = 0; i < platos.length; i++) {
    if (platos[i].categoria === categoria) {
      acumuladorDePlatos = [...acumuladorDePlatos, platos[i]];
    }
  }
  return acumuladorDePlatos;
};

console.log(
  "Comida Asiática \n",
  filtrarMenuPorCategoria(menu, "asiática"),
  "\n"
);
console.log(
  "Comida Colombiana \n",
  filtrarMenuPorCategoria(menu, "colombiana"),
  "\n"
);
console.log(
  "Comida Mexicana \n",
  filtrarMenuPorCategoria(menu, "mexicana"),
  "\n"
);
