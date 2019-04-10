const path = require('path');
const Ajv = require('ajv');
const ajv = new Ajv();

const schema = require(path.join(__dirname, '../schemas/token.js'));

// Validate request body when getting a new token
exports.validateGetTokenBody = function (req, res, next) {
  var validate = ajv.compile(schema.getTokenBody);
  var valid = validate(req);
  next();
};
