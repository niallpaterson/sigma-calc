const replaceFormulaVariables = (formula, lowerLimit) => {
  return formula.map((symbol) => ((symbol === 'i') ? lowerLimit : symbol));
};

export default replaceFormulaVariables;
