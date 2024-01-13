/**
 * Ejercicio 2.3
 *
 * 1. Declarar una variable constante con nombre 'servicio', tipificada
 * como un objeto con la siguiente estructura:
 *
 * - nombre: cadena de texto
 * - descripción: cadena de texto
 * - precio: número
 * - categoría (opcional): "tecnología", "telecomunicaciones", "entretenimiento"
 * - países: conjunto de cadenas de texto
 *
 * 2. Inicializar la variable con un dato de muestra según la tipificación
 */
// type DesarrolloWeb = {
//   nombre: string;
//   descripcion: string;
//   precio: number;
//   categoria?: "tecnología" | "telecomunicaciones" | "entretenimiento";
//   paises: string[];
// };
// const desarrolloWeb: {
//   nombre: string;
//   descripcion: string;
//   precio: number;
//   categoria?: "tecnología" | "telecomunicaciones" | "entretenimiento";
//   paises: string[];
// } = {
//   nombre: "Desarrollo Web",
//   descripcion: "Desarrollo Web",
//   precio: 120_000,
//   categoria: "tecnología",
//   paises: ["Colombia", "Estados Unidos", "Países Bajos"],
// };

// const desarrolloWeb1: DesarrolloWeb = {
//   nombre: "Desarrollo Web",
//   descripcion: "Desarrollo Web",
//   precio: 120_000,
//   categoria: "tecnología",
//   paises: ["Colombia", "Estados Unidos", "Países Bajos"],
// };

// console.log(
//   desarrolloWeb.nombre,
//   "\n",
//   desarrolloWeb.descripcion,
//   "\n",
//   desarrolloWeb.precio,
//   "\n",
//   desarrolloWeb.categoria,
//   "\n",
//   desarrolloWeb.paises,
//   "\n"
// );

// console.log(
//   desarrolloWeb1.nombre,
//   "\n",
//   desarrolloWeb1.descripcion,
//   "\n",
//   desarrolloWeb1.precio,
//   "\n",
//   desarrolloWeb1.categoria,
//   "\n",
//   desarrolloWeb1.paises,
//   "\n"
// );
type ServicioDos = {
  nombre: string;
  descripcion: string;
  precio: number;
  categoria?: "tecnología" | "telecomunicaciones" | "entretenimiento";
  paises: string[];
};

type ServiciosDos = ServicioDos[];

const ServicioDos: ServiciosDos = [
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
    paises: ["Colombia", "Estados Unidos", "Países Bajos"],
  },
];
