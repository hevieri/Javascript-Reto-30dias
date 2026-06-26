// DÍA 3: Numbers, operadores y Math
// Usá solo: variables, operadores (+, -, *, /, %, **), Math, console.log
// (NO uses funciones, condicionales ni bucles — eso viene después)

// 1 - Operaciones básicas ----------------------------------------
let a = 15
let b = 4

console.log(a + b)    // suma
console.log(a - b)    // resta
console.log(a * b)    // multiplicación
console.log(a / b)    // división
console.log(a % b)    // resto
console.log(a ** b)   // exponente


// 2 - Redondeo ----------------------------------------------------
let numero = 4.7

console.log(Math.round(numero))   // redondeo normal
console.log(Math.ceil(numero))    // para arriba
console.log(Math.floor(numero))   // para abajo
console.log(Math.trunc(numero))   // saca decimales

let decimal = 3.14159
console.log(Number(decimal.toFixed(2)))  // solo 2 decimales


// 3 - Aleatorios --------------------------------------------------
console.log(Math.random())                  // entre 0 y 1
console.log(Math.floor(Math.random() * 6) + 1)  // dado 1-6


// 4 - Máximo y mínimo ---------------------------------------------
console.log(Math.max(10, 25, 3, 18, 7))
console.log(Math.min(10, 25, 3, 18, 7))
