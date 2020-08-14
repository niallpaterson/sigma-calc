import parser from '../../../js/parser/index.js';

const { replaceFormulaVariables } = parser;

describe('correctly replaces formula variables', () => {
  test('single variable', () => {
    expect(replaceFormulaVariables([1, '+', 'i'], 9))
      .toEqual([1, '+', 9]);
  });
  test('two variables', () => {
    expect(replaceFormulaVariables(['(', 1, '+', 'i', ')', '+', 'i'], 2))
      .toEqual(['(', 1, '+', 2, ')', '+', 2]);
  });
});
