/*
    1. Crear la siguiente funcion:
        1.1 Operacion
            Parámetros:
                operación (string)
                a (número)
                b (numero)
            Instrucciones:
                - Crear una variable modificable con nombre resultado
                - Si operación es igual a suma debe hacer resultado igual a: a + b
                    - Imprimir en consola: "El resultado de la", operación, "de:", a, " y ", b, " = ", resultado
                    - Retornar la variable resultado   
                - de lo contrario Si operación es igual a resta debe hacer resultado igual a: a - b
                    - Imprimir en consola: "El resultado de la", operación, "de:", a, " y ", b, " = ", resultado
                    - Retornar la variable resultado   
                - de lo contrario Si operación es igual a multiplicacion debe hacer resultado igual a: a * b
                    - Imprimir en consola: "El resultado de la", operación, "de:", a, " y ", b, " = ", resultado
                    - Retornar la variable resultado   
                - de lo contrario Si operación es igual a division debe hacer resultado igual a: a / b
                    - Imprimir en consola: "El resultado de la", operación, "de:", a, " y ", b, " = ", resultado
                    - Retornar la variable resultado   
                - de lo contrario imprimir en consola "Operación no reconocida!"
                - Retornar false
    2. Declarar dos variables modificables:
        a y b

    3. Ejecutar la cuatro funciones para:
        3.1.1 operación = "suma", a = 20 y b = 5
        3.1.2 operación = "suma", a = 10 y b = 2
        3.1.3 operación = "suma", a = 27 y b = 9
        3.1.4 operación = "suma", a = 48 y b = 6
        3.2.1 operación = "resta", a = 20 y b = 5
        3.2.2 operación = "resta", a = 10 y b = 2
        3.2.3 operación = "resta", a = 27 y b = 9
        3.2.4 operación = "resta", a = 48 y b = 6
        3.3.1 operación = "multiplicacion", a = 20 y b = 5
        3.3.2 operación = "multiplicacion", a = 10 y b = 2
        3.3.3 operación = "multiplicacion", a = 27 y b = 9
        3.3.4 operación = "multiplicacion", a = 48 y b = 6
        3.4.1 operación = "division", a = 20 y b = 5
        3.4.2 operación = "division", a = 10 y b = 2
        3.4.3 operación = "division", a = 27 y b = 9
        3.4.4 operación = "division", a = 48 y b = 6
*/
type Operacion2 = (operacion: string, a: number, b: number) => number | undefined;
const operacion2: Operacion2 = function (operacion, a, b) {
  let resultado = 0;
  if (operacion.toLowerCase() === "suma") {
    resultado = a + b;
    console.log(
      "El resultado de la ",
      operacion,
      "de",
      a,
      "y",
      b,
      "es igual a:",
      resultado
    );
    return resultado;
  } else if (operacion.toLowerCase() === "resta") {
    resultado = a - b;
    console.log(
      "El resultado de la ",
      operacion,
      "de",
      a,
      "y",
      b,
      "es igual a:",
      resultado
    );
    return resultado;
  } else if (operacion.toLowerCase() === "multiplicacion") {
    resultado = a * b;
    console.log(
      "El resultado de la ",
      operacion,
      "de",
      a,
      "y",
      b,
      "es igual a:",
      resultado
    );
    return resultado;
  } else if (operacion.toLowerCase() === "division") {
    resultado = a / b;
    console.log(
      "El resultado de la ",
      operacion,
      "de",
      a,
      "y",
      b,
      "es igual a:",
      resultado
    );
    return resultado;
  }
};
operacion2("Suma", 10, 2);
operacion2("Suma", 20, 5);
operacion2("Suma", 27, 9);
operacion2("Suma", 48, 6);
operacion2("Resta", 20, 5);
operacion2("Resta", 10, 2);
operacion2("Resta", 27, 9);
operacion2("Resta", 48, 6);
operacion2("Multiplicacion", 20, 5);
operacion2("Multiplicacion", 10, 2);
operacion2("Multiplicacion", 27, 9);
operacion2("Multiplicacion", 48, 6);
operacion2("Division", 20, 5);
operacion2("Division", 10, 2);
operacion2("Division", 27, 9);
operacion2("Division", 48, 6);
