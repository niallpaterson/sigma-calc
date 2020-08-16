import countLeftBrackets from '../../search/countLeftBrackets.js';
import countRightBrackets from '../../search/countRightBrackets.js';

const bracketsAreEven = (equation) => equation
  .reduce(countLeftBrackets, 0) === equation.reduce(countRightBrackets, 0);

export default bracketsAreEven;
