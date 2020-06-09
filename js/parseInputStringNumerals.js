import joinMultiDigitNumerals from './joinMultiDigitNumerals.js';

const parseInputStringNumerals = (formula) => {
  let joinedNumerals = null;
  formula.forEach((symbol, index) => {
    joinedNumerals = joinMultiDigitNumerals(formula, symbol, index);
  });
  // replace number strings with numbers
  return joinedNumerals.map((symbol) => (Number(symbol) || Number(symbol) === 0 ? Number(symbol) : symbol));
};

export default parseInputStringNumerals;
