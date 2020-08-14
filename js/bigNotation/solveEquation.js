import parser from '../parser/index.js';
import pi from './pi.js';
import sigma from './sigma.js';

const { parseInput } = parser;

const solveEquation = (activeBigOperator, rawEquation, lowerLimit, upperLimit) => {
  const equation = parseInput(rawEquation);
  if (activeBigOperator === 'Σ') { return sigma(equation, lowerLimit, upperLimit); }
  if (activeBigOperator === 'Π') { return pi(equation, lowerLimit, upperLimit); }
};

export default solveEquation;
