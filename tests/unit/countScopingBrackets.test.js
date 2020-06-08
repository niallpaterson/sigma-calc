import countScopingBrackets from '../../js/countScopingBrackets';

describe('returns correct number of scoping brackets', () => {
  test('no brackets', () => {
    expect(countScopingBrackets([2, '+', 2], 1)).toBe(0);
  });
  test('outer brackets only', () => {
    expect(countScopingBrackets(['(', 2, '+', 2, ')'], 1)).toBe(2);
  });
  test('right nested brackets, narrowest operator', () => {
    expect(countScopingBrackets(['(', '(', 2, '+', 2, ')', '-', 2, ')'], 2)).toBe(4);
  });
  test('right nested brackets, shallowest operator', () => {
    expect(countScopingBrackets(['(', '(', 2, '+', 2, ')', '-', 2, ')'], 6)).toBe(3);
  });
  test('left nested brackets, narrowest operator', () => {
    expect(countScopingBrackets(['(', 2, '+', '(', 2, '-', 2, ')', ')'], 2)).toBe(3);
  });
  test('left nested brackets, shallowest operator', () => {
    expect(countScopingBrackets(['(', 2, '+', '(', 2, '-', 2, ')', ')'], 5)).toBe(4);
  });
});
