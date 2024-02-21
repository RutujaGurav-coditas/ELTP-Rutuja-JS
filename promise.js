//Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = fetch("https://restcountries.com/v2/all");
const fetchCountryData = new Promise((resolve, reject) => {
  if (countriesAPI) {
    resolve(countriesAPI);
  } else {
    reject("something went wrong");
  }
});
fetchCountryData
  .then((response) => {
    return response.json();
  })
  .then((countriesData) => {
    const allLanguages = [];
    for (const {
      name,
      area,
      capital,
      population,
      languages,
    } of countriesData) {
      const [{ name: languageName }] = languages;
      console.log(
        `country name:${name}\ncapital:${capital}\narea:${area}\npopulation:${population}\nlanguages:${languageName}`
      );
      allLanguages.push(languageName);
    }
    const largestCountries = countriesData
      .sort((a, b) => a.area - b.area)
      .slice(0, 10)
      .map((countriesData) => countriesData.name);
    console.log(`10 largest countires ${largestCountries}`);
    console.log(`total languages:${allLanguages.length}`);
  })
  .catch((error) => {
    return error;
  })
  .finally(() => console.log("runs everytime"));

// Print out all the cat names in to catNames variable.
const catsAPI = fetch("https://api.thecatapi.com/v1/breeds");
const fetchCats = new Promise((resolve, reject) => {
  if (catsAPI) {
    resolve(catsAPI);
  } else {
    reject("something went wrong");
  }
});
fetchCats
  .then((response) => {
    return response.json();
  })
  .then((catsData) => {
    for (const { name } of catsData) {
      console.log(`cat name:${name}}`);
    }
  })
  .catch((reject) => {
    console.log(reject);
  });
