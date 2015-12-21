var http = require('http');

/*
http.createServer(function(request, response) {
    response.writeHead(200);
    response.end('Hello, this is Dog.');
}).listen(8080);
*/

var server =  http.createServer().listen(8080);
server.on('request', function(request, response) {
    response.writeHead(200);
    response.end('Hello, this is Dog.');
});

console.log('listening on 8080');
