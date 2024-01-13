/*
    Jardín
*/
type Persona = {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: number;
};
type Nino = {
  nombre: string;
  apellido: string;
  anoDeNacimiento: number;
  grado: "Grado 1" | "Grado 2" | "Grado 3";
  calificaciones: Calificaciones;
  padre: Persona;
  madre: Persona;
  acudiente: Persona;
};
type Ninos = Nino[];
type Materia = {
  nombre: string;
  intensidadSemana: number;
};
type Materias = Materia[];
type Pensum = {
  nombre: string;
  grado: "Grado 1" | "Grado 2" | "Grado 3";
  materias: Materias;
};
type Calificacion = {
  materia: Materia;
  calificaion: number;
};
type Calificaciones = Calificacion[];
type Grado = {
  grado: "Grado 1" | "Grado 2" | "Grado 3";
  pensum: Pensum;
  lider: Persona;
};
// Líderes
const juan: Persona = {
  nombre: "Juan",
  apellido: "Gómez",
  correo: "juan.gomez@jardin.com",
  telefono: 3502223344,
};
const pedro: Persona = {
  nombre: "Pedro",
  apellido: "Gómez",
  correo: "pedro.gomez@jardin.com",
  telefono: 3502223355,
};
// Padres
const andres: Persona = {
  nombre: "Andrés",
  apellido: "Abril",
  correo: "andres.abril@gmail.com",
  telefono: 3502223366,
};
const janis: Persona = {
  nombre: "Janis",
  apellido: "Abril",
  correo: "janis.abril@gmail.com",
  telefono: 3502223377,
};
// Materias
const lectura1: Materia = {
  nombre: "Lectura 1",
  intensidadSemana: 10,
};
const escritura1: Materia = {
  nombre: "Escritura 1",
  intensidadSemana: 10,
};
const programacion1: Materia = {
  nombre: "Programación 1",
  intensidadSemana: 10,
};
const matematicas1: Materia = {
  nombre: "Matemáticas 1",
  intensidadSemana: 10,
};
const lectura2: Materia = {
  nombre: "Lectura 2",
  intensidadSemana: 10,
};
const escritura2: Materia = {
  nombre: "Escritura 2",
  intensidadSemana: 10,
};
const programacion2: Materia = {
  nombre: "Programación 2",
  intensidadSemana: 10,
};
const matematicas2: Materia = {
  nombre: "Matemáticas 2",
  intensidadSemana: 10,
};
const pensumGrado1: Pensum = {
  nombre: "Pensum Grado 1",
  grado: "Grado 1",
  materias: [lectura1, escritura1, programacion1, matematicas1],
};
const pensumGrado2: Pensum = {
  nombre: "Pensum Grado 2",
  grado: "Grado 2",
  materias: [lectura2, escritura2, programacion2, matematicas2],
};
const grado1: Grado = {
  grado: "Grado 1",
  pensum: pensumGrado1,
  lider: juan,
};
const grado2: Grado = {
  grado: "Grado 2",
  pensum: pensumGrado2,
  lider: pedro,
};
const luciana: Nino = {
  nombre: "Luciana",
  apellido: "Abril",
  anoDeNacimiento: 2018,
  grado: "Grado 1",
  calificaciones: [
    { materia: lectura1, calificaion: 10 },
    { materia: escritura1, calificaion: 9 },
    { materia: programacion1, calificaion: 8 },
  ],
  padre: andres,
  madre: janis,
  acudiente: andres,
};
const mateo: Nino = {
  nombre: "Mateo",
  apellido: "Martínez",
  anoDeNacimiento: 2020,
  grado: "Grado 1",
  calificaciones: [
    { materia: lectura1, calificaion: 10 },
    { materia: escritura1, calificaion: 9 },
    { materia: programacion1, calificaion: 9 },
  ],
  padre: andres,
  madre: janis,
  acudiente: andres,
};
const juliana: Nino = {
  nombre: "Juliana",
  apellido: "Martínez",
  anoDeNacimiento: 2020,
  grado: "Grado 1",
  calificaciones: [
    { materia: lectura1, calificaion: 10 },
    { materia: escritura1, calificaion: 10 },
    { materia: programacion1, calificaion: 10 },
  ],
  padre: andres,
  madre: janis,
  acudiente: andres,
};
type CalculoDePromedioDeCalificacion = (nino: Nino) => string;
const calculoDePromedioDeCalificacion: CalculoDePromedioDeCalificacion =
  function (nino) {
    let suma = 0;
    let promedio = 0;
    const cantidadDeCalificaciones = nino.calificaciones.length;
    for (let i = 0; i < cantidadDeCalificaciones; i++) {
      suma = suma + nino.calificaciones[i].calificaion;
    }
    promedio = suma / cantidadDeCalificaciones;
    console.log(nino.nombre, "pasó el ano:", pasaElAno(promedio) ? "Si" : "No");
    return "Promedio: " + promedio;
  };
const pasaElAno = function (promedio: number) {
  if (promedio >= 6) {
    return true;
  } else {
    return false;
  }
};
console.log(calculoDePromedioDeCalificacion(luciana));
console.log(calculoDePromedioDeCalificacion(mateo));
console.log(calculoDePromedioDeCalificacion(juliana));
