/**
 * Ejercicio 3.1
 *
 * 1. Almacenar la siguiente tipificación de un objeto en un tipo llamado 'Servicio':
 *   - nombre: cadena de texto
 *   - descripción: cadena de texto
 *   - precio: número
 *   - categoría (opcional): "tecnología", "telecomunicaciones", "entretenimiento"
 *   - países: conjunto de cadenas de texto
 * 2. Crear una variable constante con nombre servicios tipificada como un conjunto de Servicios, e inicializarla
 * con por lo menos con 3 servicios.
 *
 * 3. Imprimir en la consola el primer índice, de la llave 'países' del segundo índice de la constante 'servicios'
 */
type Servicio = {
  nombre: string;
  descripcion: string;
  precio: number;
  categoria?: "tecnología" | "telecomunicaciones" | "entretenimiento";
  paises: string[];
};

type Servicios = Servicio[];

const servicios: Servicios = [
  {
    nombre: "Desarrollo Web",
    descripcion: "Desarrollo Web",
    precio: 120_000,
    categoria: "tecnología",
    paises: ["Colombia", "Estados Unidos", "Países Bajos"],
  },
  {
    nombre: "Aplicaciones",
    descripcion: "Aplicaciones",
    precio: 150_000,
    categoria: "tecnología",
    paises: ["Países Bajos", "Estados Unidos", "Colombia"],
  },
  {
    nombre: "Front-End",
    descripcion: "Front-End",
    precio: 120_000,
    categoria: "tecnología",
    paises: ["Colombia", "Estados Unidos", "Países Bajos"],
  },
];
console.log(servicios[1].paises[0]);
