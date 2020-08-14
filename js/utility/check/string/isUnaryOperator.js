import isOperator from './isOperator.js';

const isUnary = (x) => isOperator(x) && x === '√';

export default isUnary;
