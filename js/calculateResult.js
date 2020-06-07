import isBinaryOperator from './isBinaryOperator';
import performBinaryOperation from './performBinaryOperation';
import applyUnarySubtraction from './applyUnarySubtraction';
import getIndexOfWidestScopeBinaryOperator from './getWidestScopeBinaryOperator'

const calculateResult = (formula) => {
  if (formula.some((symbol) => isBinaryOperator(symbol))) {
    const removedUnaries = applyUnarySubtraction(formula);
    const widestOperatorIndex = getIndexOfWidestScopeBinaryOperator(removedUnaries);
    return calculateResult(performBinaryOperation(formula, widestOperatorIndex));
  }
  return formula[0];
};

export default calculateResult;
