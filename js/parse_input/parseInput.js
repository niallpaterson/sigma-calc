import utilities from './utilities';

const {
  compose,
  parseExponents,
  invertNegativeNumbers,
  convertNumStringsToNumerals,
  joinMultiDigitNumerals,
} = utilities;

const parseInput = compose(
  parseExponents,
  invertNegativeNumbers,
  convertNumStringsToNumerals,
  joinMultiDigitNumerals,
);

export default parseInput;
