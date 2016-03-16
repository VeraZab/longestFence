var controller = require('./controller');

var view = {
	init: function(y){

		controller.prepareInfiniteScroll(y);

		document.getElementById('fences').addEventListener('scroll', function(){
			controller.userScrolling();
		});

		document.getElementsByTagName('input')[0].addEventListener('keydown', function(e){
			controller.findSearchedCountry(e, this.value);
		}, false);


		document.getElementById('add').addEventListener('click', function(){
			controller.changeImageSize('add');
		});

		document.getElementById('substract').addEventListener('click', function(){
			controller.changeImageSize('substract');
		});

		window.addEventListener('resize', function(){
			controller.windowResize();
		});

		var images = document.getElementsByClassName('image');
		for(var x = 0; x<images.length; x++){
			images[x].addEventListener('click', function(){
				controller.focussing(this);
			});
		}
	}
}

module.exports = view;