var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	fs.readFile('./images/1.jpg', function(error, data){
		if (error) throw error;
		response.write(data, 'binary');
		response.end();
	});
	
}).listen(8888);

