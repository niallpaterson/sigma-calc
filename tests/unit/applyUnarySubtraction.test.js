import applyUnarySubtraction from '../../js/applyUnarySubtraction';

describe('correctly negates unary instances of subtraction', () => {
  test('no brackets', () => {
    expect(applyUnarySubtraction(['−', 2])).toEqual([-2]);
  });
});

describe('does not negate binary instances of substraction', () => {
  test('no brackets', () => {
    expect(applyUnarySubtraction([1, '−', 2])).toEqual([1, '−', 2]);
  });
});

describe('leaves intact formulae with no subtraction', () => {
  test('no brackets', () => {
    expect(applyUnarySubtraction([2, '+', 2])).toEqual([2, '+', 2]);
  });
});
