// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    console.log(10>=9); //Realiza la comparación
}

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    console.log(0===0); //Realiza la comprobación
}

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    console.log(7>8 && 7<10); //Compara si 7 es mayor que 8 y menor que 10, retorna falso.
}

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    console.log(1500 - (1500 * 0.25) <= 1150); 
    /*Al precio del producto se le resta el resultado de la multiplicación del precio (1500) * el descuento de 25%(0.25),
    compara si es que este resultado es menor o igual a la cantidad de plata que se posee (1150))
    retorna true porque el resultado es 1125(menor a 1150) y por lo tanto si se puede*/
}

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    let mensaje = "Hola JavaScript"; //Se establece la variable mensaje con su valor
    console.log(mensaje); //se imprime la variable
}

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    let resultado = 2 + 3; //Se establece la variable resultado con su valor
    console.log(resultado); //Se imprime la variable
}

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    const IS_DISABLED = true; //Se establece la constante IS_DISABLED inicializada con true
    console.log(IS_DISABLED); //se imprime la constante
}

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    let capacidad = null; //se establece la variable capacidad con su valor null
    console.log(capacidad); //se imprime la variable
}

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    let dinero = undefined; //se establece la variable dinero con su valor undefined
    console.log(dinero); //se imprime la variable
}

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    let userName; //se establece la variable userName sin ningun valor
    console.log(typeof userName); //se imprime el tipo de dato de la variable
}

// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    let dogId = ""; //se establece la variable dogId inicializando con "" para que sea un String
    console.log(typeof dogId); //se imprime el tipo de variable
}

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    console.log("Hola"); //Se imprime un mensaje
}

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    let edad = 30; //se establece la variable edad con el valor 30
    console.log(edad); //se imprime la variable
}

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    let version = 2024; //se establece la variable version con el valor de 2024
    console.log("La versión de JavaScript es "+ version); //se imprime un mensaje concatenando con la variable version
}

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};
