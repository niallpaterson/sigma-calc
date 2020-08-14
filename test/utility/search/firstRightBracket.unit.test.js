import utilities from '../../../js/utility/index.js';

const { firstRightBracket } = utilities;

describe('returns the first right bracket', () => {
  test('non-nested brackets', () => {
    expect(firstRightBracket(['(', 2, '−', 2, ')'])).toEqual(4);
  });
  test('right nested brackets', () => {
    expect(firstRightBracket(['(', 2, '+', '(', 2, '+', 2, ')', ')'])).toEqual(7);
  });
  test('left nested brackets', () => {
    expect(firstRightBracket(['(', 2, '−', 2, ')', '−', 2, ')'])).toEqual(4);
  });
});
