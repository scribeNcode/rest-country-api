

fetch('/data.json')
.then(res =>{
    if(!res.ok){
        throw new Error('There was an error loading json')
    }
    return res.json()
})
.then(data =>{
    const countries = data
       document.querySelector('.all-countries-wrapper').innerHTML = countries.map(country =>
        `        <article>
            <img src= ${country.flags.png} alt="" srcset="">
            <p>Population: ${country.population}</p>
            <p>Region:${country.region}</p>
            <p>Capital:${country.capital}</p>
        </article>
        `
    ).join('')

})
.catch(error => console.error('error fetching data',error))



