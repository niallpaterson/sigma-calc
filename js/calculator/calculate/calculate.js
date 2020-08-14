import operators from '../operate/index.js';

const { operate, orderOfOperations } = operators;

const calculate = (equation) => orderOfOperations
  .reduce((acc, operator) => operate(acc, operator), equation);

export default calculate;
