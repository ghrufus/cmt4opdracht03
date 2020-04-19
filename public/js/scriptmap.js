var mymap = L.map('map').setView([52.507906, 13.453508], 14.5);

var basicmap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	id: 'mapbox.streets'
});

var marker = L.marker([52.507906, 13.453508]).addTo(mymap);

basicmap.addTo(mymap);
