import os

file_path = '/home/sidzcool/GeminiSolutions/01_Proyectos_Activos/Eddy_Soundscapes/storyboard_nada_milena.html'
new_path = '/home/sidzcool/GeminiSolutions/01_Proyectos_Activos/Eddy_Soundscapes/Propuesta_para_Mila.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('Propuesta de Colaboración - Para Mila', 'Propuesta para Mila')
content = content.replace('<title>Storyboard - NADA (Eddy Castaño)</title>', '<title>Propuesta para Mila</title>')

with open(new_path, 'w', encoding='utf-8') as f:
    f.write(content)

os.remove(file_path)
print("Archivo actualizado y renombrado exitosamente.")
