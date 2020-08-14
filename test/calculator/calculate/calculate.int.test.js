import calculator from '../../../js/calculator/index.js';

const { calculate } = calculator;

describe('returns the correct result', () => {
  test('for addition', () => {
    expect(calculate([2, '+', 2])).toEqual([4]);
  });
});
