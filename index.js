/* eslint-disable linebreak-style */
const http = require('http');

/*
 * Importar nuestra aplicación de Express y
 * el archivo de configuración
 */
const app = require('./server');
const config = require('./server/config');
const database = require('./server/database');

/*
 * Del modulo relacionado con la base de datos
 * utilizamos la función connect para
 * conectarnos a la base de datos, pasandole como
 * parametros el objeto de configuracion con los
 * valores relacionados de la base de datos y por
 * el momento no tenemos opciones adicionales asi
 * que el segundo parametro es un objeto vacio
 */
database.connect(config.database, {});

/*
 * Extraemos la llave port del objeto server
 * en el objeto de la configuración
 */
const { port } = config.server;

/*
 * Reemplazamos el callback de la función
 * createServer con la aplicación de Express
 * ya que esta diseñada para ser compatible
 * pues sera la encargada de manejar todas
 * las peticiones que lleguen a nuestro
 * servidor Web
 */
const server = http.createServer(app);

/*
 * El encargado de iniciar el servidor Web es
 * el modulo http de Node.js
 */
server.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
