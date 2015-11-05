# Loggify (Frontend-scaffold)
Simple, yet pretty, nodejs module to apply some pretty log messages to the terminal.

Properties/options:
- Title (options.title)
Title replacement instead of default plugin name
ex: "Image-minification"
- message (options.message) 
Log message to appear in log/terminal
- statusColor (options.statusColor)
Define a color accordingly to gulp-util color board, which will color your log message
- status (options.status)
Indication of which type of status you're echo'ing.
Ex: error, already exists...

Example of call: 
log({
  title: 'Loggify',
  message: 'This is a test!',
  statusColor: red,
  status: 'OK'
})


