import joinMultiDigitNumerals from './joinMultiDigitNumerals.js';
import convertNumStringsToNumerals from './convertNumStringsToNumerals.js';
import splitInputFormula from './splitInputFormula.js';
import invertNegativeNumbers from './invertNegativeNumbers.js';

const parseInputFormula = (inputFormula) => {
  return invertNegativeNumbers(
    convertNumStringsToNumerals(
      joinMultiDigitNumerals(
        splitInputFormula(inputFormula))));
};

export default parseInputFormula;
