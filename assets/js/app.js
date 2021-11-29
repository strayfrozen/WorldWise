<<<<<<< HEAD
var countryContainer = document.getElementById('countryContainer');
var resultsContainer = document.getElementById('results-container');
var displayedDataFlag = document.getElementById('cell1');
var displayedDataLanguages = document.getElementById('cell2');
var displayedDataCapital = document.getElementById('cell3');
var displayedDataName = document.getElementById('cell4');
var displayedDataCoatOfArms = document.getElementById('cell5');
var displayedDataPopulation = document.getElementById('cell6');
var displayedDataCurrency = document.getElementById('cell7');
=======

// const search = document.querySelector('.search-button')
var countryContainer = document.getElementById('countryContainer')
var displayedData = document.getElementById('cell1')

var displayedDataName = document.getElementById('cell4')

var displayedDataCoatOfArms = document.getElementById('cell5')
var displayedDataLanguages = document.getElementById('displayed-data-languages')
var displayedDataPopulation = document.getElementById('cell6')

var displayedDataCurrency = document.getElementById("displayed-data-currency");

var displayedDataCapital = document.getElementById("cell3")

var displayedDataMaps = document.getElementById("displayed-data-maps");

>>>>>>> 94caf209ba374257cc85ee60ec2cd409fbfed49c
//Ip address api
// async function fetchIPData() {
//   let response = await fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?llatitude=XXXXXXXXXXXX&$longitude=XXXXXXXXXXXX&localityLanguage=en`
//   );
//   let geoData = await response.json();
//   console.log(geoData);
//   //collects data from Ip address and displays it
//   fetchData(geoData.countryName);
// }
// fetchIPData();
// searchBar
<<<<<<< HEAD
const search = document.querySelector('.search-button');
search.addEventListener('click', function (event) {
    event.preventDefault();
    const input = document.querySelector('#search').value;
=======
const search = document.querySelector('.search-button')


// search.addEventListener('click', function (event) {
//     event.preventDefault()
//     const input = document.querySelector('#search').value


// //     fetchData(input)
// // }
>>>>>>> 94caf209ba374257cc85ee60ec2cd409fbfed49c
    //collects data from search bar and displays it
    fetchData(input);
});
//CountriesApi
<<<<<<< HEAD
async function fetchData(country) {
    let response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    let [data] = await response.json();
    resultsContainer.classList.remove('hidden');
    addToStorage(country);
    displayedDataFlag.textContent = '';
    displayedDataLanguages.textContent = '';
    displayedDataCapital.textContent = '';
    displayedDataName.textContent = '';
    displayedDataCoatOfArms.textContent = '';
    displayedDataPopulation.textContent = '';
    displayedDataCurrency.textContent = '';
    displayedDataName.textContent = data.name.common;
    var flag = document.createElement('img');
    flag.setAttribute('src', data.flags.png);
    displayedDataFlag.append(flag);
    var coatOfArms = document.createElement('img');
    coatOfArms.setAttribute('src', data.coatOfArms.png);
    displayedDataCoatOfArms.append(coatOfArms);
    console.log('lang', Object.values(data.languages)[0]);
    displayedDataLanguages.textContent = `Languages: ${Object.values(data.languages)[0]
        }`;
    displayedDataPopulation.textContent = `Population: ${data.population}`;
    const currencyArray = Object.entries(data.currencies);
    const currencyVal = currencyArray[0];
    displayedDataCurrency.textContent = `${currencyVal[1].name} ${currencyVal[1].symbol}`;
    displayedDataCapital.textContent = data.capital[0];
}
=======
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
    displayedDataLanguages.append('Languages:', language)

    var pop = document.createElement("h1");
    pop.textContent = data.population;
    displayedDataPopulation.append("People: ", pop);


    const array = Object.entries(data.currencies)
    const value = array[0];

    var currency = document.createElement('h1');
    currency.textContent = `${value[1].name} ${value[1].symbol}`;
    displayedDataCurrency.append('currency:', currency);

    var capital = document.createElement("h1");
    capital.textContent = data.capital[0];
    displayedDataCapital.append(capital);
}

>>>>>>> 94caf209ba374257cc85ee60ec2cd409fbfed49c
