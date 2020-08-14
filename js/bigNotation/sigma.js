import solveIteration from './solveIteration.js';
import parser from '../parser/index.js';

const { replaceFormulaVariables } = parser;

const sigma = (equation, lowerLimit, upperLimit) => {
  let sumCounter = 0;
  for (let i = lowerLimit; i <= upperLimit; i += 1) {
    sumCounter += solveIteration(replaceFormulaVariables(equation, i));
  }
  return sumCounter;
};

export default sigma;
