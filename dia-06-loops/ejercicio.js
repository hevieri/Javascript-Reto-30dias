/*
  DÍA 6: Loops (for, while, for...of)

  Usá solo: variables, loops, console.log
  (NO uses funciones todavía)

  1 - for: mostrá los números del 1 al 10

  2 - for: mostrá la tabla del 5 (5x1=5, 5x2=10, ... hasta 5x10=50)

  3 - Declará frutas = ["manzana", "pera", "banana", "naranja"]
      Recorrelo con un for (usando i y frutas[i])
      Después recorrelo con for...of (más simple)

  4 - while: declará contador = 0
      Mientras contador <= 50, mostrá contador y sumale 5
      → 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50

  5 - for: sumá solo los números pares del 1 al 20
      Declará suma = 0, recorré i de 1 a 20
      Si i es par (i % 2 === 0), sumalo a suma
      Al final mostrá "Suma de pares:" + suma
*/

// --- Escribí tu código acá ---

//1.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}