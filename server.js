var http = require('http');
var onRequest = require(process.cwd()+'/routes');

var port = process.argv[2] || 8888;

function start(){
	http.createServer(onRequest).listen(port);
	console.log("Server has started.");
}
console.log(process.argv[2]);
console.log(process.cwd());
console.log(port);

module.exports = start;
