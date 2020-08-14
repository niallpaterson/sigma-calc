import utilities from '../../utility/index.js';

const { isNumber, isUnique } = utilities;

const validateOutput = (output) => {
  return isUnique(output) && isNumber(output[0]) ? output[0] : NaN;
};

export default validateOutput;
