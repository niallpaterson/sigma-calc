import isAnOperator from './isAnOperator.js';

describe('returns true for binary operators', () => {
  test('returns true for addition', () => {
    expect(isAnOperator('+')).toBe(true);
  });

  test('returns true for substraction', () => {
    expect(isAnOperator('−')).toBe(true);
  });

  test('returns true for division', () => {
    expect(isAnOperator('÷')).toBe(true);
  });

  test('returns true for multiplication', () => {
    expect(isAnOperator('×')).toBe(true);
  });
  test('returns true for exponentation', () => {
    expect(isAnOperator('∗∗')).toBe(true);
  });
  test('returns true for square root', () => {
    expect(isAnOperator('√')).toBe(true);
  });
});

describe('returns false for non binary operators', () => {
  test('returns false for non-empty strings', () => {
    expect(isAnOperator('hello')).toBe(false);
  });
  test('returns false for empty string', () => {
    expect(isAnOperator('')).toBe(false);
  });
  test('returns false for numerals', () => {
    expect(isAnOperator(100)).toBe(false);
  });
  test('returns false for 0', () => {
    expect(isAnOperator(0)).toBe(false);
  });
  test('returns false for null', () => {
    expect(isAnOperator(null)).toBe(false);
  });
  test('returns false for undefined', () => {
    expect(isAnOperator(undefined)).toBe(false);
  });
});
