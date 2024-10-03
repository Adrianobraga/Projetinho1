let map = L.map('map').setView([-15.496032, -49.174805], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//Feito 
for(let i =0; i < marcadores.length;i++){
    var marker = L.marker([marcadores[i].latitude, marcadores[i].longitude]).addTo(map);
}

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

let popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);