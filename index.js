"use strict";

var util = require('gulp-util');

// Set basic constants
const PLUGIN_NAME = "Majestix";

function log (options) {
  var title,
      message,
      statusColor = 'green';

  // Check if its only a string that has been passed, if so we assume its a message
  if(typeof options === "string") {
    message = options;    
  } else { 
    // options.title: 
    // Check if options.title is set, else overwrite with current plugin_name 
    if(!options.title) {
      title = PLUGIN_NAME;
    } else {
      title = options.title;
    }

    if(!options.message) {
      // If there is no message, we just abort
      return false;
    }

    // Check if user has set custom status: error, ok
    switch(options.status) {
      case 'ok' || 'OK':
        statusColor = 'green';
      break;
      case 'error' || 'ERROR':
        statusColor = 'red';
      break;
    }
  }
  
  // Message template 
  var template = util.colors.cyan(title)+ ':' + 
                 '[' + util.colors.blue(message) + ']',
                 util.colors[statusColor].call(util.colors, message);

  // Log message to console
  util.log(template);
}

module.exports = log;

