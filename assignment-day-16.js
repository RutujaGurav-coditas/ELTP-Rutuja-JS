const numbers = [2, 9, 6];
const maxOfnumbers = (firstNumber, secondNumber) => {
  if (firstNumber > secondNumber) {
    return firstNumber;
  } else {
    return secondNumber;
  }
};
const reduceFunction = (numbers, maxOfnumbers) => {
  let max = -Infinity;
  for (let index = 0; index < numbers.length; index++) {
    max = maxOfnumbers(max, numbers[index]);
  }
  return max;
};
console.log(reduceFunction(numbers, maxOfnumbers));
