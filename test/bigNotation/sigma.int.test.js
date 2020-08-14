import bigNotation from '../../js/bigNotation/index.js';

const { sigma } = bigNotation;

describe('sigma notation: correctly returns formula sum', () => {
  describe('without i values', () => {
    test('no brackets, addition, iterations: 1-2', () => {
      expect(sigma([2, '+', 2], 1, 2)).toEqual(8);
    });
    test('no brackets, addition, iterations: 2-3', () => {
      expect(sigma([2, '+', 2], 2, 3)).toEqual(8);
    });
    test('no brackets, addition, iterations: 1-3', () => {
      expect(sigma([2, '+', 2], 1, 3)).toEqual(12);
    });
    test('no brackets, addition, with negative, iterations: 1-2', () => {
      expect(sigma([1, '+', -2], 1, 2)).toEqual(-2);
    });
    test('brackets, addition, iteration 1-2', () => {
      expect(sigma(['(', 2, '+', 2, ')'], 1, 2)).toEqual(8);
    });
    test('right nested brackets, addition, iteration 1-2', () => {
      expect(sigma(['(', 2, '+', '(', 2, '+', 2, ')', ')'], 1, 2)).toEqual(12);
    });
    test('left nested brackets, addition, iteration 1-2', () => {
      expect(sigma(['(', '(', 2, '+', 2, ')', '+', 2, ')'], 1, 2)).toEqual(12);
    });
  });

  describe('with i values', () => {
    test('no brackets, addition, iterations: 1-2', () => {
      expect(sigma([2, '+', 'i'], 1, 2)).toEqual(7);
    });
    test('no brackets, addition, iterations: 2-3', () => {
      expect(sigma([2, '+', 'i'], 2, 3)).toEqual(9);
    });
    test('no brackets, addition, iterations: 1-3', () => {
      expect(sigma([2, '+', 'i'], 1, 3)).toEqual(12);
    });
    test('no brackets, addition, with negative', () => {
      expect(sigma([-2, '+', 'i'], 1, 2)).toEqual(-1);
    });
    test('brackets, addition, iteration 1-2', () => {
      expect(sigma(['(', 'i', '+', 2, ')'], 1, 2)).toEqual(7);
    });
    test('right nested brackets, addition, iteration 1-2', () => {
      expect(sigma(['(', 'i', '+', '(', 2, '+', 2, ')', ')'], 1, 2)).toEqual(11);
    });
    test('left nested brackets, addition, iteration 1-2', () => {
      expect(sigma(['(', '(', 'i', '+', 2, ')', '+', 2, ')'], 1, 2)).toEqual(11);
    });
  });
});
