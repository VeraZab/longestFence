(function (){
	var data = require('./data');
	var slider = document.getElementById('fences');
	var windowMiddle = (slider.offsetWidth)/2;
	var end, originals, imageSize, numImagesPerPage, clones, images, selected,
	imageWidth, imageHeight;
	var about = document.getElementById('about');

	function preload(){
		var loader = document.createElement('img');
		loader.setAttribute('id', 'loader');
		loader.src = 'images/loader.gif';
		fences.appendChild(loader);

		function preloadImage(x){
			var picture = loadImage(x);

			if(x===195){
				picture.onload = function(){
					fences.removeChild(loader);
					setTimeout(function(){sliderStart()}, 2);
				};
			}
		};

		for(var x = 1; x<=195; x++){
			preloadImage(x);
		};
	};

	function loadImage(x){
		var picture = document.createElement('img');
		picture.src = '/images/'+x+'.jpg';
		return picture;
	};

	var count = 0;
	function aboutClick(){
		about.addEventListener('click', function(){
			if(count%2){
				count++;
				about.style.height = '5%';
			}else{
				count++;
				about.style.height = '100%';
			}
		});
	};

	function sliderStart(){
		prepareInfiniteScroll();

		slider.addEventListener('scroll', function(){
			clearSelection();
			scrolling();
		});

		document.getElementsByTagName('input')[0].addEventListener('keydown', function(e){
			findSearchedCountry(e, this.value);
		}, false);


		document.getElementById('add').addEventListener('click', function(){
			changeImageSize('add');
		});

		document.getElementById('sub').addEventListener('click', function(){
			changeImageSize('substract');
		});

		window.addEventListener('resize', function(){
			windowResize();
		});

		slider.addEventListener('click', function(e){
			if(e.target && e.target.nodeName == "IMG") {
				focussing(e.target);
			};
		});

				
	};

	function prepareInfiniteScroll(){
		function createImage(x){
			var picture = loadImage(x);
			picture.classList.add('original');
			var uniqueClass = data.countries[x-1][0];
			picture.classList.add(uniqueClass);
			var a = document.createElement('a');
			a.addEventListener('click', function(){
				window.open(data.sources[x-1], '_blank');
			});
			a.addEventListener('mouseover', function(e){
				var div = document.createElement('div');
				div.setAttribute('id', 'display');
				div.textContent = e.target.classList.item(1);
				var marginLeft = e.clientX;
				var marginTop = e.clientY;
				console.log(marginTop, marginLeft);
				div.style.marginTop = marginTop;
				div.style.marginLeft = marginLeft;
				div.style.zIndex = '100';
				document.body.appendChild(div);
			});
			a.addEventListener('mouseout', function(){
				var el = document.getElementById('display');
				el.parentNode.removeChild(el);
			});
			a.appendChild(picture);
			slider.appendChild(a);
		};

		for(var x = 1; x<=195; x++){
			createImage(x);
		};

		originals = document.getElementsByClassName('original');
		imageWidth = document.images[0].clientWidth;
		numImagesPerPage = Math.round(slider.offsetWidth/imageWidth)+1;
		clones = document.getElementsByClassName('clone');

		appendClones();

		var position = originals[0].offsetLeft;
		scrolling(position);
	};

	function appendClones(selectedImage){
		var lastOriginalImageIndex = originals.length-1;
		var lastCloneIndex = lastOriginalImageIndex-numImagesPerPage;

		function createClone(x){
			var imageClass = originals[x].classList[1];
			var clone = originals[x].cloneNode(true);
			clone.removeAttribute('class');
			clone.setAttribute('class', 'clone '+imageClass);
			var a = document.createElement('a');
			a.addEventListener('click', function(){
				window.open(data.sources[x], '_blank');
			});
			a.appendChild(clone);

			if(selectedImage!==undefined&&selectedImage.classList.contains('clone')){
				clone.classList.add('selected');
			}

			return a;
		};

		while (clones.length !== 0) {
			clones[0].parentNode.removeChild(clones[0]);
		};

		for(var x = lastOriginalImageIndex; x>lastCloneIndex; x--){
			slider.insertBefore(createClone(x), slider.childNodes[0]);
		};

		images = document.images;
		if(images[2].classList.contains('selected')){
			imageHeight = images[3].clientHeight;
			imageWidth = images[3].clientWidth;
		}else{
			imageHeight = images[2].clientHeight;
			imageWidth = images[2].clientWidth;
		}
		end = Math.round(slider.scrollWidth-slider.offsetWidth);
	};

	function changeImageSize(change){
		var largest = 330;
		var smallest = 100;
		var ratio, targetHeight, targetWidth;
		var selectedImage = [];

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
		};

		targetWidth = imageWidth*ratio;

		for(var x=0; x<images.length; x++){
			if(images[x].id !== 'marker' && images[x].id !== 'add' && images[x].id !== 'sub'){
				images[x].style.width = targetWidth+'px';
				images[x].style.height = targetHeight+'px';
				if(images[x].classList.contains('selected')){
					selectedImage.push(images[x]);
				};
			}
		};

		appendClones(selectedImage[0]);

		if(document.getElementsByClassName('selected').length){
			position = centeredPosition(document.getElementsByClassName('selected')[0]);
			scrolling(position);
		};
	};

	function findSearchedCountry(e, v){
		clearSelection();

		if(e.keyCode === 13){
		 	document.getElementsByTagName('input')[0].value = '';
		 	var search = v.split(' ').join('_').toLowerCase();
		 	var selectedCountry = document.getElementsByClassName(search)[0];
		 	focussing(selectedCountry);
		};

	};

	function focussing(x){
		clearSelection();
		var imageClass= x.classList[1];
		var indexOfSelectedImageInFullArray = Array.prototype.indexOf.call(images, x);
		var indexOfSelectedImageInOriginalsArray;
		var position;
		var image;

		function clonesCenteringAdjustmentNeeded(img){
			var index = Array.prototype.indexOf.call(images, img);
			var middleClone = clones.length/2;
			if(index<=middleClone){
				return true;
			}else{
				return false;
			}
		};

		if(x.classList.contains('clone')){
			var originalImage = document.getElementsByClassName(imageClass)[1];
			var index = Array.prototype.indexOf.call(originals, originalImage);

			if(clonesCenteringAdjustmentNeeded(x)){

				image = document.getElementsByClassName(imageClass)[1];

			}else{

				image = x;
			}
		}else{

			image = x;
			var index = Array.prototype.indexOf.call(originals, image);
		}
		image.style.width = imageWidth*1.1+'px';
		image.style.height = imageHeight*1.1+'px';
		image.classList.add('selected');
		image.classList.add('ignoreScroll');
		selected = document.getElementsByClassName('selected');
		position = centeredPosition(image);
		scrolling(position);
	};

	function scrolling(position){
		function userScroll(){
			if(slider.scrollLeft === 0){
				var cloneClass = clones[0].classList[1];
				var targetImage = document.getElementsByClassName(cloneClass)[1];
				position = targetImage.offsetLeft;
				slider.scrollLeft = position;
			}else if(slider.scrollLeft >= end){
				var targetImage = clones[clones.length-1];
				var imageSize = targetImage.clientWidth;
				position = (targetImage.offsetLeft)-(slider.offsetWidth-imageSize);
				slider.scrollLeft = position;
			}
			requestAnimationFrame(userScroll);
		};

		function appScroll(){
			slider.scrollLeft = position;
		};

		if(position !== undefined){
			appScroll();
		}else{
			userScroll();
		};
	};

	function centeredPosition(x){
		console.log(x, selected);
		var position = (x.offsetLeft)-windowMiddle+selected[0].clientWidth/2;
		console.log(position);
		return position;
	};

	function clearSelection(){
		if(!document.getElementsByClassName('ignoreScroll').length){
			var selected = document.getElementsByClassName('selected');
			if(selected.length){
				selected[0].style.width=imageWidth+'px';
				selected[0].style.height=imageHeight+'px';
				selected[0].classList.remove('selected');
			};
		}else{
			document.getElementsByClassName('ignoreScroll')[0].classList.remove('ignoreScroll');
		}
	};

	function windowResize(){
		appendClones();
	};

	aboutClick();
	preload();

})();

