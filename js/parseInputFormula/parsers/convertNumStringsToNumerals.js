const convertNumStringsToNumerals = (formula) => formula
  .map((symbol) => (Number(symbol) || Number(symbol) === 0 ? Number(symbol) : symbol));

export default convertNumStringsToNumerals;
