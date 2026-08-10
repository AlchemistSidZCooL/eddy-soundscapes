# Changelog

All notable changes to this project will be documented in this file.

## [1.3.0] - 2026-08-09

### Añadido (Added)
- **Controles de Audio Interactivos:** Integrados botones funcionales (Play/Pausa y Sonido) en la barra de navegación para controlar la música de fondo.
- **Dashboard de Promoción (`copys_promocion_eddy.html`):** Panel HTML independiente con diseño premium *Glassmorphism* y grid 3x3. Segmentado en copys personalizados para Amigas, Parceros, Industria, Grupos Colombianos, Historias y Feed, con botones de copiar al portapapeles y links automáticos listos para compartir.

### Cambiado (Mejoras UI/UX)
- **Motor de Video Nativo:** Migración de `react-player` (que causaba conflictos con Vite/React 19) a una implementación nativa de la API Iframe de YouTube, garantizando estabilidad total.
- **Refinamiento Visual:** Reducción del padding global (de 8rem a 4rem) en las secciones principales de `index.css` para lograr un diseño más compacto, directo y "luxury".
- **Enlaces de Streaming:** Añadido el canal de YouTube de Eddy (@EDDYMUSICA) al bloque de links directos.

### Eliminado (Removed)
- **Limpieza de Layout:** Eliminadas las secciones temporales "Lives" y "Covers" en `App.jsx` para focalizar la experiencia web 100% en el lanzamiento actual ("Me Tienes Mal").

## [1.2.0] - 2026-08-06

### Añadido (Added)
- **Visualizador de Frecuencias Dinámico (`visor_onda.html`):** Desarrollo desde cero de una herramienta gráfica usando la Web Audio API que renderiza un oscilograma de cascada y horizontal panorámico, con soporte completo para analizar picos y rango dinámico (loudness).
- **Controles de Análisis:** Integración de "Zoom Vertical" (Amplitud de onda) y "Zoom Horizontal" (Resolución Temporal) combinados con "Auto-scroll inteligente" que rastrea el *playhead* en directo.
- **Mastering Console (Concept):** Creado borrador arquitectónico (`concepto_mastering_console.md`) para el desarrollo en futuras sesiones de un *glue compressor* y EQ web a medida estilo IK Multimedia Lurssen.
- **Inicialización de Proyecto Adjunto:** Creada estructura base y `README.md` en `/01_Proyectos_Activos/Edgar_Furgonetas_Seguridad/` para las nuevas vías de negocio logístico/seguridad.

## [1.1.1] - 2026-08-05

### Mantenimiento y Recuperación (Maintenance & Recovery)
- **Auditoría de Sistema:** Tras una caída inesperada del sistema, se revisaron los logs (`journalctl`) determinando un apagado/reinicio limpio (sin `kernel panics` ni sobrecalentamiento crítico).
- **Estabilización de Entorno:** Recuperación exitosa del espacio de trabajo del "Proyecto Eddy Soundscapes" y validación del `visor_letras.html` y script `generar_visor_letras.py` generados previamente con la IA.

## [1.1.0] - 2026-08-04

### Añadido (Added)
- **Nuevas Secciones (App.jsx):** Integración de los contenedores para "Eddy Lives" (directos) y "Eddy Covers" (versiones acústicas), a la espera de los videos oficiales.
- **Respaldo de Catálogo:** Migración de 34 maquetas y canciones inéditas desde disco externo a `/canciones_antiguas/`.
- **Inteligencia Artificial:** Transcripción completa de las 34 canciones utilizando el modelo Whisper y generación de un `visor_letras.html` estático para revisión.
- **Biografía Actualizada:** Redacción y corrección de la biografía oficial de 2026 (incluyendo estancia en Panamá, Bogotá, lanzamiento del videoclip de *Me Tienes Mal* en Valencia y traslado definitivo a España).

## [1.0.0] - 2026-06-19

### Añadido (Added)
- **Arquitectura Base:** Migración completa de Vanilla HTML/JS/CSS a **React 18 + Vite** para escalabilidad y mantenibilidad.
- **Redes Sociales:** Integración de enlaces directos a Instagram, Facebook, SoundCloud y Correo Electrónico (`eddycamusic1@gmail.com`).
- **Reproductor Spotify:** Implementación del iframe oficial del perfil de Spotify (`ID: 6c14Cph5lRro0lzSOiQGTS`).
- **Sección Multimedia en Grid:** Dos reproductores de YouTube ("Me Tienes Mal" oficial y la versión Acústica en vivo) en una cuadrícula (grid) adaptativa (Side-by-side en Desktop).
- **Foto Oficial:** Foto de perfil extraída e inyectada en el directorio `/src/assets/eddy-profile.jpg` para renderización optimizada en la sección de biografía.
- **SEO & Open Graph:** Inyección de metaetiquetas en `index.html` para previsualizaciones premium al compartir el enlace en WhatsApp/Redes Sociales.
- **Despliegue CI/CD:** Vinculación exitosa del repositorio GitHub (`AlchemistSidZCool/eddy-soundscapes`) con Netlify.

### Correcciones (Fixed)
- **UI Móvil (Hotfix):** 
  - Ajuste de la cuadrícula multimedia (`.music-grid`) para escalar correctamente en dispositivos < 400px de ancho.
  - Corrección de desbordamiento de fuentes en `h1` y títulos de sección en resoluciones móviles.
  - Ajuste de los botones del CTA (ancho 100% en el cuerpo, pero compacto en la barra de navegación para evitar superposiciones con el logotipo).

### Cambiado (Changed)
- **Estilos Globales (CSS):** Implementación de la paleta de colores "Stage Lighting Luxury" basada en el estudio visual oficial del artista (luces magenta/cyan sobre fondo negro profundo con acentos en madera/ámbar de guitarra).
- **Navbar:** Corregido el espaciado y aplicado el efecto *Glassmorphism* y fijación en el top (sticky header) que se había perdido durante la migración a React.
- **Botones Musicales:** Actualizados los enlaces directos a las plataformas (ahora apuntan a la URL real de Apple Music).

### Eliminado (Removed)
- **Archivos Legacy:** `legacy_html` contiene la vieja maquetación en crudo para fines de archivo.

---
*Este changelog es mantenido por Maison Quintessence.*
