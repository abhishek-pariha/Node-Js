var http = require("http");
var name = "jack";
var str3 = 'A\'quote\' inside a string';
http.createServer(function(req,res){
    
    
    res.end(`hello${name}`);
}).listen(3000);
console.log(`Hello ${name}! 127.0.0.1:3000`);
console.log(str3);