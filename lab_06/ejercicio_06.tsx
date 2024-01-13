/**
 * Ejercicio Nº 6
 *
 * 1. Crear una función llamada (camelCase) 'pagoDenegado', la función debe contener lo siguiente:
 *
 * Parámetros (camelCase):
 *   - usuario
 *
 * Instrucciones:
 *  - Imprimir en la consola la concatenación de: llave nombre del parámetro usuario y
 *    el string ", por favor revisa los datos de tu tarjeta e intenta de nuevo o contacta con soporte"
 *
 * 2. Crear una función llamada (camelCase) 'procesarPago', la función debe contener lo siguiente:
 *
 * Parámetros (camelCase):
 *  - usuario
 *
 * Instrucciones:
 * - Almacenar en una variable constante llamada (camelCase) 'numeroAleatorio' lo siguiente:
 *   Math.round(Math.random())
 * - Pasar dos (2) parámetros a la función console.log:
 *   * String "Número aleatorio:"
 *   * Variable constante 'numeroAleatorio'
 * - Si el parámetro 'usuario' tiene la llave 'métodoDePago' y la constante 'numeroAleatorio' es igual a 1,
 *   realizar las siguientes instrucciones:
 *   * Imprimir en la consola: pago recibido con éxito
 *   * Imprimir en la consola: pedido en proceso de alistamiento
 * - De lo contrario realizar las siguientes instrucciones:
 *   * Ejecutar la función 'pagoDenegado'
 *
 * 3. Almacenar en una variable constante con nombre 'usuario6' un objeto con las
 *    siguientes llaves (camelCase) y datos:
 * - nombre (cadena de texto): Elon
 * - apellido (cadena de texto): Musk
 * - método de pago (objeto):
 *     * número de tarjeta (número): 3412847902841
 *     * fecha de expiración (cadena de texto): 12/29
 *
 * 4. Llamar la función 'procesarPago' y pasar como parámetro la constante 'usuario6'
 *
 * 5. Llamar la función 'procesarPago' y pasar como parámetro un objeto con las
 *    siguientes llaves (camelCase) y datos:
 * - nombre (cadena de texto): Johann
 * - apellido (cadena de texto): Bach
 * - método de pago (objeto):
 *   * número de tarjeta (número): 4813492432893
 *   * fecha de expiración (cadena de texto): 6/27
 *
 * 6. Llamar la función 'procesarPago' y pasar como parámetro un objeto vacío.
 */
type PagoDenegadoDosParam = {
  nombre: string,
  apellido: string,
  metodoDePago: {
    númeroDeTarjeta: number,
    fechaDeExpiración: string
  }
};

type PagoDenegadoDos = (params: PagoDenegadoDosParam) => void; 

const pagoDenegadoDos:PagoDenegadoDos = function (usuario) {
  console.log(
    usuario.nombre,
    ", por favor revisa los datos de tu tarjeta e intenta de nuevo o contacta con soporte"
  );
};

const procesarPagoDos = function (usuario) {
  const numeroAleatorio = Math.round(Math.random());
  console.log("Número aleatorio:", numeroAleatorio);
  if (!!usuario.metodoDePago && numeroAleatorio === 1) {
    console.log("pago recibido con éxito");
    console.log("pedido en proceso de alistamiento");
  } else {
    pagoDenegadoDos(usuario);
  }
};

const usuario61 = {
  nombre: "Elon",
  apellido: "Musk",
  metodoDePago: {
    númeroDeTarjeta: 3412847902841,
    fechaDeExpiración: "12/29",
  },
};

procesarPagoDos(usuario61);
procesarPagoDos({
  nombre: "Johann",
  apellido: "Bach",
  metodoDePago: {
    númeroDeTarjeta: 4813492432893,
    fechaDeExpiración: "6/27",
  },
});
procesarPagoDos({});
