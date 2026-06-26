// DÍA 6: Loops (for, while, for...of)
// Usá solo: variables, loops, console.log
// (NO uses funciones todavía)

// 1 - for: contar del 1 al 10 ------------------------------------
console.log("Contar del 1 al 10:")
for (let i = 1; i <= 10; i++) {
  console.log(i)
}


// 2 - for: tabla del 5 -------------------------------------------
console.log("Tabla del 5:")
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i))
}


// 3 - for: recorrer array ----------------------------------------
let frutas = ["manzana", "pera", "banana", "naranja"]

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}


// 4 - for...of: recorrer array más simple ------------------------
for (let fruta of frutas) {
  console.log("Me gusta la " + fruta)
}


// 5 - while: contar hasta llegar a 50 de 5 en 5 ------------------
let contador = 0

while (contador <= 50) {
  console.log(contador)
  contador = contador + 5
}


// 6 - sumar solo pares del 1 al 20 -------------------------------
let suma = 0

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    suma = suma + i
  }
}

console.log("Suma de pares del 1 al 20:", suma)
