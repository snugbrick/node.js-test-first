function say(value) {
    console.log(value)//打印函数
}
function excute(func, value) {
    func(value)
}
excute(say, "hi world")
//=================================================
var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        router(pathname);

        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;

function router(pathname) {
    console.log("About to route a request for " + pathname);
}

exports.router = router;

start(router.route);

console.log(__dirname);
console.log(__filename);

function latePri(value) {
    console.log(value)
}
setTimeout(latePri, 2000, "hi world")

var util = require('util'); 
function Base() { 
    this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
    console.log('Hello ' + this.name); 
    }; 
} 
Base.prototype.showName = function() { //扩展类
    console.log(this.name);
}; 
function Sub() { 
    this.name = 'sub'; 
} 
util.inherits(Sub, Base);//将Base继承给Sub 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello(); 
console.log(objSub); 
//==========================
function Person() { 
    this.name = 'byvoid'; 
    this.toString = function() { 
    return this.name; 
    }; 
} 
var obj = new Person(); 
console.log(util.inspect(obj)); //将obj转换为字符串
Aonsole.log(util.inspect(obj, true)); 