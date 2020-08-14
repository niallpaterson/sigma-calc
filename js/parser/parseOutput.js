import parsers from './parsers/index.js';
import utilities from '../utility/index.js';

const { compose } = utilities;
const { normaliseZeros, validateOutput, trimBrackets } = parsers;

const parseOutput = compose(
  validateOutput,
  trimBrackets,
  normaliseZeros,
);

export default parseOutput;
