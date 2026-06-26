// DÍA 5: Arrays - creación, índices, métodos básicos
// Usá solo: variables, arrays, índices, métodos de array, console.log
// (NO uses funciones todavía)

// 1 - Crear y acceder --------------------------------------------
let frutas = ["manzana", "pera", "banana", "naranja", "uva"]

console.log(frutas[0])            // primera
console.log(frutas[frutas.length - 1])  // última
console.log(frutas.length)        // cantidad


// 2 - Agregar y sacar elementos -----------------------------------
let lista = []

lista.push("leche")     // agrega al final
lista.push("pan")
lista.push("huevos")
lista.push("queso")
console.log(lista)

lista.pop()             // saca el último
console.log(lista)

lista.unshift("arroz")  // agrega al inicio
console.log(lista)

lista.shift()           // saca el primero
console.log(lista)


// 3 - Buscar en arrays -------------------------------------------
let numeros = [10, 25, 30, 45, 50, 25]

console.log(numeros.includes(30))   // true si existe
console.log(numeros.indexOf(25))    // posición del primer 25
console.log(numeros.lastIndexOf(25)) // posición del último 25
console.log(numeros.join(" - "))    // convertir a string


// 4 - Ordenar -----------------------------------------------------
let desordenado = [3, 1, 8, 5, 2]
desordenado.sort((a, b) => a - b)  // ordenar números
console.log(desordenado)

desordenado.reverse()
console.log(desordenado)
