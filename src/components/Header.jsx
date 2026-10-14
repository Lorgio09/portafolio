import { profile } from '../data/profile'

const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  return (
    <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-5 py-6 sm:px-8">
      <a href="#inicio" className="font-display text-lg font-bold tracking-tight">
        {profile.name}
      </a>
      <nav aria-label="Principal">
        <ul className="flex gap-6 font-display text-base font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="underline-offset-4 hover:text-river hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
