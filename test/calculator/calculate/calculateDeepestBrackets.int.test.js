import calculator from '../../../js/calculator/index.js';

const { calculateDeepestBrackets } = calculator;

describe('returns the correct result', () => {
  describe('addition', () => {
    test('right nested brackets', () => {
      expect(calculateDeepestBrackets(['(', 2, '+', '(', 2, '+', 2, ')', ')'])).toEqual(['(', 2, '+', 4, ')']);
    });
    test('left nested brackets', () => {
      expect(calculateDeepestBrackets(['(', '(', 2, '+', 4, ')', '+', 2, ')'])).toEqual(['(', 6, '+', 2, ')']);
    });
  });
  describe('multiplication', () => {
    test('right nested brackets', () => {
      expect(calculateDeepestBrackets(['(', 2, '×', '(', 2, '×', 2, ')', ')'])).toEqual(['(', 2, '×', 4, ')']);
    });
    test('left nested brackets', () => {
      expect(calculateDeepestBrackets(['(', '(', 2, '×', 4, ')', '×', 2, ')'])).toEqual(['(', 8, '×', 2, ')']);
    });
  });
  describe('division', () => {
    test('right nested brackets', () => {
      expect(calculateDeepestBrackets(['(', 4, '÷', '(', 4, '÷', 2, ')', ')'])).toEqual(['(', 4, '÷', 2, ')']);
    });
    test('left nested brackets', () => {
      expect(calculateDeepestBrackets(['(', '(', 4, '÷', 2, ')', '÷', 2, ')'])).toEqual(['(', 2, '÷', 2, ')']);
    });
  });
  describe('subtraction', () => {
    test('right nested brackets', () => {
      expect(calculateDeepestBrackets(['(', 4, '−', '(', 4, '−', 2, ')', ')'])).toEqual(['(', 4, '−', 2, ')']);
    });
    test('left nested brackets', () => {
      expect(calculateDeepestBrackets(['(', '(', 4, '−', 2, ')', '−', 2, ')'])).toEqual(['(', 2, '−', 2, ')']);
    });
  });
  describe('exponentation', () => {
    test('right nested brackets', () => {
      expect(calculateDeepestBrackets(['(', 4, '∗∗', '(', 4, '∗∗', 2, ')', ')'])).toEqual(['(', 4, '∗∗', 16, ')']);
    });
    test('left nested brackets', () => {
      expect(calculateDeepestBrackets(['(', '(', 4, '∗∗', 2, ')', '∗∗', 2, ')'])).toEqual(['(', 16, '∗∗', 2, ')']);
    });
  });
  describe('square root', () => {
    test('right nested brackets', () => {
      expect(calculateDeepestBrackets(['(', '√', '(', '√', 30, ')', ')'])).toEqual(['(', '√', 5.47722557505, ')']);
    });
  });
});
