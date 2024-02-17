const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
//Explain the difference between forEach, map, filter, and reduce.
//ForEach is method to iterate over array and which return undefined
//map is method which perform certain operation on array and retuens modified array
//filter is method which returns array which follows certain condition
//reduce is method which performs operation on array elemennts amd return single value as output.
//Define a callback function before you use it in forEach, map, filter or reduce.
const evenNumbers = (number) => {
  return number % 2 === 0;
};
console.log(numbers.filter(evenNumbers));

//Use forEach to console.log each country in the countries array.
countries.forEach((country) => console.log(country));

//Use forEach to console.log each name in the names array.
names.forEach((name) => console.log(name));

//Use forEach to console.log each number in the numbers array.
numbers.forEach((number) => console.log(number));

//Use map to create a new array by changing each country to uppercase in the countries array.
const countryData = countries.map((country) => country.toUpperCase());
console.log(countryData);

//Use map to create an array of countries length from countries array.
const countryLengthInfo = countries.map((country) => country.length);
console.log(countryLengthInfo);

//Use map to create a new array by changing each number to square in the numbers array
const squareNumbers = numbers.map((number) => number ** 2);
console.log(squareNumbers);

//Use map to change to each name to uppercase in the names array
const namesData = names.map((name) => name.toUpperCase());
console.log(namesData);

//Use map to map the products array to its corresponding prices.
products.map((product) => console.log(product.price));

//Use filter to filter out countries containing land.
console.log(countryData.filter((country) => country.includes("LAND")));

//Use filter to filter out countries having six character.
console.log(countries.filter((country) => country.length === 6));

//Use filter to filter out countries containing six letters and more in the country array.
console.log(countries.filter((country) => country.length >= 6));

//Use filter to filter out country start with 'E';
console.log(countryData.filter((country) => country[0] === "E"));

//Use filter to filter out only prices with values.
console.log(products.filter((product) => product.price != 0));

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStrings = (array) => {
  return array.filter((item) => typeof item === "string");
};
const data = [1, "rutuja", "anushka", "banana", false, "name", 30];
const stringItems = getStrings(data);
console.log(stringItems);

//Use reduce to sum all the numbers in the numbers array.
console.log(
  numbers.reduce((accumulator, currentValue) => (accumulator += currentValue))
);

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const sentence =
  countries.reduce((accumulator, country, index) => {
    if (index === countries.length - 1) {
      return accumulator + "and " + country;
    } else {
      return accumulator + country + ", ";
    }
  }, "") + " are north European countries.";
console.log(sentence);
//Explain the difference between some and every
//some will give output true if any one array element follows condition give result true.
//every will give output true only iff all array elements produce result true.
//Use some to check if some names' length greater than seven in names array
console.log(names.some((name) => name.length > 7));

//Use every to check if all the countries contain the word land
console.log(countryData.every((country) => country.includes("LAND")));

//Explain the difference between find and findIndex.
//find method is used to find the first element in the array that satisfies a condition and if no element founnd then it returns undefined.
//findIndex method is used to find the index of first element in the array that satisfies a condition and if no element founnd then it returns -1.
//Use find to find the first country containing only six letters in the countries array
console.log(countries.find((country) => country.length === 6));

//Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries.findIndex((country) => country.length === 6));

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(
  countries.findIndex((country) => country.toLowerCase() === "norway")
);

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(
  countries.findIndex((country) => country.toLowerCase() === "russia")
);

//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products
  .filter(({ price }) => typeof price === "number" && !isNaN(price))
  .map(({ price }) => Number(price))
  .reduce((total, price) => total + price, 0);
console.log("Total price of products:", totalPrice);

//Find the sum of price of products using only reduce reduce(callback))
const sumOfPrice = products.reduce((total, { price }) => {
  if (typeof price === "number" && !isNaN(price)) {
    return total + price;
  }
  return total;
}, 0);
console.log("Total price of products:", sumOfPrice);

const countriesData = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
    currency: "Afghan afghani",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
    currency: "Euro",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
    currency: "Albanian lek",
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 40400000,
    flag: "https://restcountries.eu/data/dza.svg",
    currency: "Algerian dinar",
  },
  {
    name: "American Samoa",
    capital: "Pago Pago",
    languages: ["English", "Samoan"],
    population: 57100,
    flag: "https://restcountries.eu/data/asm.svg",
    currency: "United State Dollar",
  },
  {
    name: "Andorra",
    capital: "Andorra la Vella",
    languages: ["Catalan"],
    population: 78014,
    flag: "https://restcountries.eu/data/and.svg",
    currency: "Euro",
  },
  {
    name: "Angola",
    capital: "Luanda",
    languages: ["Portuguese"],
    population: 25868000,
    flag: "https://restcountries.eu/data/ago.svg",
    currency: "Angolan kwanza",
  },
  {
    name: "Anguilla",
    capital: "The Valley",
    languages: ["English"],
    population: 13452,
    flag: "https://restcountries.eu/data/aia.svg",
    currency: "East Caribbean dollar",
  },
  {
    name: "Antarctica",
    capital: "",
    languages: ["English", "Russian"],
    population: 1000,
    flag: "https://restcountries.eu/data/ata.svg",
    currency: "Australian dollar",
  },
  {
    name: "Antigua and Barbuda",
    capital: "Saint John's",
    languages: ["English"],
    population: 86295,
    flag: "https://restcountries.eu/data/atg.svg",
    currency: "East Caribbean dollar",
  },
  {
    name: "Argentina",
    capital: "Buenos Aires",
    languages: ["Spanish", "Guaraní"],
    population: 43590400,
    flag: "https://restcountries.eu/data/arg.svg",
    currency: "Argentine peso",
  },
  {
    name: "Armenia",
    capital: "Yerevan",
    languages: ["Armenian", "Russian"],
    population: 2994400,
    flag: "https://restcountries.eu/data/arm.svg",
    currency: "Armenian dram",
  },
  {
    name: "Aruba",
    capital: "Oranjestad",
    languages: ["Dutch", "(Eastern) Punjabi"],
    population: 107394,
    flag: "https://restcountries.eu/data/abw.svg",
    currency: "Aruban florin",
  },
  {
    name: "Australia",
    capital: "Canberra",
    languages: ["English"],
    population: 24117360,
    flag: "https://restcountries.eu/data/aus.svg",
    currency: "Australian dollar",
  },
  {
    name: "Austria",
    capital: "Vienna",
    languages: ["German"],
    population: 8725931,
    flag: "https://restcountries.eu/data/aut.svg",
    currency: "Euro",
  },
  {
    name: "Azerbaijan",
    capital: "Baku",
    languages: ["Azerbaijani"],
    population: 9730500,
    flag: "https://restcountries.eu/data/aze.svg",
    currency: "Azerbaijani manat",
  },
  {
    name: "Bahamas",
    capital: "Nassau",
    languages: ["English"],
    population: 378040,
    flag: "https://restcountries.eu/data/bhs.svg",
    currency: "Bahamian dollar",
  },
  {
    name: "Bahrain",
    capital: "Manama",
    languages: ["Arabic"],
    population: 1404900,
    flag: "https://restcountries.eu/data/bhr.svg",
    currency: "Bahraini dinar",
  },
  {
    name: "Bangladesh",
    capital: "Dhaka",
    languages: ["Bengali"],
    population: 161006790,
    flag: "https://restcountries.eu/data/bgd.svg",
    currency: "Bangladeshi taka",
  },
  {
    name: "Barbados",
    capital: "Bridgetown",
    languages: ["English"],
    population: 285000,
    flag: "https://restcountries.eu/data/brb.svg",
    currency: "Barbadian dollar",
  },
  {
    name: "Belarus",
    capital: "Minsk",
    languages: ["Belarusian", "Russian"],
    population: 9498700,
    flag: "https://restcountries.eu/data/blr.svg",
    currency: "New Belarusian ruble",
  },
  {
    name: "Belgium",
    capital: "Brussels",
    languages: ["Dutch", "French", "German"],
    population: 11319511,
    flag: "https://restcountries.eu/data/bel.svg",
    currency: "Euro",
  },
  {
    name: "Belize",
    capital: "Belmopan",
    languages: ["English", "Spanish"],
    population: 370300,
    flag: "https://restcountries.eu/data/blz.svg",
    currency: "Belize dollar",
  },
  {
    name: "Benin",
    capital: "Porto-Novo",
    languages: ["French"],
    population: 10653654,
    flag: "https://restcountries.eu/data/ben.svg",
    currency: "West African CFA franc",
  },
  {
    name: "Bermuda",
    capital: "Hamilton",
    languages: ["English"],
    population: 61954,
    flag: "https://restcountries.eu/data/bmu.svg",
    currency: "Bermudian dollar",
  },
  {
    name: "Bhutan",
    capital: "Thimphu",
    languages: ["Dzongkha"],
    population: 775620,
    flag: "https://restcountries.eu/data/btn.svg",
    currency: "Bhutanese ngultrum",
  },
  {
    name: "Bolivia (Plurinational State of)",
    capital: "Sucre",
    languages: ["Spanish", "Aymara", "Quechua"],
    population: 10985059,
    flag: "https://restcountries.eu/data/bol.svg",
    currency: "Bolivian boliviano",
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    capital: "Kralendijk",
    languages: ["Dutch"],
    population: 17408,
    flag: "https://restcountries.eu/data/bes.svg",
    currency: "United States dollar",
  },
  {
    name: "Bosnia and Herzegovina",
    capital: "Sarajevo",
    languages: ["Bosnian", "Croatian", "Serbian"],
    population: 3531159,
    flag: "https://restcountries.eu/data/bih.svg",
    currency: "Bosnia and Herzegovina convertible mark",
  },
  {
    name: "Botswana",
    capital: "Gaborone",
    languages: ["English", "Tswana"],
    population: 2141206,
    flag: "https://restcountries.eu/data/bwa.svg",
    currency: "Botswana pula",
  },
  {
    name: "Bouvet Island",
    capital: "",
    languages: ["Norwegian", "Norwegian Bokmål", "Norwegian Nynorsk"],
    population: 0,
    flag: "https://restcountries.eu/data/bvt.svg",
    currency: "Norwegian krone",
  },
  {
    name: "Brazil",
    capital: "Brasília",
    languages: ["Portuguese"],
    population: 206135893,
    flag: "https://restcountries.eu/data/bra.svg",
    currency: "Brazilian real",
  },
  {
    name: "British Indian Ocean Territory",
    capital: "Diego Garcia",
    languages: ["English"],
    population: 3000,
    flag: "https://restcountries.eu/data/iot.svg",
    currency: "United States dollar",
  },
  {
    name: "United States Minor Outlying Islands",
    capital: "",
    languages: ["English"],
    population: 300,
    flag: "https://restcountries.eu/data/umi.svg",
    currency: "United States Dollar",
  },
  {
    name: "Virgin Islands (British)",
    capital: "Road Town",
    languages: ["English"],
    population: 28514,
    flag: "https://restcountries.eu/data/vgb.svg",
    currency: "[D]",
  },
  {
    name: "Virgin Islands (U.S.)",
    capital: "Charlotte Amalie",
    languages: ["English"],
    population: 114743,
    flag: "https://restcountries.eu/data/vir.svg",
    currency: "United States dollar",
  },
  {
    name: "Brunei Darussalam",
    capital: "Bandar Seri Begawan",
    languages: ["Malay"],
    population: 411900,
    flag: "https://restcountries.eu/data/brn.svg",
    currency: "Brunei dollar",
  },
  {
    name: "Bulgaria",
    capital: "Sofia",
    languages: ["Bulgarian"],
    population: 7153784,
    flag: "https://restcountries.eu/data/bgr.svg",
    currency: "Bulgarian lev",
  },
  {
    name: "Burkina Faso",
    capital: "Ouagadougou",
    languages: ["French", "Fula"],
    population: 19034397,
    flag: "https://restcountries.eu/data/bfa.svg",
    currency: "West African CFA franc",
  },
  {
    name: "Burundi",
    capital: "Bujumbura",
    languages: ["French", "Kirundi"],
    population: 10114505,
    flag: "https://restcountries.eu/data/bdi.svg",
    currency: "Burundian franc",
  },
  {
    name: "Cambodia",
    capital: "Phnom Penh",
    languages: ["Khmer"],
    population: 15626444,
    flag: "https://restcountries.eu/data/khm.svg",
    currency: "Cambodian riel",
  },
  {
    name: "Cameroon",
    capital: "Yaoundé",
    languages: ["English", "French"],
    population: 22709892,
    flag: "https://restcountries.eu/data/cmr.svg",
    currency: "Central African CFA franc",
  },
  {
    name: "Canada",
    capital: "Ottawa",
    languages: ["English", "French"],
    population: 36155487,
    flag: "https://restcountries.eu/data/can.svg",
    currency: "Canadian dollar",
  },
  {
    name: "Cabo Verde",
    capital: "Praia",
    languages: ["Portuguese"],
    population: 531239,
    flag: "https://restcountries.eu/data/cpv.svg",
    currency: "Cape Verdean escudo",
  },
  {
    name: "Cayman Islands",
    capital: "George Town",
    languages: ["English"],
    population: 58238,
    flag: "https://restcountries.eu/data/cym.svg",
    currency: "Cayman Islands dollar",
  },
  {
    name: "Central African Republic",
    capital: "Bangui",
    languages: ["French", "Sango"],
    population: 4998000,
    flag: "https://restcountries.eu/data/caf.svg",
    currency: "Central African CFA franc",
  },
  {
    name: "Chad",
    capital: "N'Djamena",
    languages: ["French", "Arabic"],
    population: 14497000,
    flag: "https://restcountries.eu/data/tcd.svg",
    currency: "Central African CFA franc",
  },
  {
    name: "Chile",
    capital: "Santiago",
    languages: ["Spanish"],
    population: 18191900,
    flag: "https://restcountries.eu/data/chl.svg",
    currency: "Chilean peso",
  },
  {
    name: "China",
    capital: "Beijing",
    languages: ["Chinese"],
    population: 1377422166,
    flag: "https://restcountries.eu/data/chn.svg",
    currency: "Chinese yuan",
  },
  {
    name: "Christmas Island",
    capital: "Flying Fish Cove",
    languages: ["English"],
    population: 2072,
    flag: "https://restcountries.eu/data/cxr.svg",
    currency: "Australian dollar",
  },
  {
    name: "Cocos (Keeling) Islands",
    capital: "West Island",
    languages: ["English"],
    population: 550,
    flag: "https://restcountries.eu/data/cck.svg",
    currency: "Australian dollar",
  },
  {
    name: "Colombia",
    capital: "Bogotá",
    languages: ["Spanish"],
    population: 48759958,
    flag: "https://restcountries.eu/data/col.svg",
    currency: "Colombian peso",
  },
  {
    name: "Comoros",
    capital: "Moroni",
    languages: ["Arabic", "French"],
    population: 806153,
    flag: "https://restcountries.eu/data/com.svg",
    currency: "Comorian franc",
  },
  {
    name: "Congo",
    capital: "Brazzaville",
    languages: ["French", "Lingala"],
    population: 4741000,
    flag: "https://restcountries.eu/data/cog.svg",
    currency: "Central African CFA franc",
  },
  {
    name: "Congo (Democratic Republic of the)",
    capital: "Kinshasa",
    languages: ["French", "Lingala", "Kongo", "Swahili", "Luba-Katanga"],
    population: 85026000,
    flag: "https://restcountries.eu/data/cod.svg",
    currency: "Congolese franc",
  },
  {
    name: "Cook Islands",
    capital: "Avarua",
    languages: ["English"],
    population: 18100,
    flag: "https://restcountries.eu/data/cok.svg",
    currency: "New Zealand dollar",
  },
  {
    name: "Costa Rica",
    capital: "San José",
    languages: ["Spanish"],
    population: 4890379,
    flag: "https://restcountries.eu/data/cri.svg",
    currency: "Costa Rican colón",
  },
  {
    name: "Croatia",
    capital: "Zagreb",
    languages: ["Croatian"],
    population: 4190669,
    flag: "https://restcountries.eu/data/hrv.svg",
    currency: "Croatian kuna",
  },
  {
    name: "Cuba",
    capital: "Havana",
    languages: ["Spanish"],
    population: 11239004,
    flag: "https://restcountries.eu/data/cub.svg",
    currency: "Cuban convertible peso",
  },
  {
    name: "Curaçao",
    capital: "Willemstad",
    languages: ["Dutch", "(Eastern) Punjabi", "English"],
    population: 154843,
    flag: "https://restcountries.eu/data/cuw.svg",
    currency: "Netherlands Antillean guilder",
  },
  {
    name: "Cyprus",
    capital: "Nicosia",
    languages: ["Greek (modern)", "Turkish", "Armenian"],
    population: 847000,
    flag: "https://restcountries.eu/data/cyp.svg",
    currency: "Euro",
  },
  {
    name: "Czech Republic",
    capital: "Prague",
    languages: ["Czech", "Slovak"],
    population: 10558524,
    flag: "https://restcountries.eu/data/cze.svg",
    currency: "Czech koruna",
  },
];
//Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const categorizeCountries = (pattern) => {
  return countriesData.filter(({ name }) => {
    return (
      name.toLowerCase().includes(pattern) ||
      name.toLowerCase().endsWith(pattern) ||
      name.toLowerCase().startsWith(pattern)
    );
  });
};
console.log(categorizeCountries("land"));
console.log(categorizeCountries("ia"));
console.log(categorizeCountries("island"));
console.log(categorizeCountries("stan"));

//Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const firstLetterCOunt = (countriesData) => {
  const firstLetter = {};
  for (const { name } of countriesData) {
    if (name && name.length > 0) {
      const initial = name[0].toUpperCase();
      if (firstLetter[initial]) {
        firstLetter[initial]++;
      } else {
        firstLetter[initial] = 1;
      }
    }
  }
  const characterArray = [];
  for (const letter in firstLetter) {
    characterArray.push({ letter, count: firstLetter[letter] });
  }
  return characterArray;
};
const letterCounts = firstLetterCOunt(countriesData);
console.log(letterCounts);

//Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const getFirstTenCountries = () => {
  return countriesData.slice(0, 10);
};
console.log(getFirstTenCountries());

//Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
const getLastTenCountries = () => {
  return countriesData.slice(-10);
};
console.log(getLastTenCountries());

//Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
const findMostCommonInitial = (countriesData) => {
  const charCount = countriesData.reduce((accumulator, { name }) => {
    const initial = name.charAt(0).toUpperCase();
    accumulator[initial] = (accumulator[initial] || 0) + 1;
    return accumulator;
  }, {});
  let mostCommonInitial = "";
  let maxCount = 0;
  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      mostCommonInitial = char;
    }
  }
  return mostCommonInitial;
};
console.log(findMostCommonInitial(countriesData));

//Use the countries information, in the data folder. Sort countries by name, by capital, by population
const { name, capital, population } = countriesData;
countriesData.sort((a, b) => {
  return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
});
console.log("Sorted by name:", countriesData);

// Sort by capital
countriesData.sort((a, b) => {
  return a.capital.toLowerCase() > b.capital.toLowerCase() ? 1 : -1;
});
console.log("Sorted by capital:", countriesData);

// Sort by population
countriesData.sort((a, b) => a.population - b.population);
console.log("Sorted by population:", countriesData);

//Find the 10 most spoken languages:
const mostSpokenLanguages = (countriesData, numberOfLanguages) => {
  const languages = countriesData.map((country) => country.languages);
  const languageCount = languages.reduce((accumulator, language) => {
    accumulator[language] = (accumulator[language] || 0) + 1;
    return accumulator;
  }, {});
  const sortedLanguages = Object.entries(languageCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, numberOfLanguages);
  return sortedLanguages.map(([language, count]) => ({ language, count }));
};
console.log(mostSpokenLanguages(countriesData, 10));
