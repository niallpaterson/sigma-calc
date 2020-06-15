import operators from './operators.js';

const performOperations = (formula, narrowestOperatorIndex) => {
  // perform binary operation
  return formula.map((symbol, symbolIndex) => {
    if (symbolIndex === narrowestOperatorIndex) {
      return operators[formula[narrowestOperatorIndex]](
        formula[narrowestOperatorIndex - 1], formula[narrowestOperatorIndex + 1]
      );
    }
    return symbol;
  }).filter((symbol, symbolIndex) => {
    // if operands were nested in brackets, remove the brackets
    if ((symbolIndex === narrowestOperatorIndex + 2 && symbol === ')')) { return false; }
    if ((symbolIndex === narrowestOperatorIndex - 2 && symbol === '(')) { return false; }
    // remove operands
    if ((formula[narrowestOperatorIndex] !== '√') && (symbolIndex === narrowestOperatorIndex - 1)) { return false; }
    return symbolIndex !== narrowestOperatorIndex + 1;
  });
};

export default performOperations;