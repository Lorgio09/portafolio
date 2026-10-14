import { useState } from 'react'

// Marco de navegador o de teléfono alrededor de la captura.
function Frame({ kind, children }) {
  if (kind === 'phone') {
    return (
      <div className="mx-auto w-full max-w-60 rounded-[1.75rem] border-[6px] border-paper bg-paper ring-1 ring-ink/20">
        <div className="mx-auto my-1.5 h-1.5 w-12 rounded-full bg-ink/25" />
        <div className="overflow-hidden rounded-b-[1.35rem] rounded-t-md">{children}</div>
      </div>
    )
  }

  if (kind === 'browser') {
    return (
      <div className="overflow-hidden rounded-md border border-ink/20 bg-white">
        <div className="flex items-center gap-1.5 border-b border-ink/20 bg-paper px-3 py-2" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-ink/25" />
          <span className="size-2.5 rounded-full bg-ink/25" />
          <span className="size-2.5 rounded-full bg-ink/25" />
        </div>
        {children}
      </div>
    )
  }

  return children
}

// Muestra la captura si el archivo existe en public/img/.
// Si todavía no la agregas, muestra un recuadro que dice cuál falta.
export default function Capture({ src, alt, frame }) {
  const [failed, setFailed] = useState(false)
  const shape = frame === 'phone' ? 'aspect-[9/19]' : 'aspect-video'

  return (
    <Frame kind={frame}>
      {failed ? (
        <div
          role="img"
          aria-label={`Captura pendiente: ${alt}`}
          className={`flex ${shape} items-center justify-center border-2 border-dashed border-ink/30 bg-paper p-4 text-center font-display text-sm text-ink/70 ${frame ? '' : 'rounded-sm'}`}
        >
          <span>
            Captura pendiente: {alt}
            <br />
            (guárdala como public{src})
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className={`block w-full bg-white ${frame === 'browser' ? 'max-h-[32rem] object-contain' : 'object-cover'} ${frame ? '' : 'rounded-sm border border-ink/20'}`}
        />
      )}
    </Frame>
  )
}
