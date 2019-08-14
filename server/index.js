const express = require('express');

// Importamos el logger
const requestId = require('express-request-id')();
const logger = require('./config/logger');
const api = require('./api/v1');

const app = express();
app.use(requestId);
app.use(logger.requests);

// Routes
app.use('/api/v1', api);

// No route found handler
app.use((req, res, next) => {
  next({
    message: 'Route not found',
    statusCode: 404,
    level: 'warn',
  });
});

// Error handler
app.use((err, req, res, next) => {
  const { message, statusCode = 500, level = 'error' } = err;
  const log = `${logger.header(req)} ${statusCode} ${message}`;

  logger[level](log);

  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;
