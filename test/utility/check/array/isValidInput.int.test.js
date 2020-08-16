import utilities from '../../../../js/utility/index.js';

const { isValidInput } = utilities;

describe('if there are syntax errors, returns false', () => {
  describe(('there are binary operators side-by-side'), () => {
    test('two operators of same type', () => {
      expect(isValidInput(['+', '+'])).toBe(false);
    });
    test('two operators of different types', () => {
      expect(isValidInput(['×', '+'])).toBe(false);
    });
    test('three operators of different types', () => {
      expect(isValidInput(['×', '+', '÷'])).toBe(false);
    });
  });
  describe(('if there are more left/right brackets than right/left'), () => {
    test('two left one right', () => {
      expect(isValidInput(['(', '(', ')'])).toBe(false);
    });
    test('two right one left', () => {
      expect(isValidInput(['(', ')', ')'])).toBe(false);
    });
    test('two right no left', () => {
      expect(isValidInput(['(', ')', ')'])).toBe(false);
    });
    test('no right one left', () => {
      expect(isValidInput(['('])).toBe(false);
    });
    test('no left one left', () => {
      expect(isValidInput([')'])).toBe(false);
    });
    test('three left one right', () => {
      expect(isValidInput(['(', '(', '(', ')'])).toBe(false);
    });
    test('three right one left', () => {
      expect(isValidInput([')', ')', '(', ')'])).toBe(false);
    });
  });
});
