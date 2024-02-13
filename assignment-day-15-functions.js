//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => {
  return length * width;
};
console.log(areaOfRectangle(4, 5));
//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = (month) => {
  const currentMonth = month.toLowerCase();
  if (
    currentMonth === "september" ||
    currentMonth === "october" ||
    currentMonth === "november"
  ) {
    return "The season is Autumn";
  } else if (
    currentMonth === "december" ||
    currentMonth === "january" ||
    currentMonth === "february"
  ) {
    return "The Season is Winter";
  } else if (
    currentMonth === "april" ||
    currentMonth === "may" ||
    currentMonth === "june" ||
    currentMonth === "july"
  ) {
    return "The season is Summer";
  } else if (currentMonth === "march") {
    return "The season is Spring";
  } else {
    return "you have entered wrong month";
  }
};
console.log(checkSeason("December"));
//Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (firstNumber, secondNumber, thirdNumber) => {
  if (firstNumber === secondNumber && firstNumber === thirdNumber) {
    return firstNumber;
  } else if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    return firstNumber;
  } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    return secondNumber;
  } else {
    return thirdNumber;
  }
};
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

//4. Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (firstNumber, secondNumber) => {
  firstNumber = firstNumber + secondNumber;
  secondNumber = firstNumber - secondNumber;
  firstNumber = firstNumber - secondNumber;
  return `${firstNumber},${secondNumber}`;
};
console.log(swapValues(10, 20));
//5. Write a function generateColors which can generate any number of hexa or rgb colors.
const generateColors = (type, numberOfColors) => {
  const colors = [];
  const characters = "0123456789ABCDEF";
  const typeOfColor = type.toLowerCase();
  for (let outerIndex = 0; outerIndex < numberOfColors; outerIndex++) {
    let color = "";
    if (typeOfColor === "hexa") {
      for (let innerIndex = 0; innerIndex < 6; innerIndex++) {
        color += characters[Math.floor(Math.random() * 16)];
      }
      colors.push("#" + color);
    } else if (type === "rgb") {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      colors.push(`rgb(${r}, ${g}, ${b})`);
    } else {
      console.log("Invalid color type specified.");
      return;
    }
  }

  return colors;
};
console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors("hexa", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'
//6. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array.
//If the array length is less than five it return 'item not found'.
const modifyArray = (array) => {
  if (array.length < 5) {
    return "item not found";
  } else {
    array[4] = array[4].toUpperCase();
    return array;
  }
};
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

//7. Write a functions which checks if all items are unique in the array.
const areAllUnique = (array) => {
  for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
    for (
      let innerIndex = outerIndex + 1;
      innerIndex < array.length;
      innerIndex++
    ) {
      if (array[outerIndex] === array[innerIndex]) {
        return false;
      }
    }
  }
  return true;
};
console.log(areAllUnique([1, 2, 3, 4, 5]));
console.log(areAllUnique([1, 2, 3, 4, 4]));

/*8. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
sevenRandomNumbers()*/
const sevenRandomNumbers = () => {
  const numbers = [];
  while (numbers.length < 7) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
};
console.log(sevenRandomNumbers());
