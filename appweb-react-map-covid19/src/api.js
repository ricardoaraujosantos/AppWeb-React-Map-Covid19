const path = 'https://coronavirus-19-api.heroKuapp.com/countries'

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getCountry(country){
    return fetch(`${path}/${country}`, headers)
    .then((response) => response.json())
}

export default {
    getCountry
}