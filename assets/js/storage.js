//Variables
var APIUrl = "https://restcountries.com/v3.1/name/{countryname}";
const clearBtn = document.getElementById("clearBtn");
//This code collects user input and stores it into local storage
const addToStorage = (searched) => {
  var Countries = JSON.parse(localStorage.getItem("MyCountryList"));
  if (Countries === null) {
    Countries = [];
  }
  let userInfo = {
    // id: Date.now(),
    Country: searched,
  };
  //let userInfo = document.getElementById('search').value
  let countryExists = false;
  Countries.forEach((country) => {
    if (country.Country == userInfo.Country) {
      countryExists = true;
    }
  });
  if (!countryExists) {
    Countries.unshift(userInfo);
    localStorage.setItem("MyCountryList", JSON.stringify(Countries));
  }
  document.querySelector("form").reset();
  //This code appends localStorage data to page
  showData();
};
let showData = () => {
  var info = JSON.parse(localStorage.getItem("MyCountryList"));
  if (!info || info.length === 0) return;
  countryContainer.innerHTML = "";
  info.forEach((country, idx) => {
    if (idx < 7) {
      var countryName = document.createElement("button");
      countryName.setAttribute("id", country.Country);
      countryName.textContent = country.Country;
      countryName.classList = "bg-gray-200 px-5 mx-5 rounded";
      countryContainer.append(countryName);
      countryName.addEventListener("click", function (event) {
        var clickedId = event.target.id;
        fetchData(clickedId);
      });
    }
  });
};
showData();
