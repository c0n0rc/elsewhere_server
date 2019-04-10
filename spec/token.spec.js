var request = require('request');

describe('GET request to /token', function() {
  it('should accept request with required body fields', function(done) {
    request.get({
      json: true,
      uri: 'http://localhost:3003/api/v1/token',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        'email': 'test.email@gmail.com',
        'password': 'testpassword'
      }
    },
    function(error, response, body) {
      expect(body).toEqual('GET /token');
      done();
    });
  });

});
