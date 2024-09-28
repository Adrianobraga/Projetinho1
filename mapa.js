//importação das descricões das cidades
import Descricao from "./mensagens.js";

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
    Aquidauana: L.marker([-20.463001, -55.779558]).addTo(map),
    TresLagoas: L.marker([-20.788476, -51.703229]).addTo(map),
    Dourados: L.marker([-22.228485, -54.817311]).addTo(map),
    Corumba: L.marker([-19.020969, -57.648295]).addTo(map),
   
}

/*
    Marcadores das cidades Tocantins:
    Arraias,
    Palmas,
    Gurupi,
    Angico,
    Corumbá,
*/

let TO = {

    Arraias: L.marker([-12.816049, -47.006613]).addTo(map),
    Palmas: L.marker([-10.249229, -48.324272]).addTo(map),
    Gurupi: L.marker([-11.733522, -49.079023]).addTo(map),
    Angico: L.marker([-6.391276, -47.865895]).addTo(map),
    Almas: L.marker([-11.441228, -47.224737]).addTo(map),

}

//Mensagem dos marcadores de Mato Grosso do Sul.

MS.CampoGrande.bindPopup(`<img src='./img/MS/CampoGrande.png' class='bandeiras'><h1>Campo Grande</h1><p>${Descricao.CampoGrande}</p>`);
MS.TresLagoas.bindPopup(`<img src='./img/MS/TresLagoas.png' class='bandeiras'><h1>Três Lagoas</h1><p>${Descricao.TresLagoas}</p>`);
MS.Aquidauana.bindPopup(`<img src='./img/MS/Aquidauana.png' class='bandeiras'><h1>Aquidauana</h1><p>${Descricao.Aquidauana}</p>`);
MS.Dourados.bindPopup(`<img src='./img/MS/Dourados.png' class='bandeiras'> <h1>Dourados</h1><p>${Descricao.Dourados}</p>`);
MS.Corumba.bindPopup(`<img src='./img/MS/Corumba.png' class='bandeiras'> <h1>Corumbá</h1><p>${Descricao.Corumba}</p>`);

//Mensagem dos marcadores de Tocantins.

TO.Arraias.bindPopup(`<img src='./img/TO/Arraias.png' class='bandeiras'><h1>Arraias</h1><p>${Descricao.Arraias}</p>`);
TO.Palmas.bindPopup(`<img src='./img/TO/Palmas.png' class='bandeiras'><h1>Palmas</h1><p>${Descricao.Palmas}</p>`);
TO.Gurupi.bindPopup(`<img src='./img/TO/Gurupi.png' class='bandeiras'><h1>Gurupi</h1><p>${Descricao.Gurupi}</p>`);
TO.Angico.bindPopup(`<img src='./img/TO/Angico.png' class='bandeiras'><h1>Angico</h1><p>${Descricao.Angico}</p>`);
TO.Almas.bindPopup(`<img src='./img/TO/Almas.png' class='bandeiras'> <h1>Almas</h1> <p>${Descricao.Almas}</p>`);

//Mensagem informando a latitude e longitude ao clicar na tela

let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`informações sobre a Latitude e Longitude: ${e.latlng.toString()}`)
        .openOn(map);
}

map.on('click', onMapClick);
