var request = require('supertest');
var app = require('../server.js');

describe('GET /hello-world', function() {
    it('respond with hello world', function(done) {
        //navigate to root and check the the response is "hello world"
        request(app).get('/hello-world').expect('hello world', done);
    });
});