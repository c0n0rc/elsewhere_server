const path  = require('path');
const express = require('express');
const router = express.Router();

const handlers = require(path.join(__dirname, '../handlers/token.js'));
const middleware = require(path.join(__dirname, '../middleware/token.js'));

// Get a new token
router.get('/token', [middleware.validateGetTokenBody, handlers.getToken], function (req, res) {
  res.send('GET /token');
});

module.exports = router;
