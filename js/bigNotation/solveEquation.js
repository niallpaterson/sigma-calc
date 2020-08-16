import parser from '../parser/index.js';
import utilities from '../utility/index.js';
import pi from './pi.js';
import sigma from './sigma.js';

const { isValidInput } = utilities;
const { parseInput } = parser;

const solveEquation = (activeBigOperator, rawEquation, lowerLimit, upperLimit) => {
  const equation = parseInput(rawEquation);
  if (!isValidInput(equation)) return NaN;
  if (activeBigOperator === 'Σ') return sigma(equation, lowerLimit, upperLimit);
  if (activeBigOperator === 'Π') return pi(equation, lowerLimit, upperLimit);
  return new Error('No big operator active');
};

export default solveEquation;
