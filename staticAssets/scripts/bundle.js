(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.controller = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var model = require('./model');
// requestAnimationFrame
// Reflows and Repaints

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
			requestAnimationFrame(userScroll);
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
},{"./model":2,"./view":4}],2:[function(require,module,exports){
var model = {
	countries: [
		'canada',
		'ukraine',
		'u.s.a'
	],
	sources: [
		'https://www.google.ca/maps/search/google+maps/@45.4579956,-73.6406172,3a,75y,30.74h,87.2t/data=!3m7!1e1!3m5!1stJRoAYkry6Jzc_I72Mfzkg!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3DtJRoAYkry6Jzc_I72Mfzkg%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D97.5%26pitch%3D-18.999996!7i13312!8i6656',
		'https://www.google.ca/maps/search/google+maps/@45.4793767,-73.4695146,3a,75y,315.01h,87.11t/data=!3m7!1e1!3m5!1sgFyj-_XPD89XuwaDeCFhkg!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3DgFyj-_XPD89XuwaDeCFhkg%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D349.5%26pitch%3D-3!7i13312!8i6656',
		'https://www.google.ca/maps/search/google+maps/@45.5664567,-73.5684767,3a,75y,239.6h,82.47t/data=!3m8!1e1!3m6!1s-p2jtABzslyA%2FUu2vNyo8LaI%2FAAAAAAAKULo%2FPHYUtqb-pCE!2e4!3e11!6s%2F%2Flh6.googleusercontent.com%2F-p2jtABzslyA%2FUu2vNyo8LaI%2FAAAAAAAKULo%2FPHYUtqb-pCE%2Fw203-h101-n-k-no%2F!7i10000!8i5000'
	]
}

module.exports = model;
},{}],3:[function(require,module,exports){
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
},{"./controller":1}],4:[function(require,module,exports){
var controller = require('./controller');

var view = {
	init: function(){

		controller.prepareInfiniteScroll();

		document.getElementById('fences').addEventListener('scroll', function(){
			controller.clearSelection();
			controller.scrolling();
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
},{"./controller":1}]},{},[3])(3)
});