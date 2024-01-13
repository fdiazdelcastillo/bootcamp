# Los comentarios se realizan anteponiendo el símbolo #

# Almacenar variables
# unix: nombre_de_variable = dato
# windows: $nombre_de_variable = dato
saludo="Hola"
nombre="Fernando"
mensaje="El directorio actual es:"
carpeta_actual=$PWD

# Cmd 
# unix: echo
# windows:  (Write-Output)
# Imprimir en la consola

# Comando cd
# Nos permite movernos enre las estructura del árbol del directorio
# Ejemplo echo $PWD -> Print working directory
echo "cmd echo "
echo "Impresión de ruta ..."
echo $PWD

# devolverse al directorio anterior
# cd ..
echo "Impresión de variables ..." 
echo $saludo $nombre
echo $mensaje $carpeta_actual
echo "Cambio de directorio ..."
cd ..
cd $carpeta_actual
cd ~
cd /

# Creación de directorio
# mkdir nombre-del-directorio
echo "Creación de directorio ..."
mkdir prueba

# cmd touch
# Crea archivo
# touch nombre-de-archivo
echo "Creación de archivo    "
touch archivo_de_prueba

# cmd mv
# Nos permite mover o renombrar archivos o carpeta
# mv nombre_de_archivo_actual nombre_de_archivo_nuevo
# mv nombre_de_directorio_actual nombre_de_directorio_nuevo

# Eliminar
# cmd rm
# Elimina directorios o archivos
# Archivo
# rm nombre_del_archivo
echo "Borrado de archivo ..."
mv archivo_de_prueba archivo_renombrado
rm archivo_renombrado
# Directorio
# rm -r nombre_del_directorio
echo "Eliminado de directorio ..."
rm -r prueba

# cmd 
# unix: clear
# windows: Clear-Host
# limpia la consola
# clear

# Nombre del usuario con el que se están ejecutando los comandos
# whoami
echo "Mostrando el nombre del usuario ..."
whoami

# cmd read
# Solicitar un dato al usuario
# read nombre_de_la_variable a almacenar el dato

# cmd cat
# Ver el contenido de un archivo
# cat nombre_de_archivo

# cmd
# ls
# Listar archivos del directorio actual
# ls
# ls -l
# ls -a