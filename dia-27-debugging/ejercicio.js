/*
  DÍA 27: Debugging con DevTools

  IMPORTANTE: NO corrijas el código aún.
  Primero identifica los errores usando DevTools.

  Instrucciones:
  1. Abre este archivo en el navegador (o usa Node con --inspect)
  2. Abre DevTools (F12) → pestaña Sources
  3. Coloca breakpoints y examina el estado
  4. Corrige los errores que encuentres

  Errores a encontrar:
*/

// Error 1: ¿Qué pasa aquí?
function sumarArray(arr) {
  let total = 0
  for (let i = 0; i <= arr.length; i++) {
    total += arr[i]
  }
  return total
}

// Error 2: ¿Y aquí?
const usuario = {
  nombre: "Ana",
  saludar: () => {
    return `Hola, soy ${this.nombre}`
  }
}

// Error 3: ¿Qué falla?
function obtenerUsuario(id) {
  const usuarios = { 1: "Ana", 2: "Carlos" }
  return usuarios.id
}

// Error 4: Asincronía
function cargarDatos() {
  let datos = []
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .then(data => datos = data)
  console.log("Datos cargados:", datos)
  return datos
}

// +++ EJERCICIO EXTRA +++
// Error 5: Crea tu propio código con 3 bugs y comparte con alguien
*/
