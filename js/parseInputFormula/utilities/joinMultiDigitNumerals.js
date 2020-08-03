import isNumeralString from '../isNumeralString.js';

const joinMultiDigitNumerals = (formula) => {
  const staleNumeralIndexes = [];
  return formula.map((symbol, index) => {
    if (isNumeralString(symbol)) {
      let joinedNumerals = symbol;
      for (let i = index + 1; i < formula.length; i++) {
        if (isNumeralString(formula[i])) {
          joinedNumerals += formula[i];
          staleNumeralIndexes.push(i);
        }
        // only concantenate up to the end of each multidigit numeral
        if (!isNumeralString(formula[i])) { break; }
      }
      return joinedNumerals;
    }
    return symbol;
  }).filter((symbol, index) => {
    if (staleNumeralIndexes.includes(index)) { return false; }
    return true;
  });
};

export default joinMultiDigitNumerals;
