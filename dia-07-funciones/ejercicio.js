/*
  DÍA 7: Functions - declaración, expresión, arrow, default params

  Instrucciones:
  1. FACTORIAL:
     - Función factorial(n) que calcule n! (5! = 5*4*3*2*1)
     - Hazla recursiva

  2. PALÍNDROMO:
     - Función esPalindromo(str) que devuelva true/false
     - Ignorar mayúsculas, espacios y tildes

  3. CALCULADORA con función como parámetro:
     - Función operar(a, b, callback) que ejecute la operación
     - Pasa sumar, restar, multiplicar, dividir como callbacks

  4. Parámetros default:
     - Función saludar(nombre = "amigo", idioma = "es") que salude
       en español, inglés o portugués

  +++ EJERCICIO EXTRA +++
  - Creá una función que reciba un número y devuelva true si es par, false si es impar
  - Creá una función que reciba un array de números y devuelva solo los pares (usando la función anterior)
*/

// --- Tu código aquí ---
//1.
function factorial(n){
   if(n === 0 || n === 1) {
      return 1;
   }
   return n * factorial(n - 1);
}

//4.
function saludar(nombre = "amigo", idioma = "es") {
   switch (idioma) {
      case "es":
         return `Hola, ${nombre}!`;
      case "en":
         return `Hello, ${nombre}!`;
      case "pt":
         return `Olá, ${nombre}!`;
      default:
         return `Hola, ${nombre}!`;
   }
   