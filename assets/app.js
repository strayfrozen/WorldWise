const search = document.querySelector('.search-button')

search.addEventListener('click', function (event) {
    event.preventDefault()
    const input = document.querySelector('#search').value

    fetchData(input)