var fs = require('fs');

fs.unlink('test\\text.txt',function(err){
    if(err) throw err;
    console.log('Delete the file!');
});