import utilities from '../../../../js/utility/index.js';

const { isOperator } = utilities;

describe('returns true for binary operators', () => {
  test('returns true for addition', () => {
    expect(isOperator('+')).toBe(true);
  });

  test('returns true for subtraction', () => {
    expect(isOperator('−')).toBe(true);
  });

  test('returns true for division', () => {
    expect(isOperator('÷')).toBe(true);
  });

  test('returns true for multiplication', () => {
    expect(isOperator('×')).toBe(true);
  });
  test('returns true for exponentation', () => {
    expect(isOperator('∗∗')).toBe(true);
  });
});

describe('returns true for unary operators', () => {
  test('returns true for square root', () => {
    expect(isOperator('√')).toBe(true);
  });
});

describe('returns false for non operators', () => {
  test('returns false for non-empty strings', () => {
    expect(isOperator('hello')).toBe(false);
  });
  test('returns false for empty string', () => {
    expect(isOperator('')).toBe(false);
  });
  test('returns false for numerals', () => {
    expect(isOperator(100)).toBe(false);
  });
  test('returns false for 0', () => {
    expect(isOperator(0)).toBe(false);
  });
  test('returns false for null', () => {
    expect(isOperator(null)).toBe(false);
  });
  test('returns false for undefined', () => {
    expect(isOperator(undefined)).toBe(false);
  });
});
