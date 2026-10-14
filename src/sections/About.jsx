import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="sobre-mi" className="border-t-2 border-ink bg-glass/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Sobre mí</h2>
          <div className="mt-5 max-w-[62ch] space-y-4">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <h3 className="font-display text-xl font-bold">Con qué trabajo</h3>
          <dl className="mt-4 space-y-4 font-display">
            {profile.skills.map((s) => (
              <div key={s.group}>
                <dt className="text-sm font-bold text-ink/60">{s.group}</dt>
                <dd>{s.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
