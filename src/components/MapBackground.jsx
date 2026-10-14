import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const PLAZA = [-17.7833, -63.1822]

// Vistas a las que vuela el mapa al pasar por cada proyecto.
// Es solo un efecto de interacción: NO son las ubicaciones reales de los proyectos.
const VISTAS = {
  base: { centro: PLAZA, zoom: 13 },
  'alerta-medica': { centro: [-17.7705, -63.1655], zoom: 14 },
  'reportes-urbanos': { centro: [-17.7955, -63.2025], zoom: 14 },
  'pirai-store': { centro: [-17.7695, -63.2015], zoom: 14 },
}

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function MapBackground({ focus, tenue }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    const map = L.map(containerRef.current, {
      zoomControl: false,
      attributionControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      touchZoom: false,
    }).setView(VISTAS.base.centro, VISTAS.base.zoom)

    // Teselas oscuras de Esri: no piden API key (las de CARTO sí).
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      maxNativeZoom: 16,
      detectRetina: true,
    }).addTo(map)

    L.marker(PLAZA, {
      interactive: false,
      keyboard: false,
      icon: L.divIcon({
        className: 'plaza',
        iconSize: [10, 10],
        iconAnchor: [5, 5],
        html: '<span class="plaza-punto"></span><span class="plaza-nombre">Plaza 24 de Septiembre</span>',
      }),
    }).addTo(map)

    mapRef.current = map
    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    const vista = VISTAS[focus] ?? VISTAS.base
    if (reducedMotion()) {
      map.setView(vista.centro, vista.zoom, { animate: false })
    } else {
      map.flyTo(vista.centro, vista.zoom, { duration: 1.8, easeLinearity: 0.2 })
    }
  }, [focus])

  return (
    <div
      aria-hidden="true"
      className={`mapa-fondo pointer-events-none absolute inset-x-0 top-0 -z-10 h-[max(115svh,44rem)] overflow-hidden ${
        tenue ? 'mapa-tenue' : ''
      }`}
    >
      <div ref={containerRef} className="mapa-capa absolute inset-0 z-0" />
      {/* Velos: la intensidad se ajusta con las variables --mapa-* de index.css. */}
      <div className="mapa-velo absolute inset-0" />
      <div className="mapa-velo-texto absolute inset-0" />
      <div className="mapa-luz absolute inset-0" />
    </div>
  )
}
