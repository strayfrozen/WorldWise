const search = document.querySelector('.search-button')

search.addEventListener('click', function (event) {
    event.preventDefault()
    const input = document.querySelector('#search').value

    fetchData(input)
});

async function fetchData(country) {
    let response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    let data = await response.json()
    console.log(data)
    // let detailUrl = data.deaths.detail

    // let detailResponse = await fetch(detailUrl)
    // let detailData = await detailResponse.json()
    // console.log('detailData: ', detailData);
    // console.log(detailData[0]);
    // var dataElem = document.createElement('div')
    // dataElem.innerHTML = detailData[0].deaths
    // document.body.appendChild(dataElem)

};
// const search = window.prompt()
console.log(fetchData('mexico'))