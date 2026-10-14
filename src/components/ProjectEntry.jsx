import Capture from './Capture'

function Block({ title, children }) {
  return (
    <section className="mt-9 first:mt-0">
      <h4 className="font-display text-lg font-bold">{title}</h4>
      <div className="mt-2 max-w-[68ch]">{children}</div>
    </section>
  )
}

function Bullets({ items }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 marker:text-river">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function ProjectEntry({ project: p }) {
  const captures = p.captures ?? []
  const multiple = captures.length > 1

  return (
    <article id={p.id} className="border-t-2 border-ink py-14">
      <header className="max-w-3xl">
        <p className="font-display text-base font-medium text-river">{p.problemLine}</p>
        <h3 className="mt-1 text-4xl font-extrabold leading-tight sm:text-5xl">{p.title}</h3>
        <p className="mt-4 text-xl">{p.summary}</p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <dl className="space-y-6 font-display">
            <div>
              <dt className="text-sm font-bold">Tipo</dt>
              <dd className="mt-0.5">{p.type}</dd>
            </div>
            <div>
              <dt className="text-sm font-bold">Estado</dt>
              <dd className="mt-0.5">{p.status}</dd>
            </div>
            <div>
              <dt className="text-sm font-bold">Tecnologías</dt>
              <dd className="mt-1 space-y-1.5">
                {p.stack.map((s) => (
                  <p key={s.group} className="leading-snug">
                    <span className="text-ink/60">{s.group}: </span>
                    {s.items.join(', ')}
                  </p>
                ))}
              </dd>
            </div>
            {(p.links?.repo || p.links?.demo) && (
              <div>
                <dt className="text-sm font-bold">Enlaces</dt>
                <dd className="mt-1 flex flex-col items-start gap-1">
                  {p.links.repo && (
                    <a
                      href={p.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-river underline underline-offset-4 hover:text-signal"
                    >
                      Ver el repositorio en GitHub
                    </a>
                  )}
                  {p.links.demo && (
                    <a
                      href={p.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-river underline underline-offset-4 hover:text-signal"
                    >
                      Abrir la demo
                    </a>
                  )}
                </dd>
              </div>
            )}
          </dl>
        </aside>

        <div className="lg:col-span-8">
          {captures.length > 0 && (
            <div className={`mb-10 grid gap-4 ${multiple ? 'sm:grid-cols-3' : ''}`}>
              {captures.map((c) => (
                <Capture key={c.src} src={c.src} alt={c.alt} />
              ))}
            </div>
          )}

          <Block title="El problema">
            <p>{p.problem}</p>
          </Block>

          <Block title="La solución">
            <p>{p.solution}</p>
          </Block>

          {p.features && (
            <Block title={p.featuresTitle ?? 'Funciones'}>
              <Bullets items={p.features} />
            </Block>
          )}

          {p.role && (
            <Block title="Mi rol">
              <p>{p.role}</p>
            </Block>
          )}

          {p.learned && (
            <Block title="Qué aprendí">
              <Bullets items={p.learned} />
            </Block>
          )}

          {p.note && (
            <p className="mt-9 max-w-[68ch] border-l-4 border-signal pl-4 italic">{p.note}</p>
          )}
        </div>
      </div>
    </article>
  )
}
