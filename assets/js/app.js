//Geolocation
if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function (location) {
        console.log('location :', location);
        let { longitude } = location.coords
        let { latitude } = location.coords
        console.log(`longitude:${longitude} & latitude ${latitude}`);
    })

//searchBar
const search = document.querySelector('.search-button')
search.addEventListener('click', function (event) {
    event.preventDefault()
    const input = document.querySelector('#search').value

    fetchData(input)
});

//CountriesApi
async function fetchData(countries) {
    let response = await fetch(`https://restcountries.com/v3.1/name/${countries}`)
    let data = await response.json()
    console.log(data)
    console.log();

    // let detailUrl =data.maps.googleMaps
    // let detailResponse = await fetch(detailUrl)
    // let detailData = await detailResponse.json()
    // console.log('detailData: ', detailData);
    // console.log(detailData[0]);
    // var dataElem = document.createElement('div')
    // dataElem.innerHTML = detailData[0].deaths
    // document.body.appendChild(dataElem)

};

fetchData('mexico')
