# Eddy Castaño | Soundscapes (EPK Oficial)

Este repositorio contiene el código fuente para el **Electronic Press Kit (EPK)** y portafolio web del cantautor y músico colombiano-español Eddy Castaño.

## 🚀 Arquitectura Técnica
*   **Framework:** React 18
*   **Build Tool:** Vite
*   **Styling:** CSS3 (Vanilla) con metodologías de diseño modular.
*   **Integraciones:** 
    *   Reproductor Spotify Embed API.
    *   YouTube Iframe API.
    *   WhatsApp Click-to-Chat API para *Booking* directo.

## 🎨 Dirección de Arte: "Stage Lighting Luxury"
La web sigue una filosofía de diseño minimalista de alto contraste (Dark Mode) inyectada con sutiles destellos de luces de escenario (Magenta y Cyan) y un acento principal en **Ámbar/Madera** (`#E58E26`) que evoca la acústica del instrumento del artista y la energía de sus presentaciones en vivo.

### Conceptos Clave:
*   **Baja Entropía Visual:** Uso intensivo de *Glassmorphism* (desenfoques) para mantener la limpieza.
*   **Organicidad:** Textura de ruido (`noise-overlay`) aplicada de fondo para representar la crudeza del rock alternativo y el "polvo y ceniza" del arte visual del artista.

## 📦 Desarrollo Local
1.  Clonar el repositorio.
2.  Instalar dependencias: `npm install`
3.  Servidor de desarrollo local: `npm run dev`
    *(Nota en Linux: Si experimentas errores de `EMFILE`, asegúrate de incrementar `fs.inotify.max_user_watches` o usa `npm run build && npm run preview`)*
4.  Generar build de producción: `npm run build`

## 🔗 Enlaces Importantes
*   **Sitio de Producción:** [eddycamusic.netlify.app](https://eddycamusic.netlify.app)
*   **Instagram:** [@eddycamusic](https://www.instagram.com/eddycamusic/)
*   **Facebook:** [Eddy Castaño Music](https://www.facebook.com/eddycamusic/)
*   **YouTube:** [Canal Oficial](https://www.youtube.com/@EDDYMUSICA)
*   **Spotify:** [Eddy Castaño](https://open.spotify.com/artist/6c14Cph5lRro0lzSOiQGTS)
*   **SoundCloud:** [Eddy Castaño](https://soundcloud.com/eddycastano)
*   **Email Comercial:** eddycamusic1@gmail.com

## 🔮 Fase 2 (Próximas Mejoras / Backlog)
A la espera de retroalimentación por parte del artista, las siguientes integraciones están planificadas para aumentar la conversión B2B y el alcance:
1.  **Monetización Directa (La Gorra Digital):** Reemplazar el `alert()` actual con enlaces reales a PayPal.me / Bizum / Stripe para donaciones.
2.  **Dossier / Tech Rider:** Implementar un botón de descarga para un PDF con el *stage plot*, *input list* y requisitos técnicos para salas de conciertos.
3.  **Analíticas B2B:** Integrar Google Analytics o un píxel de rastreo ligero para conocer demografía de visitantes y evaluar la retención de promotores.
4.  **Fechas de Gira (Touring):** Crear un componente interactivo para listar próximos conciertos y venta de entradas.

---
*Diseñado, Desarrollado y Gestionado bajo el sello de Maison Quintessence.*
