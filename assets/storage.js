var APIUrl = 'https://restcountries.com/v3.1/name/{countryname}'

var countryContainer = document.getElementById('countryContainer')
var displayedData = document.getElementById('displayed-data-flag')
var displayedDataName = document.getElementById('displayed-data-name')
var displayedDataCoatOfArms = document.getElementById('displayed-data-coatOfArms')
var displayedDataLanguages = document.getElementById('displayed-data-languages')
var displayedDataPopulation = document.getElementById('displayed-data-population')

var displayedDataCurrency = document.getElementById("displayed-data-currency")

//This code collects user input and stores it into local storage 

function getCountry(e) {
    e.preventDefault()
    var searched =document.getElementById("search").value
    addToStorage(searched)
    getCountryData(searched)
}   

const addToStorage = (searched) => {
    
    var Countries = JSON.parse(localStorage.getItem('MyCountryList'));
    if (Countries === null) {
        Countries = []
    }
    let userInfo = {
        // id: Date.now(),
        Country: searched
    }
    //let userInfo = document.getElementById('search').value
    Countries.push(userInfo);
    document.querySelector('form').reset();


    //saving to localStorage
    localStorage.setItem('MyCountryList', JSON.stringify(Countries));
    console.warn('added', { Countries });


    //This code appends localStorage data to page


    showData();

}

let showData = () => {
    countryContainer.innerHTML = '';
    var info = JSON.parse(localStorage.getItem('MyCountryList'));
    if (info === null) {
        return
    }
    var countryCard = document.createElement('div')
    countryCard.setAttribute('class', 'card')
    countryContainer.append(countryCard)
    for (var i = 0; i < info.length; i++) {
        var countryName = document.createElement('h3')
        countryName.setAttribute('id', info[i].Country)
        countryName.textContent = 'Country Name: ' + info[i].Country
        countryCard.prepend(countryName)

        countryName.addEventListener('click', function (event) {
            var clickedId = event.target.id;
            getCountryData(clickedId)
        })
    }
}

showData()

function getCountryData(id) {
    fetch(APIUrl + id)
        .then((response) => response.json())
        .then(function (data) {
            
            console.log(`${id}'s data`, data);
            displayedData.textContent=''
            displayedDataName.textContent=''
            displayedDataCoatOfArms.textContent=''
            displayedDataLanguages.textContent=''
            displayedDataPopulation.textContent=''
            displayedDataCurrency.textContent=''

            var currentCountry = document.createElement('h1')
            currentCountry.textContent= data[0].name.common
            displayedDataName.prepend(currentCountry)

            var flag = document.createElement('img')
            flag.setAttribute('src', data[0].coatOfArms.png)
            displayedData.append(flag)

            var coatOfArms = document.createElement('img')
            coatOfArms.setAttribute('src', data[0].flags.png)
            displayedDataCoatOfArms.append(coatOfArms)

            var languages = document.createElement('h1')
            languages.setAttribute('src', data[0].languages)
            displayedDataLanguages.append(languages)

            var pop = document.createElement('p')
            pop.textContent = data[0].population
            displayedDataPopulation.append('People: ', pop)

            var currency = document.createElement('p')
            currency .setAttribute('src', data[0].population)
            displayedDataCurrency.append( pop)

            // display data
        })
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn").addEventListener('click', getCountry);
});

//Get data to results function




