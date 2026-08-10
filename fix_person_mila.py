import os

file_path = '/home/sidzcool/GeminiSolutions/01_Proyectos_Activos/Eddy_Soundscapes/Propuesta_para_Mila.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('Hola Mila, como te comentó Dani,', 'Hola Mila, como te comenté,')
content = content.replace('Dani se ofrece a desarrollarte', 'me ofrezco a desarrollarte')
content = content.replace('Portafolio de Dani (Para tu futura web)', 'Mi Portafolio (Para tu futura web)')
content = content.replace('Visitar (Desarrollada por Dani)', 'Visitar (Desarrollada por mí)')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Textos actualizados a primera persona exitosamente.")
