var fs = require('fs')
var data = '';

var readStr = fs.createReadStream('t.txt')
readStr.setEncoding('utf8')

readStr.on('data', function (chunk) {
    data += chunk;
});

readStr.on('end', function () {
    console.log(data + " wow");
});

readStr.on('error', function (err) {
    console.log(err.stack);
});

console.log("程序执行完毕");