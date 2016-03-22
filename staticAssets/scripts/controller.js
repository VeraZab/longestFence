var model = require('./model');

var controller = {
	init: function(){
		var view = require('./view');
		view.init();
	},
	prepareInfiniteScroll: function(){

		var slider = document.getElementById('fences');

		for(var x = 1; x<=20; x++){
			createImage(x);
		};

		function createImage(x){
			var picture = document.createElement('img');
			picture.src = '/images/'+x+'.png';
			picture.classList.add('original');
			var uniqueClass = getImageClass(x);
			picture.classList.add(uniqueClass);
			slider.appendChild(picture);
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

		var position = document.getElementsByClassName('original')[0].offsetLeft;
		this.scrolling(position);
	},
	appendClones: function(selectedImage){
		var slider = document.getElementById('fences');
		var imageSize = document.images[0].clientWidth;
		var numImagesPerPage = Math.round(slider.offsetWidth/imageSize)+1;
		var lastOriginalImageIndex = document.getElementsByClassName('original').length-1;
		var lastCloneIndex = lastOriginalImageIndex-numImagesPerPage;
		var clones = document.getElementsByClassName('clone');
		var originals = document.getElementsByClassName('original');

		function createClone(x){
			var imageClass = originals[x].classList[1];;
			var clone = originals[x].cloneNode(true);
			clone.removeAttribute('class');
			clone.setAttribute('class', 'clone '+imageClass);

			if(selectedImage!==undefined&&selectedImage.classList.contains('clone')){
				clone.classList.add('selected');
			}

			return clone;
		}

		while (clones.length !== 0) {
			clones[0].parentNode.removeChild(clones[0]);
		}

		for(var x = lastOriginalImageIndex; x>lastCloneIndex; x--){
			slider.insertBefore(createClone(x), slider.childNodes[0]);
		}

	},
	changeImageSize: function(change){
		var images = document.images;
		var largest = document.getElementById('container').clientHeight;
		var smallest = 60;
		var selected = document.getElementsByClassName('selected');
		var ratio, targetHeight, targetWidth, imageHeight, imageWidth;
		var selectedImage = [];

		if(images[0].classList.contains('selected')){
			imageHeight = images[1].clientHeight;
			imageWidth = images[1].clientWidth;
		}else{
			imageHeight = images[0].clientHeight;
			imageWidth = images[0].clientWidth;
		}

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
			if(images[x].classList.contains('selected')){
				selectedImage.push(images[x]);
			}
		}

		this.appendClones(selectedImage[0]);

		if(document.getElementsByClassName('selected').length){
			position = this.centeredPosition(document.getElementsByClassName('selected')[0]);
			this.scrolling(position);
		}
	},
	findSearchedCountry: function(e, v){
		this.clearSelection();

		if(e.keyCode === 13){
		 	document.getElementsByTagName('input')[0].value = '';
		 	var selectedCountry = document.getElementsByClassName(v.toLowerCase())[0];
		 	this.focussing(selectedCountry);
		}
		//else fuzzy search
	},
	clonesCenteringAdjustmentNeeded: function(img){
		var images = document.images;
		var index = Array.prototype.indexOf.call(images, img);
		var middleClone = document.getElementsByClassName('clone').length/2;
		if(index<=middleClone){
			return true;
		}else{
			return false;
		}
	},
	focussing: function(x){
		this.clearSelection();
		var imageClass= x.classList[2];
		var images = document.images;
		var originals = document.getElementsByClassName('original');
		var indexOfSelectedImageInFullArray = Array.prototype.indexOf.call(images, x);
		var indexOfSelectedImageInOriginalsArray;
		var position;
		var image;

		if(x.classList.contains('clone')){
			var originalImage = document.getElementsByClassName(imageClass)[1];
			var index = Array.prototype.indexOf.call(originals, originalImage);
			indexOfSelectedImageInOriginalsArray = index;

			if(this.clonesCenteringAdjustmentNeeded(x)){
				image = document.getElementsByClassName(imageClass)[1];

			}else{
				image = x;
			}
		}else{
			image = x;
			var index = Array.prototype.indexOf.call(originals, image);
			indexOfSelectedImageInOriginalsArray = index;
		}

		position = this.centeredPosition(image);
		this.scrolling(position);

		var link = model.sources[indexOfSelectedImageInOriginalsArray];
		console.log(link);
	},
	scrolling: function(position){
		var slider = document.getElementById('fences');
		var clones = document.getElementsByClassName('clone');
		var originals = document.getElementsByClassName('original');
		var end = Math.round(slider.scrollWidth-slider.offsetWidth);
		var images = document.images;

		function userScroll(){

			if(slider.scrollLeft === 0){
				var cloneClass = clones[0].classList[2];
				var targetImage = document.getElementsByClassName(cloneClass)[1];
				position = targetImage.offsetLeft;
				slider.scrollLeft = position;
			}else if(slider.scrollLeft === end){
				var targetImage = clones[clones.length-1];
				var imageSize = targetImage.clientWidth;
				position = (targetImage.offsetLeft)-(slider.offsetWidth-imageSize);
				slider.scrollLeft = position;
			}
		}

		function appScroll(){
			slider.scrollLeft = position;
		}

		if(position !== undefined){
			appScroll();
		}else{
			userScroll();
		}
	},
	centeredPosition: function(x){
		x.classList.add('selected');
		x.classList.add('ignoreScroll');
		var slider = document.getElementById('fences');
		var windowMiddle = (slider.offsetWidth)/2;
		var imageHalfWidth = (x.clientWidth)/2;
		var position = (x.offsetLeft)-windowMiddle+imageHalfWidth;
		return position;
	},
	clearSelection: function(){
		if(!document.getElementsByClassName('ignoreScroll').length){
			var selected = document.getElementsByClassName('selected');
			if(selected.length){
				selected[0].classList.remove('selected');
			}
		}else{
			document.getElementsByClassName('ignoreScroll')[0].classList.remove('ignoreScroll');
		}
	},
	windowResize: function(){
		this.appendClones();
	}
}



module.exports = controller;
// controller.init();