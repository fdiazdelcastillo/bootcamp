/**
 * Ejercicio 3.2
 *
 * 1. Almacenar la siguiente tipificación de un objeto en un tipo llamado 'Smartphone':
 *   - marca: "Xiaomi", "Redmi", "Apple", "Samsung", "Poco"
 *   - referencia: cadena de texto
 *   - precio: número
 *   - especificaciones: conjunto de cadenas de texto
 *   - procesador (opcional): cadena de texto
 *
 * 2. Almacenar la siguiente tipificación de un objeto en un tipo llamado 'Tienda':
 *   - dirección: cadena de texto
 *   - país: cadena de texto
 *   - código?: número
 *
 * 3. Almacenar la siguiente tipificación de un conjunto de datos en un tipo llamado 'Ítem':
 *   - Índice (0): Smartphone
 *   - Índice (1): Tienda
 *
 * 4. Declarar e inicializar al menos tres (3) variables tipificadas como 'Smartphone';
 *
 * 5. Declarar e inicializar al menos dos (2) variables tipificadas como 'Tienda';
 *
 * 6. Declarar una variable constante con nombre 'items' y tipificarla como un conjunto de Ítems,
 *    inicializar usando los datos almacenados en el punto 4 y 5.
 */
type Marcas = "Xiaomi" | "Redmi" | "Apple" | "Samsung" | "Poco";
type SmartPhone = {
  marca: Marcas;
  referencia: string;
  precio: number;
  especificaciones: string[];
  processor?: string;
};
type Tienda = {
  direccion: string;
  pais: string;
  codigo: number;
};
type Item = [SmartPhone, Tienda];
type Items = Item[];
const smartphone1: SmartPhone = {
  marca: "Apple",
  referencia: "IPhone 15",
  precio: 5_000_000,
  especificaciones: ["512GB", "A16", "6.1 Inches"],
  processor: "A16",
};
const smartphone2: SmartPhone = {
  marca: "Samsung",
  referencia: "Galaxy S",
  precio: 3_000_000,
  especificaciones: ["8GB", "Samsung Exynos 2200", "6.4 Inches"],
  processor: "Samsung Exynos 2200",
};
const smartphone3: SmartPhone = {
  marca: "Poco",
  referencia: "CS5",
  precio: 3_000_000,
  especificaciones: ["16GB", "Powerful MediaTek Helio G85", "6.74 Inches"],
  processor: "Powerful MediaTek Helio G85",
};
const tienda1: Tienda = {
  direccion: "Calle 100 # 20-12",
  pais: "Colombia",
  codigo: 1001,
};
const tienda2: Tienda = {
  direccion: "Calle 100 # 20-15",
  pais: "Colombia",
  codigo: 1002,
};
const items: Items = [
  [smartphone1, tienda1],
  [smartphone2, tienda1],
  [smartphone3, tienda1],
  [smartphone1, tienda2],
  [smartphone2, tienda2],
  [smartphone3, tienda2],
];
console.log("Item");
for (const item of items) {
  console.log("Item:", items.indexOf(item) + 1);
  console.log(
    "Marca: ",
    item[0].marca,
    "\n",
    "Referencia: ",
    item[0].referencia,
    "\n",
    "Precio: ",
    item[0].precio,
    "\n",
    "Procesador: ",
    item[0].processor,
    "\n",
    "Dirección: ",
    item[1].direccion,
    "\n",
    "País: ",
    item[1].pais,
    "\n",
    "Código: ",
    item[1].codigo
  );
  console.log("Especificaciones: ");
  for (const especificacion of item[0].especificaciones) {
    console.log(especificacion);
  }
}
