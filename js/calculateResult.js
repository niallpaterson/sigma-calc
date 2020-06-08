import isBinaryOperator from './isBinaryOperator.js';
import performBinaryOperation from './performBinaryOperation.js';
import applyUnarySubtraction from './applyUnarySubtraction.js';
import getIndexOfWidestScopeBinaryOperator from './getWidestScopeBinaryOperator.js'

const calculateResult = (formula) => {
  if (formula.some((symbol) => isBinaryOperator(symbol))) {
    const removedUnaries = applyUnarySubtraction(formula);
    if (removedUnaries.some((symbol) => isBinaryOperator(symbol))) {
      const widestOperatorIndex = getIndexOfWidestScopeBinaryOperator(removedUnaries);
      return calculateResult(performBinaryOperation(removedUnaries, widestOperatorIndex));
    } return removedUnaries;
  }
  // passing output throgugh Number() catches various syntax errors
  // e.g., when output includes 'undefined'
  return Number(formula[0]);
};

export default calculateResult;
