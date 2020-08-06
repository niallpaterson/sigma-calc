import utilities from './utilities';

const {
  compose,
  parseExponents,
  invertNegativeNumbers,
  convertNumStringsToNumerals,
  joinMultiDigitNumerals,
} = utilities;

const parseInputFormula = compose(
  parseExponents,
  invertNegativeNumbers,
  convertNumStringsToNumerals,
  joinMultiDigitNumerals,
);

export default parseInputFormula;
