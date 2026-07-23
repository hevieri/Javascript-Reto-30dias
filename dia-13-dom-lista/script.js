/*
  DÍA 13: DOM - crear elementos, appendChild, classList
  TO-DO LIST APP

  Requisitos:
  1. Al escribir una tarea y hacer clic en "Agregar", se crea un <li>
  2. Cada <li> tiene el texto de la tarea y un botón "Eliminar"
  3. Al hacer clic en una tarea, se marca como completada (clase CSS)
  4. Al hacer clic en "Eliminar", se borra la tarea
  5. No permitir tareas vacías

  Pistas:
  - document.createElement('li')
  - element.classList.toggle('completada')
  - li.appendChild(texto)
  - input.value para obtener el texto
*/

// --- Tu código aquí ---

// 1. Seleccionar elementos del DOM
const inputTarea = document.getElementById('tareaInput');
const botonAgregar = document.getElementById('agregarBtn');
const listaTareas = document.getElementById('tareasList');

// 2. Función para agregar tarea
function agregarTarea() {
  const textoTarea = inputTarea.value.trim();
  if (textoTarea === '') {
    alert('Por favor, ingresa una tarea.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = textoTarea;

  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.addEventListener('click', () => {
    listaTareas.removeChild(li);
  });

  li.appendChild(botonEliminar);
  listaTareas.appendChild(li);

  inputTarea.value = '';
}

// 3. Función para marcar tarea como completada
function marcarCompletada(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completada');
  }
}
// 4. Agregar eventos
botonAgregar.addEventListener('click', agregarTarea);
listaTareas.addEventListener('click', marcarCompletada);

// 5. Permitir agregar tarea al presionar Enter
inputTarea.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    agregarTarea();
  }
});

