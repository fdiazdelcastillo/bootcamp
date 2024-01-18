# VIM

Vim es un editor de texto para terminales

## Tabla de contenido

- [Comandos](#comandos)
- [Insertar](#insertar)
- [Desplazar](#desplazar)
- [Copiar y Pegar](#copiar-y-pegar)
- [Eliminar](#eliminar)
- [Reemplazar](#reemplazar)
- [Buscar](#buscar)
- [Configuración](#configuración)

## Comandos

Los comandos se deben ingresar en el modo NORMAL, oprimiendo primero ":"

- 'q' cerrar l editor de texto
- 'w' guardar cambios
- 'wq' guardar y cerrar el editor de texto
- 'w!' 'ruta de guardado' Guardar el archivo en la ruta de guardado
- 'sp' + 'ruta de archivo' divide la pantalla horizontalmente en el archivo indicado 
- 'vs' + 'ruta de archivo' divide la pantalla verticalmente en el archivo indicado 

[Volver](#tabla-de-contenido)

## Insertar

Para hacer uso de estas teclas debemos estar en modo NORMAL

- 'i' entra al modo de inserción
- 'o' crear una nueva línea después de donde nos encontramos y entra en modo inserción
- 'S-o' crear una nueva línea en la posición anterior de donde nos encontramos y entra en moo inserción

[Volver](#tabla-de-contenido)

## Desplazar

Para hacer uso de estas teclas debemos estar n modo NORMAL

- 'h' se desplaza hacia la izquierda
- 'l' se desplaza hacia la derecha
- 'j' se desplaza hacia abajo
- 'k' se desplaza hacia arriba
- 'S-g' se desplaza hacia el final del documento
- 'gg' se desplaza hacia el inicio del documento
- '{' se desplaza hacia atrás entre saltos de línea
- '}' se desplaza hacia adelante entre saltos de línea
- '$' se desplaza hacia el final de la línea
- '0' se desplaza hacia el inicio de la línea
- '-' se desplaza al primer caracter de la línea
- 'w' se desplaza entre inicio de palabras
- 'e' se desplaza entre finales de palabras
- 'b' se desplaza hacia atrás entre palabras
- '%' se desplaza entre la pareja de paréntesis

[Volver](#tabla-de-contenido)

## Copiar y Pegar

Para hacer uso de estas teclas debemos estar n modo NORMAL

- 'yy' copiar una nueva línea
- 'yw' copiar una palabra
- 'p' pegar después
- 'S-p' pegar antes

[Volver](#tabla-de-contenido)

## Eliminar

Para hacer uso de estas teclas debemos estar n modo NORMAL

- 'dd' eliminar toda la línea
- 'dw' eliminar una palabra
- 'diw' eliminar una palabra sin importar la posición
- 'x' eliminar un caracter
- 'S-d' eliminar hacia atrás caracter por caracter

[Volver](#tabla-de-contenido)

## Reemplazar

Para hacer uso de estas teclas debemos estar n modo NORMAL

- 'cc' reemplaza toda la línea
- 'cw' reemplaza palabra
- 'ciw' reemplaza palabra sin importar la posición

[Volver](#tabla-de-contenido)

## Buscar

Para hacer uso de la búsqueda debemos estar en modo NORMAL, y oprimimos las siguientes teclas:

- '/' + palabra busca hacia adelante
- '?' + palabra busca hacia atrás

Después de buscar podemos oprimir

- 'n' se mueve a la siguiente coincidencia
- 'S-n' se mueve a la anterior coincidencia

[Volver](#tabla-de-contenido)

## Configuración

Los comandos se deben ingresar en el modo NORMAL, oprimiendo primero ":"

### Interfaz

- colorscheme wildcharm " Paleta de colores
- syntax on " Resalta el código
- set background=dark " Muestra el ondo de color negro
- set mouse=a " Habilita el uso del mouse
- set number " Muestra el número de cada línea
- set relativenumber " Muestra el número de la línea relativo a la posición del cursor
- set showcmd " Muestra en la parte inferior derecha el comando utilizado
- set wildmenu " Muestra un menú de comandos con la tecla tab
  set cursorline " Sombrea la línea en donde está el cursor
- set ruler " Muestra la posición del cursor en la parte inferior derecha
- set showmatch " Muestra la pareja del paréntesis
- set hlsearch " Resalta las coincidencias de la búsqueda
- set incsearch " Resalta las coincidencias mientras se ingresa la palabra buscada 

## Búsqueda

- set ignorecase " Ignora mimúsculas y mayúsculas
- set smartcase " Solo ignora las mayúsculas y minúsculas si todas las letras son minúsculas

### Indentación

- set expandtab " Convierte (Ta) en (Espacio)
- set tabstop=2 " (Espacios) que toma un (Tab)
- set softtabstop=2 " (Espacio) que toma un (Tab) en una edición
- set smartindent " Activa indentado inteligente
- set shiftwidth=2 " (Espacio) que toma un (Tab) en auto indentado

[Volver](#tabla-de-contenido)
