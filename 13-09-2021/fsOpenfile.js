const fs = require('fs');
fs.open('test\\test.txt','r',function(err,file){
    if(err) throw err;
    console.log('File open in write mode!');
});