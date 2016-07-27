'use strict';
var serverWelcome = require('./');
var assert = require('assert');
var internalIp = require('internal-ip').v4;

describe('server-welcome', function () {

  it('should give the message', function () {
    assert.equal(serverWelcome('8880', 'Storage office templates'), `\u001b[32mStorage office templates:\u001b[39m Browse to '\u001b[1mhttp://${internalIp()}:8880\u001b[22m'`);
  });

});
