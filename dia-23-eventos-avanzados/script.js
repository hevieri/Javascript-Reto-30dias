/*
  DÍA 23: Eventos avanzados - delegación, teclado, formularios

  VALIDACIÓN EN TIEMPO REAL:

  1. Validar campo al escribir (input event):
     - Nombre: mínimo 3 caracteres
     - Email: que contenga @ y .dominio
     - Password: 6+ chars, 1 mayúscula, 1 número

  2. Mostrar error/éxito en tiempo real:
     - Clase .invalido (borde rojo) si no cumple
     - Clase .valido (borde verde) si cumple
     - Mostrar mensaje de error específico

  3. Al submit:
     - Prevenir envío (preventDefault)
     - Validar todos los campos
     - Si todo ok, mostrar alerta de éxito

  4. Tecla Escape reinicia todos los campos

  +++ EXTRA +++
  - Usa delegación de eventos para manejar clics en una lista dinámica
  - Agrega un contador de caracteres en el campo nombre
*/
