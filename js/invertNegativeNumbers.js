const invertNegativeNumbers = (formula) => {
  const indexesOfUsedSubtractions = [];
  return formula.map((symbol, symbolIndex) => {
    // invert any negative numbers
    if (formula[symbolIndex - 1] === '−'
      && typeof formula[symbolIndex - 2] !== 'number'
      && formula[symbolIndex - 2] !== ')'
      && typeof symbol === 'number') {
      // track the negation symbols for filter
      indexesOfUsedSubtractions.push(symbolIndex - 1);
      return symbol * -1;
    }
    return symbol;
  }).filter((symbol, symbolIndex) => {
    // remove remanining negation symbols
    return !(indexesOfUsedSubtractions.includes(symbolIndex));
  });
};

export default invertNegativeNumbers;
