import utilities from '../../../js/utility/index.js';

const { matchingLeftBracket } = utilities;

describe('returns the correct result', () => {
  test('non-nested brackets', () => {
    expect(matchingLeftBracket(['(', 2, '−', 2, ')'])).toEqual(0);
  });
  test('right nested brackets', () => {
    expect(matchingLeftBracket(['(', 2, '+', '(', 2, '+', 2, ')', ')'])).toEqual(3);
  });
  test('left nested brackets', () => {
    expect(matchingLeftBracket(['(', 2, '−', 2, ')', '−', 2, ')'])).toEqual(0);
  });
});
