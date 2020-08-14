const replaceFormulaVariables = (formula, lowerLimit) => formula.map((symbol) => ((symbol === 'i') ? lowerLimit : symbol));

export default replaceFormulaVariables;
