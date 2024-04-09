# Crear el package.json 
- Con las opciones predeterminadas
npm init -y
- Especificando ciertos valores
npm init -y --name "nombre-del-proyecto" --version "1.0.0" --description "descripción-del-proyecto" --entry-point "index.js" --author "nombre-del-autor" --license "MIT"


# Instalar todos los paquetes de npm
npm install
Instala todos los paquetes especificados en el package.json
# Actualizar todos los paquetes
npm update
Actualizar todos los paquetes del package.json
# Ejecutar los script especificados en la clave scripts del package json
Ejemplo:
{
  "scripts": {
    "watch": "webpack --watch --progress --colors --config webpack.conf.js",
    "dev": "webpack --progress --colors --config webpack.conf.js",
    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js"
  }
}

$ npm run watch
$ npm run dev
$ npm run prod
