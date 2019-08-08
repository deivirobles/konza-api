const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((req, res, next) => {
  res.status(404);
  res.json({
    message: 'Error, Route not found',
  });
});

module.exports = app;
