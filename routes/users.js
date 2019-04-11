const path  = require('path');
const express = require('express');
const router = express.Router();

const userMiddleware = require(path.join(__dirname, '../middleware/users.js'));
const tokenMiddleware = require(path.join(__dirname, '../middleware/token.js'));

const userHandler = require(path.join(__dirname, '../handlers/users.js'));
const tokenHandler = require(path.join(__dirname, '../handlers/token.js'));

// Update an existing user - 200 (success), 401 (not authorized), 422 (invalid body)
router.post('/users/authenticate',
  [
    userMiddleware.validateUserReqBody,
    userHandler.authenticateUser,
    tokenHandler.createToken
  ],
  function (req, res) {
    res.status(200).json({ 'token': 'token' });
  }
);

// Create a new user - 201 (created), 409 (conflict), 422 (invalid body)
router.post('/users',
  [
    userMiddleware.validateCreateUserReqBody, 
    userHandler.createUser,
    tokenHandler.createToken
  ],
  function (req, res) {
    res.status(200).json({ 'token': 'token' });
  }
);

// Update an existing user - 200 (success), 401 (not authorized), 400 (incorrect syntax), 422 (invalid body)
router.patch('/users/:userID',
  [
    tokenMiddleware.validateToken,
    userMiddleware.validateUserIDParam,
    userMiddleware.validateUpdateUserReqBody,
    userHandler.updateUser
  ],
  function (req, res) {
    res.status(200).json({ 'message': 'success' });
  }
);

// Update an existing user - 200 (success), 401 (not authorized), 400 (incorrect syntax), 422 (invalid body)
router.delete('/users/:userID',
  [
    tokenMiddleware.validateToken,
    userMiddleware.validateUserIDParam,
    userMiddleware.validateDeleteUserReqBody,
    userHandler.deleteUser
  ],
  function (req, res) {
    res.status(200).json({ 'message': 'success' });
  }
);

module.exports = router;
