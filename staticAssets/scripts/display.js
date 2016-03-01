var d3 = require('d3');
var topojson = require('topojson');

var width = 200,
    height = 115;

var projection = d3.geo.equirectangular()
    .scale(30)
    .translate([width / 2, height / 2])
    .center([0, 20])
    .precision(.1);
 
var display = function(){
	var lead = document.getElementById('lead');    
	var middle = (window.innerWidth/2);
	lead.style.marginLeft = middle+'px';

	for(var x=1; x<=3; x++){
		createImage(x);
	}
	displayMap();
} 

function createImage(number){
	var img = document.createElement('img');
	img.style.width = '360px';
	img.style.height = '200px';
	img.src = './staticAssets/images/'+number+'.jpg';
	document.getElementById('images').appendChild(img);
}

function displayMap(){
	var svg = d3.select("#globe").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("id", "globesvg");

	var path = d3.geo.path()
    .projection(projection);

	var graticule = d3.geo.graticule();

	svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);

	d3.json("./staticAssets/worldTopo.json", function(error, world) {
	if (error) throw error;
	svg.insert("path", ".graticule")
	.datum(topojson.feature(world, world.objects.land))
	.attr("class", "land")
	.attr("d", path);

	svg.insert("path", ".graticule")
	.datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
	.attr("class", "boundary")
	.attr("d", path);
	});	
}

module.exports = {
	"display": display,
	"projection": projection
};