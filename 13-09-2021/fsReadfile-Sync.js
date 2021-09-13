var fs = require('fs');
var data = fs.readFileSync('fsOpenfile.js');
console.log("Synchronous read:\n"+data.toString());
console.log("program Ended");