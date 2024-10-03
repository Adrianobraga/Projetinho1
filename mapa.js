let map = L.map('map').setView([-15.496032, -49.174805], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//Feito 
marcadores.map((pontos) => {
    let marker = L.marker([pontos.latitude, pontos.longitude]).addTo(map);
    let popup = L.popup();
    marker.bindPopup(`<img src="${pontos.imagem}"><p>${pontos.descricao}</p><p>${pontos.area}</p><p>${pontos.LatitudeeLongitude}</p><p>${pontos.Habitantes}</p><p>${pontos.estado}</p><a href='${pontos.prefeitura}'>Prefeitura local</a>`); 
});
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);