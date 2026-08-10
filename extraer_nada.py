import whisper

print("Cargando modelo Whisper...")
model = whisper.load_model("small")

print("Transcribiendo nada.mp3...")
result = model.transcribe("/home/sidzcool/GeminiSolutions/01_Proyectos_Activos/Eddy_Soundscapes/nada.mp3", language="es")
texto = result["text"].strip()

with open("/home/sidzcool/GeminiSolutions/01_Proyectos_Activos/Eddy_Soundscapes/nada_letras.txt", "w", encoding="utf-8") as f:
    f.write(texto)

print("¡Transcripción de Nada completada!")
