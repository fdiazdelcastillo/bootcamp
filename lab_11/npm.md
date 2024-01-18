# node.js

Ejecutor de JavaScript
[Instalación](inatalación)
[Glosario](glosario)

## Instalación

### Recomendada

Utilizar un gestor de versionamientos como [nvm](https://github.com/nvm-sh/nvm), para ello se puede utilizar el plugin de ZSH [zsh-nvm](https://github.com/lukechilds/zsh-nvm)

1. Clonar plugin

```shell
git clone https://github.com/lukechilds/zsh-nvm ~/.oh-my-zsh/custom/plugins/zsh-nvm
```

2. Editar archivo .zshrc

```shell
vim ~/.zshrc
```

3. Adicionar en los plugins _zsh-nvm_

4. Actualizar la configuración de _.zshrc_

```
source ~/.zshrc
```

5. Instalar la versión LTS (soportada en el largo plazo) de node y npm

```shell
nvm install --lts --latest-npm
```

6. Hamilitar globalmente la version LTS instalada

```shell
nvm use --lts
```

## Glosario

- **Gestor de versionamiento**: Permite actualizar la versión del ejecutor del lenguaje de programación utilizado fácilmente y así aprovechar las mejoras que se incorporar en cada nueva versión
