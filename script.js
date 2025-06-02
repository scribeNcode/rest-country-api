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
          <a href="country.html?code=${country.alpha3Code}">
            <img src= ${country.flags.png} alt="" srcset="">
         </a>
            <p>Population: ${country.population}</p>
            <p>Region:${country.region}</p>
            <p>Capital:${country.capital}</p>
        </article>
        `
        )
        .join("");
    }

    /////////////////////// Logic for filter function/////////////////////
    const filterTag = document.querySelector("#region-Tag");

    //   add eventListener
    filterTag.addEventListener("change", (e) => {
      let selectedRegion = e.target.value;
      //   logic to get all africa countries

      if (selectedRegion === "") {
        renderCountries(countries);
      } else if (selectedRegion === "Africa") {
        const allAfricanCountries = countries.filter((africaCountry) =>
          africaCountry.region.includes("Africa")
        );
        renderCountries(allAfricanCountries);
      } else if (selectedRegion === "Americas") {
        // logic to get all america countries
        const allAmericaCountries = countries.filter((americaCountry) =>
          americaCountry.region.includes("Americas")
        );
        renderCountries(allAmericaCountries);
      } else if (selectedRegion === "Asia") {
        // logic to get all america countries
        const allAsiaCountries = countries.filter((asiaCountry) =>
          asiaCountry.region.includes("Asia")
        );

        renderCountries(allAsiaCountries);
      } else if (selectedRegion === "Europe") {
        // logic to get all european countries
        const allEuropeanCountries = countries.filter((europeanCountry) =>
          europeanCountry.region.includes("Europe")
        );
        renderCountries(allEuropeanCountries);
      } else if (selectedRegion === "Oceania") {
        // logic to get all asia countries
        const allOceaniaCountries = countries.filter((oceaniaCountry) =>
          oceaniaCountry.region.includes("Oceania")
        );
        renderCountries(allOceaniaCountries);
      }
    });
  })
  .catch((error) => console.error("error fetching data", error));
