const cors = require('cors');
const path  = require('path');
const express = require('express')
const bodyParser = require('body-parser')

// Routes
const users = require(path.join(__dirname, 'routes/users.js'));
const token = require(path.join(__dirname, 'routes/token.js'));

// Create app and router
const app = express()
const router = express.Router()

// Configure app
app.use(cors());
app.use(bodyParser.json())

// Set version
const version = 'v1';
app.use('/api/' + version, users);
app.use('/api/' + version, token);

// Listen on port
const port = 3003;
app.listen(port);
