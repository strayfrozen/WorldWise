async function fetchIPData() {
    let response = await fetch('https://api.ipregistry.co/?key=tryout')
    console.log(response.url);
    let userData = await response.json()
    console.log(userData);
    let coordLat = userData.location.latitude
    let coordLong = userData.location.longitude
    console.log(coordLat, coordLong);
    const countryIp = userData.location.country.name;
    console.log(countryIp);








    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

    map.panTo(new L.LatLng(coordLat, coordLong));
}

fetchIPData()