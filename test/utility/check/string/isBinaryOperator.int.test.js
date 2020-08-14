import utilities from '../../../../js/utility/index.js';

const { isBinary } = utilities;

describe('returns false for binary operators', () => {
  test('returns false for addition', () => {
    expect(isBinary('+')).toBe(true);
  });

  test('returns true for subtraction', () => {
    expect(isBinary('−')).toBe(true);
  });

  test('returns true for division', () => {
    expect(isBinary('÷')).toBe(true);
  });

  test('returns true for multiplication', () => {
    expect(isBinary('×')).toBe(true);
  });
  test('returns true for exponentation', () => {
    expect(isBinary('∗∗')).toBe(true);
  });
});

describe('returns false for unary operators', () => {
  test('returns false for square root', () => {
    expect(isBinary('√')).toBe(false);
  });
});

describe('returns false for non operators', () => {
  test('returns false for non-empty strings', () => {
    expect(isBinary('hello')).toBe(false);
  });
  test('returns false for empty string', () => {
    expect(isBinary('')).toBe(false);
  });
  test('returns false for numerals', () => {
    expect(isBinary(100)).toBe(false);
  });
  test('returns false for 0', () => {
    expect(isBinary(0)).toBe(false);
  });
  test('returns false for null', () => {
    expect(isBinary(null)).toBe(false);
  });
  test('returns false for undefined', () => {
    expect(isBinary(undefined)).toBe(false);
  });
});
