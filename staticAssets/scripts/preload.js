var preload = {
	init: function(){

		var loadImage = function(){
			var picture = document.createElement('img');
			picture.src = '/staticAssets/images/cursor1.png';
		}

		loadImage();
	}
};

preload.init();