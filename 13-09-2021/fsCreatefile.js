var fs = require('fs');
fs.writeFile('test\\test.txt','Hello World!',function (err){
    if(err) throw err;
    console.log('File Created!');
});