async function fetchData() {
    let response = await fetch('https://api.ipregistry.co/?key=tryout')
    console.log(response.url);
    let userData = await response.json()
    console.log(userData);
    console.log(userData.location.country.name
    );
}

fetchData()