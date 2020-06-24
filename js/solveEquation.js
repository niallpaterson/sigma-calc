import bigOperators from './bigOperators.js';

const equation = {
  currentValue: null,
  activeBigOperator: 'Σ',
  solve(formula, lowerLimit, upperLimit) {
    if (this.activeBigOperator === 'Σ') { return bigOperators.sigma(formula, lowerLimit, upperLimit); }
    if (this.activeBigOperator === 'П') { return bigOperators.pi(formula, lowerLimit, upperLimit); }
    return 'Error: No Big Operator Active';
  },
};

export default equation;
