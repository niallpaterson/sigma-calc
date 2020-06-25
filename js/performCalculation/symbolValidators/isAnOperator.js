import operators from '../mathObjects/operators.js';

const isAnOperator = (symbol) => operators.hasOwnProperty(symbol);

export default isAnOperator;
