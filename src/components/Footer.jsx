import { contactLinks, linkProps } from '../data/contactLinks'

const credit = 'underline underline-offset-2 hover:text-ink'

export default function Footer() {
  const links = contactLinks().filter((l) => l.key !== 'cv')

  return (
    <footer className="caja">
      <div className="flex flex-wrap justify-between gap-x-8 gap-y-2 border-t border-ink/20 py-8 text-xs text-ink/60">
        {links.length > 0 && (
          <ul className="flex gap-5">
            {links.map((l) => (
              <li key={l.key}>
                <a {...linkProps(l)} className="hover:text-ink">
                  {l.short}
                </a>
              </li>
            ))}
          </ul>
        )}
        <p>
          Mapa de{' '}
          <a href="https://www.esri.com" target="_blank" rel="noreferrer" className={credit}>
            Esri
          </a>{' '}
          y colaboradores de{' '}
          <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer" className={credit}>
            OpenStreetMap
          </a>
        </p>
      </div>
    </footer>
  )
}
