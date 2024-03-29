" Requerido
source $VIMRUNTIME/defaults.vim " Llama la configuración predefinida de VIM
set nocompatible " Inhabilita la compatibilidad con vi

" Interfaz
colorscheme wildcharm " Paleta de colores
syntax on " Resalta el código
set background=dark " Muestra el ondo de color negro
set mouse=a " Habilita el uso del mouse
set number " Muestra el número de cada línea
set relativenumber " Muestra el número de la línea relativo a la posición del cursor
set showcmd " Muestra en la parte inferior derecha el comando utilizado
set wildmenu " Muestra un menú de comandos con la tecla tab
set cursorline " Sombrea la línea en donde está el cursor
set ruler " Muestra la posición del cursor en la parte inferior derecha
set list " Útil para ver la diferencia entre tabuladores, espacios y espacios en blanco
set listchars=multispace:│\ ,tab:│\ ,trail:· " Muestra ( ¦ | ┊ | │ | \| ) por cada indentación
set laststatus=2 " Muestra siempre la barra de estado
set showmatch " Muestra la pareja del paréntesis
set hlsearch " Resalta las coincidencias de la búsqueda
set incsearch " Resalta las coincidencias mientras se ingresa la palabra buscada 

" Búsqueda
set ignorecase " Ignora mimúsculas y mayúsculas
set smartcase " Solo ignora las mayúsculas y minúsculas si todas las letras son minúsculas

" Indentación
set expandtab " Convierte (Tab) en (Espacio)
set tabstop=2 " <Espacio> que toma un (Tab)
set softtabstop=2 " (Espacio) que toma un <Tab> en una edición
set smartindent " Activa indentado inteligente
set shiftwidth=2 " (Espacio) que toma un (Tab) en auto indentado
