var fs = require('fs');
var url = require('url');
var path = require('path');

fileExtensions = {
    '.html':'text/html',
    '.css':'text/css',
    '.js':'text/javascript',
    '.jpg':'image/jpg'
};

function determineType(ext){
	var type;
	for (var i in fileExtensions){
		if(i === ext){
			type = fileExtensions[i];
			break;
		}
	};
	return type;
}

function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request received for "+pathname);

		if(request.url === '/'){
			response.writeHead(200, {"Content-Type": "text/html"});
			console.log(process.cwd());
			fs.createReadStream(process.cwd()+'/staticAssets/index.html').pipe(response);
		} else {
			var ext = path.extname(process.cwd()+pathname);
			console.log(process.cwd());
			fs.access(process.cwd()+pathname, fs.R_OK, function(error){
				if(error){console.log('file does not exist')};
				response.writeHead(200, {'Content-Type': determineType(ext)});
				fs.createReadStream(process.cwd()+pathname).pipe(response);
				console.log('served '+request.url);	
			})
		}
};

module.exports = onRequest;

//but not caching because always 200 or is it me that has to change that, 
//and not showing my image downloads in network..