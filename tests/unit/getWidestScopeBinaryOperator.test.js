import getWidestScopeBinaryOperator from '../../js/getWidestScopeBinaryOperator';

describe('properly returns non-nested widest scope operator', () => {
  test('non-nested addition', () => {
    expect(getWidestScopeBinaryOperator([2, '+', 2])).toBe(1);
  });
  test('non-nested multiplication', () => {
    expect(getWidestScopeBinaryOperator([2, '×', 2])).toBe(1);
  });
  test('non-nested division', () => {
    expect(getWidestScopeBinaryOperator([2, '÷', 2])).toBe(1);
  });
  test('non-nested substraction', () => {
    expect(getWidestScopeBinaryOperator([2, '−', 2])).toBe(1);
  });
});

describe('properly returns nested widest scope operators', () => {
  test('right nested, one deep', () => {
    expect(getWidestScopeBinaryOperator(['(', '(', 2, '+', 2, ')', '−', 2, ')'])).toBe(3);
  });
  test('left nested, one deep', () => {
    expect(getWidestScopeBinaryOperator(['(', 2, '+', '(', 2, '−', 2, ')', ')'])).toBe(5);
  });
});
