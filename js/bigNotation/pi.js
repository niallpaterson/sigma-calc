import solveIteration from './solveIteration.js';
import parsers from '../parser/parsers/index.js';

const { replaceFormulaVariables } = parsers;

const pi = (equation, lowerLimit, upperLimit) => {
  let sumCounter = 1;
  for (let i = lowerLimit; i <= upperLimit; i += 1) {
    sumCounter *= solveIteration(replaceFormulaVariables(equation, i));
  }
  return sumCounter;
};

export default pi;
