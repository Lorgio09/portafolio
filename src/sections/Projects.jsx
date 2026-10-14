import ProjectEntry from '../components/ProjectEntry'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
      <h2 className="text-3xl font-extrabold sm:text-4xl">Proyectos</h2>
      <p className="mt-2 max-w-[60ch]">
        Cada proyecto parte de un problema que alguien tiene hoy. Aquí cuento qué problema era, qué construí y qué
        aprendí.
      </p>
      <div className="mt-8">
        {projects.map((p) => (
          <ProjectEntry key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
