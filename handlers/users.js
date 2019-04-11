const path = require('path');
const passwordHasher = require(path.join(__dirname, '../util/password.js'));

// Authenticate an existing user
exports.authenticateUser = function (req, res, next) {

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
  next();
}

// Update an existing user
exports.updateUser = function (req, res, next) {
  next();
}

// Delete an existing user
exports.deleteUser = function (req, res, next) {
  next();
}
