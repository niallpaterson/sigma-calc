import bigNotation from '../../js/bigNotation.js';

describe('sigma notation: correctly returns formula sum', () => {
  describe('without i values', () => {
    test('no brackets, addition, iterations: 1-2', () => {
      expect(bigNotation.sigma([2, '+', 2], 1, 2)).toEqual(8);
    });
    test('no brackets, addition, iterations: 2-3', () => {
      expect(bigNotation.sigma([2, '+', 2], 2, 3)).toEqual(8);
    });
    test('no brackets, addition, iterations: 1-3', () => {
      expect(bigNotation.sigma([2, '+', 2], 1, 3)).toEqual(12);
    });
    test('no brackets, addition, with negative', () => {
      expect(bigNotation.sigma([1, '+', -2], 1, 2)).toEqual(-2);
    });
  });

  describe('with i values', () => {
    test('no brackets, addition, iterations: 1-2', () => {
      expect(bigNotation.sigma([2, '+', 'i'], 1, 2)).toEqual(7);
    });
    test('no brackets, addition, iterations: 2-3', () => {
      expect(bigNotation.sigma([2, '+', 'i'], 2, 3)).toEqual(9);
    });
    test('no brackets, addition, iterations: 1-3', () => {
      expect(bigNotation.sigma([2, '+', 'i'], 1, 3)).toEqual(12);
    });
    test('no brackets, addition, with negative', () => {
      expect(bigNotation.sigma([-2, '+', 'i'], 1, 2)).toEqual(-1);
    });
  });
});

describe('sigma notation: correctly throws errors for invalid inputs', () => {
  test('operator surplus', () => {
    expect(bigNotation.sigma([2, '+', '÷', 2], 1, 2)).toBeNaN();
    expect(bigNotation.sigma([2, '×', '÷', 2], 1, 2)).toBeNaN();
    expect(bigNotation.sigma([2, '−', '÷', 2], 1, 2)).toBeNaN();
    expect(bigNotation.sigma([2, '+', '−', '÷', 2], 1, 2)).toBeNaN();
    expect(bigNotation.sigma([2, '+', '÷', '−', 2], 1, 2)).toBeNaN();
    expect(bigNotation.sigma([2, '+', '÷', 2, '÷'], 1, 2)).toBeNaN();
  });
  test('incorrectly placed brackets', () => {
    expect(bigNotation.sigma([2, '+', '(', 2], 1, 2)).toBeNaN();
    expect(bigNotation.sigma([2, ')', '÷', 2], 1, 2)).toBeNaN();
    expect(bigNotation.sigma(['(', '(', 2, '−', '÷', 2], 1, 2)).toBeNaN();
    expect(bigNotation.sigma([2, '+', '−', '÷', 2, ')', ')'], 1, 2)).toBeNaN();
    expect(bigNotation.sigma([2, '+', ')', 2], 1, 2)).toBeNaN();
    expect(bigNotation.sigma([2, '(', ')', 2], 1, 2)).toBeNaN();
    expect(bigNotation.sigma(['(', '(', 2, '−', '÷', 2], 1, 2)).toBeNaN();
    expect(bigNotation.sigma([2, '+', '−', '÷', 2, ')', ')'], 1, 2)).toBeNaN();
    expect(bigNotation.sigma([2, '+', ')', 2], 1, 2)).toBeNaN();
    expect(bigNotation.sigma([2, '(', 5, ')', 2], 1, 2)).toBeNaN();
    expect(bigNotation.sigma([')', 5, '+', 2, '('], 1, 2)).toBeNaN();
  });
});
