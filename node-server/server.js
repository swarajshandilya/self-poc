var http = require('http');
const fs = require('fs');
var server = http.createServer(function(request, response){
console.log('got a request2');
response.writeHead(200, {"Content-Type": "text/html"});
fs.createReadStream('./server-files/index.html').pipe(response);
//response.write('this is your response');
//response.end();
});
server.listen(3000);