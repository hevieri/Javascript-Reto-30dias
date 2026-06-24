export function formatearFecha(fecha = new Date()) {
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' }
  return fecha.toLocaleDateString('es-ES', opciones)
}

export function generarId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

export function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
