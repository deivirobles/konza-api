/*
 * Crear un archivo centralizado con todos los
 * posibles valores configurables en la
 * aplicación
 */
require('dotenv').config('');

const config = {
  server: {
    port: process.env.SERVER_PORT || 3000,
  },
};

module.exports = config;
