// Para añadir un proyecto, agrega un objeto a esta lista.
// Los campos que no existan (repo, demo, role...) simplemente no se muestran.
// Las capturas van en public/img/ y se referencian como '/img/nombre.png'.
// tone: color de la franja del proyecto ('ink', 'river' o 'glass').
// frame: marco de las capturas ('browser' o 'phone').
export const projects = [
  {
    id: 'alerta-medica',
    problemLine: 'Una ambulancia que llega tarde',
    title: 'Alerta Médica Bolivia',
    type: 'Aplicación web',
    tone: 'ink',
    frame: 'browser',
    status: 'MVP en desarrollo',
    summary:
      'Plataforma web para reportar y coordinar emergencias médicas, con ubicación GPS, fotos analizadas por inteligencia artificial y despacho de ambulancias.',
    problem:
      'En una emergencia médica cada minuto de coordinación cuenta. Reportar un accidente, ubicarlo y decidir qué ambulancia sale hacia allá suele depender de llamadas y mensajes sueltos.',
    solution:
      'Una plataforma donde cualquier persona puede reportar un accidente con su ubicación GPS, fotografías y datos de los afectados. La inteligencia artificial analiza las imágenes, genera una descripción del incidente y sugiere un nivel de prioridad. Los hospitales privados reciben las alertas, administran sus ambulancias y conductores, y despachan la unidad disponible sin asignar la misma dos veces.',
    role: null, // Escribe aquí qué hiciste tú en este proyecto.
    featuresTitle: 'Qué permite hacer',
    features: [
      'Registro e inicio de sesión de usuarios y operadores hospitalarios',
      'Reportes de emergencias con GPS, fotografías y descripción',
      'Análisis de imágenes y clasificación preliminar de gravedad con IA',
      'Visualización de emergencias en un mapa',
      'Gestión de ambulancias y conductores',
      'Despacho de unidades que evita asignaciones duplicadas',
      'Seguimiento del estado de cada reporte',
    ],
    stack: [
      { group: 'Interfaz', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'] },
      { group: 'Mapas', items: ['Leaflet', 'React Leaflet'] },
      { group: 'Visión artificial', items: ['TensorFlow.js', 'COCO-SSD', 'MobileNet'] },
    ],
    note:
      'Es un MVP: el repositorio documenta una integración con Google Cloud Vertex AI, pero no todas las funciones están terminadas.',
    learned: null,
    captures: [{ src: '/img/alerta-medica-mapa.png', alt: 'Primer paso del reporte: el mapa toma la ubicación GPS de la emergencia' }],
    links: { repo: 'https://github.com/CodeWithElias/hackathon-ai', demo: null },
  },
  {
    id: 'reportes-urbanos',
    problemLine: 'Un bache que nadie reporta',
    title: 'App de reportes urbanos',
    type: 'Full stack y aplicación móvil',
    tone: 'river',
    frame: 'phone',
    status: 'En desarrollo',
    summary:
      'App Android y API para que los ciudadanos de Santa Cruz de la Sierra registren y sigan problemas urbanos como baches y calles deterioradas.',
    problem:
      'Los baches y el deterioro de las calles necesitan una forma digital de reportarse y seguirse. Sin una herramienta centralizada, es difícil comunicar estas incidencias.',
    solution:
      'Una aplicación móvil con la que los ciudadanos de Santa Cruz de la Sierra registran sus reportes y los gestionan desde el celular, conectada a una API propia.',
    role:
      'Participé en el desarrollo de la app Android y en la construcción del backend. Implementé el registro y la autenticación de usuarios, y la comunicación entre el cliente móvil y la API.',
    features: null,
    stack: [
      { group: 'App móvil', items: ['Kotlin', 'Jetpack Compose'] },
      { group: 'Backend', items: ['Python', 'FastAPI', 'JWT'] },
      { group: 'Base de datos', items: ['PostgreSQL', 'SQLAlchemy', 'Alembic'] },
      { group: 'Infraestructura', items: ['Docker', 'Docker Compose'] },
    ],
    note: null,
    learned: [
      'Estructurar un backend por capas',
      'Implementar endpoints REST',
      'Conectar una app Android con una API',
      'Gestionar una base de datos relacional',
      'Autenticar con tokens y configurar servicios con Docker',
    ],
    captures: [
      { src: '/img/reportes-login.png', alt: 'Pantalla de inicio de sesión' },
      { src: '/img/reportes-nuevo.png', alt: 'Pantalla para elegir el tipo de reporte: bache, basura, luminaria y otros' },
    ],
    links: { repo: null, demo: null }, // Agrega el enlace al repositorio de GitHub.
  },
  {
    id: 'pirai-store',
    problemLine: 'Un stock que no cuadra',
    title: 'Piraí Store',
    type: 'Sistema de gestión en producción',
    tone: 'glass',
    frame: 'browser',
    status: 'En uso diario',
    summary:
      'Sistema de gestión para un negocio real de envases de vidrio: ventas, compras, inventario, caja de los socios y costos reales.',
    problem:
      'Un negocio de envases de vidrio con dos socios llevaba inventario, ventas y caja en Excel. Había errores de stock, no se conocía la ganancia real y no había control del dinero de cada socio.',
    solution:
      'Un sistema web, instalable en el celular, que reemplaza las hojas de cálculo. Hoy se usa a diario en producción.',
    role:
      'Fui el único desarrollador, con apoyo de IA (Claude Code). Levanté los requisitos con el negocio, diseñé la base de datos, desarrollé, probé y desplegué en producción.',
    featuresTitle: 'Qué hace',
    features: [
      'Operación diaria: ventas, compras, inventario con conteos, y caja con aportes y retiros de cada socio.',
      'Costos reales: costo por lotes (PEPS) y pedidos de importación pagados en US$ y Bs, con el costo repartido exacto al centavo.',
      'Control: reportes mensuales en Excel, respaldo restaurable, y ventas que se anulan sin borrarse (queda quién, cuándo y por qué).',
    ],
    stack: [
      { group: 'Backend', items: ['Python', 'Django'] },
      { group: 'Base de datos', items: ['PostgreSQL (Neon)'] },
      { group: 'Interfaz', items: ['JavaScript', 'Tailwind CSS', 'Chart.js', 'PWA instalable'] },
      { group: 'Despliegue', items: ['Render'] },
    ],
    note: null,
    learned: [
      'Diseñar escuchando al usuario: muchas funciones cambiaron al ver cómo trabaja el negocio de verdad.',
      'Manejar dinero sin errores: usar decimales y redondear una sola vez.',
      'Verificar las pruebas: escribí 316 pruebas automáticas y metí errores a propósito para comprobar que las pruebas los detectaran.',
      'Desplegar con seguridad: migraciones que solo agregan y respaldo antes de cada cambio.',
    ],
    captures: [{ src: '/img/pirai-inicio.png', alt: 'Pantalla de inicio: ingresos de la semana y stock actual' }],
    links: { repo: null, demo: null }, // Agrega el enlace al repositorio limpio de GitHub.
  },
]
