const path = require('path');
const Ajv = require('ajv');
const ajv = new Ajv();

const schema = require(path.join(__dirname, '../schemas/users.js'));

// Validate /users/:userID route param
exports.validateUserIDParam = function (req, res, next) {
  var validate = ajv.compile(schema.validateUserIDParam);
  var valid = validate(req.params);
  if (!valid) {
    res.status(400).json({ 'error': 'Error: Incorrect request syntax. Expects /users/:userID where userID is a string. ' + JSON.stringify(validate.errors) });
  } else {
    next();
  }
};

// Validate request body when authenticating an existing user
exports.validateAuthUserBody = function (req, res, next) {
  var validate = ajv.compile(schema.validateUserBody);
  var valid = validate(req.body);
  if (!valid) {
    res.status(422).json({ 'error': 'Error: Invalid request body fields. ' + JSON.stringify(validate.errors) });
  } else {
    next();
  }
};

// Validate request body when creating a new user
exports.validateCreateUserBody = function (req, res, next) {
  var validate = ajv.compile(schema.validateCreateUserBody);
  var valid = validate(req.body);
  if (!valid) {
    res.status(422).json({ 'error': 'Error: Invalid request body fields. ' + JSON.stringify(validate.errors) });
  } else {
    next();
  }
};

// Validate request body when updating an existing user
exports.validateUpdateUserBody = function (req, res, next) {
  var validate = ajv.compile(schema.validateUpdateUserBody);
  var valid = validate(req.body);
  if (!valid) {
    res.status(422).json({ 'error': 'Error: Invalid request body fields. ' + JSON.stringify(validate.errors) });
  } else {
    next();
  }
};

// Validate request body when deleting an existing user
exports.validateDeleteUserBody = function (req, res, next) {
  var validate = ajv.compile(schema.validateUserBody);
  var valid = validate(req.body);
  if (!valid) {
    res.status(422).json({ 'error': 'Error: Invalid request body fields. ' + JSON.stringify(validate.errors) });
  } else {
    next();
  }
};
