import joinMultiDigitNumerals from './units/joinMultiDigitNumerals.js';
import convertNumStringsToNumerals from './units/convertNumStringsToNumerals.js';
import splitInputFormula from './splitInputFormula.js';
import invertNegativeNumbers from './units/invertNegativeNumbers.js';

const parseInputFormula = (inputFormula) => {
  return invertNegativeNumbers(
    convertNumStringsToNumerals(
      joinMultiDigitNumerals(
        splitInputFormula(inputFormula))));
};

export default parseInputFormula;
