(function (){

	var slider = document.getElementById('fences');
	var windowMiddle = (slider.offsetWidth)/2;
	var end, originals, imageSize, numImagesPerPage, clones, images, selected,
	imageWidth, imageHeight;

	function preload(){
		var start = new Date().getTime();
		var loader = document.createElement('img');
		loader.setAttribute('id', 'loader');
		loader.src = 'images/loader.gif';
		fences.appendChild(loader);

		function preloadImage(x){
			var picture = loadImage(x);

			if(x===10){
				picture.onload = function(){
					fences.removeChild(loader);
					var end = new Date().getTime();
					setTimeout(function(){sliderStart()}, 2);
				};
			}
		};

		for(var x = 1; x<=10; x++){
			preloadImage(x);
		};
	};

	function loadImage(x){
		var picture = document.createElement('img');
		picture.src = '/images/'+x+'.jpg';
		return picture;
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

		document.getElementById('substract').addEventListener('click', function(){
			changeImageSize('substract');
		});

		window.addEventListener('resize', function(){
			windowResize();
		});

		for(var x = 0; x<document.images.length; x++){
			document.images[x].addEventListener('click', function(){
				focussing(this);
			});
		};
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
			a.appendChild(picture);
			slider.appendChild(a);
		};

		for(var x = 1; x<=10; x++){
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
		if(images[0].classList.contains('selected')){
			imageHeight = images[1].clientHeight;
			imageWidth = images[1].clientWidth;
		}else{
			imageHeight = images[0].clientHeight;
			imageWidth = images[0].clientWidth;
		}
		end = Math.round(slider.scrollWidth-slider.offsetWidth);
	};

	function changeImageSize(change){
		var largest = document.getElementById('container').clientHeight*0.6;
		var smallest = document.getElementById('container').clientHeight*0.1;
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
			images[x].style.width = targetWidth+'px';
			images[x].style.height = targetHeight+'px';
			if(images[x].classList.contains('selected')){
				selectedImage.push(images[x]);
			};
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
		//else fuzzy search
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
		x.classList.add('selected');
		x.classList.add('ignoreScroll');
		selected = document.getElementsByClassName('selected');
		x.style.width = imageWidth*1.1+'px';
		x.style.height = imageHeight*1.1+'px';
		var imageHalfWidth = (imageWidth*1.1)/2;
		var position = (x.offsetLeft)-windowMiddle+imageHalfWidth;
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

	var data = {
		countries: [
			['indonesia', 'jakarta'],
			['iran','tehran'],
			['iraq','baghdad'],
			['ireland','dublin'],
			['mexico', 'mexico city'],
			['italy', 'rome'],
			['south_sudan', 'juba'],
			['mongolia', 'ulaanbaatar'],
			['ecuador', 'quito'],
			['south_korea', 'seoul']
		],
		sources: [
			'https://www.google.ca/maps/@-6.1722729,106.8130564,3a,90y,165.99h,60.31t/data=!3m6!1e1!3m4!1sndCK9RajrKcBlS23REjO6A!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/place/Tehran,+Iran/@35.6762219,51.4221819,3a,37.5y,203.74h,96.35t/data=!3m8!1e1!3m6!1s-mNZa1NWN1OU%2FVrkQygtHAhI%2FAAAAAAAAD4g%2Fhzg6SLHKoM0!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F-mNZa1NWN1OU%2FVrkQygtHAhI%2FAAAAAAAAD4g%2Fhzg6SLHKoM0%2Fw203-h101-n-k-no%2F!7i7168!8i3584!4m2!3m1!1s0x3f8e00491ff3dcd9:0xf0b3697c567024bc!6m1!1e1',
			'https://www.google.ca/maps/@33.3123817,44.45092,3a,90y,206.19h,64.6t/data=!3m7!1e1!3m5!1s-9sZBSvtVpQw%2FUvj9T0-IrII%2FAAAAAAAAAAA%2FuJRLDvw05DM!2e4!3e11!7i4000!8i2000!6m1!1e1',
			'https://www.google.ca/maps/@53.3455096,-6.2437213,3a,90y,280.1h,73.05t/data=!3m6!1e1!3m4!1sArxteFIwGoeKh51bYgQChg!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@19.4313199,-99.1362153,3a,75y,189.34h,78.15t/data=!3m6!1e1!3m4!1sw24Nz0L7VIndhuWkvhYzpA!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@41.883048,12.5890732,3a,90y,284.42h,71.98t/data=!3m6!1e1!3m4!1sBhles1abvVdnXPtl9BpyZQ!2e0!7i13312!8i6656',
			'https://www.google.ca/maps/place/Juba,+South+Sudan/@4.860203,31.6048497,3a,75y,181h,90t/data=!3m8!1e2!3m6!1s-j0CsuMirsrg%2FVQslPcjKtEI%2FAAAAAAAAHdI%2FhzlPgEmE6-Y!2e4!3e12!6s%2F%2Flh5.googleusercontent.com%2F-j0CsuMirsrg%2FVQslPcjKtEI%2FAAAAAAAAHdI%2FhzlPgEmE6-Y%2Fs203-k-no%2F!7i4608!8i3456!4m2!3m1!1s0x1712804abcf3b5f9:0xd89839286346c433!6m1!1e1',
			'https://www.google.ca/maps/@47.9116453,106.8366065,3a,37.5y,349.36h,76.1t/data=!3m6!1e1!3m4!1sgxqt3yhRsG2QoLpz6i1ddA!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@-0.113544,-78.4654784,3a,90y,315.56h,68.49t/data=!3m6!1e1!3m4!1s2KAXujuu6xx5qLz4aURu0A!2e0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@37.4998815,127.1517875,3a,30y,27.25h,85t/data=!3m6!1e1!3m4!1s3bYZA_VP-5fQz3GGd44ZcA!2e0!7i13312!8i6656!6m1!1e1'
		]
	};

	preload();

})();

