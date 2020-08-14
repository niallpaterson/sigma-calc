import utilities from '../utility/index.js';
import calculator from '../calculator/index.js';
import parser from '../parser/index.js';

const { calculate, calculateDeepestBrackets } = calculator;
const { isOperator, isBracket } = utilities;
const { parseOutput } = parser;

const solveIteration = (equation) => {
  if (equation.some(isOperator)) {
    if (equation.some(isBracket)) {
      return solveIteration(calculateDeepestBrackets(equation));
    }
    return solveIteration(calculate(equation));
  }
  return parseOutput(equation);
};

export default solveIteration;
