import operate from '../../../js/calculator/operate/index.js';

const { operations } = operate;

describe('operations output numbers', () => {
  test('addition', () => {
    expect(typeof operations['+'](2, 6)).toBe('number');
    expect(typeof operations['+'](20, 30)).toBe('number');
    expect(typeof operations['+'](21.5, 23.2)).toBe('number');
    expect(typeof operations['+'](0, 0)).toBe('number');
  });
  test('subtraction', () => {
    expect(typeof operations['−'](2, 6)).toBe('number');
    expect(typeof operations['−'](20, 30)).toBe('number');
    expect(typeof operations['−'](21.5, 23.2)).toBe('number');
    expect(typeof operations['−'](0, 0)).toBe('number');
  });
  test('multiplication', () => {
    expect(typeof operations['×'](2, 6)).toBe('number');
    expect(typeof operations['×'](20, 30)).toBe('number');
    expect(typeof operations['×'](21.5, 23.2)).toBe('number');
    expect(typeof operations['×'](0, 0)).toBe('number');
  });
  test('division', () => {
    expect(typeof operations['÷'](2, 6)).toBe('number');
    expect(typeof operations['÷'](20, 30)).toBe('number');
    expect(typeof operations['÷'](20, 30)).toBe('number');
    expect(typeof operations['÷'](0, 0)).toBe('number');
  });
});

describe('operations output correct values', () => {
  test('addition', () => {
    expect(operations['+'](7, 1)).toBe(8);
    expect(operations['+'](40, 23)).toBe(63);
    expect(operations['+'](37.4, 22.5)).toBe(59.9);
    expect(operations['+'](37.55676, 22.526543)).toBe(60.08);
    expect(operations['+'](0, 0)).toBe(0);
  });
  test('subtraction', () => {
    expect(operations['−'](7, 1)).toBe(6);
    expect(operations['−'](40, 23)).toBe(17);
    expect(operations['−'](37.6, 22.5)).toBe(15.1);
    expect(operations['−'](0, 0)).toBe(0);
  });
  test('multiplication', () => {
    expect(operations['×'](9, 6)).toBe(54);
    expect(operations['×'](40, 23)).toBe(920);
    expect(operations['×'](37.6, 22.6)).toBe(849.76);
    expect(operations['×'](0, 0)).toBe(0);
  });
  test('division', () => {
    expect(operations['÷'](200, 4)).toBe(50);
    expect(operations['÷'](40, 20)).toBe(2);
    expect(operations['÷'](37.6, 22.5)).toBe(1.62);
    expect(operations['÷'](0, 0)).toBe(0);
  });
});
