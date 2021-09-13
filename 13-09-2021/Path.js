var path = require('path');
console.log('normalization\n'+path.normalize('/abhishek/..'));
console.log('join path\n'+path.join('/test','technolabs','node/newfolder','tab','..'));
console.log('resolve\n:'+path.resolve('path.js'));
console.log('ext name\n'+path.extname('Path.js'));