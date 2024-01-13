# 1. Crear variable 'bienvenida' con la siguiente cadena de texto "⚡️ Comienzo de ejercicio"
# 2. Imprimir la variable 'bienvenida'
# 3. Dirigirse al directorio del usuario con el cual se están ejecutando los comandos
# 4. Crear un archivo con nombre 'archivo_3908203'
# 5. Crear una carpeta con nombre 'carpeta_794874'
# 6. Renombrar archivo 'archivo_3908203' como 'archivo_8039481'
# 7. Dirigirse al directorio raíz
# 8. Devolverse de directorio
# 9. Eliminar el archivo 'archivo_8039481'
# 10. Eliminar la carpeta 'carpeta_794874'
# 11. Imprimir "🎯 Fin del ejercicio"
bienvenida="⚡️ Comienzo de ejercicio"
directorio_actual=$PWD
echo $bienvenida
cd ~
nombre_de_archivo="archivo_3908203"
nuevo_nombre_de_archivo="archivo_3908203"
nombre_del_directorio="carpeta_794874"
# touch archivo_3908203
touch $nombre_de_archivo
mv $nombre_de_archivo $nuevo_nombre_de_archivo
echo "Archivo" $nombre_de_archivo "creado ..."
# mkdir carpeta_794874
mkdir $nombre_del_directorio
echo "Directorio" $nombre_del_directorio "creado ..."
cd /
cd -
rm $nuevo_nombre_de_archivo
echo "Archivo" $nuevo_nombre_de_archivo "eliminado"
rm -r $nombre_del_directorio
echo "Directorio" $nombre_del_directorio "eliminado ..."
echo "Regresando al directorio inicial ..."
cd $directorio_actual
echo "🎯 Fin del ejercicio"

read nombre
read apellido
echo $nombre $apellido