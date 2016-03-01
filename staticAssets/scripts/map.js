var countries = require('./countries').latlong;
var d3 = require('d3');
var projection = require('./display').projection;

var animateMap = function(i){
	var svg = d3.select("#globesvg");
	var d = countries[i];
	
	if(svg.select('circle')[0][0]===null){
		point(d);
	}else{
		svg.selectAll('circle')
		.remove();
		point(d);
	}

	function point(data){
		svg.selectAll('circle')
				.data([data])
				.enter().append('circle')
				.attr('r', 5)
				.attr('transform', function(d){
				console.log(d);
				return 'translate('+projection([d[1], d[0]])+')'
				})
				.attr('fill', 'red')
				.attr('fill-opacity', '1')
	}
}


module.exports = animateMap;