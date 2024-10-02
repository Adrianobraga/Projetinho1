//importação das descricões das cidades
import {Descricao,imagem,titulo,LatitudeeLongitude,Habitantes,estado,prefeitura,area} from "./mensagens.js";
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

MS.CampoGrande.bindPopup(`<img src='${imagem.CampoGrande}' class='bandeiras'><h1>${titulo.CampoGrande}</h1><p>${Descricao.CampoGrande}</p> <p>${area.CampoGrande}</p> <p>${LatitudeeLongitude.CampoGrande}</p> <p>${Habitantes.CampoGrande}</p> <p>${estado.CampoGrande}</p> <a href='${prefeitura.CampoGrande}'>Site da prefeitura local</a>`);
MS.TresLagoas.bindPopup(`<img src='${imagem.TresLagoas}' class='bandeiras'><h1>${titulo.TresLagoas}</h1><p>${Descricao.TresLagoas}</p> <p>${area.TresLagoas}</p> <p>${LatitudeeLongitude.TresLagoas}</p> <p>${Habitantes.TresLagoas}</p> <p>${estado.TresLagoas}</p><a href='${prefeitura.TresLagoas}'>Site da prefeitura local</a>`);
MS.Aquidauana.bindPopup(`<img src='${imagem.Aquidauana}' class='bandeiras'><h1>${titulo.Aquidauana}</h1><p>${Descricao.Aquidauana}</p> <p>${area.Aquidauana}</p> <p>${LatitudeeLongitude.Aquidauana}</p> <p>${Habitantes.Aquidauana}</p> <p>${estado.Aquidauana}</p><a href='${prefeitura.Aquidauana}'>Site da prefeitura local</a>`);
MS.Dourados.bindPopup(`<img src='${imagem.Dourados}' class='bandeiras'> <h1>${titulo.Dourados}</h1><p>${Descricao.Dourados}</p> <p>${area.Dourados}</p> <p>${LatitudeeLongitude.Dourados}</p> <p>${Habitantes.Dourados}</p> <p>${estado.Dourados}</p><a href='${prefeitura.Dourados}'>Site da prefeitura local</a>`);
MS.Corumba.bindPopup(`<img src='${imagem.Corumba}' class='bandeiras'> <h1>${titulo.Corumba}</h1><p>${Descricao.Corumba}</p> <p>${area.Corumba}</p> <p>${LatitudeeLongitude.Corumba}</p><p>${Habitantes.Corumba}</p> <p>${estado.Corumba}</p><a href='${prefeitura.Corumba}'>Site da prefeitura local</a>`);


//Mensagem dos marcadores de Tocantins.

TO.Arraias.bindPopup(`<img src='${imagem.Arraias}' class='bandeiras'><h1>${titulo.Arraias}</h1><p>${Descricao.Arraias}</p> <p>${area.Arraias}</p> <p>${LatitudeeLongitude.Arraias}</p> <p>${Habitantes.Arraias}</p> <p>${estado.Arraias}</p><a href='${prefeitura.Arraias}'>Site da prefeitura local</a>`);
TO.Palmas.bindPopup(`<img src='${imagem.Palmas}' class='bandeiras'><h1>${titulo.Palmas}</h1><p>${Descricao.Palmas}</p> <p>${area.Palmas}</p> <p>${LatitudeeLongitude.Palmas}</p> <p>${Habitantes.Palmas}</p> <p>${estado.Palmas}</p><a href='${prefeitura.Palmas}'>Site da prefeitura local</a>`);
TO.Gurupi.bindPopup(`<img src='${imagem.Gurupi}' class='bandeiras'><h1>${titulo.Gurupi}</h1><p>${Descricao.Gurupi}</p> <p>${area.Gurupi}</p> <p>${LatitudeeLongitude.Gurupi}</p> <p>${Habitantes.Gurupi}</p> <p>${estado.Gurupi}</p><a href='${prefeitura.Gurupi}'>Site da prefeitura local</a>`);
TO.Angico.bindPopup(`<img src='${imagem.Angico}' class='bandeiras'><h1>${titulo.Angico}</h1><p>${Descricao.Angico}</p> <p>${area.Angico}</p> <p>${LatitudeeLongitude.Angico}</p> <p>${Habitantes.Angico}</p> <p>${estado.Angico}</p><a href='${prefeitura.Angico}'>Site da prefeitura local</a>`);
TO.Almas.bindPopup(`<img src='${imagem.Almas}' class='bandeiras'> <h1>${titulo.Almas}</h1> <p>${Descricao.Almas}</p> <p>${area.Almas}</p> <p>${LatitudeeLongitude.Almas}</p> <p>${Habitantes.Almas}</p> <p>${estado.Almas}</p><a href='${prefeitura.Almas}'>Site da prefeitura local</a>`);

//Mensagem informando a latitude e longitude ao clicar na tela

let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`informações sobre a Latitude e Longitude: ${e.latlng.toString()}`)
        .openOn(map);
}

map.on('click', onMapClick);
