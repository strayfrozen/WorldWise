


//User Ip address
navigator.geolocation.getCurrentPosition(function (position) {
    const { latitude } = position.coords
    const { longitude } = position.coords


    //leafletMap
    const map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let userMarker = L.marker([latitude, longitude]).addTo(map)
        .bindPopup('You are here')
        .openPopup();




    // map.panTo(new L.LatLng());

    async function fetchIPData() {

        let response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?l${latitude}=XXXXXXXXXXXX&${longitude}=XXXXXXXXXXXX&localityLanguage=en`)
        let geoData = await response.json();
        console.log(geoData);

    }

    fetchIPData()
});