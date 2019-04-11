const bcrypt = require('bcrypt');
const saltRounds = 10;

// Hash a password
exports.hash = function (plaintextPassword, callback) {
  bcrypt.hash(plaintextPassword, 5, function(err, encrypted) {
    callback(err, encrypted);
  });
}

// Compare a hashed password with its plaintext
exports.compare = function (hashPassword, plaintextPassword, callback) {
  bcrypt.compare(plaintextPassword, hashPassword, function(err, same) {
    callback(err, same);
  });
}
