var fillColorNormal = '#0000FF';
var fillColorHover = '#00FF00';
var map;
var map_layer;
var markerLayer;

var map_parameters = {
	zilla: 0,
	upazila: 0,
	union: 0
};

var markerIcon = new L.icon({
	iconUrl: "images/marker.png",
	iconSize: [32, 32],
	iconAnchor: [10, 41],
});

//Breadcrumbs
var breadCrumb = [];
//Primary breadcrumbs element
var bc = {
	name: "Test Map",
	zillaid: 0,
	upazilaid: 0
};
breadCrumb.push(bc);

var bicycleRental = {
	"type": "FeatureCollection",
	"features": [
		{
			"geometry": {
				"type": "Point",
				"coordinates": [
					23.9922865337091, 91.1731283055321
				]
			},
			"type": "Feature",
			"properties": {
				"popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
			},
			"id": 51
		},
		{
			"geometry": {
				"type": "Point",
				"coordinates": [
					23.9448289016269, 91.2068041766108
				]
			},
			"type": "Feature",
			"properties": {
				"popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
			},
			"id": 52
		}
	]
};

function getMap(param) {
	$.ajax(
		"/Home/UITab",
		{
			data: {
				zilla: param.zilla,
				upazila: param.upazila,
				union: param.union
			},
			type: "GET",
			success: function (data) {
				//data = data.replace('Resource id #2', '');
				generateMap(data);
			}
		}
	);
}

//this function will gegerate map and add feature, event (click, hover, etc) and style to the map 
function generateMap(geoJsonData) {
	// initialize the map
	map = L.map('map-container').setView([23.777176, 90.399452], 7);

	// load a tile layer
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		{
			attribution: 'Map of bangladesh',
			maxZoom: 17,
			minZoom: 1
		}).addTo(map);

	//mapJS = JSON.parse(JSON.stringify(geoJsonData));
	map_layer = L.geoJson(geoJsonData, {
		onEachFeature: onEachFeature,
		pointToLayer: function (geoJsonPoint, latlng) {
			return L.marker(latlng, {
				icon: markerIcon
			});
		},
		style: polystyle
	}).addTo(map);


	var mapboundary = map_layer.getBounds();
	//var json = { "_southWest": { "lat": 20.719914039000063, "lng": 88.00816921056679 }, "_northEast": { "lat": 26.63179940598237, "lng": 92.67523885500005 } };

	//mapboundary._southWest.lat = 18.719914039000063;
	//mapboundary._southWest.lng = 95.00816921056679;
	//mapboundary._northEast.lat = 20.719914039000063;
	//mapboundary._northEast.lng = 95.00816921056679;
	map.fitBounds(mapboundary);


}

function addToBreadCrumb(feature) {

	bc = {
		name: feature.properties.name,
		zillaid: feature.properties.zillaid,
		upazilaid: feature.properties.upazila
	};

	breadCrumb.push(bc);

	//console.log(breadCrumb);
	generateBreadCrumbs();
}
function generateBreadCrumbs() {

	$("#bread-crumb").empty();

	$.each(breadCrumb, function (index, obj) {

		$("#bread-crumb").append("<li data-zillaid=" + obj.zillaid + " data-upazilaid=" + obj.upazilaid + ">" + obj.name + "</li>");
		//console.log( obj );
	});
}


//THis fuction will fire in each click on Map
function onEachFeature(feature, layer) {

	//Populate Mamoni disrtict
	//populate_mamonni(feature);

	//bind click
	if (feature.properties.is_mamoni == 1) {
		layer.on('click', function (e) {
			// e = event
			//layer.bindPopup(feature.properties.name);
			// You can make your ajax call declaration here
			//$.ajax(... 
			//getMap();
			//alert(feature.properties.name);

			console.log(feature);

			if (map != null) {
				map.remove();
				//map.removeLayer(map_layer);
				map_parameters.zilla = feature.properties.zillaId;
				map_parameters.upazila = feature.properties.upazilaid;
				//alert(feature.properties.upazilaid);
				//console.log(feature.properties)

				addToBreadCrumb(feature);
				getMap(map_parameters);
			}

			//This function will call if it is implimented. 
			if (typeof event_click === "function")
				event_click(feature, layer);
		});


	}

	//bind Mouse Hover
	if (feature.properties.is_mamoni == 1) {
		layer.on('mouseover', function (e) {

			if (typeof event_mouseover === "function")
				event_mouseover(feature, layer);
		});


	}

	if (feature.properties.is_mamoni == 1) {
		layer.on('mouseover', function () {
			//if(feature.properties.is_mamoni == 1){
			this.setStyle({
				'fillColor': fillColorHover
			});
			//}
		});
	}

	layer.on('mouseout', function () {
		this.setStyle({
			'fillColor': feature.properties.color
		});
	});

	//Adding label to Map
	if (feature.properties.is_mamoni == 1) {
		layer.bindTooltip(
			feature.properties.name,
			{
				permanent: true,
				direction: 'center',
				className: 'areaLabel'
			}
		);
	}

}

//This function will add color and style to map
function polystyle(feature) {
	return {
		fillColor: feature.properties.color,
		weight: 2,
		opacity: 1,
		color: 'white',  //Outline color
		fillOpacity: 0.7
	};
}


$(document).ready(function () {
	getMap(map_parameters);

	$("#bread-crumb").on("click", "li", function () {
		zillaid = $(this).data('zillaid');
		upazilaid = $(this).data('upazilaid');
		if (map != null) {
			map.remove();

			map_parameters.zilla = zillaid;
			map_parameters.upazila = upazilaid;
			//console.log(map_parameters);
			getMap(map_parameters);

			//for(i=$(this).index(); breadCrumb.lenght -1; i++)
			breadCrumb.length = $(this).index() + 1;
			generateBreadCrumbs()
		}
	});

	//Generate breadcrumbs first time
	generateBreadCrumbs();

});

markerLayer = L.geoJSON(bicycleRental, {
	pointToLayer: function (feature, latlng) {

		return L.Marker(latlng);
	}
}).addTo(map);