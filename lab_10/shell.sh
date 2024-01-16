# Insalar Homebrew (https://brew.sh)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar Starship (https://starship.rs)
brew install starship
echo 'eval "$(starship init zsh)"' >>~/.zprofile
