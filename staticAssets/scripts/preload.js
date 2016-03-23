var start = new Date().getTime();
var controller = require('./controller');

var loader = document.createElement('img');
loader.setAttribute('id', 'loader');
loader.src = 'images/loader.gif';
document.getElementById('fences').appendChild(loader);

function loadImage(x){
	var picture = document.createElement('img');
	picture.src = '/images/'+x+'.png';
	console.log(x);

	if(x===20){
		picture.onload = function(){
			document.getElementById('fences').removeChild(loader);
			var end = new Date().getTime();
			console.log('finished', (end-start)/1000);
			setTimeout(function(){controller.init();}, 3);
		}
	}
}

for(var x = 1; x<=20; x++){
	loadImage(x);
}