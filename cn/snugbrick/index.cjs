console.time('1')
var mAdd = require('./2t.js')
var fs = require('fs')
var http = require('http')
var events = require('events');
var bufTest=require('./bufferTest.js')
var streamTest=require('./stream.cjs')
var funcTest=require('./funcTest.cjs')
console.time('2')
funcTest
streamTest
bufTest

var eventEmitter = new events.EventEmitter();
var eventHandler = function () {
    console.log("hi")
}
eventEmitter.on('eventName', eventHandler);
eventEmitter.on('data_received', function () {
    console.log('data recieved :)');
});

eventEmitter.emit('eventName');
eventEmitter.emit('data_received');
//=========================================
fs.readFile("t.txt", function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
})
mAdd.add(1)

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data.toString());
    res.end();
});
console.timeEnd('1')
console.timeEnd('2')