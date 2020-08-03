import isNumeralString from '../isNumeralString.js';

const joinMultiDigitNumerals = (formula) => formula
.reduce((acc, symbol, index, formula) => {
    if (index === 0) { return [symbol] }
    if (!isNumeralString(symbol)) { return [...acc, symbol] }
    if (!isNumeralString(formula[index - 1])) { return [...acc, symbol] }
    return acc.map((item, j) => (j === acc.length - 1) ? (item + symbol) : item);
  }, []);

export default joinMultiDigitNumerals;
