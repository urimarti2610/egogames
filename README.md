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
#### src
