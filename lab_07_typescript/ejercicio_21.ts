/**
 * Ejercicio 2.1
 *
 * 1. Declarar una variable constante con nombre 'objectosPersonales' y tipificarla como un conjunto de objetos, el objeto
 * debe tener la siguiente tipificación:
 * - nombre: string
 * - precio (opcional): number
 * - antigüedad: number
 *
 * 2. Inicializar la variable 'objectosPersonales' con por lo menos tres (3) objetos.
 * */

const objetosPersonales: {
  nombre: string;
  precio?: number;
  antiguedad: number;
}[] = [
  { nombre: "objeto1", precio: 1_000_000, antiguedad: 10 },
  { nombre: "objeto2", antiguedad: 20 },
  { nombre: "objeto3", precio: 3_000_000, antiguedad: 30 },
];

const objectosPersonales2: [
  {
    nombre: string;
    precio?: number;
    antiguedad: number;
  },
  {
    nombre: string;
    precio?: number;
    antiguedad: number;
  }
] = [
  { nombre: "objeto1", precio: 1_000_000, antiguedad: 10 },
  { nombre: "objeto2", antiguedad: 20 },
];

for (const objeto of objetosPersonales) {
  console.log(objeto.nombre, objeto.precio, objeto.antiguedad);
}

type ObjectosPersonales = {
  nombre: string;
  precio?: number;
  antiguedad: number;
};

const objetosPersonales3: ObjectosPersonales[] = [
  { nombre: "Reloj", precio: 1_000_000, antiguedad: 10 },
  { nombre: "SmartPhone", antiguedad: 20 },
  { nombre: "Ipad", precio: 3_000_000, antiguedad: 30 },
];
