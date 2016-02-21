var http = require('http');
var onRequest = require('./routes');

function start(){
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

module.exports = start;
