const path = require('path');
const logger = require(path.join(__dirname, '../util/logger.js')).logger;

// Create a new token
exports.createToken = function (req, res, next) {
  logger.info('[token.js handler] Creating token');
  next();
}

// Create an existing token
exports.validateToken = function (req, res, next) {
  logger.info('[token.js handler] Validating token');
  next();
}
