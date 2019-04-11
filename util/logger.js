const winston = require('winston');

// (Ref: https://github.com/winstonjs/winston)
const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  format: winston.format.json(),
  defaultMeta: { service: 'elsewhere-server' },
  transports: [
    // Write to all logs with level `info` and below to `combined.log` 
    // Write all logs error (and below) to `error.log`.
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Log to console if we are not in production 
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

exports.logger = logger;
