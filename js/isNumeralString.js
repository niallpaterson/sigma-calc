const isNumeralString = (symbol) => Number(symbol) || symbol === '0' || symbol === '.';

export default isNumeralString;
