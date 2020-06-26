import replaceFormulaVariables from './replaceFormulaVariables.js';

describe('proprly replaces formula variable', () => {
  test('single variable', () => {
    expect(replaceFormulaVariables([1, '+', 'i'], 9))
      .toEqual([1, '+', 9]);
  });
  test('two variables', () => {
    expect(replaceFormulaVariables(['(', 1, '+', 'i', ')', '+', 'i'], 2))
      .toEqual(['(', 1, '+', 2, ')', '+', 2]);
  });
});
