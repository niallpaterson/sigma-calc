import joinMultiDigitNumerals from './units/joinMultiDigitNumerals.js';
import convertNumStringsToNumerals from './units/convertNumStringsToNumerals.js';
import splitInputFormula from './units/splitInputFormula.js';
import invertNegativeNumbers from './units/invertNegativeNumbers.js';
import parseExponents from './units/parseExponents.js';

const compose = (...funcs) => (input) => funcs.reduceRight((acc, func) => func(acc), input);

const parseInputFormula = compose(
  parseExponents,
  invertNegativeNumbers,
  convertNumStringsToNumerals,
  joinMultiDigitNumerals,
  splitInputFormula,
);

export default parseInputFormula;
