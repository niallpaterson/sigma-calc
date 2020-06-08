import isBinaryOperator from './isBinaryOperator.js';
import performBinaryOperation from './performBinaryOperation.js';
import applyUnarySubtraction from './applyUnarySubtraction.js';
import getIndexOfnarrowestScopeBinaryOperator from './getnarrowestScopeBinaryOperator.js'

const calculateResult = (formula) => {
  if (formula.some((symbol) => isBinaryOperator(symbol))) {
    const removedUnaries = applyUnarySubtraction(formula);
    if (removedUnaries.some((symbol) => isBinaryOperator(symbol))) {
      const narrowestOperatorIndex = getIndexOfnarrowestScopeBinaryOperator(removedUnaries);
      return calculateResult(performBinaryOperation(removedUnaries, narrowestOperatorIndex));
    } return removedUnaries;
  }
  // passing output throgugh Number() catches various syntax errors
  // e.g., when output includes 'undefined'
  return Number(formula[0]);
};

export default calculateResult;
