# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-06-19

### Añadido (Added)
- **Arquitectura Base:** Migración completa de Vanilla HTML/JS/CSS a **React 18 + Vite** para escalabilidad y mantenibilidad.
- **Redes Sociales:** Integración de enlaces directos a Instagram, Facebook, SoundCloud y Correo Electrónico (`eddycamusic1@gmail.com`).
- **Reproductor Spotify:** Implementación del iframe oficial del perfil de Spotify (`ID: 6c14Cph5lRro0lzSOiQGTS`).
- **Sección Multimedia en Grid:** Dos reproductores de YouTube ("Me Tienes Mal" oficial y la versión Acústica en vivo) en una cuadrícula (grid) adaptativa (Side-by-side en Desktop).
- **Foto Oficial:** Foto de perfil extraída e inyectada en el directorio `/src/assets/eddy-profile.jpg` para renderización optimizada en la sección de biografía.

### Cambiado (Changed)
- **Estilos Globales (CSS):** Implementación de la paleta de colores "Stage Lighting Luxury" basada en el estudio visual oficial del artista (luces magenta/cyan sobre fondo negro profundo con acentos en madera/ámbar de guitarra).
- **Navbar:** Corregido el espaciado y aplicado el efecto *Glassmorphism* y fijación en el top (sticky header) que se había perdido durante la migración a React.
- **Botones Musicales:** Actualizados los enlaces directos a las plataformas (ahora apuntan a la URL real de Apple Music).

### Eliminado (Removed)
- **Archivos Legacy:** `legacy_html` contiene la vieja maquetación en crudo para fines de archivo.

---
*Este changelog es mantenido por Maison Quintessence.*
