import parsers from './parsers/index.js';
import utilities from '../utility/index.js';

const { compose } = utilities;
const {
  parseExponents,
  invertNegativeNumbers,
  convertNumStringsToNumerals,
  joinMultiDigitNumerals,
} = parsers;

const parseInput = compose(
  parseExponents,
  invertNegativeNumbers,
  convertNumStringsToNumerals,
  joinMultiDigitNumerals,
);

export default parseInput;
