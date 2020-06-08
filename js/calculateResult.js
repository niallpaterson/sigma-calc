import isBinaryOperator from './isBinaryOperator.js';
import performBinaryOperation from './performBinaryOperation.js';
import applyUnarySubtraction from './applyUnarySubtraction.js';
import getIndexOfWidestScopeBinaryOperator from './getWidestScopeBinaryOperator.js'

const calculateResult = (formula) => {
  if (formula.some((symbol) => isBinaryOperator(symbol))) {
    const removedUnaries = applyUnarySubtraction(formula);
    if (removedUnaries.some((symbol) => isBinaryOperator(symbol))) {
      const widestOperatorIndex = getIndexOfWidestScopeBinaryOperator(removedUnaries);
      return calculateResult(performBinaryOperation(formula, widestOperatorIndex));
    } return removedUnaries;
  }
  return formula[0];
};

export default calculateResult;
