import utilities from '../../utility/index.js';

const { isNumeralString } = utilities;

const joinMultiDigitNumerals = (formula) => formula
  .reduce((acc, x, i, form) => {
    if (!isNumeralString(x)) { return [...acc, x] }
    if (!isNumeralString(form[i - 1])) { return [...acc, x] }
    return acc.map((y, j) => ((j === acc.length - 1) ? (y + x) : y));
  }, []);

export default joinMultiDigitNumerals;
