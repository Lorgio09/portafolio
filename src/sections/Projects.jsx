import ProjectEntry from '../components/ProjectEntry'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="caja py-24">
      <h2 className="text-2xl font-semibold">Proyectos</h2>
      <p className="mt-2 max-w-[56ch] text-ink/65">
        Cada proyecto parte de un problema que alguien tiene hoy.
      </p>
      <div className="mt-16 space-y-28">
        {projects.map((p, i) => (
          <ProjectEntry key={p.id} project={p} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
