// Datos personales. Edita aquí y el sitio se actualiza solo.
// Los campos en null no se muestran.
export const profile = {
  name: 'Lorgio Choque',
  role: 'Estudiante de Ingeniería Informática',
  city: 'Santa Cruz de la Sierra, Bolivia',
  intro:
    'Soy estudiante de Ingeniería Informática y desarrollo software con React, Python y Kotlin. Estos son tres proyectos: una plataforma de emergencias médicas, una app de reportes urbanos y el sistema que hoy usa a diario un negocio real.',
  about: [
    'Soy Lorgio, estudiante de Ingeniería Informática en la UAGRM, en Santa Cruz de la Sierra. Mi interés por la tecnología empezó de muy chico, por curiosidad: quería entender cómo funcionan los sistemas.',
    'Casi todo lo que sé lo aprendí por mi cuenta, probando herramientas nuevas y construyendo cosas: aplicaciones, un sistema que hoy usa un negocio real y proyectos para hackathons. En 2026 hice una pasantía como desarrollador Python en Appex, donde trabajé con Odoo.',
    'Fuera de la pantalla juego fútbol, hago CrossFit y salgo a correr. También me gusta viajar para conocer ciudades y culturas distintas. Esa misma energía es la que llevo a mi trabajo.',
    'Hoy busco una oportunidad profesional en un equipo dinámico, donde pueda aportar lo que he aprendido, seguir desafiándome y crear soluciones reales.',
  ],
  // Experiencia laboral. Los campos opcionales (context, points, stack) pueden faltar.
  experience: [
    {
      company: 'Appex',
      context: 'Pasantía en una empresa que trabaja con Odoo',
      role: 'Desarrollador Python',
      period: 'Agosto a octubre de 2026',
      points: [
        'Migré módulos de Odoo de la versión 17 a la 19.',
        'Documenté módulos desarrollados.',
        'Integré APIs externas de cobro con QR de BCP y Banco Ganadero.',
      ],
      stack: ['Odoo 17', 'Odoo 19', 'Python', 'XML', 'JavaScript'],
    },
  ],
  photo: null, // Ejemplo: { src: '/img/lorgio.jpg', alt: 'Lorgio Choque' } (coloca la foto en public/img)
  skills: [
    { group: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite'] },
    { group: 'Móvil', items: ['Kotlin', 'Jetpack Compose'] },
    { group: 'Backend', items: ['Python', 'Django', 'FastAPI', 'REST', 'JWT'] },
    { group: 'ERP', items: ['Odoo 17', 'Odoo 19', 'XML'] },
    { group: 'Datos e infraestructura', items: ['PostgreSQL', 'SQLAlchemy', 'Alembic', 'Docker', 'Render'] },
    { group: 'Herramientas', items: ['Git y GitHub', 'Claude Code'] },
  ],
  links: {
    github: 'https://github.com/Lorgio09',
    linkedin: null, // Ejemplo: 'https://www.linkedin.com/in/tu-usuario'
    email: null, // Ejemplo: 'tu@correo.com'
    cv: null, // Ejemplo: '/cv-lorgio-choque.pdf' (coloca el PDF en la carpeta public)
  },
}
