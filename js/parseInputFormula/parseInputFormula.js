import joinMultiDigitNumerals from './units/joinMultiDigitNumerals.js';
import convertNumStringsToNumerals from './units/convertNumStringsToNumerals.js';
import splitInputFormula from './units/splitInputFormula.js';
import invertNegativeNumbers from './units/invertNegativeNumbers.js';
import parseExponents from './units/parseExponents.js'

const parseInputFormula = (inputFormula) => {
  return parseExponents(invertNegativeNumbers(
    convertNumStringsToNumerals(
      joinMultiDigitNumerals(
        splitInputFormula(inputFormula)))));
};

export default parseInputFormula;
