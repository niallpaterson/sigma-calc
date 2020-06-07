import binaryOperators from '../../js/binaryOperators';

describe('operators output numbers', () => {
  test('addition', () => {
    expect(typeof binaryOperators['+'](2, 6)).toBe('number');
    expect(typeof binaryOperators['+'](20, 30)).toBe('number');
    expect(typeof binaryOperators['+'](21.5, 23.2)).toBe('number');
    expect(typeof binaryOperators['+'](0, 0)).toBe('number');
  });
  test('subtraction', () => {
    expect(typeof binaryOperators['−'](2, 6)).toBe('number');
    expect(typeof binaryOperators['−'](20, 30)).toBe('number');
    expect(typeof binaryOperators['−'](21.5, 23.2)).toBe('number');
    expect(typeof binaryOperators['−'](0, 0)).toBe('number');
  });
  test('multiplication', () => {
    expect(typeof binaryOperators['×'](2, 6)).toBe('number');
    expect(typeof binaryOperators['×'](20, 30)).toBe('number');
    expect(typeof binaryOperators['×'](21.5, 23.2)).toBe('number');
    expect(typeof binaryOperators['×'](0, 0)).toBe('number');
  });
  test('division', () => {
    expect(typeof binaryOperators['÷'](2, 6)).toBe('number');
    expect(typeof binaryOperators['÷'](20, 30)).toBe('number');
    expect(typeof binaryOperators['÷'](20, 30)).toBe('number');
    expect(typeof binaryOperators['÷'](0, 0)).toBe('number');
  });
});

describe('operators output correct values', () => {
  test('addition', () => {
    expect(binaryOperators['+'](7, 1)).toBe(8);
    expect(binaryOperators['+'](40, 23)).toBe(63);
    expect(binaryOperators['+'](37.4, 22.5)).toBe(59.9);
    expect(binaryOperators['+'](37.55676, 22.526543)).toBe(60.08);
    expect(binaryOperators['+'](0, 0)).toBe(0);
  });
  test('subtraction', () => {
    expect(binaryOperators['−'](7, 1)).toBe(6);
    expect(binaryOperators['−'](40, 23)).toBe(17);
    expect(binaryOperators['−'](37.6, 22.5)).toBe(15.1);
    expect(binaryOperators['−'](0, 0)).toBe(0);
  });
  test('multiplication', () => {
    expect(binaryOperators['×'](9, 6)).toBe(54);
    expect(binaryOperators['×'](40, 23)).toBe(920);
    expect(binaryOperators['×'](37.6, 22.6)).toBe(849.76);
    expect(binaryOperators['×'](0, 0)).toBe(0);
  });
  test('division', () => {
    expect(binaryOperators['÷'](200, 4)).toBe(50);
    expect(binaryOperators['÷'](40, 20)).toBe(2);
    expect(binaryOperators['÷'](37.6, 22.5)).toBe(1.62);
    expect(binaryOperators['÷'](0, 0)).toBe(0);
  });
});
