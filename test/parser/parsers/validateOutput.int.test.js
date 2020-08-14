import parser from '../../../js/parser/index.js';

const { validateOutput } = parser;

describe('returns ourput for valid output', () => {
  test('single digit integer', () => {
    expect(validateOutput([1])).toBe(1);
  });
  test('double digit integer', () => {
    expect(validateOutput([11])).toBe(11);
  });
  test('single digit float', () => {
    expect(validateOutput([1.1])).toBe(1.1);
  });
  test('double digit float', () => {
    expect(validateOutput([11.1])).toBe(11.1);
  });
  test('zero', () => {
    expect(validateOutput([0])).toBe(0);
  });
});

describe('outputs NaN for strings', () => {
  test('single digit integer', () => {
    expect(validateOutput(['1'])).toBeNaN();
  });
  test('single digit float', () => {
    expect(validateOutput(['1.1'])).toBeNaN();
  });
  test('zero', () => {
    expect(validateOutput(['0'])).toBeNaN();
  });
});

describe('outputs NaN if value is not unique', () => {
  test('single digit integer and bracket', () => {
    expect(validateOutput([1, ')'])).toBeNaN();
  });
  test('two digis', () => {
    expect(validateOutput([1, 2])).toBeNaN();
  });
  test('digit and operator', () => {
    expect(validateOutput([1, '+'])).toBeNaN();
  });
});
