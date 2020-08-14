import parser from '../../../js/parser/index.js';

const { normaliseZeros } = parser;

describe('given a negative 0, returns positive 0', () => {
  test('one instance of negative 0', () => {
    expect(normaliseZeros([-0]))
      .toEqual([0]);
  });
  test('two instances of negative 0', () => {
    expect(normaliseZeros([-0, -0]))
      .toEqual([0, 0]);
  });
});

describe('given a positive 0, returns positive 0', () => {
  test('one instance of positive 0', () => {
    expect(normaliseZeros([0]))
      .toEqual([0]);
  });
  test('two instances of positive 0', () => {
    expect(normaliseZeros([0, 0]))
      .toEqual([0, 0]);
  });
});
