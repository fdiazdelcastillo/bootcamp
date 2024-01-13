type Torneo =
  | "Primera A"
  | "Primera B"
  | "Copa Colombia"
  | "Superliga de Colombia"
  | "Liga Profesional Femenina";
type Equipo = {
  nombre: string;
  ciudad: string;
  torneo: Torneo[];
};
const millonarios: Equipo = {
  nombre: "Millonarios",
  ciudad: "Bogotá",
  torneo: [
    "Primera A",
    "Primera B",
    "Copa Colombia",
    "Superliga de Colombia",
    "Liga Profesional Femenina",
  ],
};
const nacional: Equipo = {
  nombre: "Nacional",
  ciudad: "Medellín",
  torneo: [
    "Primera A",
    "Primera B",
    "Copa Colombia",
    "Superliga de Colombia",
    "Liga Profesional Femenina",
  ],
};
const medellin: Equipo = {
  nombre: "Medellín",
  ciudad: "Medellín",
  torneo: [
    "Primera A",
    "Primera B",
    "Copa Colombia",
    "Superliga de Colombia",
    "Liga Profesional Femenina",
  ],
};
const santaFe: Equipo = {
  nombre: "Santa Fe",
  ciudad: "Bogotá",
  torneo: [
    "Primera A",
    "Primera B",
    "Copa Colombia",
    "Superliga de Colombia",
    "Liga Profesional Femenina",
  ],
};
const america: Equipo = {
  nombre: "América",
  ciudad: "Cali",
  torneo: [
    "Primera A",
    "Primera B",
    "Copa Colombia",
    "Superliga de Colombia",
    "Liga Profesional Femenina",
  ],
};
type Equipos = Equipo[];
const equipos = [millonarios, nacional, medellin, santaFe, america];
type Clasificacion = {
  torneo: Torneo;
  primerLugar: {
    equipo: Equipo;
    puntos: number;
    posicion: number;
  };
  segundoLugar: {
    equipo: Equipo;
    puntos: number;
    posicion: number;
  };
  tercerLugar: {
    equipo: Equipo;
    puntos: number;
    posicion: number;
  };
};
const clasificacionPrimeraA: Clasificacion = {
  torneo: "Copa Colombia",
  primerLugar: {
    equipo: millonarios,
    puntos: 100,
    posicion: 1,
  },
  segundoLugar: {
    equipo: nacional,
    puntos: 90,
    posicion: 2,
  },
  tercerLugar: {
    equipo: medellin,
    puntos: 80,
    posicion: 3,
  },
};
const clasificacionPrimeraB: Clasificacion = {
  torneo: "Copa Colombia",
  primerLugar: {
    equipo: medellin,
    puntos: 100,
    posicion: 1,
  },
  segundoLugar: {
    equipo: millonarios,
    puntos: 90,
    posicion: 2,
  },
  tercerLugar: {
    equipo: santaFe,
    puntos: 80,
    posicion: 3,
  },
};
type ImpresionDeClasificacion = (clasificacion: Clasificacion) => void;
const impresionDeClasificacion: ImpresionDeClasificacion = function (
  clasificacion
) {
  console.log("Impresión de Clasificación");
  console.log(clasificacion.torneo);
  console.log(
    "Primer Lugar:",
    clasificacion.primerLugar.equipo.nombre,
    clasificacion.primerLugar.equipo.ciudad,
    clasificacion.primerLugar.posicion,
    clasificacion.primerLugar.puntos
  );
  console.log(
    "Segundo Lugar:",
    clasificacion.segundoLugar.equipo.nombre,
    clasificacion.segundoLugar.equipo.ciudad,
    clasificacion.segundoLugar.posicion,
    clasificacion.segundoLugar.puntos
  );
  console.log(
    "Tercer Lugar:",
    clasificacion.tercerLugar.equipo.nombre,
    clasificacion.tercerLugar.equipo.ciudad,
    clasificacion.tercerLugar.posicion,
    clasificacion.tercerLugar.puntos,
    "\n"
  );
};
impresionDeClasificacion(clasificacionPrimeraA);
impresionDeClasificacion(clasificacionPrimeraB);
