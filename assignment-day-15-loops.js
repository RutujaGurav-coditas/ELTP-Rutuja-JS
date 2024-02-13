// Iterate 0 to 10 using for loop, do the same using while and do while loop
//using for loop
for (let index = 0; index < 11; index++) {
  console.log(index);
}
//using while
let index = 0;
while (index < 11) {
  console.log(index);
  index++;
}
//using do while
let secondIndex = 0;
do {
  console.log(secondIndex);
  secondIndex++;
} while (secondIndex < 11);
//Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let index = 10; index >= 0; index--) {
  console.log(index);
}
//Iterate 0 to n using for loop
const n = 15;
for (let index = 0; index <= n; index++) {
  console.log(index);
}
/*4. Write a loop that makes the following pattern using console.log():
      #
      ##
      ###
      ####
      #####
      ######
      #######*/
for (let index = 1; index < 8; index++) {
  console.log("#".repeat(index));
}

/*5. Using loop print the following pattern
   i    i^2   i^3
   0    0     0
   1    1     1
   2    4     8
   3    9     27
   4    16    64
   5    25    125
   6    36    216
   7    49    343
   8    64    512
   9    81    729
   10   100   1000*/
for (let index = 0; index < 11; index++) {
  console.log(`${index}\t${index ** 2}\t${index ** 3}`);
}

//5. Use for loop to iterate from 0 to 100 and print only even numbers
for (let index = 0; index < 101; index++) {
  if (!(index % 2)) {
    console.log(index);
  }
}
// 6. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let index = 0; index < 101; index++) {
  if (index % 2) {
    console.log(index);
  }
}
// 7. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let outerIndex = 2; outerIndex <= 100; outerIndex++) {
  let isPrime = true;
  for (let innerIndex = 2; innerIndex <= Math.sqrt(outerIndex); innerIndex++) {
    if (outerIndex % innerIndex === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(outerIndex);
  }
}

//8. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let index = 0; index < 101; index++) {
  sum += index;
}
console.log(sum);

//9. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOfEven = 0,
  sumOfOdd = 0;
for (let index = 0; index < 101; index++) {
  if (index % 2) {
    sumOfOdd += index;
  } else {
    sumOfEven += index;
  }
}
console.log(sumOfEven);
console.log(sumOfOdd);

//10. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. //O/P:   [2550, 2500]
const sumOfEvenOdd = [sumOfEven, sumOfOdd];
console.log(sumOfEvenOdd);

//11. Develop a small script which generate array of 5 random numbers
const randomNumbers = [];
for (let index = 0; index < 5; index++) {
  randomNumbers.push(Math.random());
}
console.log(randomNumbers);

//12. Develop a small script which generate array of 5 random numbers and the numbers must be unique
const uniqueRandomNumbers = [];
for (let index = 0; index < 5; index++) {
  let randomNumber = Math.random();
  if (!uniqueRandomNumbers.includes(randomNumber)) {
    uniqueRandomNumbers.push(randomNumber);
  }
}
console.log(randomNumbers);

//13. Develop a small script which generate a six characters random id: //iuyt56
const characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let randomId;
for (let i = 0; i < 6; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomId += characters[randomIndex];
}
console.log(randomId);

//  14. Develop a small script which generate any number of characters random id.
let randomNumber;
const lengthOfRandomId = 10;
for (let i = 0; i < lengthOfRandomId; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomNumber += characters[randomIndex];
}
console.log(randomNumber);

// 15. Write a script which generates a random hexadecimal number.
const hexadecimalRange = "0123456789ABCDEF";
let randomHexadecimal;
for (let i = 0; i < lengthOfRandomId; i++) {
  const randomIndex = Math.floor(Math.random() * hexadecimalRange.length);
  randomHexadecimal += hexadecimalRange[randomIndex];
}
console.log(randomHexadecimal);

// 16. Using the above countries array, create the following new array.
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
//using for of
for (country of countries) {
  console.log(country.toUpperCase());
}
//using forEach
countries.forEach((country) => {
  console.log(country.toUpperCase());
});

// 17. Using the above countries array, create an array for countries length
//using map
const countryLength = countries.map((country) => {
  return country.length;
});
console.log(countryLength);
//using for of
lengthOfCountries = [];
for (country of countries) {
  lengthOfCountries.push(country.length);
}
console.log(lengthOfCountries);
// 18. Use the countries array to create the following array of arrays:
//using map
const countryData = countries.map((country) => {
  return [country, country.slice(0, 3).toUpperCase(), country.length];
});
console.log(countryData);
//using for of
const countriesData = [];
for (country of countries) {
  countriesData.push([
    `${country},${country.slice(0, 3).toUpperCase()},${country.length}`,
  ]);
}
console.log(countriesData);
// 19. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
//using filter
const countryContainingLand = countries.filter((country) => {
  return country.includes("land");
});
countryContainingLand.length > 0
  ? console.log(countryContainingLand)
  : console.log("All these countries are without land");
//using for of
for (country of countries) {
  country.includes("land")
    ? console.log(country)
    : console.log("All these countries are without land");
}

//20. Using the above countries array, find the country containing the biggest number of characters.
//using reduce
const countryWithMaxCharacters = countries.reduce(
  (accumulator, currentValue) => {
    if (accumulator.length < currentValue.length) {
      accumulator = currentValue;
    }
    return accumulator;
  }
);
console.log(countryWithMaxCharacters);
//using for of
let longerWord = "";
for (index = 0; index < countries.length; index++) {
  if (countries[index].length > longerWord.length) {
    longerWord = countries[index];
  }
}
console.log(longerWord);
// 21. Using the above countries array, find the country containing only 5 characters.
const countryWithLengthFive = countries.filter((country) => {
  return country.length === 5;
});
console.log(countryWithLengthFive);
//using for of
for (country of countries) {
  if (country.length === 5) {
    console.log(country);
  }
}
//22. Find the longest word in the webTechs array.
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
//using reduce
const longestWord = webTechs.reduce((accumulator, currentValue) => {
  if (accumulator.length < currentValue.length) {
    accumulator = currentValue;
  }
  return accumulator;
});
console.log(longestWord);
//using for of
let longWord = "";
for (index = 0; index < webTechs.length; index++) {
  if (webTechs[index].length > longWord.length) {
    longWord = webTechs[index];
  }
}
console.log(longWord);
console.log(webTechs[webTechs.length - 1]);
//23. Use the webTechs array to create the following array of arrays:
//using map
const webTechData = webTechs.map((tech) => {
  return [tech, tech.length];
});
console.log(webTechData);
//using for of
const skillsData = [];
for (tech of webTechs) {
  skillsData.push([tech, tech.length]);
}
console.log(skillsData);
// 24. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ["MongoDB", "Express", "React", "Node"];
//using map
const mernAcronym = mernStack.map((tool) => tool[0]).join("");
console.log(mernAcronym);
//using for loop
let acronym;
for (index = 0; index < mernStack.length; index++) {
  acronym += mernStack[index][0];
}
console.log(acronym);
//25. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const skills = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
for (data of skills) {
  console.log(data);
}
// 26. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ["banana", "orange", "mango", "lemon"];
const length = fruits.length;
for (let index = 0; index < length / 2; index++) {
  const temp = fruits[index];
  fruits[index] = fruits[length - 1 - index];
  fruits[length - 1 - index] = temp;
}
console.log(fruits);

//27. Print all the elements of array as shown below.
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (outerIndex = 0; outerIndex < fullStack.length; outerIndex++) {
  for (
    innerIndex = 0;
    innerIndex < fullStack[outerIndex].length;
    innerIndex++
  ) {
    console.log(fullStack[outerIndex][innerIndex].toUpperCase());
  }
}
