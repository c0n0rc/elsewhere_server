const path = require('path');
const Ajv = require('ajv');
const ajv = new Ajv();
const logger = require(path.join(__dirname, '../util/logger.js')).logger;

const schema = require(path.join(__dirname, '../schemas/token.js'));

// Validate request body when getting a new token
exports.validateToken = function (req, res, next) {
  logger.info('[token.js middelware] Validating token');

  var validate = ajv.compile(schema.getTokenBody);
  var valid = validate(req);
  next();
};
