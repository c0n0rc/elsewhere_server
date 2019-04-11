const path = require('path');
const passwordHasher = require(path.join(__dirname, '../util/password.js'));
const logger = require(path.join(__dirname, '../util/logger.js')).logger;

// Authenticate an existing user
exports.authenticateUser = function (req, res, next) {
  logger.info('[footer.js handler] Authenticating user');

  // Hash the plaintext password
  passwordHasher.hash(req.body.password, function (err, hashedPassword) {
    if (err) {
      res.status(500).json({ 'error': 'Error: Internal server error during authentication.' });
    } else {
      // Sanity check that password was hashed correctly
      passwordHasher.compare(hashedPassword, req.body.password, function (err, isMatch) {
        if (!isMatch || err) {
          res.status(500).json({ 'error': 'Error: Internal server error during authentication.' });
        } else {
          next();
        }
      });
    }
  });
}

// Create a new user
exports.createUser = function (req, res, next) {
  logger.info('[footer.js handler] Creating user');
  
  // Hash the plaintext password
  passwordHasher.hash(req.body.password, function (err, hashedPassword) {
    if (err) {
      res.status(500).json({ 'error': 'Error: Internal server error during authentication.' });
    } else {
      // Sanity check that password was hashed correctly
      passwordHasher.compare(hashedPassword, req.body.password, function (err, isMatch) {
        if (!isMatch || err) {
          res.status(500).json({ 'error': 'Error: Internal server error during authentication.' });
        } else {
          next();
        }
      });
    }
  });
}

// Update an existing user
exports.updateUser = function (req, res, next) {
  logger.info('[footer.js handler] Updating user');
  next();
}

// Delete an existing user
exports.deleteUser = function (req, res, next) {
  logger.info('[footer.js handler] Deleting user');
  next();
}
