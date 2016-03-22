var start = new Date().getTime();
var controller = require('./controller.js');

function loadImage(x){
	var picture = document.createElement('img');
	picture.src = '/images/'+x+'.png';
	console.log(x);
	if(x===20){
		var end = new Date().getTime();
		console.log('finished', (end-start)/1000);
	}
}

for(var x = 1; x<=20; x++){
	loadImage(x);
}