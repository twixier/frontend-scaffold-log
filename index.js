"use strict";

var util = require('gulp-util');

// Set basic constants
const PLUGIN_NAME = "Majestix";

function log (options) {

  if(!options.message) {
    return false;
  }

  var template = util.colors.green(PLUGIN_NAME) + ':' + 
                 '[' + util.colors.blue(message) + ']',
                 util.colors['green'].call(util.colors, message);

  // Log message to console
  util.log(template);
}

module.exports = log;

