/*
  DÍA 10: Destructuring, spread operator, rest params

  Instrucciones:
  1. Destructuring de objeto:
     const usuario = { id: 1, nombre: "Ana", email: "ana@mail.com", pais: "MX" }
     Extrae nombre y email, el resto en un objeto "resto"

  2. Destructuring de array:
     const colores = ["rojo", "verde", "azul", "amarillo"]
     Intercambia el 1ro y 2do usando destructuring

  3. Spread: Combinar dos objetos en uno nuevo (sin mutar originales)

  4. Rest params: Función sumarTodos(...numeros) que acepte N argumentos

  5. Clonar un objeto anidado con structuredClone o spread anidado

  +++ EJERCICIO EXTRA +++
  - Crea una función que acepte un objeto de opciones con default values
    function configurar({ host = "localhost", port = 3000, ssl = false } = {})
  - Úsala con diferentes configuraciones parciales
*/
