const numbers = [2, 9, 6];
const sumOfNumbers = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};
const reduceFunction = (numbers, sumOfNumbers, accumulator) => {
  if (accumulator) {
    sum = accumulator;
  } else {
    sum = numbers[0];
  }
  for (number of numbers) {
    sum = sumOfNumbers(sum, number);
  }
  return sum;
};
console.log(reduceFunction(numbers, sumOfNumbers, 10));
