import bigNotation from '../../js/bigNotation/index.js';

const { pi } = bigNotation;

describe('pi notation: correctly returns formula sum', () => {
  describe('without i values', () => {
    test('no brackets, addition, iterations: 1-2', () => {
      expect(pi([2, '+', 2], 1, 2)).toEqual(16);
    });
    test('no brackets, addition, iterations: 2-3', () => {
      expect(pi([2, '+', 2], 2, 3)).toEqual(16);
    });
    test('no brackets, addition, iterations: 1-3', () => {
      expect(pi([2, '+', 2], 1, 3)).toEqual(64);
    });
    test('no brackets, addition, with negative', () => {
      expect(pi([1, '+', -2], 1, 2)).toEqual(1);
    });
  });

  describe('with i values', () => {
    test('no brackets, addition, iterations: 1-2', () => {
      expect(pi([2, '+', 'i'], 1, 2)).toEqual(12);
    });
    test('no brackets, addition, iterations: 2-3', () => {
      expect(pi([2, '+', 'i'], 2, 3)).toEqual(20);
    });
    test('no brackets, addition, iterations: 1-3', () => {
      expect(pi([2, '+', 'i'], 1, 3)).toEqual(60);
    });
    test('no brackets, addition, with negative', () => {
      expect(pi([-2, '+', 'i'], 1, 2)).toEqual(-0);
    });
  });
});
