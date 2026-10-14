import { useState } from 'react'

// Muestra la captura si el archivo existe en public/img/.
// Si todavía no la agregas, muestra un recuadro que dice cuál falta.
export default function Capture({ src, alt }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={`Captura pendiente: ${alt}`}
        className="flex aspect-video items-center justify-center rounded-sm border-2 border-dashed border-ink/30 bg-glass/40 p-4 text-center font-display text-sm text-ink/70"
      >
        Captura pendiente: {alt}
        <br />
        (guárdala como public{src})
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="w-full rounded-sm border border-ink/15 bg-white object-cover"
    />
  )
}
