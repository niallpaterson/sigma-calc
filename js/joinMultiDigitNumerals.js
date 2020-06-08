const joinMultiDigitNumerals = (formula, symbol, index) => {
  if ((Number(symbol) || symbol === '0')
  && (Number(formula[index + 1]) 
  || formula[index + 1] === '0' 
  || formula[index + 1] === '.')) {
    formula[index] += formula[index + 1];
    formula.splice(index + 1, 1);
    return joinMultiDigitNumerals(formula, symbol, index);
  }
  return formula;
};

export default joinMultiDigitNumerals;