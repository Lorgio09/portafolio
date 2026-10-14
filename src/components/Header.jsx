import { profile } from '../data/profile'
import { contactLinks, linkProps } from '../data/contactLinks'

const views = [
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'sobre-mi', label: 'Sobre mí' },
]

// Si ya estás en esa dirección no hay hashchange: vuelve al inicio a mano.
function alInicioSiEsLaMisma(e) {
  if (window.location.hash === e.currentTarget.getAttribute('href')) window.scrollTo({ top: 0 })
}

export default function Header({ view }) {
  const activo = views.findIndex((v) => v.id === view)
  const quick = contactLinks().filter((l) => l.key !== 'linkedin')

  return (
    <header className="caja flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-6 sm:grid sm:grid-cols-[1fr_auto_1fr]">
      <a href="#proyectos" onClick={alInicioSiEsLaMisma} className="leading-tight">
        <span className="block font-display font-semibold tracking-tight">{profile.name}</span>
        <span className="block text-xs text-ink/60">{profile.role}</span>
      </a>

      <nav aria-label="Vistas" className="relative order-3 w-full rounded-full border border-ink/20 p-1 sm:order-none sm:w-auto">
        <span
          aria-hidden="true"
          className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-ink/10 transition-transform duration-300 motion-reduce:transition-none"
          style={{ transform: `translateX(${Math.max(activo, 0) * 100}%)` }}
        />
        <ul className="relative grid grid-cols-2 text-sm">
          {views.map((v) => (
            <li key={v.id} className="relative">
              <a
                href={`#${v.id}`}
                onClick={alInicioSiEsLaMisma}
                aria-current={view === v.id ? 'page' : undefined}
                className={`block rounded-full px-4 py-1.5 text-center transition-colors motion-reduce:transition-none ${
                  view === v.id ? 'text-ink' : 'text-ink/60 hover:text-ink'
                }`}
              >
                {v.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {quick.length > 0 && (
        <ul className="order-2 flex gap-5 text-sm text-ink/70 sm:order-none sm:justify-self-end">
          {quick.map((l) => (
            <li key={l.key}>
              <a {...linkProps(l)} className="hover:text-ink">
                {l.short}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
