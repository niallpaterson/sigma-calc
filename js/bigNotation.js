import calculateResult from './calculateResult.js';

const bigNotation = {
  activeBigOperator: 'Σ',
  sigma(formula, lowerLimit, upperLimit) {
    let result = 0;
    for (let i = lowerLimit; i <= upperLimit; i++) {
      const workingFormula = formula.map((symbol) => {
        if (symbol === 'i') {
          return i;
        }
        return symbol;
      });
      result += calculateResult(workingFormula);
    }
    // handles diff between -0 and 0
    if (Object.is(result, -0)) { result = 0; }

    return result;
  },
  pi(formula, lowerLimit, upperLimit) {
    let result = 1;
    for (let i = lowerLimit; i <= upperLimit; i++) {
      const workingFormula = formula.map((symbol) => {
        if (symbol === 'i') {
          return i;
        }
        return symbol;
      });
      result *= calculateResult(workingFormula);
    }
    // handles diff between -0 and 0
    if (Object.is(result, -0)) { result = 0; }

    return result;
  },
};

export default bigNotation;
