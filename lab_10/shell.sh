# Shell
# Interfaz para interactuar con el sistema operativo

# Hombrebrew (https://brew.sh)
# Gestor de paquetes

## Requerimientos (Ubuntu - https://docs.brew.sh/Homebrew-on-Linux#requirements)
if [[ "$(uname -s)" == Linux* ]] && command -v apt >/dev/null; then
  sudo apt install build-essential procps curl file git
fi

## Instalación
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# ZSH

## Ubuntu
if [[ "$(uname -s)" == Linux* ]] && command -v apt >/dev/null; then
  sudo apt update
  sudo apt install zsh
fi

# Oh My Zsh (https://ohmyz.sh/)
# Mejora la funcionalidad de zsh

## Preconfiguración
[[ -e ~/.oh-my-zsh ]] && rm -rf ~/.oh-my-zsh
[[ -e ~/.zshrc ]] && rm ~/.zshrc

# Instalación
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

# ZSH Autosuggestions (https://github.com/zsh-users/zsh-autosuggestion)
# Sugiere autocompletados

## Instalación
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

## Configuración
echo '\n# ZSH Autosuggestions' >>~/.zshrc
echo 'ZSH_AUTOSUGGEST_STRATEGY=(history completion)\n' >>~/.zshrc

# ZSH Syntax Hightlighting (https://github.com/zsh-users/zsh-syntax-highlighting)
# Resalta del texto

## Instalación
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

## Configuración
echo '# ZSH Syntax Highlighting' >>~/.zshrc
echo 'ZSH_HIGHLIGHT_HIGHLIGHTERS=(main brackets pattern cursor)\n' >>~/.zshrc

# Activación de plugins de ZSH
case "$(uname -s)" in
Darwin*)
  sed -i'' -e 's/plugins=(git)/plugins=(git zsh-autosuggestions zsh-syntax-highlighting)/' ~/.zshrc
  ;;
Linux*)
  sed -i 's/plugins=(git)/plugins=(git zsh-autosuggestions zsh-syntax-highlighting)/' ~/.zshrc
  ;;
esac

# fzf (ihttps://github.com/junegunn/fzf)
# Mejora la funcionalidad de <C-r> y <C-t>

## Instalación
brew install fzf

## Configuración
### macOS
echo '# fzf' >>~/.zshrc
case "$(uname -s)" in
Darwin*)
  ### macOS
  echo '[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh\n' >>~/.zshrc
  ;;
Linux*)
  ### Linux
  echo '[ -f  /usr/share/doc/fzf/examples/key-bindings.zsh ] && source /usr/share/doc/fzf/examples/key-bindings.zsh' >>$home/.zshrc
  echo '[ -f  /usr/share/doc/fzf/examples/completion.zsh ] && source /usr/share/doc/fzf/examples/completion.zsh\n' >>$home/.zshrc
  ;;
esac

### ubuntu

# Starship (https://starship.rs)
# Mejora el prompt (interfaz de entrada) de la consola

## Instalación
brew install starship

## Configuración
echo '# Starship' >>~/.zshrc
echo 'eval "$(starship init zsh)"\n' >>~/.zshrc

# The Fuck (https://github.com/nvbn/thefuck)
# Recomienda correciones

## Instalación
brew install thefuck

## Configuración
echo '# The Fuck' >>~/.zshrc
echo 'eval $(thefuck --alias)\n' >>~/.zshrc

# Bat (https://github.com/sharkdp/bat)
# Muestra el contenido de un archivo resaltado y formateado
brew install bat

## Ubuntu
if [[ "$(uname -s)" == Linux* ]]; then
  echo '# bat' >>~/.zshrc
  echo 'alias bat=batcat\n' >>~/.zshrc
fi

# Activar shell zsh
chsh -s /bin/zsh
