/*
  DÍA 16: Manejo de errores - try/catch, throw

  Instrucciones:
  1. Función dividir(a, b):
     - Si b === 0, lanzar error "No se puede dividir por cero"
     - Si typeof a !== 'number', lanzar error "El primer argumento no es número"
     - Envolver en try/catch y devolver { resultado: null, error: mensaje }

  2. Función validarUsuario(usuario):
     - usuario debe tener: nombre (string no vacío), email (válido), edad (>= 18)
     - Si falta algo, lanzar ValidationError con los campos inválidos
     - Usar una clase de error personalizada

  3. Función parseJSON(str):
     - Intentar JSON.parse, capturar error
     - Devolver "JSON inválido" si falla

  +++ EJERCICIO EXTRA +++
  - Crea una función fetchConReintentos(url, intentos=3)
    que reintente si hay error de red y devuelva error si se agotan
*/
