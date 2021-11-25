var countryContainer = document.getElementById('countryContainer')
var displayedData = document.getElementById('cell1')

var displayedDataName = document.getElementById('cell4')

var displayedDataCoatOfArms = document.getElementById('cell5')
var displayedDataLanguages = document.getElementById('displayed-data-languages')
var displayedDataPopulation = document.getElementById('cell6')

var displayedDataCurrency = document.getElementById("displayed-data-currency");

var displayedDataCapital = document.getElementById("cell3")

var displayedDataMaps = document.getElementById("displayed-data-maps");

//Ip address api
async function fetchIPData() {
    let response = await fetch('https://api.ipregistry.co/?key=tryout')
    console.log(response.url);
    let userData = await response.json()
    console.log(userData);
    console.log(userData.location.country.name);
    const countryIp = userData.location.country.name;
    IPinBrowser = fetch(`https://restcountries.com/v3.1/name/${countryIp}`)
}

fetchIPData()
// searchBar
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

}