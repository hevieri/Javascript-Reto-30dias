// DÍA 4: Condicionales (if, else, switch, ternario)
// Usá solo: variables, if/else, switch, ternario, console.log
// (NO uses funciones ni bucles)

// 1 - Edades ----------------------------------------------------
let edad = 25

if (edad >= 18) {
  console.log("Mayor de edad")
} else {
  console.log("Menor de edad")
}

// Cambiá la edad y correlo de nuevo para probar


// 2 - Switch (día de la semana) ----------------------------------
let dia = 3
let nombreDia = ""

switch (dia) {
  case 1:
    nombreDia = "Lunes"
    break
  case 2:
    nombreDia = "Martes"
    break
  case 3:
    nombreDia = "Miércoles"
    break
  case 4:
    nombreDia = "Jueves"
    break
  case 5:
    nombreDia = "Viernes"
    break
  case 6:
    nombreDia = "Sábado"
    break
  case 7:
    nombreDia = "Domingo"
    break
  default:
    nombreDia = "Día inválido"
}

console.log(nombreDia)


// 3 - Ternario ---------------------------------------------------
let temperatura = 30
let clima = temperatura > 25 ? "Hace calor" : "Está fresco"
console.log(clima)


// 4 - Múltiples condiciones --------------------------------------
let nota = 85
let calificacion = ""

if (nota >= 90) {
  calificacion = "A"
} else if (nota >= 80) {
  calificacion = "B"
} else if (nota >= 70) {
  calificacion = "C"
} else if (nota >= 60) {
  calificacion = "D"
} else {
  calificacion = "F"
}

console.log(calificacion)
