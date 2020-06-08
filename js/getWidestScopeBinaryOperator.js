import isBinaryOperator from './isBinaryOperator.js';
import countScopingBrackets from './countScopingBrackets.js';

// The widest scope operator is that with the most scoping brackets
// E.g., for [ (x + y) - z ] the widest scope operator is '+'

const getIndexOfWidestScopeBinaryOperator = (formula) => {
  return formula.reduce((widestScopeIndex, symbol, indexOfSymbol) => {
    if (isBinaryOperator(symbol)
      && countScopingBrackets(formula, indexOfSymbol)
      >= countScopingBrackets(formula, widestScopeIndex)) {
      return indexOfSymbol;
    }
    return widestScopeIndex;
  }, null);
};

export default getIndexOfWidestScopeBinaryOperator;
