/**
 * Ejercicio 3.4
 *
 * 1. Almacenar la tipificación de un objeto en un tipo llamado 'Agente':
 *   - nombre: cadena de texto
 *   - apellido: cadena de texto
 *   - númeroDeCalificaciones: número
 *
 * 2. Almacenar la tipificación de un objeto en un tipo llamado 'Ciudad':
 *   - país: "Países Bajos", "Bélgica", "Luxemburgo"
 *   - nombre: cadena de texto
 *   - población?: número
 *
 * 3. Almacenar la tipificación de un objeto en un tipo llamado 'Propiedad':
 *   - dirección: cadena de texto
 *   - ciudad: Ciudad
 *   - para: "renta", "venta"
 *   - precio: número
 *   - agente: Agente
 *   - especificaciones: conjunto de cadenas de texto
 *
 * 4. Declarar e inicializar al menos dos (2) variables constantes tipificadas como 'Agente'
 *
 * 5. Declarar e inicializar al menos tres (3) variables constantes tipificadas como 'Ciudad'
 *
 * 6. Declarar e inicializar al menos dos (4) variables constantes tipificadas como 'Propiedad'
 *
 * 7. Declarar una constante con nombre 'propiedades', tipificada como un conjunto de objetos con
 *    la siguiente estructura:
 *   - visible: booleano
 *   - propiedad: Propiedad
 *
 *    Inicializar la constante utilizando las propiedades del punto 6.
 */

type Agente = {
  nombre: string;
  apellido: string;
  numeroDeCalificaciones: number;
};
type Ciudad = {
  pais: "Países Bajos" | "Bélgica" | "Luxemburgo";
  nombre: string;
  población?: number;
};
type Propiedad = {
  dirección: string;
  ciudad: Ciudad;
  para: "renta" | "venta";
  precio: number;
  agente: Agente;
  especificaciones: string[];
};
const agente1: Agente = {
  nombre: "Fernando",
  apellido: "Díaz del Castillo",
  numeroDeCalificaciones: 10,
};
const agente2: Agente = {
  nombre: "María",
  apellido: "Díaz del Castillo",
  numeroDeCalificaciones: 10,
};
const agente3: Agente = {
  nombre: "Joan",
  apellido: "Díaz del Castillo",
  numeroDeCalificaciones: 10,
};
const ciudad1: Ciudad = {
  pais: "Países Bajos",
  nombre: "Amsterdam",
  población: 5_000_000,
};
const ciudad2: Ciudad = {
  pais: "Países Bajos",
  nombre: "La Haya",
  población: 3_000_000,
};
const ciudad3: Ciudad = {
  pais: "Países Bajos",
  nombre: "Roterdam",
  población: 2_000_000,
};
const propiedad1: Propiedad = {
  dirección: "Calle 100 # 20-12",
  ciudad: ciudad1,
  para: "venta",
  precio: 1_500_000_000,
  agente: agente1,
  especificaciones: ["3 Habitaciones", "2 Baños", "Sala", "Comedor", "Garaje"],
};
const propiedad2: Propiedad = {
  dirección: "Calle 100 # 20-15",
  ciudad: ciudad2,
  para: "venta",
  precio: 1_200_000_000,
  agente: agente2,
  especificaciones: ["3 Habitaciones", "2 Baños", "Sala", "Comedor", "Garaje"],
};
const propiedad3: Propiedad = {
  dirección: "Calle 100 # 20-30",
  ciudad: ciudad3,
  para: "venta",
  precio: 2_000_000_000,
  agente: agente3,
  especificaciones: ["3 Habitaciones", "2 Baños", "Sala", "Comedor", "Garaje"],
};
type Propiedades = { visible: boolean; propiedad: Propiedad }[];
const propiedades: Propiedades = [
  { visible: true, propiedad: propiedad1 },
  { visible: false, propiedad: propiedad2 },
  { visible: true, propiedad: propiedad3 },
];
for (const prop of propiedades) {
  console.log("Propiedad:", propiedades.lastIndexOf(prop) + 1);
  console.log("Visible:", prop.visible, "");
  console.log("Datos de Propiedad:");
  console.log(
    "Dirección:",
    prop.propiedad.dirección,
    "\n",
    "Ciudad ->",
    "Nombre:",
    prop.propiedad.ciudad.nombre,
    ",",
    "País:",
    prop.propiedad.ciudad.pais,
    ",",
    "Población:",
    prop.propiedad.ciudad.población,
    "\n",
    "Para:",
    prop.propiedad.para,
    "\n",
    "Precio:",
    prop.propiedad.precio,
    "\n",
    "Agente:",
    prop.propiedad.agente,
    "\n"
  );
  console.log("Especificaciones:");
  for (const especificacion of prop.propiedad.especificaciones) {
    console.log(especificacion);
  }
  console.log("\n");
}
