import isOperator from '../string/isOperator.js';
import bracketsAreEven from './bracketsAreEven.js';

const operatorsAreSideBySide = (x, i, arr) => isOperator(x) && isOperator(arr[i + 1]);

const isValidInput = (input) => !input.some(operatorsAreSideBySide) && bracketsAreEven(input);

export default isValidInput;
