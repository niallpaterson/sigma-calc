import calculateIteration from './calculateIteration.js';

describe('correctly returns formula sum', () => {
  test('no brackets, addition', () => {
    expect(calculateIteration([2, '+', 2])).toEqual(4);
  });
  test('no brackets, addition, with negative', () => {
    expect(calculateIteration([2, '+', -2])).toEqual(0);
  });
  test('no brackets, subtraction', () => {
    expect(calculateIteration([2, '−', 2])).toEqual(0);
  });
  test('no brackets, division', () => {
    expect(calculateIteration([2, '÷', 2])).toEqual(1);
  });
  test('no brackets, multiplication', () => {
    expect(calculateIteration([2, '×', 2])).toEqual(4);
  });
  test('left nested brackets, addition', () => {
    expect(calculateIteration(['(', 2, '+', 2, ')', '+', 2, ')'])).toEqual(6);
  });
  test('left brackets, subtraction', () => {
    expect(calculateIteration(['(', 2, '−', 2, ')', '−', 2, ')'])).toEqual(-2);
  });
  test('left nested brackets, division', () => {
    expect(calculateIteration(['(', 8, '÷', 2, ')', '÷', 2, ')'])).toEqual(2);
  });
  test('left nested, multiplication', () => {
    expect(calculateIteration(['(', 2, '×', 2, ')', '×', 2, ')'])).toEqual(8);
  });
  test('right nested brackets, addition', () => {
    expect(calculateIteration(['(', 2, '+', '(', 2, '+', 2, ')', ')'])).toEqual(6);
  });
  test('right brackets, subtraction', () => {
    expect(calculateIteration(['(', 2, '−', '(', 2, '−', 2, ')', ')'])).toEqual(2);
  });
  test('right nested brackets, division', () => {
    expect(calculateIteration(['(', 8, '÷', '(', 4, '÷', 2, ')', ')'])).toEqual(4);
  });
  test('right nested, multiplication', () => {
    expect(calculateIteration(['(', 2, '×', '(', 2, '×', 2, ')', ')'])).toEqual(8);
  });
});

describe('correctly handles bodmas formulae', () => {
  test('multiple instances of same operator', () => {
    expect(calculateIteration([2, '×', 2, '×', 2, '×', 2])).toBe(16);
  });
  test('single instances of different operators', () => {
    expect(calculateIteration([2, '×', 2, '×', 2, '−', 1])).toBe(7);
    expect(calculateIteration(['√', 8, '×', 2])).toBe(4);
  });
});


describe('correctly throws errors for invalid inputs', () => {
  test('operator surplus', () => {
    expect(calculateIteration([2, '+', '÷', 2])).toBeNaN();
    expect(calculateIteration([2, '×', '÷', 2])).toBeNaN();
    expect(calculateIteration([2, '−', '÷', 2])).toBeNaN();
    expect(calculateIteration([2, '+', '−', '÷', 2])).toBeNaN();
    expect(calculateIteration([2, '+', '÷', '−', 2])).toBeNaN();
    expect(calculateIteration([2, '+', '÷', 2, '÷'])).toBeNaN();
  });
  test('incorrectly placed brackets', () => {
    expect(calculateIteration([2, '+', '(', 2])).toBeNaN();
    expect(calculateIteration([2, ')', '÷', 2])).toBeNaN();
    expect(calculateIteration(['(', '(', 2, '−', '÷', 2])).toBeNaN();
    expect(calculateIteration([2, '+', '−', '÷', 2, ')', ')'])).toBeNaN();
    expect(calculateIteration([2, '+', ')', 2])).toBeNaN();
    expect(calculateIteration([2, '(', ')', 2])).toBeNaN();
    expect(calculateIteration(['(', '(', 2, '−', '÷', 2])).toBeNaN();
    expect(calculateIteration([2, '+', '−', '÷', 2, ')', ')'])).toBeNaN();
    expect(calculateIteration([2, '+', ')', 2])).toBeNaN();
    expect(calculateIteration([2, '(', 5, ')', 2])).toBeNaN();
    expect(calculateIteration([')', 5, '+', 2, '('])).toBeNaN();
  });
});
