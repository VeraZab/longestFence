(function() {
	var data = require('./data');
	var countries = data.countries;
	var slider = document.getElementById('container');
	var description = document.getElementById('description');
	var descriptions = document.getElementsByTagName('span');
	var fences = document.getElementById('fences');
	var span1 = document.getElementById('firstImg');
	var span2 = document.getElementById('secondImg');
	var span3 = document.getElementById('thirdImg');
	var span4 = document.getElementById('fourthImg');
	var span5 = document.getElementById('fifthImg');
	var span6 = document.getElementById('sixthImg');
	var span7 = document.getElementById('seventhImg');
	var spans = [].slice.call(document.getElementsByTagName('span'));

	var imageWidth,
		sliderStartForward,
		sliderEndForward,
		sliderStartBackward;

	function preload(){
		for (var x = 1; x <= 195; x++) {
			var picture = document.createElement('img');
			picture.src = '/images/' + x + '.jpg';
			picture.style.display = 'none';
			var a = document.createElement('a');
			a.href = data.sources[x-1];
			a.target = '_blank';

			a.appendChild(picture);
			fences.appendChild(a);
		};

		var clone194 = document.getElementsByTagName('a')[194].cloneNode(true);
		var clone193 = document.getElementsByTagName('a')[193].cloneNode(true);
		var clone192 = document.getElementsByTagName('a')[192].cloneNode(true);
		var clone191 = document.getElementsByTagName('a')[191].cloneNode(true);
		var clone0 = document.getElementsByTagName('a')[0].cloneNode(true);
		var clone1 = document.getElementsByTagName('a')[1].cloneNode(true);
		var clone2 = document.getElementsByTagName('a')[2].cloneNode(true);
		var clone3 = document.getElementsByTagName('a')[3].cloneNode(true);
		countries = [['serbia', 'belgrade'], ['palau', 'ngerulmud'], ['jordan', 'amman'], ['vanuatu', 'portvila']].concat(countries);
		countries = countries.concat([['indonesia', 'jakarta'], ['iran','tehran'], ['iraq','baghdad'], ['ireland','dublin'], ['mexico', 'mexico_city'], ['italy', 'rome'], ['south_sudan', 'juba']]);

		fences.insertBefore(clone194, document.getElementsByTagName('a')[0]);
		fences.insertBefore(clone193, document.getElementsByTagName('a')[0]);
		fences.insertBefore(clone192, document.getElementsByTagName('a')[0]);
		fences.insertBefore(clone191, document.getElementsByTagName('a')[0]);
		fences.appendChild(clone0);
		fences.appendChild(clone1);
		fences.appendChild(clone2);
		fences.appendChild(clone3);

		document.images[3].onload = function() {
			[].slice.call(document.images).forEach(function(image) {
				image.style.display = 'inline-block';
			});
			imageWidth = document.images[3].getBoundingClientRect().width;
			sliderStartForward = document.images[3].getBoundingClientRect().right;
			sliderEndForward = document.images[199].getBoundingClientRect().left;
			sliderStartBackward = document.images[195].getBoundingClientRect().left;
			sliderStart();
		};
	};

	function sliderStart(){
		fences.scrollLeft = sliderStartForward;

		fences.addEventListener('scroll', scrolling);
		fences.addEventListener('mouseover', highlight);
		fences.addEventListener('mouseout', unHighlight);

		function scrolling() {
			var firstIndex = Math.floor(fences.scrollLeft / imageWidth);
			span1.textContent = countries[firstIndex][0].split('_').join(' ').toUpperCase();
			span2.textContent = countries[firstIndex+1][0].split('_').join(' ').toUpperCase();
			span3.textContent = countries[firstIndex+2][0].split('_').join(' ').toUpperCase();
			span4.textContent = countries[firstIndex+3][0].split('_').join(' ').toUpperCase();
			span5.textContent = countries[firstIndex+4][0].split('_').join(' ').toUpperCase();
			span6.textContent = countries[firstIndex+5][0].split('_').join(' ').toUpperCase();
			span7.textContent = countries[firstIndex+6][0].split('_').join(' ').toUpperCase();

			if (sliderStartBackward && fences.scrollLeft < 1) {
				fences.scrollLeft = sliderStartBackward;
			}

			if (sliderEndForward && fences.scrollLeft > sliderEndForward - 15) {
				fences.scrollLeft = sliderStartForward;
			}
		};

		function highlight(e) {
			var countryToHighlight = countries[Math.floor((fences.scrollLeft + e.clientX)/ imageWidth)][0].split('_').join(' ').toUpperCase();
			spans.forEach(function(span) {
				if(span.textContent === countryToHighlight) {
					span.style.color = 'white';
				}
			})
		};

		function unHighlight() {
			spans.forEach(function(span) {
				span.style.color = '#292d29';
			})
		};
	};

	preload();
})();
