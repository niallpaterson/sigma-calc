import binaryOperators from './binaryOperators.js';

const performBinaryOperation = (formula, widestOperatorIndex) => {
  // perform binary operation
  return formula.map((symbol, symbolIndex) => {
    if (symbolIndex === widestOperatorIndex) {
      return binaryOperators[formula[widestOperatorIndex]](
        formula[widestOperatorIndex - 1], formula[widestOperatorIndex + 1]
      );
    }
    return symbol;
  }).filter((symbol, symbolIndex) => {
    // if operands were nested in brackets, remove the brackets
    if ((symbolIndex === widestOperatorIndex + 2 && symbol === ')')
      || (symbolIndex === widestOperatorIndex - 2 && symbol === '(')) {
      return false;
    }
    // remove operands
    return symbolIndex !== widestOperatorIndex + 1 && symbolIndex !== widestOperatorIndex - 1;
  });
};

export default performBinaryOperation;
