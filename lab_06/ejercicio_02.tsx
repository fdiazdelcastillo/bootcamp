/**
 * Ejercicio Nº 2
 *
 * 1. Declarar una función con nombre (camelCase) queIngredientes, la función debe contener lo siguiente:
 *
 * Parámetros (camelCase):
 * - receta
 *
 * Instrucciones:
 * - Si el parámetro receta es igual a "huevos en perico", realizar la siguiente instrucción:
 *   * Retornar un conjunto de datos con los siguientes datos (strings):
 *     - 2 huevos
 *     - 1 tomate
 *     - 1 cebolla
 * - De lo contrario si el parámetro receta es igual a "ensalada cesar", realizar la siguiente instrucción:
 *   * Retornar un conjunto de datos con los siguientes datos (strings):
 *     - 1 lechuga
 *     - 1 tomate
 *     - 1 cebolla
 *     - 1kg de pollo
 * - De lo contrario realizar la siguiente instrucción:
 *   * Imprimir en la consola: la receta no se encuentra almacenada
 *
 * 2. Ejecutar la función queIngredientes pasando como parámetro el string: "piña colada"
 *
 * 3. Ejecutar la función queIngredientes pasando como parámetro el string: "huevos en perico"
 *
 * 4. Ejecutar la función queIngredientes pasando como parámetro el string: "ensalada cesar"
 */
// Declaración de función
type  Receta = string[];
const huevosEnPericoDos: Receta = ["2 huevos", "1 tomate", "1 cebolla"];
const ensaladaCesarDos: Receta = ["1 lechuga", "1 tomate", "1 cebolla", "1kg de pollo"];

type RecetasDos = {
    huevosEnPerico: string[];
    ensaladaCesar: string[];
};
const recetasDos: RecetasDos = {
    huevosEnPerico: ["2 huevos", "1 tomate", "1 cebolla"],
    ensaladaCesar: ["1 lechuga", "1 tomate", "1 cebolla", "1kg de pollo"],
};

type QueIngredientes2 = (receta: string) => string[] | undefined;
const queIngredientes2: QueIngredientes2 = function(receta)  {
    if (receta === "huevos en perico") {
        return ["2 huevos", "1 tomate", "1 cebolla"];
    } else if (receta === "ensalada cesar") {
        return ["1 lechuga", "1 tomate", "1 cebolla", "1kg de pollo"];
    } else {
        console.log("la receta no se encuentra almacenada");
    }
}

const queIngredientes2Dos: QueIngredientes2 = function (receta)  {
    if (receta === "huevos en perico") {
        return huevosEnPericoDos
    } else if (receta === "ensalada cesar") {
        return ensaladaCesarDos;
    } else {
        console.log("la receta no se encuentra almacenada");
    }
}
type QueIngredientes3Dos = (receta: string) => string[] | undefined;
const queIngredientes3Dos: QueIngredientes3Dos = function (receta)  {
    if (receta === "huevosEnPerico") {
        return recetasDos[receta];
    } else if (receta === "ensaladaCesar") {
        return recetasDos[receta];
    } else {
        console.log("la receta no se encuentra almacenada");
    }
}
// Ejecución de función
console.log("Función 1");
queIngredientes2("piña colada");
queIngredientes2("huevos en perico");
console.log("huevos en perico", queIngredientes2("huevos en perico"));
queIngredientes2("ensalada cesar");
console.log("ensalada cesar", queIngredientes2("ensalada cesar"));
//
console.log("Función 2");
queIngredientes2Dos("piña colada");
queIngredientes2Dos("huevos en perico");
console.log("huevos en perico", queIngredientes2Dos("huevos en perico"));
queIngredientes2Dos("ensalada cesar");
console.log("ensalada cesar", queIngredientes2Dos("ensalada cesar"));
//
console.log("Función 3");
queIngredientes3Dos("piñacolada");
queIngredientes3Dos("huevosEnPerico");
console.log("huevosEnPerico", queIngredientes3Dos("huevosEnPerico"));
queIngredientes3Dos("ensaladaCesar");
console.log("ensaladaCesar", queIngredientes3Dos("ensaladaCesar"));

