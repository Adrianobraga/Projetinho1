//Latitude e Longitude centralizado no Brasil
let map = L.map('map').setView([-12.897489, -49.746094], 5);

//Mapa 

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href=`http://www.openstreetmap.org/copyright`>OpenStreetMap</a>'
}).addTo(map);

/*

    Marcadores das cidades do Mato Grosso do Sul: 
    Campo Grande,
    Aquidauana,
    Três Lagoas,
    Dourados,
    Corumbá
    
*/

let MS = {

    CampoGrande: L.marker([-20.463218, -54.613142]).addTo(map),

}


//Mensagem dos marcadores de Mato Grosso do Sul.
for(let i =0;i < Descricao.length;i++){

}
MS.CampoGrande.bindPopup(`<img src='${Descricao[0].imagem}' class='bandeiras'><h1>${titulo.CampoGrande}</h1><p>${Descricao.CampoGrande}</p> <p>${area.CampoGrande}</p> <p>${LatitudeeLongitude.CampoGrande}</p> <p>${Habitantes.CampoGrande}</p> <p>${estado.CampoGrande}</p> <a href='${prefeitura.CampoGrande}'>Site da prefeitura local</a>`);

//Mensagem informando a latitude e longitude ao clicar na tela

let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`informações sobre a Latitude e Longitude: ${e.latlng.toString()}`)
        .openOn(map);
}

map.on('click', onMapClick);
