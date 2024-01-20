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

console.log("stream test done");

var writeStr = fs.createWriteStream('t.txt')
var data = 'genshin impact very good'

writeStr.write(data, 'utf8')
writeStr.end();

writeStr.on('finish', function () {
    console.log("写入完成");
});

writeStr.on('error', function (err) {
    console.log(err.stack);
});
