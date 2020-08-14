import isOperator from './isOperator.js';
import isUnary from './isUnaryOperator.js';

const isBinary = (x) => isOperator(x) && !isUnary(x);

export default isBinary;
