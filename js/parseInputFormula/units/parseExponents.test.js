import parseExponents from './parseExponents.js';

describe('proprly conjoins split exponent stars', () => {
  test('single operator', () => {
    expect(parseExponents([3, '∗', '∗', 3]))
      .toEqual([3, '∗∗', 3]);
  });
  test('two operators', () => {
    expect(parseExponents(['(', 2, '∗', '∗', '(', 1, '∗', '∗', 4, ')', ')']))
      .toEqual(['(', 2, '∗∗', '(', 1, '∗∗', 4, ')', ')']);
  });
});
