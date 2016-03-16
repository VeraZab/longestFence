var model = require('./model');

var controller = {
	init: function(){
		var view = require('./view');
		view.init(20);
	},
	prepareInfiniteScroll: function(y){
		var slider = document.getElementById('fences');

		for(var x = 0; x<=y; x++){
			createImage(x);
		};

		function createImage(x){
			var img = document.createElement('div');
			img.setAttribute('class', 'image');
			img.classList.add('original');
			var uniqueClass = getImageClass(x);
			img.classList.add(uniqueClass);
			img.innerHTML = x;
			slider.appendChild(img);
		};

		function getImageClass(x){
			if(x===10){
				return model.countries[0];
			}else if(x===11){
				return model.countries[1];
			}else if(x===12){
				return model.countries[2];
			}else{
				return x;
			}
		};

		this.appendClones();

		var startImage = document.getElementsByClassName('0')[0];
		this.scrollTo('init', startImage);
	},
	appendClones: function(){
		var slider = document.getElementById('fences');
		var images = document.getElementsByClassName('image');
		var imageSize = images[0].clientWidth;
		var numImagesPerPage = Math.round(slider.offsetWidth/imageSize)+1;
		var lastOriginalImageIndex = document.getElementsByClassName('original').length-1;
		var lastCloneIndex = lastOriginalImageIndex-numImagesPerPage;
		var clones = document.getElementsByClassName('clone');
		var originals = document.getElementsByClassName('original');

		function createClone(x){
			var clone = originals[x].cloneNode(true);
			clone.classList.remove('original');
			clone.classList.add('clone');
			return clone;
		}

		while (clones.length !== 0) {
			clones[0].parentNode.removeChild(clones[0]);
		}

		for(var x = lastOriginalImageIndex; x>lastCloneIndex; x--){
			slider.insertBefore(createClone(x), slider.childNodes[0]);
		}
	},
	userScrolling: function(){
		var slider = document.getElementById('fences');
		var clones = document.getElementsByClassName('clone');
		var originals = document.getElementsByClassName('original');
		var end = Math.round(slider.scrollWidth-slider.offsetWidth);

		this.clearSelection();

		if(slider.scrollLeft === 0){
			var cloneClass = clones[0].classList[1];
			var targetImage = document.getElementsByClassName(cloneClass)[1];
			this.scrollTo('scroll', targetImage);
		}else if(slider.scrollLeft === end){
			var targetImage = clones[clones.length-1];
			this.scrollTo('scroll', targetImage);
		}
	},
	changeImageSize: function(change){
		var images = document.getElementsByClassName('image');
		var imageWidth = images[0].clientWidth;
		var imageHeight = images[0].clientHeight;
		var largest = document.getElementById('container').clientHeight;
		var smallest = 60;
		var ratio;
		var targetHeight;
		var targetWidth;

		if(change==='add'){
			ratio = 1.5;
			targetHeight = imageHeight*ratio;
			if (targetHeight>largest){
				targetHeight=largest;
				ratio = targetHeight/imageHeight;
			}
		}else if(change==='substract'){
			ratio = 0.75;
			targetHeight = imageHeight*ratio;
			if(targetHeight<smallest){
				targetHeight=smallest;
				ratio = targetHeight/imageHeight;
			}
		}

		targetWidth = imageWidth*ratio;

		for(var x=0; x<images.length; x++){
			images[x].style.width = targetWidth+'px';
			images[x].style.height = targetHeight+'px';
		}

		this.appendClones();

		var selectedImage = document.getElementsByClassName('selected');

		if(selectedImage.length === 1){
			this.scrollTo('resize', selectedImage[0]);
		}
	},
	findSearchedCountry: function(e, v){
		this.clearSelection();

		if(e.keyCode === 13){
		 	document.getElementsByTagName('input')[0].value = '';
		 	var images = document.getElementsByClassName('image');
		 	var selectedCountry = document.getElementsByClassName(v.toLowerCase())[0];
		 	this.focussing(selectedCountry);
		}
		//else fuzzy search
	},
	focussing: function(x){
		var images = document.getElementsByClassName('image');
		var indexOfSelectedImage = Array.prototype.indexOf.call(images, x);
		x.classList.add('selected');
		this.scrollTo('focussing', x);
		var link = model.sources[indexOfSelectedImage];
		console.log(link);
	},
	scrollTo: function(trigger, image){
		var images = document.getElementsByClassName('image');
		var indexOfImage = Array.prototype.indexOf.call(images, image);
		var slider = document.getElementById('fences');
		var imageClass = image.classList[2];
		var position;

		function clonesCenteringAdjustmentNeeded(){
			var middleClone = document.getElementsByClassName('clone').length/2;
			if(indexOfImage<=middleClone&&indexOfImage!==-1){
				//check why that -1 is needed
				return true;
			}else{
				return false;
			}
		};

		function centeredPosition(x){
			var windowMiddle = (slider.offsetWidth)/2;
			var imageHalfWidth = (x.clientWidth)/2;
			var position = (x.offsetLeft)-windowMiddle+imageHalfWidth;
			return position;
		};

		switch(trigger){
			case 'focussing':
				if(clonesCenteringAdjustmentNeeded()){
					image = document.getElementsByClassName(imageClass)[1];
				}

				image.classList.toggle('ignoreScrollMarker');
				position = centeredPosition(image);
				slider.scrollLeft = position;
				image.classList.toggle('ignoreScrollMarker');
				break;
			case 'resize':
				image.classList.toggle('ignoreScrollMarker');
				position = centeredPosition(image);
				slider.scrollLeft = position;
				image.classList.toggle('ignoreScrollMarker');
				break;
			case 'init':
				position = image.offsetLeft;
				slider.scrollLeft = position;
				break;
			case 'scroll':
				var end = Math.round(slider.scrollWidth-slider.offsetWidth);
				var ignore = document.getElementsByClassName('ignoreScrollMarker');

				if(slider.scrollLeft === 0 && ignore.length===0){
					position = image.offsetLeft;
				}else if(slider.scrollLeft === end && ignore.length===0){
					var imageSize = image.clientWidth;
					position = (image.offsetLeft)-(slider.offsetWidth-imageSize);
				}
				slider.scrollLeft = position;
				break;
		};

	},
	clearSelection: function(){
		var ignore = document.getElementsByClassName('ignoreScrollMarker');
		var selectedImage = document.getElementsByClassName('selected');
		if(ignore.length===0 && selectedImage.length!==0){
			console.log('clearing');
			selectedImage[0].classList.remove('selected');
		}
	},
	windowResize: function(){
		this.appendClones();
	}
}

module.exports = controller	;
controller.init();