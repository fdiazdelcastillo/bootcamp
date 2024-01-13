/**
 * 1. Almacenar la tipifiación de un objeto en un tipo 'Rol':
 *   - nombre: cadena de texto
 *   - puedeContratar: booleano
 *   - puedeComprar: booleano
 *   - tieneEquipoDePersonas: booleano
 *
 * 2. Almacenar la tipificación de un objeto en un tipo 'Empleado':
 *   - nombre: cadena de texto
 *   - apellido: cadena de texto
 *   - añoDeContratación: número
 *   - roles: conjunto de Roles
 *   - equiposDeOficina: conjunto de cadenas de texto
 *
 * 3. Declarar e inicializar al menos dos (2) variables constantes tipificadas como 'Rol'
 *
 * 3. Declarar e inicializar al menos tres (3) variables constantes tipificadas como 'Empleado'
 *
 * 4. Declarar una constante con nombre 'empleados', tipificada como un conjunto de Empleados,
 *    almacenar en ella todos los empleados declarados en el punto 3.
 */

type Rol = {
  nombre: string;
  puedeContratar: boolean;
  puedeComprar: boolean;
  tieneEquipoDePersonas: boolean;
};
type Empleado = {
  nombre: string;
  apellido: string;
  anoDeContratacion: number;
  roles: Rol[];
  equiposDeOficina: string[];
};
type Empleados = Empleado[];

const rol1: Rol = {
  nombre: "Administrador",
  puedeContratar: true,
  puedeComprar: true,
  tieneEquipoDePersonas: true,
};
const rol2: Rol = {
  nombre: "Líder",
  puedeContratar: true,
  puedeComprar: false,
  tieneEquipoDePersonas: true,
};

const empleado1: Empleado = {
  nombre: "Fernando",
  apellido: "Díaz del Castillo",
  anoDeContratacion: 2023,
  roles: [rol1, rol2],
  equiposDeOficina: ["Computador", "SmartPhone", "Vehículo"],
};
const empleado2: Empleado = {
  nombre: "María",
  apellido: "Díaz del Castillo",
  anoDeContratacion: 2023,
  roles: [rol2],
  equiposDeOficina: ["Computador", "SmartPhone"],
};
const empleado3: Empleado = {
  nombre: "Joan",
  apellido: "Díaz del Castillo",
  anoDeContratacion: 2020,
  roles: [rol1, rol2],
  equiposDeOficina: ["Computador", "SmartPhone", "Vehículo"],
};

const empleados: Empleados = [empleado1, empleado2, empleado3];

for (const empleado of empleados) {
  console.log("Empleado: ", empleados.indexOf(empleado) + 1);
  console.log(
    "Nombre",
    empleado.nombre,
    "\n",
    "Apellido:",
    empleado.apellido,
    "\n",
    "Año de Contratación:",
    empleado.anoDeContratacion,
    "\n"
  );
  console.log("Roles:");
  for (const rol of empleado.roles) {
    console.log("Rol:", empleado.roles.indexOf(rol) + 1);
    console.log(
      "Nombre:",
      rol.nombre,
      "Puede Contratar?",
      rol.puedeContratar,
      "Puede Compra?",
      rol.puedeComprar,
      "Tiene Equipo De Personas?",
      rol.tieneEquipoDePersonas
    );
  }
  console.log("Equipos de Oficina:");
  for (const equipo of empleado.equiposDeOficina) {
    console.log(
      "Equipo de Oficina::",
      empleado.equiposDeOficina.indexOf(equipo) + 1
    );

    console.log(equipo);
  }
  console.log("\n");
}
