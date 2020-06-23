const parseInputStringNumerals = (formula) => {
  // replace number strings with numbers
  return formula.map((symbol) => (Number(symbol) || Number(symbol) === 0 ? Number(symbol) : symbol));
};

export default parseInputStringNumerals;
