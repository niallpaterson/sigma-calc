// A bracket b counts as scoping an operator O only if b is either
// 1. a right bracket to the right of O,
// 2. a left bracket to the left of O.

const countScopingBrackets = (formula, indexOfOperator) => {
  return formula.reduce((numberOfScopingBrackets, symbol, indexOfsymbol) => {
    if ((symbol === '(' && indexOfsymbol < indexOfOperator)
      || (symbol === ')' && indexOfsymbol > indexOfOperator)) {
      return numberOfScopingBrackets + 1;
    }
    return numberOfScopingBrackets;
  }, 0);
};

export default countScopingBrackets;
