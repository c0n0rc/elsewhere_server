const path  = require('path');
const express = require('express');
const router = express.Router();

const handlers = require(path.join(__dirname, '../handlers/users.js'));
const middleware = require(path.join(__dirname, '../middleware/users.js'));

// Update an existing user - 200 (success), 401 (not authorized), 422 (invalid body)
router.post('/users/authenticate',
  [
    // @TODO Validate token
    middleware.validateAuthUserBody,
    handlers.authenticateUser
    // @TODO Send token
  ],
  function (req, res) {
    res.status(200).json({ 'token': 'token' });
  }
);

// Create a new user - 201 (created), 409 (conflict), 422 (invalid body)
router.post('/users',
  [
    middleware.validateCreateUserBody, 
    handlers.createUser
    // @TODO Send token
  ],
  function (req, res) {
    res.status(200).json({ 'token': 'token' });
  }
);

// Update an existing user - 200 (success), 401 (not authorized), 400 (incorrect syntax), 422 (invalid body)
router.patch('/users/:userID',
  [
    // @TODO Validate token
    middleware.validateUserIDParam,
    middleware.validateUpdateUserBody,
    handlers.updateUser
  ],
  function (req, res) {
    res.status(200).json({ 'message': 'success' });
  }
);

// Update an existing user - 200 (success), 401 (not authorized), 400 (incorrect syntax), 422 (invalid body)
router.delete('/users/:userID',
  [
    // @TODO Validate token
    middleware.validateUserIDParam,
    middleware.validateDeleteUserBody,
    handlers.deleteUser
  ],
  function (req, res) {
    res.status(200).json({ 'message': 'success' });
  }
);

module.exports = router;
