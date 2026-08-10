import os
import base64
import re

html_path = '/home/sidzcool/GeminiSolutions/01_Proyectos_Activos/Eddy_Soundscapes/storyboard_nada.html'
out_path = '/home/sidzcool/GeminiSolutions/01_Proyectos_Activos/Eddy_Soundscapes/storyboard_nada_milena.html'

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Spotify link with lyrics
spotify_html = '<li>🎵 <strong>Canción NADA (Spotify):</strong> <a target="_blank" href="https://open.spotify.com/track/23USVF2vkNhsk7mfwjnJr4?si=c1fc28fe61d940b1" style="color: var(--accent-color); text-decoration: none;">Escuchar aquí</a></li>'
lyrics_html = '''<li>🎵 <strong>Canción NADA (Próximo Lanzamiento):</strong> Como el tema aún no está publicado en plataformas, te adelantamos la letra que vertebra la historia visual:
    <div style="background: rgba(0,0,0,0.3); padding: 15px; border-left: 3px solid var(--secondary-color); margin-top: 10px; font-style: italic; color: #fff; line-height: 1.8;">
        "La vida me empuja, sin preguntar.<br>
        Dejé mis zapatos, en otro lugar.<br>
        Hablé con el viento, me dijo que no.<br>
        El mundo me mira, pero yo no estoy.<br>
        Dibujé mi sombra, y hasta ella huyó.<br>
        Cambié de camino, cambié de canción...<br>
        Pero en cada nota escucho adiós.<br>
        No sé dónde estarás... Sin ti no queda na, nada.<br>
        No queda nada... Sin ti no queda nada."
    </div>
</li>'''
content = content.replace(spotify_html, lyrics_html)

# Embed images as base64
def replacer(match):
    img_path = os.path.join('/home/sidzcool/GeminiSolutions/01_Proyectos_Activos/Eddy_Soundscapes', match.group(1))
    if os.path.exists(img_path):
        with open(img_path, 'rb') as img_f:
            b64_data = base64.b64encode(img_f.read()).decode('utf-8')
        return f'src="data:image/png;base64,{b64_data}"'
    return match.group(0)

content = re.sub(r'src="(assets/[^"]+)"', replacer, content)

with open(out_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Archivo generado: {out_path}")
