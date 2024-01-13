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

const huevosEnPerico = ["2 huevos", "1 tomate", "1 cebolla"];
const ensaladaCesar = ["1 lechuga", "1 tomate", "1 cebolla", "1kg de pollo"];
const recetas = {
    huevosEnPerico: ["2 huevos", "1 tomate", "1 cebolla"],
    ensaladaCesar: ["1 lechuga", "1 tomate", "1 cebolla", "1kg de pollo"],
};
function queIngredientes(receta)  {
    if (receta === "huevos en perico") {
        return ["2 huevos", "1 tomate", "1 cebolla"];
    } else if (receta === "ensalada cesar") {
        return ["1 lechuga", "1 tomate", "1 cebolla", "1kg de pollo"];
    } else {
        console.log("la receta no se encuentra almacenada");
    }
}
function queIngredientesDos(receta)  {
    if (receta === "huevos en perico") {
        return huevosEnPerico
    } else if (receta === "ensalada cesar") {
        return ensaladaCesar;
    } else {
        console.log("la receta no se encuentra almacenada");
    }
}
function queIngredientesTres(receta)  {
    if (receta === "huevosEnPerico") {
        return recetas[receta];
    } else if (receta === "ensaladaCesar") {
        return recetas[receta];
    } else {
        console.log("la receta no se encuentra almacenada");
    }
}
// Ejecución de función
console.log("Función 1");
queIngredientes("piña colada");
queIngredientes("huevos en perico");
console.log("huevos en perico", queIngredientes("huevos en perico"));
queIngredientes("ensalada cesar");
console.log("ensalada cesar", queIngredientes("ensalada cesar"));
//
console.log("Función 2");
queIngredientesDos("piña colada");
queIngredientesDos("huevos en perico");
console.log("huevos en perico", queIngredientesDos("huevos en perico"));
queIngredientesDos("ensalada cesar");
console.log("ensalada cesar", queIngredientesDos("ensalada cesar"));
//
console.log("Función 3");
queIngredientesTres("piñacolada");
queIngredientesTres("huevosEnPerico");
console.log("huevosEnPerico", queIngredientesTres("huevosEnPerico"));
queIngredientesTres("ensaladaCesar");
console.log("ensaladaCesar", queIngredientesTres("ensaladaCesar"));

