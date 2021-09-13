var fs = require('fs');

fs.rename('test\\test.txt','test\\text.txt',function(err){

    if(err) throw err;
    console.log('File Renamed!');
});