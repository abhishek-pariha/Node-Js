var fs = require('fs');

fs.appendFile('test\\test.txt','\n Hello Node JS1',function(err){
    if(err) throw err;
    console.log("File content updated");
});