const express = require('express');

// Importamos el logger
const requestId = require('express-request-id')();
const bodyParser = require('body-parser');
const HTTP_STATUS_CODE = require('http-status-codes');
const logger = require('./config/logger');
const api = require('./api/v1');

const app = express();
app.use(requestId);
app.use(logger.requests);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Routes
app.use('/api', api);
app.use('/api/v1', api);

// No route found handler
app.use((req, res, next) => {
  next({
    message: 'Route not found',
    statusCode: HTTP_STATUS_CODE.NOT_FOUND,
    level: 'warn',
  });
});

// Error handler
app.use((err, req, res, next) => {
  const { message, level = 'error' } = err;
  let { statusCode = HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR } = err;
  const log = `${logger.header(req)} ${statusCode} ${message}`;

  if (err.name === 'ValidationError') {
    statusCode = HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY;
  }

  logger[level](log);

  res.status(statusCode);
  res.json({
    error: true,
    message,
    statusCode,
  });
});

module.exports = app;
