import getIndexOfnarrowestScopeBinaryOperator from '../../js/getNarrowestScopeBinaryOperator';

describe('properly returns non-nested narrowest scope operator', () => {
  test('non-nested addition', () => {
    expect(getIndexOfnarrowestScopeBinaryOperator([2, '+', 2])).toBe(1);
  });
  test('non-nested multiplication', () => {
    expect(getIndexOfnarrowestScopeBinaryOperator([2, '×', 2])).toBe(1);
  });
  test('non-nested division', () => {
    expect(getIndexOfnarrowestScopeBinaryOperator([2, '÷', 2])).toBe(1);
  });
  test('non-nested substraction', () => {
    expect(getIndexOfnarrowestScopeBinaryOperator([2, '−', 2])).toBe(1);
  });
});

describe('properly returns nested narrowest scope operators', () => {
  test('right nested, one deep', () => {
    expect(getIndexOfnarrowestScopeBinaryOperator(['(', '(', 2, '+', 2, ')', '−', 2, ')'])).toBe(3);
  });
  test('left nested, one deep', () => {
    expect(getIndexOfnarrowestScopeBinaryOperator(['(', 2, '+', '(', 2, '−', 2, ')', ')'])).toBe(5);
  });
});
