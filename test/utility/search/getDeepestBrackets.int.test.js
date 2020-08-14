import utilities from '../../../js/utility/index.js';

const { getDeepestBrackets } = utilities;

describe('returns the indexes of the first deepest set of nested brackets', () => {
  test('non-nested brackets', () => {
    expect(getDeepestBrackets(['(', 2, '−', 2, ')'])).toEqual({ right: 4, left: 0 });
  });
  test('right nested brackets', () => {
    expect(getDeepestBrackets(['(', 2, '+', '(', 2, '+', 2, ')', ')'])).toEqual({ right: 7, left: 3 });
  });
  test('left nested brackets', () => {
    expect(getDeepestBrackets(['(', 2, '−', 2, ')', '−', 2, ')'])).toEqual({ right: 4, left: 0 });
  });
});
