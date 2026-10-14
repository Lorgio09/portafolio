import { profile } from './profile'

// Enlaces de contacto de profile.js, sin los que están en null.
// "short" es la etiqueta corta (barra y pie); "long" la del bloque de contacto.
export function contactLinks() {
  const { github, linkedin, email, cv } = profile.links
  return [
    email && { key: 'email', href: `mailto:${email}`, short: 'Correo', long: email },
    github && { key: 'github', href: github, short: 'GitHub', long: 'GitHub', external: true },
    linkedin && { key: 'linkedin', href: linkedin, short: 'LinkedIn', long: 'LinkedIn', external: true },
    cv && { key: 'cv', href: cv, short: 'CV', long: 'Descargar CV', download: true },
  ].filter(Boolean)
}

export function linkProps(l) {
  if (l.external) return { href: l.href, target: '_blank', rel: 'noreferrer' }
  if (l.download) return { href: l.href, download: true }
  return { href: l.href }
}
