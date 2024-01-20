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
        response.write("sb git");
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