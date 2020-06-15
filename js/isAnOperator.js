import operators from './operators.js';

const isAnOperator = (symbol) => operators.hasOwnProperty(symbol);

export default isAnOperator;
