var request = require('request');

describe('POST request to /users/authenticate', function() {
  it('should accept request with required body fields', function(done) {
    request.post({
      json: true,
      uri: 'http://localhost:3003/api/v1/users/authenticate',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        'email': 'test.email@gmail.com',
        'password': 'testpassword'
      }
    },
    function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      expect(body.error).toBeUndefined();
      expect(body.message).toBeUndefined();
      expect(body.token).toBeDefined();
      done();
    });
  });

  it('should reject request missing required body email field', function(done) {
    request.post({
      json: true,
      uri: 'http://localhost:3003/api/v1/users/authenticate',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        'password': 'testpassword'
      }
    },
    function(error, response, body) {
      expect(response.statusCode).toEqual(422);
      expect(body.token).toBeUndefined();
      expect(body.message).toBeUndefined();
      expect(body.error).toEqual('Error: Invalid request body fields. [{"keyword":"required","dataPath":"","schemaPath":"#/required","params":{"missingProperty":"email"},"message":"should have required property \'email\'"}]');
      done();
    });
  });

});
  
describe('POST request to /users', function() {
  it('should accept request with required body fields', function(done) {
    request.post({
      json: true,
      uri: 'http://localhost:3003/api/v1/users',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        'email': 'test.email@gmail.com',
        'password': 'testpassword',
        'fname': 'Mike',
        'lname': 'Everyman',
        'phone': '8453329070'
      }
    },
    function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      expect(body.error).toBeUndefined();
      expect(body.message).toBeUndefined();
      expect(body.token).toBeDefined();
      done();
    });
  });

  it('should accept request missing optional body fields', function(done) {
    request.post({
      json: true,
      uri: 'http://localhost:3003/api/v1/users',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        'email': 'test.email@gmail.com',
        'password': 'testpassword',
        'fname': 'Mike',
        'lname': 'Everyman'
      }
    },
    function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      expect(body.error).toBeUndefined();
      expect(body.message).toBeUndefined();
      expect(body.token).toBeDefined();
      done();
    });
  });  

  it('should reject request missing required body email field', function(done) {
    request.post({
      json: true,
      uri: 'http://localhost:3003/api/v1/users',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        'password': 'testpassword',
        'fname': 'Mike',
        'lname': 'Everyman'
      }
    },
    function(error, response, body) {
      expect(response.statusCode).toEqual(422);
      expect(body.token).toBeUndefined();
      expect(body.message).toBeUndefined();
      expect(body.error).toEqual('Error: Invalid request body fields. [{"keyword":"required","dataPath":"","schemaPath":"#/required","params":{"missingProperty":"email"},"message":"should have required property \'email\'"}]');
      done();
    });
  });  

});

describe('PATCH request to /users/:userID', function() {
  it('should accept request with required body fields', function(done) {
    request.patch({
      json: true,
      uri: 'http://localhost:3003/api/v1/users/testUserID',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        'email': 'test.email@gmail.com',
        'password': 'testpassword',
        'fname': 'Mike',
        'lname': 'Everyman',
        'phone': '8453329070'
      }
    },
    function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      expect(body.error).toBeUndefined();
      expect(body.message).toEqual('success');
      expect(body.token).toBeUndefined();
      done();
    });
  });

  it('should accept request missing optional body fields', function(done) {
    request.patch({
      json: true,
      uri: 'http://localhost:3003/api/v1/users/testUserID',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        'email': 'test.email@gmail.com',
        'password': 'testpassword',
        'fname': 'Mike'
      }
    },
    function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      expect(body.error).toBeUndefined();
      expect(body.message).toEqual('success');
      expect(body.token).toBeUndefined();
      done();
    });
  });

  it('should reject request missing required body password field', function(done) {
    request.patch({
      json: true,
      uri: 'http://localhost:3003/api/v1/users/testUserID',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        'email': 'test.email@gmail.com',
        'fname': 'Mike',
        'lname': 'Everyman',
        'phone': '8453329070'
      }
    },
    function(error, response, body) {
      expect(response.statusCode).toEqual(422);
      expect(body.token).toBeUndefined();
      expect(body.message).toBeUndefined();
      expect(body.error).toEqual('Error: Invalid request body fields. [{"keyword":"required","dataPath":"","schemaPath":"#/required","params":{"missingProperty":"password"},"message":"should have required property \'password\'"}]');
      done();
    });
  });

});

describe('DELETE request to /users/:userID', function() {
  it('should accept request with required body fields', function(done) {
    request.delete({
      json: true,
      uri: 'http://localhost:3003/api/v1/users/testUserID',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        'email': 'test.email@gmail.com',
        'password': 'testpassword'
      }
    },
    function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      expect(body.error).toBeUndefined();
      expect(body.message).toEqual('success');
      expect(body.token).toBeUndefined();
      done();
    });
  });

  it('should reject request missing required body email field', function(done) {
    request.delete({
      json: true,
      uri: 'http://localhost:3003/api/v1/users/testUserID',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        'password': 'testpassword'
      }
    },
    function(error, response, body) {
      expect(response.statusCode).toEqual(422);
      expect(body.token).toBeUndefined();
      expect(body.message).toBeUndefined();
      expect(body.error).toEqual('Error: Invalid request body fields. [{"keyword":"required","dataPath":"","schemaPath":"#/required","params":{"missingProperty":"email"},"message":"should have required property \'email\'"}]');
      done();
    });
  });

});
