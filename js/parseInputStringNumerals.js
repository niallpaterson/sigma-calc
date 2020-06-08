const parseInputStringNumerals = (formula) => {
  const joinedStrings = [...formula];
  joinedStrings.forEach((symbol, symbolIndex) => {
    if (Number(symbol) || symbol === '.') {
      if (Number(joinedStrings[symbolIndex + 1]) || joinedStrings[symbolIndex + 1] === '.') {
        joinedStrings.splice(symbolIndex, 1, symbol + joinedStrings[symbolIndex + 1]);
        joinedStrings.splice(symbolIndex + 1, 1);
      }
    }
  });
  return joinedStrings.map((symbol) => (Number(symbol) || Number(symbol) === 0 ? Number(symbol) : symbol));
};

export default parseInputStringNumerals;
