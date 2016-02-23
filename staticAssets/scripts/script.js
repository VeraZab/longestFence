function displayImages(){
	for(var x=1; x<=3; x++){
		createImage(x);
	}
} 

function createImage(number){
	var img = document.createElement('img');
	img.style.width = '360px';
	img.style.height = '200px';
	img.src = './staticAssets/images/'+number+'.jpg';
	document.getElementById('images').appendChild(img);
	document.getElementById('lead').style.marginLeft = '300px';
}

function slide(){
	var marker = document.getElementById('marker');
	var lead = document.getElementById('lead');
	var move = 360;
	
	setInterval(function(){	
		move -= 1 ;
		lead.style.marginLeft = move+'px';
		if((move%60===0)){
			for(var y = 0; y<3; y++){
				cloneNode(y);
			}
		}
	}, 50);
}

function cloneNode(index){
	var child = document.images[index];
	var parent = child.parentNode;
	var clone = child.cloneNode(true);
	parent.appendChild(clone);
	document.getElementById('images').style.width = document.getElementById('images').clientWidth+600+'px';

}

window.onload = function(){
	displayImages();
	slide();
}

// http://examples.webglearth.com/#helloworld
