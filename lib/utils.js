//
// Callback utils
//
// @chamerling
//

var util = require('util');
var utils = {};

utils.toObject = function(json, callback) {
  try {
    callback(null, JSON.parse(json))
  } catch(e) {
    console.log(e)
    callback(new Error('Malformed response: ' + json))
  }
}

utils.safe = function(fn) {
  function log(err, res) {
    if (err) {
      return console.dir(err);
    }
    console.log(util.inspect(res, false, null, true));
  }

  fn = fn || log;
  return fn;
}

module.exports = utils;
