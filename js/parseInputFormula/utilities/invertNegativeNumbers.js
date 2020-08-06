const existsOnArray = (i) => i >= 0;
const oneBackIsTilde = (i, arr) => existsOnArray(i - 1) && arr[i - 1] === '−';
const twoBackIsNumber = (i, arr) => existsOnArray(i - 2) && typeof arr[i - 2] === 'number';
const isNegativeNum = (i, arr) => oneBackIsTilde(i, arr) && !twoBackIsNumber(i, arr);
const isUnaryTilde = (i, arr) => isNegativeNum(i + 1, arr);

const invertNegativeNumbers = (formula) => formula
  .map((x, i, arr) => (isNegativeNum(i, arr) ? x * -1 : x))
  .filter((x, i, arr) => !isUnaryTilde(i, arr));

export default invertNegativeNumbers;
