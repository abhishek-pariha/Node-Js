var http = require("http");

http.createServer(function(req,rs){
    
    if(req.url == "/student"){
        rs.end("Hey Student Welcome");
    }
    else if(req.url == "/admin"){
        rs.end("Hey Admin Welcome");
    }
    else {
        rs.end("This is my main page 0215");
    }
}).listen(3000);
console.log("program Running");