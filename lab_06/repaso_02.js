/**
 * Lenguaje de programación
 *
 * Da instrucciones a un computador
 */

/**
 * Datos
 *
 * - Información que utiliza el lenguaje de programación para seguir instrucciones
 */

/**
 * Cadenas de texto (string)
 *
 * Deben ir entre comillas para el lenguaje de programación no las confunda con variables
 */
console.log("Joan Sebastian");

/**
 * Números
 *
 * Deben ir sin comillas para poder realizar operaciones matemáticas de lo contrario se tomaría como un string
 */
console.log(32);

/**
 * Booleanos
 *
 * Prendido (1) o apagado (0), base de los dispositivos electrónicos
 */
console.log(true);
console.log(false);

/**
 * Conjuntos de datos
 *
 * Almacenan datos en índices, dentro de corchetes ([])
 * Se separa cada nuevo dato con comas (,)
 *
 * [data1, dato2, datoX]
 */
console.log(["Joan Sebastian", 32, true]);
console.log(["Joan", "Andres", "Fernando", "María"]);

/**
 * Objetos
 *
 * Almacenan dato con llaves ({})
 */
console.log({
  nombre: "Joan Sebastian",
  edad: 32,
  esDeColombia: true,
  esMujer: false,
  esAdmin: true,
});

/**
 * Variables
 *
 * Almacenar datos
 *
 * llave nombreVariable = dato;
 */

/**
 * Declarar variable sin inicializar
 */
let edad;

edad = 32;

/**
 * Declarar variable e inicializarla
 */
let color = "rojo";

/**
 * Modificables
 *
 * let nombreVariable = dato;
 */
let usuario = {
  nombre: "Maribel",
  esAdmin: false,
  esDeColombia: true,
};
console.log(usuario);

/**
 * Como modifico una variable
 *
 * nombreVariable = nuevoDato;
 */
usuario = {
  nombre: "Joan",
  esAdmin: true,
  esDeColombia: true,
};
console.log(usuario);

/**
 * No modificables
 *
 * const nombreVariable = dato;
 */
const id = 5948209580432;

/**
 * Modificación de conjuntos de datos
 */
let dispositivosElectronicos = ["Xiaomi Mi 9", "MacBook Pro", "Amazfit Band 5"];
dispositivosElectronicos.splice(0, 1);
console.log(dispositivosElectronicos);

/**
 * - Como llamar un dato del conjunto de datos
 * llamo el índice donde se almacena
 * nombreVariable[índice]
 */
console.log(dispositivosElectronicos[0]);

/**
 * - Reemplazar dato
 * llamo el indice donde se almacena el dato y lo modifico
 * nombreVariable[índice] = nuevoDato;
 */
dispositivosElectronicos[1] = "MacBook Air";
console.log(dispositivosElectronicos);

/**
 * - Adicionar datos al final
 */
dispositivosElectronicos.push("PlayStation", "Echo Dot"); // Opción 1
console.log(dispositivosElectronicos);

dispositivosElectronicos = [...dispositivosElectronicos, "Lavadora LG"];
console.log(dispositivosElectronicos); // Opción 2 (recomendada)

/**
 * - Adicionar dato al comienzo
 */
dispositivosElectronicos = [
  "Luz inteligente",
  "Televisor LG",
  ...dispositivosElectronicos,
];
console.log(dispositivosElectronicos);

let mobiliario = ["Cama", "Escritorio"];

const activos = [...dispositivosElectronicos, ...mobiliario];
console.log(activos);

/**
 * 1. Declarar una variable modificable con nombre grupoDeTrabajo e inicializarla con el siguiente conjunto de datos:
 * - Joan
 * - Fernando
 *
 * 2. Adicionar tres (3) integrantes al final del conjunto de datos almacenado en la variable grupoDeTrabajo:
 * - Andrés
 * - María
 * - Maribel
 *
 * 3. Imprimir la variable grupoDeTrabajo en la consola
 */

/**
 * Modificación de objetos
 */
let persona1 = {
  nombre: "Joan",
  apellido: "Diaz del Castillo",
};

/**
 * ¿Cómo llamo un dato dentro de un objeto?
 *
 * Llamo la llave donde se almacena el dato
 *
 * nombreObjeto[llave]; // Opción 1
 * nombreObjecto.llave; // Opción 2
 */
let llave = "apellido";

console.log(persona1.nombre, persona1.apellido); // Opción 1
console.log(persona1[llave]); // Opción 2

/**
 * ¿Cómo modifico un dato en objeto?
 *
 * Llamo la llave donde se almacena el dato y lo modifico
 */
persona1.nombre = "Joan Sebastian";
persona1["apellido"] = "Diaz del Castillo Posso";

console.log(persona1);

/**
 * Extender objetos
 */
let datosEnComún = {
  rol: "editor",
  añoDeCreación: 2023,
};

let usuario1 = {
  ...persona1,
  rol: "admin",
  edad: 32,
};

let usuario2 = {
  nombre: "Maribel",
  apellido: "Posso",
  ...datosEnComún,
  edad: 51,
};

/**
 * 1. Declara una variable con nombre teléfono que almacene el siguiente objeto:
 * - puedeLlamar: verdad;
 * - puedeRecibirLlamada: verdad;
 * - tieneGPS: verdad;
 * 2. Declarar una variable con nombre iPhone que almacene el siguiente objeto:
 * - extender variable teléfono
 * - referencia: 15 pro max
 * - añoDeCompra: 2023
 * - precio: 6_000_000
 * 3. Imprimir en la consola la variable con nombre iPhone
 */

/**
 * Comparativos
 *
 * Evalúan diferencias entre dos datos
 */
let persona3 = {
  estatura: 100,
  edad: 20,
  pesoKg: 60,
  pais: "Colombia",
  rol: "admin",
};

/**
 * Números
 */

/**
 * Es mayor que (>)
 */
console.log(persona3.estatura > 120);
console.log(persona3.edad > 16);

/**
 * Es mayor o igual que (>=)
 */
console.log(persona3.edad >= 18);

/**
 * Es menor que (<)
 */
console.log(persona3.estatura < 100);

/**
 * Es menor o igual que (<=)
 */
console.log(persona3.peso <= 240);

/**
 * Cualquier dato
 */

/**
 * Igualdad (===)
 */
console.log(persona3.pais === "Estados Unidos");

/**
 * Diferencia (!==)
 */
console.log(persona3.pais !== "Corea del Norte");
console.log(persona3.rol !== "admin");

/**
 * 1. Declarar una variable con nombre niño1 que almacene el siguiente objeto:
 * - edad (número): 12
 * - pesoKg (número): 40
 * - nombre (cadena de texto): John
 * - apellido (cadena de texto): Hernandez
 *
 * 2. Realizar las siguientes comparaciones e imprimirlas en la consola:
 * - es el peso del niño1 menor o igual a 30
 * - es la edad del niño1 mayor o igual a 12
 */

/**
 * Lógicas
 * Evalúa dos condiciones
 *
 * Y (&&) Las dos condiciones deben ser verdad para cumplirse la lógica
 * O (||) Uno de los condiciones deben ser verdad para cumplirse la lógica
 * Negación (!) Negamos una condición
 */
let usuario3 = {
  edad: 18,
  pais: "Colombia",
};

/**
 * Y (&&)
 */
// console.log(usuario3.edad >= 18 && usuario3.pais === "Colombia");

let semaforo = {
  tipo: "carros",
  color: "rojo",
};
// console.log(semaforo.tipo === "peatones" && semaforo.color === "verde");

/**
 * O (||)
 */
let persona2 = {
  tengoGanasDeSalir: false,
  meInvitaronASalir: false,
  tengoQueComprarAlimentos: true,
};
persona2.tengoGanasDeSalir = false;
persona2.meInvitaronASalir = false;
persona2.tengoQueComprarAlimentos = true;

console.log(
  persona2.tengoGanasDeSalir === true ||
    persona2.meInvitaronASalir === true ||
    persona2.tengoQueComprarAlimentos === true
);

let usuario4 = {
  rol: "cajero",
};

console.log(
  usuario4.rol === "cajero" ||
    usuario4.rol === "administrador" ||
    usuario4.rol === "asesora"
);

/**
 * ¿Cómo volver cualquier dato en un booleano?
 *
 * !!
 */
let esColombiano;
// console.log(!!"hola");
console.log(!!esColombiano);
console.log(!!0);
console.log(!!20);

/**
 * Negación (!)
 */
console.log(usuario4.rol);

let formulario = {
  nombre: "Joan",
  correo: "jsdiazp@icloud.com",
  telefono: 84832098409342,
};
console.log(!formulario.nombre || !formulario.correo || !formulario.telefono);

/**
 * 1. Declara una variable con nombre viajero1 que almacene el siguiente objeto:
 * - categoría (string): oro
 * - edad (número): 20
 *
 * 2. Imprimir en la consola las siguientes lógicas:
 * - es el viajero1 categoría platino y su edad es mayor o igual a 18
 * - es el viajero1 categoría oro o es el viajero uno categoría platino
 */

/**
 * Condicionales
 *
 * Me permiten ejecutar instrucciones si cumple o no una condición
 */

/**
 * if (solo)
 *
 * Tomo una decisión con solo una condición
 *
 * Sintaxis
 * if (condición) {
 *  instrucciones;
 * }
 */
let hora = 12;

if (hora >= 9 && hora <= 18) {
  console.log("Permitido el acceso");
}

/**
 * if..else
 *
 * Sintaxis
 * if (condición) {
 *  instrucciones;
 * } else {
 *  instrucciones;
 * }
 */
if (hora >= 9 && hora <= 18) {
  console.log("Permitido el acceso");
} else {
  console.log("No permitir acceso");
}

let niño2 = {
  edad: 9,
  pesoKg: 30,
};

if (niño2.edad >= 8 && niño2.pesoKg <= 30) {
  console.log("Entra a la casa del terror");
  console.log("Bienvenido");
} else {
  console.log("No entra a la casa del terror");
}

let usuario5 = {
  edad: 18,
  pais: "Colombia",
  metodoDePago: {
    numeroDeTarjeta: 4801840932,
    franquicia: "visa",
  },
};

if (
  !usuario5.metodoDePago.franquicia ||
  !usuario5.metodoDePago.numeroDeTarjeta
) {
  console.log("Ingresar por favor datos obligatorios para procesar el pago");
} else {
  console.log("Procesando pago");

  let pagoExitoso = true;

  if (pagoExitoso) {
    console.log("Pago exitoso");
    console.log("Preparando pedido");
  } else {
    console.log("Pago rechazado");
  }
}

/**
 * if..else if..else (opcional)
 *
 * Sintaxis
 * if (condición) {
 *  instrucciones;
 * } else if (condición) {
 *  instrucciones;
 * } else { // opcional
 *  instrucciones;
 * }
 */
let viajero2 = {
  categoria: "plata",
  edad: 12,
};

if (viajero2.edad >= 18 && viajero2.categoria === "platino") {
  console.log("Permitido el acceso a:", ["VIP", "Bar", "Restaurante", "Baños"]);
} else if (viajero2.edad < 18 && viajero2.categoria === "platino") {
  console.log("Permitido el acceso a:", ["VIP", "Restaurante", "Baños"]);
} else if (viajero2.categoria === "oro") {
  console.log("Permitido el acceso a:", ["Restaurante", "Baños"]);
} else {
  console.log("Permitido el acceso a:", ["Baños"]);
}

/**
 * 1. Declara una variable con nombre visitante1 que almacene el siguiente objeto:
 * - santoYSeña (string): lasvacasvuelanenelrocio
 * 2. Evaluar las siguientes condiciones:
 * - Si el santoYSeña del visitante1 es igual a lasvacasvuelanenelrocio imprimir en la consola: puedes ingresar
 * - De lo contrario imprimir en la consola: Santo y seña invalido, no puedes ingresar
 */

/**
 * Funciones
 *
 * Almacenan instrucciones
 *
 * Contienen:
 * - Parámetros (Opcionales): Son variables declaradas sin inicializar
 * - Instrucciones (Obligatorias)
 * - Retorno (Opcional): Dato que devuelve la función
 *
 * Sintaxis
 * function nombreFunción(parámetro1, parámetro2, parámetroX) {
 *   instrucciones;
 *   return dato; // opcional
 * }
 */

// Función Nº 1
function esEditor(usuario) {
  if (usuario.rol === "editor") {
    console.log("Puedes ingresar para crear publicaciones");
    return true;
  } else {
    console.log("No puedes ingresar a crear publicaciones");
    return false;
  }
}

let joan = {
  rol: "editor",
};

esEditor(joan);

// ¿Qué hace el computador?
{
  // antes de ejecutarse inicializa los parámetros (variables sin inicializar)
  usuario = joan = { rol: "editor" };

  // ejecuta las instrucciones almacenadas
  if (usuario.rol === "editor") {
    console.log("Puedes ingresar para crear publicaciones");
    return true;
  } else {
    console.log("No puedes ingresar a crear publicaciones");
    return false;
  }
}

// Función Nº 2
function multiplicar(x, y) {
  return x * y;
}

let dato1 = 10,
  dato2 = 30;

multiplicar(dato1, dato2);

// ¿Qué hace el computador?
{
  // antes de ejecutarse inicializa los parámetros (variables sin inicializar)
  x = dato1 = 10;
  y = dato2 = 30;

  // ejecuta las instrucciones almacenadas
  return x * y;
}
