export function crearElemento(tag, { clases = [], texto = '', atributos = {} } = {}) {
  const el = document.createElement(tag)
  if (clases.length) el.classList.add(...clases)
  if (texto) el.textContent = texto
  Object.entries(atributos).forEach(([key, value]) => el.setAttribute(key, value))
  return el
}

export function vaciarElemento(el) {
  while (el.firstChild) el.removeChild(el.firstChild)
}
