var colors = require('colors');
var internalIp = require('internal-ip').v4;

module.exports = function (port, name) {
  return `${colors.green(name + ':')} Browse to '${colors.bold('http://' + internalIp() + ':' + port)}'`;
};
