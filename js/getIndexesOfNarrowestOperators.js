import isAnOperator from './isAnOperator.js';
import countScopingBrackets from './countScopingBrackets.js';

// The narrowest scope operator is that with the most scoping brackets
// E.g., for [ (x + y) - z ] the narrowest scope operator is '+'

const getIndexesOfNarrowestOperators = (formula) => {
  return formula.reduce((narrowestOperators, symbol, indexOfSymbol) => {
    if (isAnOperator(symbol)) {
      if (countScopingBrackets(formula, indexOfSymbol) > countScopingBrackets(formula, narrowestOperators[0])) {
        narrowestOperators.length = 0;
        narrowestOperators.push(indexOfSymbol);
      } else if (countScopingBrackets(formula, indexOfSymbol) === countScopingBrackets(formula, narrowestOperators[0])) {
        narrowestOperators.push(indexOfSymbol);
      }
    }
    return narrowestOperators;
  }, []);
};

export default getIndexesOfNarrowestOperators;
