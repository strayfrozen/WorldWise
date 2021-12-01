//User Ip address
navigator.geolocation.getCurrentPosition(function (position) {
  const { latitude } = position.coords;
  const { longitude } = position.coords;

  //leafletMap
  const map = L.map("map").setView([latitude, longitude], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  let userMarker = L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup("You are here")
    .openPopup();

    var popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    map.on('click', onMapClick); 

  async function fetchIPData() {
    let response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?l${latitude}=XXXXXXXXXXXX&${longitude}=XXXXXXXXXXXX&localityLanguage=en`
    );
    let geoData = await response.json();
  }

  fetchIPData();
});
