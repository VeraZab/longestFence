var countries = require('./countries').countries;
var animateMap = require('./map');

var slide = function(){
	var lead = document.getElementById('lead');
	var move = 0;
	var change = 0;

	animateMap(change);
	
	setInterval(function(){	
		move -= 1 ;
		lead.style.marginLeft = parseInt(lead.style.marginLeft)-1+'px';

		if((move%360===0)){
			if(change<2){
				change++;	
				animateMap(change);
				
			}else{
				change=0;
				animateMap(change);
			}
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

module.exports = slide;