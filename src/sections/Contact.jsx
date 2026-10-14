import { profile } from '../data/profile'

export default function Contact() {
  const { github, linkedin, email, cv } = profile.links
  const link =
    'font-display text-2xl font-bold text-paper underline decoration-paper/40 underline-offset-8 hover:decoration-signal sm:text-3xl'

  return (
    <section id="contacto" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
          ¿Tienes un problema que resolver o una vacante abierta?
        </h2>
        <p className="mt-5 max-w-[56ch] text-xl text-paper/80">
          Busco prácticas o un primer empleo como desarrollador, y tomo proyectos freelance. Escríbeme.
        </p>

        <ul className="mt-10 flex flex-col items-start gap-4">
          {email && (
            <li>
              <a href={`mailto:${email}`} className={link}>
                {email}
              </a>
            </li>
          )}
          {github && (
            <li>
              <a href={github} target="_blank" rel="noreferrer" className={link}>
                GitHub
              </a>
            </li>
          )}
          {linkedin && (
            <li>
              <a href={linkedin} target="_blank" rel="noreferrer" className={link}>
                LinkedIn
              </a>
            </li>
          )}
          {cv && (
            <li>
              <a href={cv} download className={link}>
                Descargar CV
              </a>
            </li>
          )}
        </ul>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-8 font-display text-sm text-paper/60 sm:px-8">
        {profile.name}, {profile.city}
      </p>
    </section>
  )
}
