import joinMultiDigitNumerals from './parsers/joinMultiDigitNumerals.js';
import convertNumStringsToNumerals from './parsers/convertNumStringsToNumerals.js.js.js.js';
import invertNegativeNumbers from './parsers/invertNegativeNumbers.js';
import parseExponents from './parsers/parseExponents.js.js.js.js';

const compose = (...funcs) => (input) => funcs.reduceRight((acc, func) => func(acc), input);

const parseInputFormula = compose(
  parseExponents,
  invertNegativeNumbers,
  convertNumStringsToNumerals,
  joinMultiDigitNumerals,
);

export default parseInputFormula;
