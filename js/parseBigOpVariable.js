import elements from './elements.js';

const parseBigOpVariable = (formula, lowerLimit=1) => {
  return formula.map((symbol) => (symbol === 'i' ? lowerLimit : symbol));
};

export default parseBigOpVariable;