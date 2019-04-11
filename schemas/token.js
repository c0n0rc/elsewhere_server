// Schema to validate request body when getting a new token
exports.getTokenBody = {
  "type": "object",
  "properties": {
    "email": { "type": "string" },
    "token": { "type": "string" }
  },
  "additionalProperties": false,
  "required": [ "email", "token" ]
}
