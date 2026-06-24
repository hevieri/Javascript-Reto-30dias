/*
  DÍA 26: this - call, apply, bind

  Instrucciones:
  1. LOGGER con bind:
     - Objeto logger con método log(nivel, mensaje)
     - Crear logger.info, logger.warn, logger.error con bind
       que prefijen el nivel automáticamente

  2. PRÉSTAMO DE MÉTODOS (call/apply):
     - Usar Array.prototype.slice.call en arguments
     - Usar Math.max.apply en un array
     - Convertir NodeList a Array con call

  3. BIND para eventos:
     - Objeto boton = { texto: "Enviar", handleClick() }
     - bind(this) para mantener contexto en event listener

  4. CONSTRUCTOR HOMBRE PRESTADO:
     - function Persona(nombre) { this.nombre = nombre; }
     - Usar Persona.call() para que un objeto "presté" el constructor

  +++ EJERCICIO EXTRA +++
  - Implementa Function.prototype.myBind manualmente
  - Implementa Function.prototype.myCall manualmente
*/
