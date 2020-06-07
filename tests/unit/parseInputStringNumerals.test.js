import parseInputStringNumerals from '../../js/parseInputStringNumerals';

describe('properly parses numerals', () => {
  test('array only containing numerals', () => {
    expect(parseInputStringNumerals([
      '1', '2', '3', '4', '5',
      '6', '7', '8', '9', '0',
    ]))
      .toEqual([
        1, 2, 3, 4, 5,
        6, 7, 8, 9, 0,
      ]);
  });
});

describe('does not parse non-numerals', () => {
  test('array only containing numerals', () => {
    expect(parseInputStringNumerals([
      ')', '(', '+', '/', '−', '.', '÷',
    ]))
      .toEqual([
        ')', '(', '+', '/', '−', '.', '÷',
      ]);
  });
});
