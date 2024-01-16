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
- set mouse=a " Habilita el uso del mouse
- set number " Muestra el número de cada línea
- set showcmd " Muestra en la parte inferior derecha el comando utilizado
- set wildmenu " Muestra un menú de comandos con la tecla tab
set cursorline " Sombrea la línea en donde está el cursor
- set ruler " Muesta la posición del cursor en la parte inferior derecha

### Indentación

- set expandtab " Convierte <Tab> en <Espacio>
- set tabstop=2 " <Espacios> que toma un <Tab>
- set softtabstop=2 " <Espacio> que toma un <Tab> en una edición

[Volver](#tabla-de-contenido) 
