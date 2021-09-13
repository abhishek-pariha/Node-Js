var fs = require('fs');

fs.readFile('test\\demo.txt','utf-8',function(err, data){
    if(err) throw err;
    console.log("Read the file \n"+data);
});