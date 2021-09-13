var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){

    fs.readFile('test\\demo1.html',function(err,data){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(data);
    res.end();

});
}).listen(3000);
console.log("server started!");