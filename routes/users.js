const path  = require('path');
const express = require('express');
const router = express.Router();
const handlers = require(path.join(__dirname, '../handlers/users.js'));

// Get user
router.get('/users/:userID', [handlers.getUser], function (req, res) {
  res.send('Hello World!');
});

// Create user
router.post('/users', [handlers.createUser], function (req, res) {
  res.send('Hello World!');
});

// Update user
router.post('/users/:userID', [handlers.updateUser], function (req, res) {
  res.send('Hello World!');
});

// Delete user
router.delete('/users/:userID', [handlers.deleteUser], function (req, res) {
  res.send('Hello World!');
});

module.exports = router;
