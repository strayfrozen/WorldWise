 var countryContainer = document.getElementById('countryContainer')
 
 //This code collects user input and stores it into local storage 
 let Countries = [];

const addToStorage = (ev)=>{
    ev.preventDefault();
let userInfo = {
   // id: Date.now(),
    Country: document.getElementById("search").value
}
//let userInfo = document.getElementById('search').value
Countries.push(userInfo);
document.querySelector('form').reset();
console.log(Countries)

//saving to localStorage
localStorage.setItem('MyCountryList', JSON.stringify(Countries) );
console.warn('added' , {Countries} );


//This code appends localStorage data to page

let displayData = ()=>{
    countryContainer.innerHTML = '';
    var info = JSON.parse(localStorage.getItem('MyCountryList'));
   // for (var i = 0; i < info.length; i++){
   // console.log('Country Name: ', JSON.parse(info));
    var countryCard = document.createElement('div')
    countryCard.setAttribute('class', 'card')
    countryContainer.append(countryCard)
    for (var i = 0; i < info.length; i++){
    var countryName = document.createElement('h3')
            countryName.textContent = 'Country Name: ' + info[i].Country
            countryCard.prepend(countryName)
       }
    }
    
    displayData();

}

document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById("btn").addEventListener('click', addToStorage);
});


/*//This code appends localStorage data to page

let displayData = ()=>{
var info = localStorage.getItem('MyCountryList', JSON.stringify(Countries) );
console.log(info);
var countryCard = document.createElement('div')
countryCard.setAttribute('class', 'card')
countryContainer.append(countryCard)

var countryName = document.createElement('h3')
        countryName.textContent = 'Country Name: ' + info
        countryCard.prepend(countryName)

}

displayData();*/
