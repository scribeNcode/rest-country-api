fetch("/data.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error("There was an error loading json");
    }
    return res.json();
  })
  .then((data) => {
    const allCountryWrapper = document.querySelector(".all-countries-wrapper");
    const countries = data;
    renderCountries(countries);

    // userSerchInput tag
    const userInput = document.querySelector("#userSerchInput");
    userInput.addEventListener("input", () => {
      const query = userInput.value.toLowerCase().trim();

      if (userInput === "") {
        renderCountries(countries);
      } else {
        // filter based on user input
        const filtered = countries.filter((country) =>
          country.name.toLowerCase().includes(query)
        );
        renderCountries(filtered);
      }
    });

    function renderCountries(allCountry) {
      allCountryWrapper.innerHTML = allCountry
        .map(
          (country) =>
            `        <article>
            <img src= ${country.flags.png} alt="" srcset="">
            <p>Population: ${country.population}</p>
            <p>Region:${country.region}</p>
            <p>Capital:${country.capital}</p>
        </article>
        `
        )
        .join("");
    }
  })
  .catch((error) => console.error("error fetching data", error));
