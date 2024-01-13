# Comentarios se crean con #
# 
# Qué es un shell?
# Interfaz para interactuar con el sistema operativo
#
# Commandos
# 
# cmd cd
# unix: cd
# windows: Set-Location
# Moverse entre carpetas
# 
# path
# Ruta del archivo
# ---
# cd / # acceder al directorio raíz
# cd ~ # acceder al directorio del usuario
# cd .. # moverse al directorio inmediatamente anterior de la estructura (Carpeta padre)
# cd - # volver al directorio anterior donde me encontraba
# cd folderName # Acceder a la carpeta folderName

# cmd ls
# unix: ls
# windoWS: Get-ChildItem
# Permite listar contenido de la carpeta actual o de la carpeta definid
# ---
# ls
# ls folderName # Acceder a carpeta folderName
# ---
# ls extra_lab_01/

# cmd cat
# unix: cat
# windows Get-Content
# Ver qué contiene un archivo
# cat path/fileNames

# Creación de Variables
# unix: nombre_de_variable=dato
# windows: $nombre_de_variable=dato
# ---
unset $ubicacion_actual
ubicacion_actual=$PWD
echo $ubicacion_actual
cd $ubicacion_actual

# cmd env
# ver variables del sistema operativo (variables del entorno)

# Comando echo
# Imprimir información en la consola
# echo "Hola"
# echo $nombre_de_variable
bienvenida="¡Hola!"
echo $bienvenida

# cmd clear
# unix: clear
# windows: Clear-Host
# Limpiar consola

# cmd mkdir
# unix: mkdir nombre_directorio
mkdir test

# cmd rm
# Eliminar directorio
rm -r test
# Eliminar archivo
touch test.txt
rm  test.txt

# cmd touch
# Crear archivo
# unix: touch nombre_archivo
# windows: New-Item nombre_archivo .ItemType File
touch archivo.txt
mv archivo.txt archivo1.txt
rm archivo1.txt

# cmd mv mover o renombrar archivos

# cmd open
# Permite abrir carpeta en gestor de archivos
# unix: open ruta_de_la_carpeta_o_archivo
# windows: Invoke-Item ruta_de_la_carpeta_o_archivo

cd $ubicacion_actual
echo $ubicacion_actual