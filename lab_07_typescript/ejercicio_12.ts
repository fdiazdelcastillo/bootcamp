const calificaciones = [
  10, 9, 8, 7, 6, 10, 9, 8, 7, 10, 9, 8, 7, 6, 10, 9, 8, 7,
];
let cantidadDeElementos = calificaciones.length;
console.log("Nro de elementos:", cantidadDeElementos);

let suma = 0;
let promedio = 0;
for (let iterador = 0; iterador < cantidadDeElementos; iterador++) {
  suma = suma + calificaciones[iterador];
}
promedio = suma / cantidadDeElementos;
