var http = require("http");
http.createServer(function(req,res){
    res.end("Hello world 121");
}).listen(3000);
console.log("Hello World!! http://127.0.0.1:3000");