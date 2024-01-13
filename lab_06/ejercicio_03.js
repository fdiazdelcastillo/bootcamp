/**
  Ejercicio Nº 3

  1. Declarar una función con nombre (camelCase) `esMultiploDe`, la función debe contener lo siguiente:

  Parámetros (camelCase):
  - numero
  - multiplo

  Instrucciones:
  - Si el parámetro `numero` es múltiplo del parámetro `multiplo`, realizar la siguiente instrucción:
    * Retornar verdadero (booleano)
  - De lo contrario realizar las siguientes instrucciones:
    * Retornar falso (booleano)

  2. Ejecutar la función `esMultiploDe` pasando como parámetros los siguientes valores:
  - numero: 15
  - multiplo: 3

  3. Ejecutar la función `esMultiploDe` pasando como parámetros los siguientes valores:
  - numero: 20
  - multiplo: 7

  4. Ejecutar la función `esMultiploDe` pasando como parámetros los siguientes valores:
  - numero: 100
  - multiplo: 10
 */
// Declaración de función
function esMultiploDe(numero, multiplo) {
    if (numero % multiplo === 0) {
        return true;
    } else {
        return false;
    }
}
function esMultiploDeDos(numero, multiplo) {
    let varEsMultiplo = true;
    if (numero % multiplo === 0) {
        console.log(numero, "si es múltiplo de:", multiplo, ", retorna valor", varEsMultiplo);
        return true;
    } else {
        varEsMultiplo = false;
        console.log(numero, "no es múltiplo de:", multiplo,  ", retorna valor", varEsMultiplo);
        return false;
    }
}
// Ejecución de función
console.log("15 y 3:",esMultiploDe(15,3));
console.log("20 y 7:",esMultiploDe(20,7));
console.log("100 y 10:",esMultiploDe(100,10));
esMultiploDeDos(15,3);
esMultiploDeDos(20,7);
esMultiploDeDos(100,10);