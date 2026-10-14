// Datos personales. Edita aquí y el sitio se actualiza solo.
// Los campos en null no se muestran.
export const profile = {
  name: 'Lorgio Choque',
  role: 'Estudiante de Ingeniería Informática',
  city: 'Santa Cruz de la Sierra, Bolivia',
  intro:
    'Soy estudiante de Ingeniería Informática y desarrollo software con React, Python y Kotlin. Estos son tres proyectos: una plataforma de emergencias médicas, una app de reportes urbanos y el sistema que hoy usa a diario un negocio real.',
  about: [
    'Estudio Ingeniería Informática en Santa Cruz de la Sierra. Me interesa el software que resuelve un problema concreto de personas concretas, y por eso mis proyectos parten de situaciones reales: emergencias, calles dañadas, un inventario que no cuadra.',
    'Trabajo sobre todo con React y TypeScript en el frontend, y con Python en el backend. También he desarrollado una app Android con Kotlin y Jetpack Compose.',
    'Busco prácticas o un primer empleo como desarrollador, y también tomo proyectos freelance.',
  ],
  skills: [
    { group: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite'] },
    { group: 'Móvil', items: ['Kotlin', 'Jetpack Compose'] },
    { group: 'Backend', items: ['Python', 'Django', 'FastAPI', 'REST', 'JWT'] },
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
