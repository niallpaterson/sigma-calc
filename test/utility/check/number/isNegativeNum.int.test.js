import utilities from '../../../../js/utility/index.js';

const { isNegativeNum } = utilities;


describe('returns true for unary instances of negation', () => {
  test('for one instance', () => {
    expect(isNegativeNum(1, ['−', 1])).toBe(true);
  });
  test('for two instances', () => {
    expect(isNegativeNum(4, ['−', 1, '+', '−', 1])).toBe(true);
  });
});

describe('returns false for binary instances of negation', () => {
  test('for one instance', () => {
    expect(isNegativeNum(2, [1, '−', 1])).toBe(false);
  });
  test('for two instances', () => {
    expect(isNegativeNum(3, ['−', 1, '−', 1])).toBe(false);
  });
});



// describe('returns false for binary operators', () => {
//   test('returns false for addition', () => {
//     expect(isNegativeNum('−')).toBe(true);
//   });

//   test('returns true for subtraction', () => {
//     expect(isNegativeNum('−')).toBe(true);
//   });

//   test('returns true for division', () => {
//     expect(isNegativeNum('÷')).toBe(true);
//   });

//   test('returns true for multiplication', () => {
//     expect(isNegativeNum('×')).toBe(true);
//   });
//   test('returns true for exponentation', () => {
//     expect(isNegativeNum('∗∗')).toBe(true);
//   });
// });

// describe('returns false for unary operators', () => {
//   test('returns false for square root', () => {
//     expect(isNegativeNum('√')).toBe(false);
//   });
// });

// describe('returns false for non operators', () => {
//   test('returns false for non-empty strings', () => {
//     expect(isNegativeNum('hello')).toBe(false);
//   });
//   test('returns false for empty string', () => {
//     expect(isNegativeNum('')).toBe(false);
//   });
//   test('returns false for numerals', () => {
//     expect(isNegativeNum(100)).toBe(false);
//   });
//   test('returns false for 0', () => {
//     expect(isNegativeNum(0)).toBe(false);
//   });
//   test('returns false for null', () => {
//     expect(isNegativeNum(null)).toBe(false);
//   });
//   test('returns false for undefined', () => {
//     expect(isNegativeNum(undefined)).toBe(false);
//   });
// });
