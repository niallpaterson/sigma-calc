const applyUnarySubtraction = (formula) => {
  const indexesOfUsedSubtractions = [];
  return formula.map((symbol, symbolIndex) => {
    // negate any negative numbers
    if (formula[symbolIndex - 1] === '−'
      && typeof formula[symbolIndex - 2] !== 'number'
      && formula[symbolIndex - 2] !== ')'
      && typeof symbol === 'number') {
      indexesOfUsedSubtractions.push(symbolIndex - 1);
      return symbol * -1;
    }
    return symbol;
  }).filter((symbol, symbolIndex) => {
    // remove remanining negation symbol
    return !(indexesOfUsedSubtractions.includes(symbolIndex));
  });
};

export default applyUnarySubtraction;
