import { useState } from 'react'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

// Portada como libro de caja: un asiento por proyecto con su problema, su nombre y su estado.
export default function Hero({ onFocus }) {
  // La cascada se reproduce una sola vez: al terminar se quita la clase,
  // así no se repite cuando la vista vuelve a mostrarse.
  const [cascada, setCascada] = useState(true)

  return (
    <section className="caja flex min-h-[85svh] flex-col justify-end pb-16 pt-10">
      <h1 id="titulo-proyectos" tabIndex={-1} className="max-w-3xl text-4xl font-semibold leading-[1.1] focus:outline-none sm:text-6xl">
        Hago software para problemas reales de Bolivia.
      </h1>
      <p className="mt-6 max-w-[56ch] text-lg text-ink/75">{profile.intro}</p>

      {/* Ancho limitado: en pantallas grandes el problema y el proyecto no quedan tan lejos. */}
      <div className="mt-16 max-w-5xl">
        <div className="hidden justify-between border-b border-ink/20 px-3 pb-2 text-xs text-ink/60 sm:flex">
          <span>Problema</span>
          <span>Proyecto y estado</span>
        </div>
        <ul className="divide-y divide-ink/20 border-b border-ink/20 max-sm:border-t">
          {projects.map((p, i) => (
            <li
              key={p.id}
              className={cascada ? 'aparecer' : undefined}
              style={cascada ? { animationDelay: `${0.25 + i * 0.14}s` } : undefined}
              onAnimationEnd={i === projects.length - 1 ? () => setCascada(false) : undefined}
            >
              <a
                href={`#${p.id}`}
                onMouseEnter={() => onFocus(p.id)}
                onMouseLeave={() => onFocus(null)}
                onFocus={() => onFocus(p.id)}
                onBlur={() => onFocus(null)}
                className="group block px-3 py-5 transition-colors hover:bg-ink/5 focus-visible:bg-ink/5 motion-reduce:transition-none"
              >
                <span className="flex flex-col gap-1 transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-focus-visible:translate-x-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <span className="font-display text-2xl font-medium leading-tight sm:text-3xl">{p.problemLine}</span>
                  <span className="shrink-0 text-sm sm:text-right">
                    <span className="text-river underline-offset-4 group-hover:underline group-focus-visible:underline">
                      {p.title}
                    </span>
                    <span className="text-ink/60"> · {p.status}</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
