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

    //collects data from search bar
    fetchData(input)
});

//CountriesApi
async function fetchData(countries) {
    let response = await fetch(`https://restcountries.com/v3.1/name/${countries}`)
    let [data] = await response.json()
    console.log(data)

    displayedData.textContent = ''
    displayedDataName.textContent = ''
    displayedDataCoatOfArms.textContent = ''
    displayedDataLanguages.textContent = ''
    displayedDataPopulation.textContent = ''
    displayedDataCurrency.textContent = ''
    displayedDataCapital.textContent = ''
    displayedDataMaps.textContent = ''

    var currentCountry = document.createElement('h1')
    currentCountry.textContent = data.name.common
    displayedDataName.prepend(currentCountry)

    var flag = document.createElement('img')
    flag.setAttribute('src', data.flags.png)
    displayedData.append(flag)

    var coatOfArms = document.createElement('img')
    coatOfArms.setAttribute('src', data.coatOfArms.png)
    displayedDataCoatOfArms.append(coatOfArms)


    var language = document.createElement('h1')
    language.textContent = Object.values(data.languages)
    displayedDataLanguages.append('Languages', language)

    var pop = document.createElement("h1");
    pop.textContent = data.population;
    displayedDataPopulation.append("People: ", pop);


    const array = Object.entries(data.currencies)
    const value = array[0]
    console.log(value[1]);

    var currency = document.createElement('h1')
    currency.textContent =
        displayedDataCurrency.append(currencies)

    var capital = document.createElement("h1");
    capital.textContent = data.capital[0];
    displayedDataCapital.append(capital);




}