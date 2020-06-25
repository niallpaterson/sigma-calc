import performOperation from './performOperation.js';

describe('performs simple binary operation correctly', () => {
  test('addition', () => {
    expect(performOperation([2, '+', 2], 1)).toEqual([4]);
  });
  test('subtraction', () => {
    expect(performOperation([2, '−', 2], 1)).toEqual([0]);
  });
  test('multiplication', () => {
    expect(performOperation([2, '×', 2], 1)).toEqual([4]);
  });
  test('division', () => {
    expect(performOperation([2, '÷', 2], 1)).toEqual([1]);
  });
  test('exponentation', () => {
    expect(performOperation([2, '∗∗', 2], 1)).toEqual([4]);
  });
  test('root', () => {
    expect(performOperation(['√', 12], 0)).toEqual([4]);
  });
});

describe('trims outer brackets', () => {
  test('addition', () => {
    expect(performOperation(['(', 2, '+', 2, ')'], 2)).toEqual([4]);
  });
  test('subtraction', () => {
    expect(performOperation(['(', 2, '−', 2, ')'], 2)).toEqual([0]);
  });
  test('multiplication', () => {
    expect(performOperation(['(', 2, '×', 2, ')'], 2)).toEqual([4]);
  });
  test('division', () => {
    expect(performOperation(['(', 2, '÷', 2, ')'], 2)).toEqual([1]);
  });
  test('exponentation', () => {
    expect(performOperation(['(', 2, '∗∗', 2, ')'], 2)).toEqual([4]);
  });
  test('root', () => {
    expect(performOperation(['(', '√', 12, ')'], 1)).toEqual([4]);
  });
});

describe('only performs narrowest scope binary operation', () => {
  test('addition', () => {
    expect(performOperation(['(', '(', 2, '+', 2, ')', '-', 2, ')'], 3)).toEqual(['(', 4, '-', 2, ')']);
  });
  test('subtraction', () => {
    expect(performOperation(['(', '(', 2, '−', 2, ')', '×', 2, ')'], 3)).toEqual(['(', 0, '×', 2, ')']);
  });
  test('multiplication', () => {
    expect(performOperation(['(', '(', 2, '×', 2, ')', '÷', 2, ')'], 3)).toEqual(['(', 4, '÷', 2, ')']);
  });
  test('division', () => {
    expect(performOperation(['(', '(', 8, '÷', 2, ')', '+', 2, ')'], 3)).toEqual(['(', 4, '+', 2, ')']);
  });
  test('exponentation', () => {
    expect(performOperation(['(', '(', 2, '∗∗', 2, ')', '+', 2, ')'], 3)).toEqual(['(', 4, '+', 2, ')']);
  });
  test('root', () => {
    expect(performOperation(['(', '(', '√', 12, ')', '+', 2, ')'], 2)).toEqual(['(', 4, '+', 2, ')']);
  });
});
