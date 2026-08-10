import os
import glob
import whisper
import warnings

warnings.filterwarnings("ignore")

music_dir = "/home/sidzcool/GeminiSolutions/01_Proyectos_Activos/Eddy_Soundscapes/canciones_antiguas"
files = glob.glob(os.path.join(music_dir, "*.mp3")) + glob.glob(os.path.join(music_dir, "*.MP3"))

print(f"Encontrados {len(files)} archivos musicales. Cargando modelo Whisper...")
# Usamos un modelo 'small' o 'base' para mayor rapidez, pero 'medium' es mejor para música si hay memoria
model = whisper.load_model("small")

with open(os.path.join(music_dir, "letras_transcritas.md"), "w", encoding="utf-8") as out_file:
    out_file.write("# Letras de Canciones Antiguas (Transcripción Automática)\n\n")
    out_file.write("*Nota: La IA transcribe voz. La presencia de instrumentos puede afectar la exactitud.*\n\n")
    
    for i, file_path in enumerate(files):
        filename = os.path.basename(file_path)
        print(f"[{i+1}/{len(files)}] Transcribiendo: {filename}...")
        
        try:
            result = model.transcribe(file_path, language="es")
            texto = result["text"].strip()
            
            # Guardar en archivo individual
            txt_path = file_path + ".txt"
            with open(txt_path, "w", encoding="utf-8") as txt_file:
                txt_file.write(texto)
                
            # Añadir al documento consolidado
            out_file.write(f"## 🎵 {filename}\n")
            out_file.write(f"{texto}\n\n---\n\n")
            
        except Exception as e:
            print(f"Error con {filename}: {e}")
            out_file.write(f"## 🎵 {filename}\n*Error al transcribir: {e}*\n\n---\n\n")

print("¡Proceso completado! Las letras están en letras_transcritas.md")
