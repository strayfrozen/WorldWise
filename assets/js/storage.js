 //This code collects user input and stores it into local storage 
 let Countries = [];

const addToStorage = (ev)=>{
ev.preventDefault();
let userInfo = {
    id: Date.now(),
    Country: document.getElementById("search").value
}
Countries.push(userInfo);
document.querySelector('form').reset();

//saving to localStorage
localStorage.setItem('MyCountryList', JSON.stringify(Countries) );
console.warn('added' , {Countries} );

}

document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById("btn").addEventListener('click', addToStorage);
});