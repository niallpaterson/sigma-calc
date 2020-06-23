import getIndexesOfNarrowestOperators from '../../js/getIndexesOfNarrowestOperators';

describe('properly returns non-nested narrowest scope operator', () => {
  test('non-nested addition', () => {
    expect(getIndexesOfNarrowestOperators([2, '+', 2])).toEqual([1]);
  });
  test('non-nested multiplication', () => {
    expect(getIndexesOfNarrowestOperators([2, '×', 2])).toEqual([1]);
  });
  test('non-nested division', () => {
    expect(getIndexesOfNarrowestOperators([2, '÷', 2])).toEqual([1]);
  });
  test('non-nested substraction', () => {
    expect(getIndexesOfNarrowestOperators([2, '−', 2])).toEqual([1]);
  });
});

describe('properly returns nested narrowest scope operators', () => {
  test('right nested, one deep', () => {
    expect(getIndexesOfNarrowestOperators(['(', '(', 2, '+', 2, ')', '−', 2, ')'])).toEqual([3]);
  });
  test('left nested, one deep', () => {
    expect(getIndexesOfNarrowestOperators(['(', 2, '+', '(', 2, '−', 2, ')', ')'])).toEqual([5]);
  });
});

describe('returns correct values with multiple equally scoped operators', () => {
  test('right nested, one deep', () => {
    expect(getIndexesOfNarrowestOperators(['(', '(', 2, '+', 2, '−', 5, ')', '−', 2, ')'])).toEqual([3, 5]);
  });
  test('left nested, one deep', () => {
    expect(getIndexesOfNarrowestOperators(['(', 2, '+', '(', 2, '−', 2, '+', 3, ')', ')'])).toEqual([5, 7]);
  });
});
