const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

let diaActual = null
const COMPLETADOS_KEY = 'js30_completados'

function getCompletados() {
  try { return JSON.parse(localStorage.getItem(COMPLETADOS_KEY)) || [] } catch { return [] }
}

function toggleCompletado(num) {
  let c = getCompletados()
  c = c.includes(num) ? c.filter(x => x !== num) : [...c, num]
  localStorage.setItem(COMPLETADOS_KEY, JSON.stringify(c))
  renderSidebar()
  if (diaActual === num) renderLeccion(num)
}

function renderSidebar() {
  const lista = $('#diaLista')
  const completados = getCompletados()
  lista.innerHTML = LECCIONES.map(l => `
    <div class="dia-item ${diaActual === l.dia ? 'activo' : ''}" data-dia="${l.dia}" onclick="abrirDia(${l.dia})">
      <div class="dia-num">${l.dia}</div>
      <span>${l.titulo}</span>
      <div class="dia-check ${completados.includes(l.dia) ? 'completado' : ''}">${completados.includes(l.dia) ? '✓' : '○'}</div>
    </div>
  `).join('')
  const pct = Math.round((completados.length / LECCIONES.length) * 100)
  $('#llenado').style.width = pct + '%'
  $('#progresoTexto').textContent = `${completados.length} / ${LECCIONES.length} completados`
}

function abrirDia(num) {
  const leccion = LECCIONES.find(l => l.dia === num)
  if (!leccion) return
  diaActual = num
  renderSidebar()
  renderLeccion(num)
  // scroll al toque
  const main = $('#contenido')
  if (main) main.scrollTop = 0
  window.scrollTo(0, 0)
}

function renderLeccion(num) {
  const leccion = LECCIONES.find(l => l.dia === num)
  if (!leccion) return
  const completados = getCompletados()
  const hecho = completados.includes(num)

  let html = `
    <div style="display:flex;justify-content:space-between;align-items:start;flex-wrap:wrap">
      <div>
        <h2>Día ${leccion.dia}: ${leccion.titulo}</h2>
        <div class="subtitulo">${leccion.subtitulo || ''}</div>
      </div>
      <button onclick="toggleCompletado(${num})" style="
        background:${hecho ? '#2ecc71' : '#2a2a5e'};
        color:${hecho ? '#fff' : '#888'};
        border:1px solid ${hecho ? '#2ecc71' : '#3a3a7e'};
        padding:0.4rem 1rem;
        border-radius:2rem;
        cursor:pointer;
        font-size:0.85rem;
      ">${hecho ? '✓ Completado' : 'Marcar completo'}</button>
    </div>
  `

  for (const sec of leccion.contenido) {
    switch (sec.tipo) {
      case 'texto':
        html += `<p>${sec.v || ''}</p>`
        break
      case 'subtitulo':
        html += `<h3>${sec.v || ''}</h3>`
        break
      case 'codigo':
        html += `<pre><code>${escapeHtml(sec.v || '')}</code></pre>`
        break
      case 'lista':
        html += `<ul>${(sec.v || []).map(i => `<li>${i}</li>`).join('')}</ul>`
        break
      case 'destacado':
        html += `<div class="destacado">${sec.v || ''}</div>`
        break
      case 'ejercicio':
        html += `<div class="destacado" style="border-left-color:#2ecc71">
          <strong>✍️ Ejercicio:</strong> ${sec.v || ''}
        </div>`
        break
    }
  }

  html += `<div style="margin-top:2rem;padding-top:1rem;border-top:1px solid #2a2a5e;
    display:flex;justify-content:space-between">
    ${num > 1 ? `<button onclick="abrirDia(${num - 1})" style="background:#2a2a5e;color:#fff;border:none;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer">← Día ${num - 1}</button>` : '<div></div>'}
    ${num < LECCIONES.length ? `<button onclick="abrirDia(${num + 1})" style="background:#f7df1e;color:#1a1a3e;border:none;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;font-weight:bold">Día ${num + 1} →</button>` : ''}
  </div>`

  $('#contenido').innerHTML = html
}

function escapeHtml(str) {
  const d = document.createElement('div')
  d.textContent = str
  return d.innerHTML
}

// Scroll to top button
const st = $('#scrollTop')
window.addEventListener('scroll', () => st.classList.toggle('visible', window.scrollY > 300))
st.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }) })

// Init
renderSidebar()
