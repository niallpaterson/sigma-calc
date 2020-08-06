import utilities from '../utilities';

const { isNegativeNum, isUnaryTilde } = utilities;

const invertNegativeNumbers = (formula) => formula
  .map((x, i, arr) => (isNegativeNum(i, arr) ? x * -1 : x))
  .filter((x, i, arr) => !isUnaryTilde(i, arr));

export default invertNegativeNumbers;
