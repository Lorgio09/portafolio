import { profile } from '../data/profile'
import { projects } from '../data/projects'

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8 sm:pt-16">
      <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-7xl">
        Hago software para problemas reales de Bolivia.
      </h1>
      <p className="mt-6 max-w-[60ch] text-xl">{profile.intro}</p>

      <ul className="mt-14 border-b border-ink/25">
        {projects.map((p, i) => (
          <li
            key={p.id}
            className="aparecer border-t border-ink/25"
            style={{ animationDelay: `${0.25 + i * 0.14}s` }}
          >
            <a
              href={`#${p.id}`}
              className="group flex flex-col gap-1 py-5 transition-colors hover:bg-glass/60 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:px-3"
            >
              <span className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                {p.problemLine}
              </span>
              <span className="font-display text-base font-medium text-river group-hover:underline group-hover:underline-offset-4">
                {p.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
