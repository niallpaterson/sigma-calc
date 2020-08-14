import utilities from '../../../../js/utility/index.js';

const { oneBackIsTilde } = utilities;

describe('returns true if value at previous index is negation symbol', () => {
  test('non-nested brackets', () => {
    expect(oneBackIsTilde(3, ['(', 2, '−', 2, ')'])).toBe(true);
  });
  test('right nested brackets', () => {
    expect(oneBackIsTilde(6, ['(', 2, '+', '(', 2, '−', 2, ')', ')'])).toBe(true);
  });
  test('left nested brackets', () => {
    expect(oneBackIsTilde(3, ['(', 2, '−', 2, ')', '−', 2, ')'])).toBe(true);
  });
});

describe('returns false if value at previous index is not negation symbol', () => {
  test('non-nested brackets', () => {
    expect(oneBackIsTilde(2, ['(', 2, '−', 2, ')'])).toBe(false);
  });
  test('right nested brackets', () => {
    expect(oneBackIsTilde(3, ['(', 2, '+', '(', 2, '−', 2, ')', ')'])).toBe(false);
  });
  test('left nested brackets', () => {
    expect(oneBackIsTilde(2, ['(', 2, '−', 2, ')', '−', 2, ')'])).toBe(false);
  });
});

describe('returns false if value at previous index does not exist', () => {
  test('non-nested brackets', () => {
    expect(oneBackIsTilde(0, ['(', 2, '−', 2, ')'])).toBe(false);
  });
});
