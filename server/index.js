const express = require('express');

// Importamos el logger
const morgan = require('morgan');
const requestId = require('express-request-id')();
const logger = require('./config/logger');

const app = express();
app.use(requestId);
app.use(morgan('combined', { stream: { write: message => logger.info(message) } }));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

// No route found handler
app.use((req, res, next) => {
  const message = 'Route not found';
  const statusCode = 404;

  /*
   * Utilizamos el logger para guardar un
   * mensaje de nivel advertencia
   */
  logger.warn(message);

  res.status(statusCode);
  res.json({
    message,
  });
});

// Error handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  /*
   * Utilizamos el logger para guardar un
   * mensaje de nivel error
   */
  logger.error(message);

  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;
