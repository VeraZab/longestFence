function displayImages(){
	for(var x=1; x<=3; x++){
		createImage(x);
	}
} 

function createImage(number){
	var img = document.createElement('img');
	img.style.width = '250px';
	img.style.height = '100px';
	img.src = './staticAssets/images/'+number+'.jpg';
	document.getElementById('images').appendChild(img);
}

window.onload = function(){
	displayImages();
}