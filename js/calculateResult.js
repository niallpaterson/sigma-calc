import isAnOperator from './isAnOperator.js';
import outputIsValidNumber from './outputIsValidNumber.js';
import performOperation from './performOperation.js';
import invertNegativeNumbers from './invertNegativeNumbers.js';
import getIndexesOfNarrowestOperators from './getIndexesOfNarrowestOperators.js'
import bodmasArray from './bodmasArray.js';

const calculateResult = (formula) => {
  if (formula.some((symbol) => isAnOperator(symbol))) {
    formula = invertNegativeNumbers(formula);
  }

  for (let i = 0; i < bodmasArray.length; i++) {
    for (let j = 0; j < formula.length; j++) {
      if (isAnOperator(formula[j]) &&
        formula[j] === bodmasArray[i] &&
        getIndexesOfNarrowestOperators(formula).includes(j)) {
        formula = performOperation(formula, j);
        return calculateResult(formula);
      }
    }
  }

  if (outputIsValidNumber((formula))) { return formula[0]; }

  return NaN;
};

export default calculateResult;
