// Schema to validate /users/:userID param
exports.validateUserIDParam = {
  "type": "object",
  "properties": {
    "userID": { 
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [ "userID" ]
}

// Schema to validate request body for basic user auth
exports.validateUserBody = {
  "type": "object",
  "properties": {
    "email": { "type": "string" },
    "password": { "type": "string" }
  },
  "additionalProperties": false,
  "required": [ "email", "password" ]
}

// Schema to validate request body when creating a new user
exports.validateCreateUserBody = {
  "type": "object",
  "properties": {
    "email": { "type": "string" },
    "password": { "type": "string" },
    "fname": { "type": "string" },
    "lname": { "type": "string" },
    "phone": { "type": "string" }
  },
  "additionalProperties": false,
  "required": [ "email", "password", "fname", "lname" ]
}

// Schema to validate request body when updating a new user
exports.validateUpdateUserBody = {
  "type": "object",
  "properties": {
    "email": { "type": "string" },
    "password": { "type": "string" },
    "fname": { "type": "string" },
    "lname": { "type": "string" },
    "phone": { "type": "string" }
  },
  "additionalProperties": false,
  "required": [ "email", "password" ]
}
