
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
        .bindPopup('1 You are here')
        .openPopup();



    let userMarkerTwo = L.marker([latitude, longitude]).addTo(map)
        .bindPopup(' 2 You are here')
        .openPopup();
    // map.panTo(new L.LatLng());

    searchBar.addEventListener('keydown', function (e) {
        e.keyCode === 13 ? searchBar.value = geoData.countryName : console.log('');
    }


    )
}
fetchIPData()








