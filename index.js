const isNumberArray = (array = []) => array.every((item) => typeof item === 'number');
const sortArray = (array = []) => array.sort((a, b) => a - b);

const nonConstructibleChange = (coins = []) => {
  if (!isNumberArray(coins)) {
    throw new Error('This method accept only array of numbers');
  }

  const sortedCoins = sortArray(coins);
  const minimumSummedAmount = sortedCoins.reduce((change, coin) => {
    if (coin > change + 1) {
      return change + 1;
    }
    return change + coin;
  }, 0);

  return minimumSummedAmount;
};

const sortedSquaredArray = (numbers = []) => {
  if (!isNumberArray(numbers)) {
    throw new Error('This method accept only array of numbers');
  }

  const squaredNumbers = numbers.map((number) => number * number);
  const sortedSquaredNumbers = sortArray(squaredNumbers);

  return sortedSquaredNumbers;
};

module.exports = {
  nonConstructibleChange,
  sortedSquaredArray,
};
