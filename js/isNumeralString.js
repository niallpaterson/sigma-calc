const isNumeralString = (symbol) => {
  return Number(symbol) || symbol === '0' || symbol === '.';
};

export default isNumeralString;
