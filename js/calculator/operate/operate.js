import operations from './operations.js';
import utilities from '../../utility/index.js';

const { isBinary, isUnary } = utilities;

const operate = (equation, operator) => {
  if (equation.includes(operator)) {
    const i = equation.indexOf(operator);
    const result = operations[operator](equation[i - 1], equation[i + 1]);
    const rightHandSide = equation.slice(i + 2, equation.length);
    let leftHandSide;
    if (isBinary(operator)) leftHandSide = equation.slice(0, i - 1);
    if (isUnary(operator)) leftHandSide = equation.slice(0, i);
    return operate([...leftHandSide, result, ...rightHandSide], operator);
  }
  return equation;
};


export default operate;
