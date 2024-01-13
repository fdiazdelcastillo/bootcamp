/*
    1. Crear las siguientes funciones:
        1.1 Suma
            Parámetros:
                a (número)
                b (numero)
            Instrucciones:
                - Crear una variable modificable con nombre resultado
                - Debe sumar los valores a y b, y almacenar su resultado en la variable resultado
                - Imprimir en consola: "El resultado de la suma de:", a, " y ", b, " = ", resultado
                - Retornar la variable resultado
        1.2 Resta
            Parámetros:
                a (número)
                b (numero)
            Instrucciones:
                - Crear una variable modificable con nombre resultado
                - Debe restar los valores a y b, y almacenar su resultado en la variable resultado
                - Imprimir en consola: "El resultado de la suma de:", a, " y ", b, " = ", resultado
                - Retornar la variable resultado
        1.3 Multiplicación
            Parámetros:
                a (número)
                b (numero)
            Instrucciones:
                - Crear una variable modificable con nombre resultado
                - Debe multiplicar los valores a y b, y almacenar su resultado en la variable resultado
                - Crear una variable modificable con nombre resultado
                - Imprimir en consola: "El resultado de la suma de:", a, " y ", b, " = ", resultado
                - Retornar la variable resultado
        1.2 Division
            Parámetros:
                a (número)
                b (numero)
            Instrucciones:
                - Crear una variable modificable con nombre resultado
                - Debe dividir los valores a y b, y almacenar su resultado en la variable resultado
                - Crear una variable modificable con nombre resultado
                - Imprimir en consola: "El resultado de la suma de:", a, " y ", b, " = ", resultado
                - Retornar la variable resultado

    2. Declarar dos variables modificables:
        a y b

    3. Ejecutar la cuatro funciones para:
        3.1 a = 20 y b = 5
        3.2 a = 10 y b = 2
        3.3 a = 27 y b = 9
        3.1 a = 48 y b = 6
*/
const suma = function (a, b) {
  let resultado = a + b;
  console.log("El resultado de la suma de", a, "y", b, "=", resultado);
  return resultado;
};
const resta = function (a, b) {
  let resultado = a - b;
  console.log("El resultado de la resta de", a, "y", b, "=", resultado);
  return resultado;
};
const multiplicacion = function (a, b) {
  let resultado = a * b;
  console.log(
    "El resultado de la multiplicación de",
    a,
    "y",
    b,
    "=",
    resultado
  );
  return resultado;
};
const division = function (a, b) {
  let resultado = a / b;
  console.log("El resultado de la división de", a, "y", b, "=", resultado);
  return resultado;
};
const operacion = function (operacion, a, b) {
  let resultado = 0;
  switch (operacion.toLowerCase()) {
    case "suma":
      resultado = a + b;
      console.log(
        "El resultado de la",
        operacion.toLowerCase(),
        "de",
        a,
        "y",
        b,
        "=",
        resultado
      );
      return resultado;
      break;
    case "resta":
      resultado = a - b;
      console.log(
        "El resultado de la",
        operacion.toLowerCase(),
        "de",
        a,
        "y",
        b,
        "=",
        resultado
      );
      return resultado;
      break;
    case "multiplicacion":
      resultado = a * b;
      console.log(
        "El resultado de la",
        operacion.toLowerCase(),
        "de",
        a,
        "y",
        b,
        "=",
        resultado
      );
      return resultado;
      break;
    case "division":
      resultado = a / b;
      console.log(
        "El resultado de la",
        operacion.toLowerCase(),
        "de",
        a,
        "y",
        b,
        "=",
        resultado
      );
      return resultado;
      break;
    default:
      console.log("Operación no reconocida!");
      break;
  }
};
let a, b;
a = 20;
b = 5;
console.log("Corrida con funciones independientes!");
suma(a, b);
resta(a, b);
multiplicacion(a, b);
division(a, b);
console.log("Corrida con función consolidada!");
operacion("Suma", a, b);
operacion("Resta", a, b);
operacion("Multiplicacion", a, b);
operacion("Division", a, b);
a = 10;
b = 2;
console.log("Corrida con funciones independientes!");
suma(a, b);
resta(a, b);
multiplicacion(a, b);
division(a, b);
console.log("Corrida con función consolidada!");
operacion("Suma", a, b);
operacion("Resta", a, b);
operacion("Multiplicacion", a, b);
operacion("Division", a, b);
a = 27;
b = 9;
console.log("Corrida con funciones independientes!");
suma(a, b);
resta(a, b);
multiplicacion(a, b);
division(a, b);
console.log("Corrida con función consolidada!");
operacion("Suma", a, b);
operacion("Resta", a, b);
operacion("Multiplicacion", a, b);
operacion("Division", a, b);
a = 48;
b = 6;
console.log("Corrida con funciones independientes!");
suma(a, b);
resta(a, b);
multiplicacion(a, b);
division(a, b);
console.log("Corrida con función consolidada!");
operacion("Suma", a, b);
operacion("Resta", a, b);
operacion("Multiplicacion", a, b);
operacion("Division", a, b);
