/*var http = require("http");
http.createServer(function(request, response){
    response.end("Hello World in node js\n");
}).listen(8081);
console.log("Server running at http://127.0.0.1.8081/");*/

var http = require('http');
var a=10;
var b=20;
var c=a+b;
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!'+c);
  }).listen(8080);
  console.log("Hello World"+c);