/**
 * 1. Declarar una función con nombre puedeIngresarAlParqueadero, la función debe contener lo siguiente:
 *
 * Parámetros (camelCase):
 * - residente
 *
 * Instrucciones:
 * - Si el parámetro residente tiene una llave con nombre códigoDeParquedero y
 * es un número mayor a 100 realizar las siguiente instrucciones:
 *   * Imprimir en la consola: puede ingresar
 *   * Retornar verdadero (booleano)
 * - De lo contrario imprimir realizar las siguientes instrucciones:
 *   * Imprimir en la consola: acceso no autorizado
 *   * Retornar falso (booleano)
 *
 * 2. Declarar una variable constante con nombre residente1 que almacene un objeto con las siguientes
 * llaves (camelCase) y sus respectivos datos:
 * - nombre (string): Pedro
 * - apellido (string): Molina
 * - código de parqueadero: 329039
 *
 * 3. Ejecutar la función puedeIngresarAlParqueadero pasando como parámetro la variable constante residente1
 *
 * 4. Ejecutar la función puedeIngresarAlParqueadero pasando como parámetro un objeto con
 * las siguientes llaves (camelCase) y sus respectivos datos:
 * - nombre (string): Mary
 * - apellido (string): Molina
 * - edad (número): 38
 * - código de parqueadero: 39
 */
// Declaración de Función
function puedeIngresarAlParqueadero(residente) {
    if (!!residente.codigoDeParqueadero && residente.codigoDeParqueadero > 100) {
        console.log("puede ingresar");
        return true;
    } else {
        console.log("acceso no autorizado");
        return false;
    }
}
// Declaración de variable (objeto)
const residente1 = {
    nombre: "Pedro",
    apellido: "Molina",
    edad: 38,
    codigoDeParqueadero: 329039,
};
// Ejecución de función
console.log("Corrida", residente1.nombre, residente1.apellido);
puedeIngresarAlParqueadero(residente1);
console.log("Corrida","Mary Molina");
puedeIngresarAlParqueadero({nombre: "Mary", apellido: "Molina", edad: 38, codigoDeParqueadero: 39});
console.log("Anónimo");
puedeIngresarAlParqueadero({});