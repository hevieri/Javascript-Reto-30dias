/*
  DÍA 18: Callbacks y Promesas

  Instrucciones:
  1. Simular carga de datos con setTimeout y callback:
     - obtenerUsuario(id, callback) que tarde 1s
     - obtenerPosts(usuarioId, callback) que tarde 0.5s

  2. Convertir lo anterior a Promesas:
     - obtenerUsuario(id) → Promise
     - obtenerPosts(usuarioId) → Promise
     - Encadenar con .then() para obtener usuario y sus posts

  3. Promise.all:
     - Hacer 3 promesas en paralelo (simular 3 APIs distintas)
     - Mostrar cuando todas se resuelvan

  4. Promise.race:
     - Simular 2 promesas (una rápida y una lenta)
     - Mostrar cuál gana la carrera

  +++ EJERCICIO EXTRA +++
  - Creá una función sleep(ms) que devuelva una promesa
  - Encadená varias promesas con .then() para simular una cadena de tareas
*/
