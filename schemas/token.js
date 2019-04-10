// Schema to validate request body when getting a new token
exports.getTokenBody = {
  "type": "object",
  "properties": {
    "email": { "type": "string" },
    "password": { "type": "string" }
  },
  "additionalProperties": false,
  "required": [ "email", "password" ]
}
