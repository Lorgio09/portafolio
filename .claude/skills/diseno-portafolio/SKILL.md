---
description: Reglas de diseño del portafolio de Lorgio. Úsala siempre que se cambie el diseño, los estilos o se agregue una sección o un proyecto.
---

## Identidad
- El portafolio muestra software que resuelve problemas reales de Bolivia.
- Cada proyecto se presenta con: el problema, la solución, mi rol y lo que aprendí. A la vista solo van la línea del problema, el título, el resumen y la captura; el resto va en "Ver el caso completo".

## Estructura
- Una sola página con dos vistas: "Proyectos" (inicio) y "Sobre mí". Se cambia con un selector tipo píldora en el centro de la barra superior, con un fondo que se desliza a la opción activa.
- La vista se lee del hash: "" o "#proyectos" abre Proyectos, "#sobre-mi" abre Sobre mí, y el id de un proyecto abre Proyectos en ese proyecto. Sin React Router.
- Barra: a la izquierda nombre y rol; a la derecha GitHub, CV y correo si existen.
- "Sobre mí" lleva la presentación, las tecnologías, la sección "Experiencia" y el contacto ("Escríbeme"). La foto es opcional (profile.photo).
- "Experiencia" sale de profile.experience y ocupa todo el ancho de la caja: una fila por experiencia con el estilo del libro de caja (periodo en gris a la izquierda; cargo "en" empresa, contexto, puntos y tecnologías a la derecha). Si la lista está vacía, la sección no se muestra.
- El pie, en ambas vistas, lleva los enlaces y el crédito del mapa.
- Entre vistas solo hay un fundido corto de opacidad.

## Portada
- El mapa se monta una sola vez y persiste en ambas vistas. En "Sobre mí" el velo es más fuerte y el mapa queda en la vista base, en la plaza.
- Lleva el mapa real de Santa Cruz de la Sierra de fondo (Leaflet + teselas World Dark Gray de Esri, que no piden API key; las de CARTO sí la piden), oscuro y sutil, con el punto de la Plaza 24 de Septiembre.
- Los proyectos aparecen como un libro de caja: un asiento por proyecto con su problema, su nombre y su estado.
- El mapa vuela a otra zona al pasar por cada proyecto. Es solo un efecto: nunca presentar esas zonas como ubicaciones reales de los proyectos.
- El crédito "Mapa de Esri y colaboradores de OpenStreetMap" con sus enlaces es obligatorio.

## Diseño
- Tema oscuro verde bosque: fondo #09130F, texto #E6EEE8, acento #5ED3B5, paneles #13231D. Nunca negro puro con neón.
- Rojo #FF7152 solo para el punto de la plaza y el anillo de foco del teclado.
- Bordes y líneas finas, con el texto al 20-25 % de opacidad. Texto secundario pequeño con al menos 60 % de opacidad para que se lea.
- Estilo minimalista: mucho espacio, títulos en peso semibold (no extrabold), texto secundario en tono atenuado.
- Tipografías: Bricolage Grotesque para títulos, Geist para el texto. Nada de serif.
- Texto alineado a la izquierda, líneas de menos de 70 caracteres.

## Evitar
- Fondo negro con acento neón, degradados decorativos y tarjetas idénticas con sombra. Los únicos degradados son el velo del mapa y la luz que sigue al cursor.
- Etiquetas en mayúsculas sobre cada título y numeraciones que no son una secuencia.
- Animaciones en cada sección. Al cargar solo hay dos: el fundido del mapa y las filas del libro de caja en cascada, que se reproduce una sola vez por carga de página. El pulso de la plaza es el único movimiento continuo.
- Textos de relleno como "apasionado por la tecnología".
- Mencionar trabajo freelance: el mensaje es "Busco una oportunidad profesional".

## Contenido
- Nunca inventar datos ni resultados. Si falta información, dejar el campo en null.
- Lo mismo con la experiencia laboral: nada de cargos, cifras, resultados ni detalles que no haya dado Lorgio.
