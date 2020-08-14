import solveIteration from '../../js/bigNotation/solveIteration.js';

describe('returns correct result: addition', () => {
  test('no brackets', () => {
    expect(solveIteration([2, '+', 2])).toEqual(4);
  });
  test('no brackets, with negative', () => {
    expect(solveIteration([1, '+', -2])).toEqual(-1);
  });
  test('no brackets, with zero', () => {
    expect(solveIteration([0, '+', 0])).toEqual(0);
  });
  test('binary relation nest in brackets', () => {
    expect(solveIteration(['(', 1, '+', 1, ')'])).toEqual(2);
  });
  test('right nested brackets', () => {
    expect(solveIteration(['(', 2, '+', '(', 2, '+', 2, ')', ')'])).toEqual(6);
  });
  test('left nested brackets', () => {
    expect(solveIteration(['(', '(', 2, '+', 2, ')', '+', 2, ')'])).toEqual(6);
  });
});

describe('returns correct result: subtraction', () => {
  test('no brackets', () => {
    expect(solveIteration([2, '−', 2])).toEqual(0);
  });
  test('no brackets, with negative', () => {
    expect(solveIteration([1, '−', -2])).toEqual(3);
  });
  test('no brackets, with zero', () => {
    expect(solveIteration([0, '−', 0])).toEqual(0);
  });
  test('right nested brackets', () => {
    expect(solveIteration(['(', 8, '−', '(', 4, '−', 2, ')', ')'])).toEqual(6);
  });
  test('left nested brackets', () => {
    expect(solveIteration(['(', '(', 8, '−', 4, ')', '−', 2, ')'])).toEqual(2);
  });
});

describe('returns correct result: division', () => {
  test('no brackets', () => {
    expect(solveIteration([2, '÷', 2])).toEqual(1);
  });
  test('no brackets, with negative', () => {
    expect(solveIteration([1, '÷', -2])).toEqual(-0.5);
  });
  test('no brackets, with zero', () => {
    expect(solveIteration([0, '÷', 0])).toEqual(NaN);
  });
  test('right nested brackets', () => {
    expect(solveIteration(['(', 16, '÷', '(', 8, '÷', 2, ')', ')'])).toEqual(4);
  });
  test('left nested brackets', () => {
    expect(solveIteration(['(', '(', 16, '÷', 2, ')', '÷', 2, ')'])).toEqual(4);
  });
});

describe('returns correct result: multiplication', () => {
  test('no brackets', () => {
    expect(solveIteration([2, '×', 2])).toEqual(4);
  });
  test('no brackets, with negative', () => {
    expect(solveIteration([1, '×', -2])).toEqual(-2);
  });
  test('no brackets, with zero', () => {
    expect(solveIteration([0, '×', 0])).toEqual(0);
  });
  test('right nested brackets', () => {
    expect(solveIteration(['(', 2, '×', '(', 4, '×', 2, ')', ')'])).toEqual(16);
  });
  test('left nested brackets', () => {
    expect(solveIteration(['(', '(', 2, '×', 4, ')', '×', 2, ')'])).toEqual(16);
  });
});

describe('returns correct result: square root', () => {
  test('no brackets', () => {
    expect(solveIteration(['√', 16])).toEqual(4);
  });
  test('no brackets, with negative', () => {
    expect(solveIteration(['√', -2])).toEqual(NaN);
  });
  test('no brackets, with zero', () => {
    expect(solveIteration(['√', 0])).toEqual(0);
  });
  test('right nested brackets', () => {
    expect(solveIteration(['√', '(', '√', 30, ')'])).toEqual(2.34034731932);
  });
});

describe('returns correct result: exponentation', () => {
  test('no brackets', () => {
    expect(solveIteration([2, '∗∗', 2])).toEqual(4);
  });
  test('no brackets, with negative', () => {
    expect(solveIteration([1, '∗∗', -2])).toEqual(1);
  });
  test('no brackets, with zero', () => {
    expect(solveIteration([0, '∗∗', 0])).toEqual(1);
  });
  test('right nested brackets', () => {
    expect(solveIteration(['(', 2, '∗∗', '(', 2, '∗∗', 2, ')', ')'])).toEqual(16);
  });
  test('left nested brackets', () => {
    expect(solveIteration(['(', '(', 2, '∗∗', 2, ')', '∗∗', 2, ')'])).toEqual(16);
  });
});
