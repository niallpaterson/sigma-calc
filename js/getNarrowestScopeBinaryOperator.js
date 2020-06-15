import isAnOperator from './isAnOperator.js';
import countScopingBrackets from './countScopingBrackets.js';

// The narrowest scope operator is that with the most scoping brackets
// E.g., for [ (x + y) - z ] the narrowest scope operator is '+'

const getIndexOfnarrowestScopeBinaryOperator = (formula) => {
  return formula.reduce((narrowestScopeIndex, symbol, indexOfSymbol) => {
    if (isAnOperator(symbol)
      && countScopingBrackets(formula, indexOfSymbol)
      >= countScopingBrackets(formula, narrowestScopeIndex)) {
      return indexOfSymbol;
    }
    return narrowestScopeIndex;
  }, null);
};

export default getIndexOfnarrowestScopeBinaryOperator;
