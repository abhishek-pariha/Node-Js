var fs = require('fs');
fs.stat('test\\demo.txt',function(err,stats){
    if(err)
    {
        return console.error(err);
    }
    console.log(stats);
    console.log("isFile ?" + stats.isFile());
    console.log("isDirectory ?" + stats.isDirectory());
    console.log(__filename);
    console.log(__dirname);
});
