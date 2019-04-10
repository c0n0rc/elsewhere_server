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
      expect(body).toEqual('POST /users/authenticate');
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
      expect(body).toEqual('POST /users/authenticate');
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
      expect(body).toEqual('POST /users');
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
      expect(body).toEqual('POST /users');
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
      expect(body).toEqual('POST /users');
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
      expect(body).toEqual('PATCH /users/:userID');
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
      expect(body).toEqual('PATCH /users/:userID');
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
      expect(body).toEqual('PATCH /users/:userID');
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
      expect(body).toEqual('DELETE /users/:userID');
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
      expect(body).toEqual('DELETE /users/:userID');
      done();
    });
  });

});
