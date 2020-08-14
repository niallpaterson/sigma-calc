import parser from '../../../js/parser/index.js';

const { joinMultiDigitNumerals } = parser;

describe('properly concantenates numeral strings', () => {
  test('one multi-digit numeral', () => {
    expect(joinMultiDigitNumerals([
      '1', '2', '3', '4', '5',
      '6', '7', '8', '9', '0',
    ]))
      .toEqual(['1234567890']);
  });
  test('two multi-digit numerals', () => {
    expect(joinMultiDigitNumerals([
      '1', '2', '3', '4', '+', '5',
      '6', '7', '8', '9', '0',
    ]))
      .toEqual(['1234', '+', '567890']);
  });
});

describe('does not concantenate non-numerals', () => {
  test('array only containing non-numerals', () => {
    expect(joinMultiDigitNumerals([
      ')', '(', '+', '/', '−', '.', '÷',
    ]))
      .toEqual([')', '(', '+', '/', '−', '.', '÷']);
  });
  test('two multi-digit numerals with brackets', () => {
    expect(joinMultiDigitNumerals([
      '(', '1', '2', '3', '4', '+', '5',
      '6', '7', '8', '9', '0', ')',
    ]))
      .toEqual(['(', '1234', '+', '567890', ')']);
  });
});
