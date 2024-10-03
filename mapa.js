let map = L.map('map').setView([-15.496032, -49.174805], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//Feito 
for (let i = 0; i < marcadores.length; i++) {
    var marker = L.marker([marcadores[i].latitude, marcadores[i].longitude]).addTo(map);
    let popup = L.popup();
    marker.bindPopup(`<img src="${marcadores[i].imagem}"><p>${marcadores[i].descricao}</p><p>${marcadores[i].area}</p><p>${marcadores[i].LatitudeeLongitude}</p><p>${marcadores[i].Habitantes}</p><p>${marcadores[i].estado}</p><a href='${marcadores[i].prefeitura}'>Prefeitura local</a>`);

}
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);