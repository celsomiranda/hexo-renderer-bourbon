'use strict';

var sass = require('node-sass');
var bourbon = require('node-bourbon');
var assign = require('object-assign');

module.exports = function (data, options, cb) {
  var error, result;
  var config = this.config.bourbon;

  var opts = assign({
    includePaths: bourbon.includePaths
  }, config);

  try {
    result = sass.renderSync(opts);
  } catch (_error) {
    error = _error;
    return cb(error);
  }
  return cb(null, result.css);
};
