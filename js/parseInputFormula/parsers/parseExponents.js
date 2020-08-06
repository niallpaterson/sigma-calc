const parseExponents = (formula) => formula
  .map((symbol) => ((symbol === '∗') ? '∗∗' : symbol))
  .filter((symbol, symbolIndex, mappedFormula) => symbol !== '∗∗' || mappedFormula[symbolIndex - 1] !== '∗∗');

export default parseExponents;
