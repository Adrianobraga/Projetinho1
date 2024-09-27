//Latitude e Longitude do Brasil(-12.897489, -49.746094)

let map = L.map('map').setView([-12.897489, -49.746094], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
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
/*
Mensagem dos marcadores de Mato Grosso do Sul.
*/

MS.CampoGrande.bindPopup("<b>Hello world!</b><br>I am a popup.");
MS.Aquidauana.bindPopup("<b>Hello world!</b><br>I am a popup.");
MS.TresLagoas.bindPopup("<b>Hello world!</b><br>I am a popup.");
MS.Dourados.bindPopup("<b>Hello world!</b><br>I am a popup.");
MS.Corumba.bindPopup("<b>Hello world!</b><br>I am a popup.");

/*
Mensagem dos marcadores de Tocantins.
*/

TO.Arraias.bindPopup("<b>Hello world!</b><br>I am a popup.");
TO.Palmas.bindPopup("<b>Hello world!</b><br>I am a popup.");
TO.Gurupi.bindPopup("<b>Hello world!</b><br>I am a popup.");
TO.Angico.bindPopup("<b>Hello world!</b><br>I am a popup.");
TO.Almas.bindPopup("<b>Hello world!</b><br>I am a popup.");


let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
