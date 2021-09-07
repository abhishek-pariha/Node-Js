var http = require("http");
var fib = function(n) {
    if (n === 1) {
      return [0, 1];
    } else {
      var arr = fib(n - 1);
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
      return arr;
    } 
  };
http.createServer(function(req,res){
    res.end();s
}).listen(8080);
console.log(fib(8));