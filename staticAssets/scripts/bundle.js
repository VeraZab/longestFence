(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.controller = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

			if(x===20){
				picture.onload = function(){
					fences.removeChild(loader);
					var end = new Date().getTime();
					setTimeout(function(){sliderStart()}, 2);
				};
			}
		};

		for(var x = 1; x<=20; x++){
			preloadImage(x);
		};
	};

	function loadImage(x){
		var picture = document.createElement('img');
		picture.src = '/images/'+x+'.jpeg';
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

		for(var x = 1; x<=20; x++){
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
			['albania','tirana'],
			['uganda','kampala'],
			['egypt','cairo'],
			['togo', 'lome'],
			['haiti', 'port-au-prince'],
			['denmark', 'copenhagen'],
			['swaziland', 'mbabane'],
			['panama', 'panama city'],
			['bahrain', 'manama'],
			['spain', 'madrid'],
			['san_marino', 'san marino'],
			['south_sudan', 'suba'],
			['suriname', 'paramaribo'],
			['moldova', 'chrisinau'],
			['russia', 'moscow'],
			['jamaica', 'kingston'],
			['brunei_seri', 'begawan'],
			['croatia', 'zagreb'],
			['slovenia', 'ljubljana'],
			['brazil', 'brasilia']
		],
		sources: [
			'https://www.google.ca/maps/@41.32865,19.829555,3a,60y,333.14h,86.95t/data=!3m8!1e1!3m6!1s-GOQNrs2AVwk%2FVN4FeKTIfEI%2FAAAAAAAAKP0%2FQxKJw3ceR90!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F-GOQNrs2AVwk%2FVN4FeKTIfEI%2FAAAAAAAAKP0%2FQxKJw3ceR90%2Fw203-h101-n-k-no%2F!7i9728!8i4864!6m1!1e1',
			'https://www.google.ca/maps/@0.3069588,32.5780787,3a,75y,120.75h,69.43t/data=!3m6!1e1!3m4!1salycf6cLFRphq1JXhHFc5g!2e0!7i13312!8i6656',
			'https://www.google.ca/maps/place/Cairo,+Cairo+Governorate,+Egypt/@30.0626428,31.24569,3a,30y,241.8h,90.41t/data=!3m8!1e1!3m6!1s-ZBOxCZNBVmg%2FUOgDpST5j3I%2FAAAAAAAAHmg%2FdxTgTQ6A7Es!2e4!3e11!6s%2F%2Flh6.googleusercontent.com%2F-ZBOxCZNBVmg%2FUOgDpST5j3I%2FAAAAAAAAHmg%2FdxTgTQ6A7Es%2Fw277-h100-n-k-no%2F!7i4454!8i1606!4m2!3m1!1s0x14583fa60b21beeb:0x79dfb296e8423bba!6m1!1e1',
			'https://www.google.ca/maps/place/Lome,+Togo/@6.1887017,1.1607913,3a,37.5y,134.41h,72.42t/data=!3m8!1e1!3m6!1s-8aY7BocHt6s%2FVoFh6ZREYtI%2FAAAAAAAAAFI%2FQvta3hp9H3o!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F-8aY7BocHt6s%2FVoFh6ZREYtI%2FAAAAAAAAAFI%2FQvta3hp9H3o%2Fw203-h101-n-k-no%2F!7i10240!8i5120!4m2!3m1!1s0x1023e1c113185419:0x3224b5422caf411d!6m1!1e1',
			'https://www.google.ca/maps/place/Port-au-Prince,+Haiti/@18.5186036,-72.2911951,3a,90y,47.16h,79.26t/data=!3m8!1e1!3m6!1s-v6tU6THp5Jw%2FVdt38uM6GWI%2FAAAAAAAAG54%2FvZDpibpzyRY!2e4!3e11!6s%2F%2Flh3.googleusercontent.com%2F-v6tU6THp5Jw%2FVdt38uM6GWI%2FAAAAAAAAG54%2FvZDpibpzyRY%2Fw203-h101-n-k-no%2F!7i3584!8i1792!4m2!3m1!1s0x8eb9dd57503eaa91:0x3cd5815df929aa08!6m1!1e1',
			'https://www.google.ca/maps/place/Copenhagen,+Denmark/@55.6869196,12.5632815,3a,37.5y,34.96h,79.18t/data=!3m7!1e1!3m5!1spEukh4ECJTnEojxVdbS1Sg!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3DpEukh4ECJTnEojxVdbS1Sg%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D34.740959%26pitch%3D0!7i13312!8i6656!4m2!3m1!1s0x4652533c5c803d23:0x4dd7edde69467b8!6m1!1e1',
			'https://www.google.ca/maps/place/Mbabane,+Swaziland/@-26.3347252,31.1342534,3a,37.5y,19.67h,84.08t/data=!3m7!1e1!3m5!1sReOpWw4Xyc4bQ7N_VskVXA!2e0!6s%2F%2Fgeo3.ggpht.com%2Fcbk%3Fpanoid%3DReOpWw4Xyc4bQ7N_VskVXA%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D27.833216%26pitch%3D0!7i13312!8i6656!4m2!3m1!1s0x1ee8cee147320f07:0x7abf98f27ae1dd9f!6m1!1e1',
			'https://www.google.ca/maps/place/Panama+City,+Panama/@8.967158,-79.531317,3a,75y,2h,90t/data=!3m8!1e2!3m6!1s97715692!2e1!3e10!6s%2F%2Flh3.googleusercontent.com%2Fproxy%2FANY3MQEJ8kc6z-MkCF4RuqCOi9RvyTS4_U3b8l2PPAVqMXVBFiWulMALMIArNBZMvU2rUsj-qkreB9u8ZK9iTpTfPa5-rQ%3Dw203-h152!7i4000!8i3000!4m2!3m1!1s0x8faca8f1dbe80363:0xaba25df1f042c10e!6m1!1e1',
			'https://www.google.ca/maps/place/Manama,+Bahrain/@26.2319991,50.5993454,3a,75y,98.48h,79.36t/data=!3m8!1e1!3m6!1s-DegQVeUhNoI%2FVMXSrdwnFrI%2FAAAAAAAAJ6c%2FO736jwNhX6E!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F-DegQVeUhNoI%2FVMXSrdwnFrI%2FAAAAAAAAJ6c%2FO736jwNhX6E%2Fw203-h101-n-k-no%2F!7i5632!8i2816!4m2!3m1!1s0x3e49af722776a62d:0x8b6738a6070f60c2!6m1!1e1',
			'https://www.google.ca/maps/@40.403808,-3.7228856,3a,90y,352.15h,71.15t/data=!3m6!1e1!3m4!1sUhsmviG_r2zxujg8XMZPDw!2e0!7i13312!8i6656',
			'https://www.google.ca/maps/@43.9714679,12.4731604,3a,90y,207.53h,71.28t/data=!3m6!1e1!3m4!1sIV5bFTziWRHeuaq_MNbb8g!2e0!7i13312!8i6656',
			'https://www.google.ca/maps/place/Juba,+South+Sudan/@4.860203,31.6048497,3a,75y,181h,90t/data=!3m8!1e2!3m6!1s-j0CsuMirsrg%2FVQslPcjKtEI%2FAAAAAAAAHdI%2FhzlPgEmE6-Y!2e4!3e12!6s%2F%2Flh5.googleusercontent.com%2F-j0CsuMirsrg%2FVQslPcjKtEI%2FAAAAAAAAHdI%2FhzlPgEmE6-Y%2Fs203-k-no%2F!7i4608!8i3456!4m2!3m1!1s0x1712804abcf3b5f9:0xd89839286346c433!6m1!1e1',
			'https://www.google.ca/maps/place/Paramaribo,+Suriname/@5.850711,-55.120489,3a,75y,266h,90t/data=!3m8!1e2!3m6!1s57757741!2e1!3e10!6s%2F%2Flh3.googleusercontent.com%2Fproxy%2FgrdFGG7-6ZAKfqacCh4XD_b18Wt7Cx4xpoo5rMJ_es0PjQLtlcjYyX5aQ4DLf9aB5K0GOTtKQhAWuGsY2CBB2FSDrKFGYg%3Dw203-h152!7i1280!8i961!4m2!3m1!1s0x8d083520e203f743:0x97cf2079da3f4063!6m1!1e1',
			'https://www.google.ca/maps/place/Chisinau,+Moldova/@47.0021769,28.8482689,3a,90y,256.85h,75.47t/data=!3m8!1e1!3m6!1s-OQmrQn7x_E8%2FVbNUxJ-170I%2FAAAAAAABGJc%2FJstx8KqxMXs!2e4!3e11!6s%2F%2Flh5.googleusercontent.com%2F-OQmrQn7x_E8%2FVbNUxJ-170I%2FAAAAAAABGJc%2FJstx8KqxMXs%2Fw203-h101-n-k-no%2F!7i5656!8i2828!4m2!3m1!1s0x40c97c3628b769a1:0x37d1d6305749dd3c!6m1!1e1',
			'https://www.google.ca/maps/@55.7663773,37.6268296,3a,75y,4.94h,70.07t/data=!3m6!1e1!3m4!1s71BTcJWcclVMh2RSC5nLyA!2e0!7i13312!8i6656',
			'https://www.google.ca/maps/@18.0029104,-76.7896973,3a,54.7y,328.16h,81.61t/data=!3m7!1e1!3m5!1s-fhO10mNzExA%2FVSbKsu_zVhI%2FAAAAAAAAAAA%2Fo53gqV2i6yI!2e4!3e11!7i2508!8i1254',
			'https://www.google.ca/maps/place/Bandar+Seri+Begawan,+Brunei/@4.894355,114.9414989,3a,45y,346.13h,98.52t/data=!3m8!1e1!3m6!1s-pM8YgdlGQMI%2FVU8JSHFQfrI%2FAAAAAAAACTY%2FDwM7EbCv_WQ!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F-pM8YgdlGQMI%2FVU8JSHFQfrI%2FAAAAAAAACTY%2FDwM7EbCv_WQ%2Fw203-h101-n-k-no%2F!7i4000!8i2000!4m2!3m1!1s0x3222f5b0540b731f:0xeeacf8c47cbae84b!6m1!1e1',
			'https://www.google.ca/maps/@45.7697334,16.071068,3a,60y,217.15h,73.71t/data=!3m7!1e1!3m5!1sNHyCfPFXSlj_qBB2E8wUSQ!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3DNHyCfPFXSlj_qBB2E8wUSQ%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D289.44641%26pitch%3D0!7i13312!8i6656!6m1!1e1',
			'https://www.google.ca/maps/@46.0919245,14.5126915,3a,45y,118.63h,64.45t/data=!3m6!1e1!3m4!1sWYdQk8liZdkOrDyeUHYVXQ!2e0!7i13312!8i6656',
			'https://www.google.ca/maps/@-15.8727806,-47.9234965,3a,75y,47.01h,44.26t/data=!3m6!1e1!3m4!1sIFPFjVya6jzxruVdcxf49Q!2e0!7i13312!8i6656'
		]
	};

	preload();

})();


},{}]},{},[1])(1)
});