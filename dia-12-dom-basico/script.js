/*
  DÍA 12: DOM - querySelector, textContent, eventos (click)
  - Usa querySelector y getElementById para seleccionar elementos
  - textContent e innerHTML para modificar texto
  - style para cambiar CSS
  - classList para agregar/quitar clases
  - addEventListener para eventos click, mouseover, mouseout

  Ejercicios:
  1. Al hacer clic en "Cambiar color", la caja debe cambiar a un color aleatorio
  2. Al hacer clic en "Cambiar texto", el párrafo debe mostrar la hora actual
  3. Al pasar el mouse sobre la caja, cambia su borde
  4. Al hacer doble clic en la caja, vuelve a su estado original
*/

// --- Tu código aquí ---

// 1. Cambiar color de la caja al hacer clic
const caja = document.querySelector('.caja');
const botonColor = document.getElementById('cambiarColor');

botonColor.addEventListener('click', () => {
  const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
  caja.style.backgroundColor = colorAleatorio;
});

// 2. Cambiar texto del párrafo al hacer clic
const parrafo = document.getElementById('texto');
const botonTexto = document.getElementById('cambiarTexto');

botonTexto.addEventListener('click', () => {
  const horaActual = new Date().toLocaleTimeString();
  parrafo.textContent = horaActual;
});

// 3. Cambiar borde de la caja al pasar el mouse
caja.addEventListener('mouseover', () => {
  caja.style.border = '2px solid #000';
});

// 4. Volver a estado original al hacer doble clic
caja.addEventListener('dblclick', () => {
  caja.style.backgroundColor = '';
  caja.style.border = '';
});