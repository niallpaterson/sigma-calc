import operators from './operators.js';

describe('operators output numbers', () => {
  test('addition', () => {
    expect(typeof operators['+'](2, 6)).toBe('number');
    expect(typeof operators['+'](20, 30)).toBe('number');
    expect(typeof operators['+'](21.5, 23.2)).toBe('number');
    expect(typeof operators['+'](0, 0)).toBe('number');
  });
  test('subtraction', () => {
    expect(typeof operators['−'](2, 6)).toBe('number');
    expect(typeof operators['−'](20, 30)).toBe('number');
    expect(typeof operators['−'](21.5, 23.2)).toBe('number');
    expect(typeof operators['−'](0, 0)).toBe('number');
  });
  test('multiplication', () => {
    expect(typeof operators['×'](2, 6)).toBe('number');
    expect(typeof operators['×'](20, 30)).toBe('number');
    expect(typeof operators['×'](21.5, 23.2)).toBe('number');
    expect(typeof operators['×'](0, 0)).toBe('number');
  });
  test('division', () => {
    expect(typeof operators['÷'](2, 6)).toBe('number');
    expect(typeof operators['÷'](20, 30)).toBe('number');
    expect(typeof operators['÷'](20, 30)).toBe('number');
    expect(typeof operators['÷'](0, 0)).toBe('number');
  });
});

describe('operators output correct values', () => {
  test('addition', () => {
    expect(operators['+'](7, 1)).toBe(8);
    expect(operators['+'](40, 23)).toBe(63);
    expect(operators['+'](37.4, 22.5)).toBe(59.9);
    expect(operators['+'](37.55676, 22.526543)).toBe(60.08);
    expect(operators['+'](0, 0)).toBe(0);
  });
  test('subtraction', () => {
    expect(operators['−'](7, 1)).toBe(6);
    expect(operators['−'](40, 23)).toBe(17);
    expect(operators['−'](37.6, 22.5)).toBe(15.1);
    expect(operators['−'](0, 0)).toBe(0);
  });
  test('multiplication', () => {
    expect(operators['×'](9, 6)).toBe(54);
    expect(operators['×'](40, 23)).toBe(920);
    expect(operators['×'](37.6, 22.6)).toBe(849.76);
    expect(operators['×'](0, 0)).toBe(0);
  });
  test('division', () => {
    expect(operators['÷'](200, 4)).toBe(50);
    expect(operators['÷'](40, 20)).toBe(2);
    expect(operators['÷'](37.6, 22.5)).toBe(1.62);
    expect(operators['÷'](0, 0)).toBe(0);
  });
});
