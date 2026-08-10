# Concepto: "Eddy Mastering Console" (Web Audio API)

## Visión General
Desarrollar una consola de masterización por software personalizada (inspirada en herramientas como *Lurssen Mastering Console*). El objetivo inicial es integrarla directamente en el ecosistema web utilizando HTML/JS puro y la **Web Audio API**.

## Posibles Fases de Desarrollo

### 1. Integración en Navegador (Web App)
- **Base Actual:** Partir del `visor_onda.html` (que ya procesa la onda, aplica zoom temporal y de amplitud).
- **Módulos a Desarrollar:**
  - **Ecualizador Paramétrico (EQ):** Control de frecuencias graves (Punch), medias (Voz/Presencia) y agudas (Brillo/Aire) usando `BiquadFilterNode`.
  - **Waveshaper (Saturación/Tubo):** Crear una curva matemática de distorsión armónica suave para aportar calidez analógica (estilo *Input Drive* o *Push*).
  - **Limitador Brickwall:** Usar un `DynamicsCompressorNode` con ratio infinito y ataque rápido para conseguir volumen comercial (Loudness) sin que la onda rompa (clipping).
- **UI/UX:** Interfaz *Glassmorphism* o Cyberpunk con *Knobs* giratorios y *VU Meters* reaccionando en tiempo real al volumen RMS.

### 2. Automatización Batch (Python)
- **Alternativa Off-line:** Script en Python usando `librosa` y `pyloudnorm` para procesar carpetas enteras de maquetas.
- **Función:** Analizar los LUFS de múltiples pistas, aplicar ecualización estática y normalizarlas a `-14 LUFS` (estándar de Spotify) para escuchas consistentes en el coche o dispositivo móvil.

### 3. Desarrollo de Plugin Nativo (Futuro)
- En caso de querer integrar este efecto directamente en un DAW (Ableton, FL Studio), migrar la lógica DSP (Procesamiento de Señal Digital) a **C++ utilizando el framework JUCE** para compilar un archivo `.vst3` o `.au`.

## Siguientes Pasos (Próxima Sesión)
- Añadir controles de Ganancia (Gain) y un ecualizador de 3 bandas simple al `visor_onda.html` para testear cómo la Web Audio API colorea el sonido en tiempo real.
