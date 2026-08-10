import os
import glob

music_dir = "/home/sidzcool/GeminiSolutions/01_Proyectos_Activos/Eddy_Soundscapes/canciones_antiguas"
txt_files = glob.glob(os.path.join(music_dir, "*.txt"))

html_content = """<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Archivo de Letras - Eddy Castaño</title>
    <style>
        :root {
            --bg-color: #0d0d0d;
            --text-primary: #f0f0f0;
            --text-secondary: #a0a0a0;
            --accent: #E58E26;
            --border: rgba(229, 142, 38, 0.2);
        }
        body {
            font-family: 'Inter', system-ui, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-primary);
            margin: 0;
            padding: 2rem;
            line-height: 1.6;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
        }
        header {
            text-align: center;
            margin-bottom: 4rem;
            border-bottom: 1px solid var(--border);
            padding-bottom: 2rem;
        }
        h1 {
            color: var(--accent);
            font-size: 2.5rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 2rem;
        }
        .song-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 1.5rem;
            transition: transform 0.3s ease, border-color 0.3s ease;
            max-height: 400px;
            overflow-y: auto;
        }
        .song-card:hover {
            transform: translateY(-5px);
            border-color: var(--accent);
            background: rgba(255, 255, 255, 0.05);
        }
        .song-title {
            color: var(--accent);
            font-size: 1.2rem;
            margin-top: 0;
            margin-bottom: 1rem;
            border-bottom: 1px dashed var(--border);
            padding-bottom: 0.5rem;
            position: sticky;
            top: 0;
            background: var(--bg-color);
        }
        .lyrics {
            white-space: pre-wrap;
            color: var(--text-secondary);
            font-size: 0.95rem;
        }
        /* Custom scrollbar for song cards */
        .song-card::-webkit-scrollbar {
            width: 8px;
        }
        .song-card::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.2); 
            border-radius: 4px;
        }
        .song-card::-webkit-scrollbar-thumb {
            background: var(--accent); 
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Archivo de Letras</h1>
            <p>Maquetas y Canciones Antiguas - Eddy Castaño</p>
        </header>
        <div class="grid">
"""

for txt_path in sorted(txt_files):
    filename = os.path.basename(txt_path).replace(".mp3.txt", "").replace(".MP3.txt", "")
    with open(txt_path, "r", encoding="utf-8") as f:
        lyrics = f.read().strip()
    
    if not lyrics:
        lyrics = "*(Audio instrumental o sin letra reconocible)*"
        
    html_content += f"""
            <div class="song-card">
                <h3 class="song-title">🎵 {filename}</h3>
                <div class="lyrics">{lyrics}</div>
            </div>
    """

html_content += """
        </div>
    </div>
</body>
</html>
"""

out_html = os.path.join(music_dir, "visor_letras.html")
with open(out_html, "w", encoding="utf-8") as out_file:
    out_file.write(html_content)

print(f"HTML generado en: {out_html}")
