"use strict";

var util = require('gulp-util');

// Set basic constants
const PLUGIN_NAME = "Majestix";

function log (options) {
  var title,
      message,
      statusColor = 'green',
      status;

  // Check if its only a string that has been passed, if so we assume its a message
  if(typeof options === "string") {
    message = options;    
  } else { 
    // options.title
    // Validate options.title is set, else fallback to PLUGIN_NAME
    title = (options.title ? options.title : PLUGIN_NAME);

    // options.message
    message = options.message;

    // options.statusColor
    // Set colortype which is used to display log message with
    if(typeof options.statusColor !== 'undefined') {
      statusColor = (options.statusColor.toLowerCase() === 'error' ? 'red' : 'green');
    }

    // options.status 
    // Set a custom status for log message
    if(typeof options.status !== 'undefined') {
      status = options.status;      
    }
  }
  
  // Message template 
  var template = util.colors.cyan(title)+ ': ' + 
                 (typeof status !== 'undefined' ? '[' + util.colors.blue(status) + ']' : '');

  // Log message to console
  util.log(template, util.colors[statusColor].call(util.colors, message));
}

module.exports = log;

