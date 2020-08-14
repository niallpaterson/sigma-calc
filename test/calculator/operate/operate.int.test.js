import operations from '../../../js/calculator/operate/index.js';

const { operate } = operations;

describe('correctly returns output', () => {
  test('addition', () => {
    expect(operate([2, '+', 2], '+')).toEqual([4]);
  });
});
