/**
 * Ejercicio 4.3
 *
 * 1. Almacenar la siguiente tipificación de un objeto en un tipo llamado 'Alumno':
 * - nombre: cadena de texto
 * - apellido: cadena de texto
 * - edad?: número
 * - calificaciónSaber11: número
 *
 * 2. Declarar una constante con nombre 'colegioNuevaGranada' tipificada como un conjunto de Alumnos,
 * e inicializarla con los siguientes Alumnos:
 * - Índice (0):
 *   * nombre: Pedro
 *   * apellido: Ruiz
 *   * calificaciónSaber11: 500
 * - Índice (1):
 *   * nombre: Camilo
 *   * apellido: Rueda
 *   * calificaciónSaber11: 750
 * - Índice (2):
 *   * nombre: Rosario
 *   * apellido: Tijeras
 *   * calificaciónSaber11: 900
 * - Índice (3):
 *   * nombre: Patricia
 *   * apellido: Castro
 *   * calificaciónSaber11: 300
 *
 * 3. Declarar una variable con nombre 'acumuladorCalificacionesNuevaGranada' tipificada como un número,
 * e inicializarla con 0
 *
 * 4. Declarar una constante con nombre 'cantidadDeAlumnosNuevaGranada', tipificada como un número,
 * e inicializarla con la cantidad del alumnos del colegio nueva granada.
 *
 * 5. Acumular la calificación de los alumnos del colegio nueva granada
 * en la variable 'acumuladorCalificacionesNuevaGranada' utilizando un bucle 'for'
 *
 * 6. Declarar una constante con nombre 'promedioSaber11AlumnosNuevaGranada' tipificada como un número,
 * inicializarla con el calculo de 'acumuladorCalificacionesNuevaGranada' sobre 'cantidadDeAlumnosNuevaGranada'
 */
type Alumno = {
  nombre: string;
  apellido: string;
  edad?: number;
  calificacionSaber11: number;
};
type ResultadosSaber11 = Alumno[];
const pedroRuiz: Alumno = {
  nombre: "Pedro",
  apellido: "Ruiz",
  calificacionSaber11: 500,
};
const camiloRueda = {
  nombre: "Camilo",
  apellido: "Rueda",
  calificacionSaber11: 750,
};
const rosarioTijeras = {
  nombre: "Rosario",
  apellido: "Tijeras",
  calificacionSaber11: 900,
};
const patriciaCastro = {
  nombre: "Patricia",
  apellido: "Castro",
  calificacionSaber11: 300,
};
const colegioNuevaGranada: ResultadosSaber11 = [
  pedroRuiz,
  camiloRueda,
  rosarioTijeras,
  patriciaCastro,
];
let acumuladorCalificacionesNuevaGranada: number = 0;
let cantidadDeAlumnosNuevaGranada: number = colegioNuevaGranada.length;
console.log("Alumnos y Calificaciones");
for (let i = 0; i < cantidadDeAlumnosNuevaGranada; i++) {
  acumuladorCalificacionesNuevaGranada +=
    colegioNuevaGranada[i].calificacionSaber11;
  console.log(
    colegioNuevaGranada[i].nombre,
    colegioNuevaGranada[i].apellido,
    "Calificación:",
    colegioNuevaGranada[i].calificacionSaber11
  );
}
const promedioSaber11AlumnosNUevaGranada: number =
  acumuladorCalificacionesNuevaGranada / cantidadDeAlumnosNuevaGranada;
console.log(
  "Promedio Colegio Nueva Granada:",
  "Acumulado:",
  acumuladorCalificacionesNuevaGranada,
  "Cantidad:",
  cantidadDeAlumnosNuevaGranada,
  "=",
  promedioSaber11AlumnosNUevaGranada
);
