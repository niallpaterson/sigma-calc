import performBinaryOperation from '../../js/performBinaryOperation';

describe('performs simple binary operation correctly', () => {
  test('addition', () => {
    expect(performBinaryOperation([2, '+', 2], 1)).toEqual([4]);
  });
  test('subtraction', () => {
    expect(performBinaryOperation([2, '−', 2], 1)).toEqual([0]);
  });
  test('multiplication', () => {
    expect(performBinaryOperation([2, '×', 2], 1)).toEqual([4]);
  });
  test('division', () => {
    expect(performBinaryOperation([2, '÷', 2], 1)).toEqual([1]);
  });
});

describe('trims outer brackets', () => {
  test('addition', () => {
    expect(performBinaryOperation(['(', 2, '+', 2, ')'], 2)).toEqual([4]);
  });
  test('subtraction', () => {
    expect(performBinaryOperation(['(', 2, '−', 2, ')'], 2)).toEqual([0]);
  });
  test('multiplication', () => {
    expect(performBinaryOperation(['(', 2, '×', 2, ')'], 2)).toEqual([4]);
  });
  test('division', () => {
    expect(performBinaryOperation(['(', 2, '÷', 2, ')'], 2)).toEqual([1]);
  });
});

describe('only performs narrowest scope binary operation', () => {
  test('addition', () => {
    expect(performBinaryOperation(['(', '(', 2, '+', 2, ')', '-', 2, ')'], 3)).toEqual(['(', 4, '-', 2, ')']);
  });
  test('subtraction', () => {
    expect(performBinaryOperation(['(', '(', 2, '−', 2, ')', '×', 2, ')'], 3)).toEqual(['(', 0, '×', 2, ')']);
  });
  test('multiplication', () => {
    expect(performBinaryOperation(['(', '(', 2, '×', 2, ')', '÷', 2, ')'], 3)).toEqual(['(', 4, '÷', 2, ')']);
  });
  test('division', () => {
    expect(performBinaryOperation(['(', '(', 2, '÷', 2, ')', '+', 2, ')'], 3)).toEqual(['(', 1, '+', 2, ')']);
  });
});
