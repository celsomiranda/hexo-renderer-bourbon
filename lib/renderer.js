'use strict';

var sass = require('node-sass');
var bourbon = require('node-bourbon');
var assign = require('lodash.assign');

module.exports = function (data, options) {

  var config = this.config.bourbon;

  var result = sass.renderSync(assign({
    file: data.path,
    data: data.text,
    includePaths: bourbon.includePaths
  }, config));

  return result.css.toString();
};
