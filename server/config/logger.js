const { createLogger, format, transports } = require('winston');

const morgan = require('morgan');
const stripFinalNewLine = require('strip-final-newline');

const logger = createLogger({
  format: format.simple(),
  transports: [new transports.Console()],
});

// Create Morgan id token
morgan.token('id', req => req.id);

// Setup request Format
const requestFormat = ':remote-addr [:date[iso]] :id ":method :url" :status';

// Setup Request Logger with Morgan
const requests = morgan(requestFormat, {
  stream: {
    write: (message) => {
      // remove all line breaks
      const log = stripFinalNewLine(message);
      return logger.info(log);
    },
  },
});

// Attach morgan to logger object
logger.requests = requests;

logger.header = (req) => {
  const date = new Date().toString();
  return `${req.id} [${date}] ${req.id} "${req.method} ${req.originalUrl}"`;
};

module.exports = logger;
