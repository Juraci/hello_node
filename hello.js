var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.end('Hello, this is Dog.');
}).listen(8080);

console.log('listening on 8080');
