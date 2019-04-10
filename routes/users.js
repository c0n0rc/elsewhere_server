const path  = require('path');
const express = require('express');
const router = express.Router();

const handlers = require(path.join(__dirname, '../handlers/users.js'));
const middleware = require(path.join(__dirname, '../middleware/users.js'));

// Authenticate an existing user
router.post('/users/authenticate',
  [
    middleware.validateAuthUserBody,
    handlers.authenticateUser
  ],
  function (req, res) {
    res.send('POST /users/authenticate');
  }
);

// Create a new user
router.post('/users',
  [
    middleware.validateCreateUserBody, 
    handlers.createUser
  ],
  function (req, res) {
    res.send('POST /users');
  }
);

// Update an existing user
router.patch('/users/:userID',
  [
    middleware.validateUserIDParam,
    middleware.validateUpdateUserBody,
    handlers.updateUser
  ],
  function (req, res) {
    res.send('PATCH /users/:userID');
  }
);

// Delete an existing user
router.delete('/users/:userID',
  [
    middleware.validateUserIDParam,
    middleware.validateDeleteUserBody,
    handlers.deleteUser
  ],
  function (req, res) {
    res.send('DELETE /users/:userID');
  }
);

module.exports = router;
