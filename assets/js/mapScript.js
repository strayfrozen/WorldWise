
const searchBar = document.getElementById("searchBar")




//user cords
async function fetchIPData() {

    let response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?llatitude=XXXXXXXXXXXX&longitude=XXXXXXXXXXXX&localityLanguage=en`)
    let geoData = await response.json();
    console.log(geoData);
    const latitude = geoData.latitude
    const longitude = geoData.longitude

    //leafletMap
    const map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let userMarker = L.marker([latitude, longitude]).addTo(map)
        .bindPopup(' You are here')
        .openPopup();

    let popup = L.popup();

    function onMapClick(e) {

        popup.setLatLng(e.latlng)
        popup.setContent(`You clicked the map at  ${e.latlng}`)
            .openOn(map);
    }

    map.on('click', onMapClick);
}
fetchIPData()






