import isBinaryOperator from '../../js/isBinaryOperator';

describe('returns true for binary operators', () => {
  test('returns true for addition', () => {
    expect(isBinaryOperator('+')).toBe(true);
  });

  test('returns true for substraction', () => {
    expect(isBinaryOperator('−')).toBe(true);
  });

  test('returns true for division', () => {
    expect(isBinaryOperator('÷')).toBe(true);
  });

  test('returns true for multiplication', () => {
    expect(isBinaryOperator('×')).toBe(true);
  });
});

describe('returns false for non binary operators', () => {
  test('returns false for non-empty strings', () => {
    expect(isBinaryOperator('hello')).toBe(false);
  });
  test('returns false for empty string', () => {
    expect(isBinaryOperator('')).toBe(false);
  });
  test('returns false for numerals', () => {
    expect(isBinaryOperator(100)).toBe(false);
  });
  test('returns false for 0', () => {
    expect(isBinaryOperator(0)).toBe(false);
  });
  test('returns false for null', () => {
    expect(isBinaryOperator(null)).toBe(false);
  });
  test('returns false for undefined', () => {
    expect(isBinaryOperator(undefined)).toBe(false);
  });
});
