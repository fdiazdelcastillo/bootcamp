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
type FuncEsMultiplo = (numero: number, multiplo: number) => boolean;
const esMultiploDeUno:FuncEsMultiplo = function(numero, multiplo) {
    if (numero % multiplo === 0) {
        return true;
    } else {
        return false;
    }
}

const nueva = function() {

}

const esMultiploDeDosA: FuncEsMultiplo = function(numero, multiplo) {
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
console.log("15 y 3:",esMultiploDeUno(15,3));
console.log("20 y 7:",esMultiploDeUno(20,7));
console.log("100 y 10:",esMultiploDeUno(100,10));
esMultiploDeDosA(15,3);
esMultiploDeDosA(20,7);
esMultiploDeDosA(100,10);