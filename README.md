# eGoGames & UriMarti

## Instalar el Proyecto

Primero de todo instalamos todos los `node_modules` del repositorio

```javascript
npm install
```

Una vez instalados, tenemos 2 scripts en `package.json` que nos permiten:

##### Lanzar server en localhost
Nos creará una instancia de `webpack-dev-server` en `localhost:9000` tal y como indica el `webpack.config.js`
```javascript
npm start
```


##### Crear archivos minificados para publicar
```javascript
npm run build
```

## ¿Cómo está hecho?
### TypeScript y React
Se ha utilizado TypeScript junto a React para poder asegurarme que no haya problemas de programación.

### SCSS
Para el diseño se ha usado una configuración básica de archivos `.scss` alojados dentro de la carpeta `src/style`.
A la vez que cada componente tiene, si es necesario, su archivo `.scss` independiente.

### Estructura

#### public
Esta carpeta se genera automáticamente con los cambios que hay dentro de src. Excepto la carpeta resources que se ha puesto manualmente.

#### src
Contiene todos los archivos del proyecto.

##### Controllers
Contiene los controladores. Los elementos que recogen y gestionan los datos del Front.

##### Data
Contiene los datos del proyecto. Simularía ser la base de datos.

##### Helpers
Contiene listados `enum` para un buen funcionamiento del entorno en TypeScript

##### Interfaces
Contiene las `Interfaces` de todos los elementos y componentes tanto de React como de Controladores y Modelos

##### Models
Contiene los Modelos de los objetos usados. Sus declaraciones y métodos.

##### React
Contiene todo el proyecto de React. Todo el FrontEnd entero.

##### style
Contiene los archivos de estilo principales. Hay componentes (dentro de React/components) que tienen archivos de estilo propios.

## Demo
Hay una demo en vivo en [esta url](https://urimarti.com/egogames/)
