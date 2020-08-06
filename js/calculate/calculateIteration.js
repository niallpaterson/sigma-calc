import isAnOperator from './symbolValidators/isAnOperator.js';
import outputIsValidNumber from './symbolValidators/outputIsValidNumber.js';
import performOperation from './performOperation.js';
import getIndexesOfNarrowestOperators from './narrowestOperatorSearch/getIndexesOfNarrowestOperators.js';
import bodmasArray from './mathObjects/bodmasArray.js';

const calculateIteration = (formula) => {
  for (let i = 0; i < bodmasArray.length; i++) {
    for (let j = 0; j < formula.length; j++) {
      // if the symbol is one of the narrowest and of the right bodmas type
      if (isAnOperator(formula[j]) &&
        formula[j] === bodmasArray[i] &&
        getIndexesOfNarrowestOperators(formula).includes(j)) {
        return calculateIteration(performOperation(formula, j));
      }
    }
  }
  // handles diff between -0 and 0
  if (Object.is(formula[0], -0)) { formula[0] = 0; };

  if (outputIsValidNumber((formula))) { return formula[0]; }

  return NaN;
};

export default calculateIteration;
