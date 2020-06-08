import binaryOperators from './binaryOperators.js';

const performBinaryOperation = (formula, narrowestOperatorIndex) => {
  // perform binary operation
  return formula.map((symbol, symbolIndex) => {
    if (symbolIndex === narrowestOperatorIndex) {
      return binaryOperators[formula[narrowestOperatorIndex]](
        formula[narrowestOperatorIndex - 1], formula[narrowestOperatorIndex + 1]
      );
    }
    return symbol;
  }).filter((symbol, symbolIndex) => {
    // if operands were nested in brackets, remove the brackets
    if ((symbolIndex === narrowestOperatorIndex + 2 && symbol === ')')
      || (symbolIndex === narrowestOperatorIndex - 2 && symbol === '(')) {
      return false;
    }
    // remove operands
    return symbolIndex !== narrowestOperatorIndex + 1 && symbolIndex !== narrowestOperatorIndex - 1;
  });
};

export default performBinaryOperation;
