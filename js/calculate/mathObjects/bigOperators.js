import calculateIteration from '../calculateIteration';
import replaceFormulaVariables from '../../parse_input/parsers/replaceFormulaVariables';

const bigOperators = {
  sigma(formula, lowerLimit, upperLimit) {
    this.sumValue = 0;
    for (let i = lowerLimit; i <= upperLimit; i++) {
      this.sumValue += calculateIteration(replaceFormulaVariables(formula, i));
    }
    // handles diff between -0 and 0
    if (Object.is(this.sumValue, -0)) { this.sumValue = 0; }
    return this.sumValue;
  },
  pi(formula, lowerLimit, upperLimit) {
    this.sumValue = 1;
    for (let i = lowerLimit; i <= upperLimit; i++) {
      this.sumValue *= calculateIteration(replaceFormulaVariables(formula, i));
    }
    // handles diff between -0 and 0
    if (Object.is(this.sumValue, -0)) { this.sumValue = 0; }
    return this.sumValue;
  }
};

export default bigOperators;
