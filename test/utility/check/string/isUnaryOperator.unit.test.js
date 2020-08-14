import utilities from '../../../../js/utility/index.js';

const { isUnary } = utilities;

describe('returns false for binary operators', () => {
  test('returns false for addition', () => {
    expect(isUnary('+')).toBe(false);
  });

  test('returns false for subtraction', () => {
    expect(isUnary('−')).toBe(false);
  });

  test('returns false for division', () => {
    expect(isUnary('÷')).toBe(false);
  });

  test('returns false for multiplication', () => {
    expect(isUnary('×')).toBe(false);
  });
  test('returns false for exponentation', () => {
    expect(isUnary('∗∗')).toBe(false);
  });
});

describe('returns true for unary operators', () => {
  test('returns true for square root', () => {
    expect(isUnary('√')).toBe(true);
  });
});

describe('returns false for non operators', () => {
  test('returns false for non-empty strings', () => {
    expect(isUnary('hello')).toBe(false);
  });
  test('returns false for empty string', () => {
    expect(isUnary('')).toBe(false);
  });
  test('returns false for numerals', () => {
    expect(isUnary(100)).toBe(false);
  });
  test('returns false for 0', () => {
    expect(isUnary(0)).toBe(false);
  });
  test('returns false for null', () => {
    expect(isUnary(null)).toBe(false);
  });
  test('returns false for undefined', () => {
    expect(isUnary(undefined)).toBe(false);
  });
});
