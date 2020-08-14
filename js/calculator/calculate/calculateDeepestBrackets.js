import calculate from './calculate.js';
import utilities from '../../utility/index.js';

const { getDeepestBrackets } = utilities;

const calculateDeepestBrackets = (equation) => {
  const { left, right } = getDeepestBrackets(equation);
  return equation.reduce((acc, x, i) => {
    if (i < left || i > right) return [...acc, x];
    if (i === left) return [...acc, ...calculate(equation.slice(left + 1, right))];
    return acc;
  }, []);
};

export default calculateDeepestBrackets;
