import invertNegativeNumbers from './invertNegativeNumbers';

describe('correctly negates unary instances of subtraction', () => {
  test('no brackets', () => {
    expect(invertNegativeNumbers(['−', 2])).toEqual([-2]);
  });
});

describe('does not negate binary instances of subtraction', () => {
  test('no brackets', () => {
    expect(invertNegativeNumbers([1, '−', 2])).toEqual([1, '−', 2]);
  });
});

describe('leaves intact formulae with no subtraction', () => {
  test('no brackets', () => {
    expect(invertNegativeNumbers([2, '+', 2])).toEqual([2, '+', 2]);
  });
});
