import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MapBackground from './components/MapBackground'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import SobreMi from './sections/SobreMi'

// "" y "#proyectos" abren Proyectos, "#sobre-mi" abre Sobre mí,
// y cualquier otro hash (el id de un proyecto) abre Proyectos en ese proyecto.
function leerHash() {
  const id = decodeURIComponent(window.location.hash.slice(1))
  if (id === 'sobre-mi') return { view: 'sobre-mi', target: null }
  if (id === '' || id === 'proyectos') return { view: 'proyectos', target: null }
  return { view: 'proyectos', target: id }
}

// Guarda la posición del mouse como variables CSS, sin re-renderizar.
// --mx/--my: píxeles dentro de la página (para la luz). --px/--py: de -1 a 1 en la pantalla (para la profundidad).
function trackPointer(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
  el.style.setProperty('--px', ((e.clientX / window.innerWidth) * 2 - 1).toFixed(3))
  el.style.setProperty('--py', ((e.clientY / window.innerHeight) * 2 - 1).toFixed(3))
}

export default function App() {
  // "n" cuenta los cambios de hash, para reaccionar aunque la vista no cambie.
  const [nav, setNav] = useState(() => ({ ...leerHash(), n: 0 }))
  const [focus, setFocus] = useState(null)
  const vistaAnterior = useRef(nav.view)

  useEffect(() => {
    const onHashChange = () => {
      setFocus(null)
      setNav((prev) => ({ ...leerHash(), n: prev.n + 1 }))
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const cambioDeVista = vistaAnterior.current !== nav.view
    vistaAnterior.current = nav.view

    if (nav.target) {
      const ir = () => document.getElementById(nav.target)?.scrollIntoView()
      ir()
      // Si la página aún carga, las capturas cambiarán su alto: se vuelve a apuntar al terminar.
      if (document.readyState === 'complete') return
      window.addEventListener('load', ir, { once: true })
      return () => window.removeEventListener('load', ir)
    }
    // Al cargar la página no se mueve el scroll ni el foco.
    if (nav.n === 0) return
    window.scrollTo({ top: 0, behavior: 'instant' })
    if (cambioDeVista) document.getElementById(`titulo-${nav.view}`)?.focus({ preventScroll: true })
  }, [nav])

  const enProyectos = nav.view === 'proyectos'

  return (
    <div className="relative isolate" onPointerMove={trackPointer}>
      <MapBackground focus={enProyectos ? focus : null} tenue={!enProyectos} />
      <Header view={nav.view} />
      <main>
        <div hidden={!enProyectos} className="vista">
          <Hero onFocus={setFocus} />
          <Projects />
        </div>
        <div hidden={enProyectos} className="vista">
          <SobreMi />
        </div>
      </main>
      <Footer />
    </div>
  )
}
