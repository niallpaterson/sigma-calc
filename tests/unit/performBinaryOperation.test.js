import performBinaryOperation from '../../js/performBinaryOperation';

describe('operators output numbers', () => {
  test('addition', () => {
    expect(typeof performBinaryOperation['+'](2, 6)).toBe('number');
    expect(typeof performBinaryOperation['+'](20, 30)).toBe('number');
    expect(typeof performBinaryOperation['+'](21.5, 23.2)).toBe('number');
    expect(typeof performBinaryOperation['+'](0, 0)).toBe('number');
  });
  test('subtraction', () => {
    expect(typeof performBinaryOperation['−'](2, 6)).toBe('number');
    expect(typeof performBinaryOperation['−'](20, 30)).toBe('number');
    expect(typeof performBinaryOperation['−'](21.5, 23.2)).toBe('number');
    expect(typeof performBinaryOperation['−'](0, 0)).toBe('number');
  });
  test('multiplication', () => {
    expect(typeof performBinaryOperation['×'](2, 6)).toBe('number');
    expect(typeof performBinaryOperation['×'](20, 30)).toBe('number');
    expect(typeof performBinaryOperation['×'](21.5, 23.2)).toBe('number');
    expect(typeof performBinaryOperation['×'](0, 0)).toBe('number');
  });
  test('division', () => {
    expect(typeof performBinaryOperation['÷'](2, 6)).toBe('number');
    expect(typeof performBinaryOperation['÷'](20, 30)).toBe('number');
    expect(typeof performBinaryOperation['÷'](20, 30)).toBe('number');
    expect(typeof performBinaryOperation['÷'](0, 0)).toBe('number');
  });
});

describe('operators output correct values', () => {
  test('addition', () => {
    expect(performBinaryOperation['+'](7, 1)).toBe(8);
    expect(performBinaryOperation['+'](40, 23)).toBe(63);
    expect(performBinaryOperation['+'](37.4, 22.5)).toBe(59.9);
    expect(performBinaryOperation['+'](0, 0)).toBe(0);
  });
  test('subtraction', () => {
    expect(performBinaryOperation['−'](7, 1)).toBe(6);
    expect(performBinaryOperation['−'](40, 23)).toBe(17);
    expect(performBinaryOperation['−'](37.6, 22.5)).toBe(15.1);
    expect(performBinaryOperation['−'](0, 0)).toBe(0);
  });
  test('multiplication', () => {
    expect(performBinaryOperation['×'](9, 6)).toBe(54);
  });
  test('division', () => {
    expect(performBinaryOperation['÷'](200, 4)).toBe(50);
  });
});
