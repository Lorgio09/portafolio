import { profile } from '../data/profile'
import { contactLinks, linkProps } from '../data/contactLinks'

export default function SobreMi() {
  const links = contactLinks()
  const experience = profile.experience ?? []

  return (
    <div className="caja pb-24 pt-16 sm:pt-28">
      <h1 id="titulo-sobre-mi" tabIndex={-1} className="text-4xl font-semibold leading-[1.1] focus:outline-none sm:text-6xl xl:text-7xl">
        Sobre mí
      </h1>

      <div className="mt-12 grid gap-14 lg:grid-cols-12">
        <div className="max-w-[62ch] space-y-5 text-lg text-ink/80 lg:col-span-7 xl:text-xl">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
          {profile.photo && (
            <img
              src={profile.photo.src}
              alt={profile.photo.alt}
              className="mb-10 aspect-4/5 w-full max-w-xs rounded-2xl border border-ink/20 object-cover"
            />
          )}
          <h2 className="font-display text-sm font-semibold">Con qué trabajo</h2>
          <dl className="mt-6 space-y-4 text-sm xl:text-base">
            {profile.skills.map((s) => (
              <div key={s.group}>
                <dt className="text-ink/60">{s.group}</dt>
                <dd className="mt-0.5">{s.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {experience.length > 0 && (
        <section className="mt-24">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Experiencia</h2>
          {/* Una fila por experiencia, como los asientos del libro de caja del inicio. */}
          <ul className="mt-10 divide-y divide-ink/20 border-y border-ink/20">
            {experience.map((e) => (
              <li key={`${e.company}-${e.period}`} className="grid gap-x-8 gap-y-2 px-3 py-8 md:grid-cols-12">
                <p className="text-sm text-ink/60 md:col-span-3 md:pt-1.5">{e.period}</p>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-medium leading-tight">
                    {e.role} en {e.company}
                  </h3>
                  {e.context && <p className="mt-1 text-sm text-ink/60">{e.context}</p>}
                  {e.points?.length > 0 && (
                    <ul className="mt-5 max-w-[62ch] list-disc space-y-1.5 pl-5 text-ink/80 marker:text-ink/40">
                      {e.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  )}
                  {e.stack?.length > 0 && <p className="mt-5 text-sm text-ink/60">{e.stack.join(', ')}</p>}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Si hay experiencia, su línea de cierre ya separa: el contacto no lleva otra. */}
      <section className={`mt-24 ${experience.length > 0 ? '' : 'border-t border-ink/20 pt-16'}`}>
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Escríbeme</h2>
        <p className="mt-4 max-w-[52ch] text-ink/75">Busco una oportunidad profesional.</p>
        {links.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <li key={l.key}>
                <a
                  {...linkProps(l)}
                  className="font-display text-lg font-medium underline decoration-ink/30 underline-offset-8 hover:text-river hover:decoration-river"
                >
                  {l.long}
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
