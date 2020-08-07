import isValidResult from './isValidResult.js';

describe('returns true for valid output', () => {
  test('single digit integer', () => {
    expect(isValidResult([1])).toBe(true);
  });
  test('double digit integer', () => {
    expect(isValidResult([11])).toBe(true);
  });
  test('single digit float', () => {
    expect(isValidResult([1.1])).toBe(true);
  });
  test('double digit float', () => {
    expect(isValidResult([11.1])).toBe(true);
  });
  test('zero', () => {
    expect(isValidResult([0])).toBe(true);
  });
});

describe('outputs false for strings', () => {
  test('single digit integer', () => {
    expect(isValidResult(['1'])).toBe(false);
  });
  test('single digit float', () => {
    expect(isValidResult(['1.1'])).toBe(false);
  });
  test('zero', () => {
    expect(isValidResult(['0'])).toBe(false);
  });
});

describe('outputs false if value is not unique', () => {
  test('single digit integer and bracket', () => {
    expect(isValidResult([1, ')'])).toBe(false);
  });
  test('two digis', () => {
    expect(isValidResult([1, 2])).toBe(false);
  });
  test('digit and operator', () => {
    expect(isValidResult([1, '+'])).toBe(false);
  });
});
