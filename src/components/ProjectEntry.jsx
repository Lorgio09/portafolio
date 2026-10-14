import Capture from './Capture'

function Block({ title, children }) {
  return (
    <section>
      <h4 className="font-display text-sm font-semibold">{title}</h4>
      <div className="mt-1.5 text-ink/75">{children}</div>
    </section>
  )
}

function Bullets({ items }) {
  return (
    <ul className="list-disc space-y-1 pl-5 marker:text-ink/40">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function ProjectEntry({ project: p, flip }) {
  const captures = p.captures ?? []
  const multiple = captures.length > 1
  const stack = p.stack.flatMap((s) => s.items)

  return (
    <article id={p.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {captures.length > 0 && (
        <div
          className={`rounded-3xl p-6 sm:p-10 border border-ink/20 bg-glass ${flip ? 'lg:order-2' : ''} ${
            multiple ? 'grid grid-cols-2 gap-4 sm:gap-6' : ''
          }`}
        >
          {captures.map((c) => (
            <Capture key={c.src} src={c.src} alt={c.alt} frame={p.frame} />
          ))}
        </div>
      )}

      <div>
        <p className="font-display text-sm font-medium text-river">{p.problemLine}</p>
        <h3 className="mt-2 text-3xl font-semibold leading-tight">{p.title}</h3>
        <p className="mt-4 max-w-[52ch] text-ink/75">{p.summary}</p>

        <p className="mt-6 text-sm text-ink/60">
          {p.type} · {p.status}
        </p>
        <p className="mt-1 max-w-[52ch] text-sm text-ink/60">{stack.join(' · ')}</p>

        {(p.links?.repo || p.links?.demo) && (
          <p className="mt-6 flex gap-5 font-display text-sm font-medium">
            {p.links.repo && (
              <a href={p.links.repo} target="_blank" rel="noreferrer" className="text-river hover:underline underline-offset-4">
                Repositorio ↗
              </a>
            )}
            {p.links.demo && (
              <a href={p.links.demo} target="_blank" rel="noreferrer" className="text-river hover:underline underline-offset-4">
                Demo ↗
              </a>
            )}
          </p>
        )}

        <details className="group mt-8 border-t border-ink/20 pt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between font-display text-sm font-medium [&::-webkit-details-marker]:hidden">
            Ver el caso completo
            <span aria-hidden="true" className="text-lg leading-none text-ink/60">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>

          <div className="mt-6 max-w-[60ch] space-y-6 text-[0.95rem]">
            <Block title="El problema">
              <p>{p.problem}</p>
            </Block>

            <Block title="La solución">
              <p>{p.solution}</p>
            </Block>

            {p.role && (
              <Block title="Mi rol">
                <p>{p.role}</p>
              </Block>
            )}

            {p.features && (
              <Block title={p.featuresTitle ?? 'Funciones'}>
                <Bullets items={p.features} />
              </Block>
            )}

            {p.learned && (
              <Block title="Qué aprendí">
                <Bullets items={p.learned} />
              </Block>
            )}

            {p.note && <p className="border-l-2 border-river pl-4 text-ink/75">{p.note}</p>}
          </div>
        </details>
      </div>
    </article>
  )
}
