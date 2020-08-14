import utilities from '../../../../js/utility/index.js';

const { twoBackIsNumber } = utilities;

describe('returns true if value at index two back is number', () => {
  test('non-nested brackets', () => {
    expect(twoBackIsNumber(3, ['(', 2, '−', 2, ')'])).toBe(true);
  });
  test('right nested brackets', () => {
    expect(twoBackIsNumber(3, ['(', 2, '+', '(', 2, '−', 2, ')', ')'])).toBe(true);
  });
  test('left nested brackets', () => {
    expect(twoBackIsNumber(5, ['(', 2, '−', 2, ')', '−', 2, ')'])).toBe(true);
  });
});

describe('returns false if value at index two back is not number', () => {
  test('non-nested brackets', () => {
    expect(twoBackIsNumber(2, ['(', 2, '−', 2, ')'])).toBe(false);
  });
  test('right nested brackets', () => {
    expect(twoBackIsNumber(7, ['(', 2, '+', '(', 2, '−', 2, ')', ')'])).toBe(false);
  });
  test('left nested brackets', () => {
    expect(twoBackIsNumber(4, ['(', 2, '−', 2, ')', '−', 2, ')'])).toBe(false);
  });
});

describe('returns false if value at index two back does not exist', () => {
  test('non-nested brackets', () => {
    expect(twoBackIsNumber(0, ['(', 2, '−', 2, ')'])).toBe(false);
    expect(twoBackIsNumber(1, ['(', 2, '−', 2, ')'])).toBe(false);
  });
});

describe('returns false if value is string numeral', () => {
  test('non-nested brackets', () => {
    expect(twoBackIsNumber(3, ['(', '2', '−', 2, ')'])).toBe(false);
  });
});
