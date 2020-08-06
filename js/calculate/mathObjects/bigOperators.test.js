import bigOperators from './bigOperators.js';

describe('sigma notation: correctly returns formula sum', () => {
  describe('without i values', () => {
    test('no brackets, addition, iterations: 1-2', () => {
      expect(bigOperators.sigma([2, '+', 2], 1, 2)).toEqual(8);
    });
    test('no brackets, addition, iterations: 2-3', () => {
      expect(bigOperators.sigma([2, '+', 2], 2, 3)).toEqual(8);
    });
    test('no brackets, addition, iterations: 1-3', () => {
      expect(bigOperators.sigma([2, '+', 2], 1, 3)).toEqual(12);
    });
    test('no brackets, addition, with negative, iterations: 1-2', () => {
      expect(bigOperators.sigma([1, '+', -2], 1, 2)).toEqual(-2);
    });
    test('brackets, addition, iteration 1-2', () => {
      expect(bigOperators.sigma(['(', 2, '+', 2, ')'], 1, 2)).toEqual(8);
    });
    test('right nested brackets, addition, iteration 1-2', () => {
      expect(bigOperators.sigma(['(', 2, '+', '(', 2, '+', 2, ')', ')'], 1, 2)).toEqual(12);
    });
    test('left nested brackets, addition, iteration 1-2', () => {
      expect(bigOperators.sigma(['(', 2, '+', 2, ')', '+', 2, ')'], 1, 2)).toEqual(12);
    });
  });

  describe('with i values', () => {
    test('no brackets, addition, iterations: 1-2', () => {
      expect(bigOperators.sigma([2, '+', 'i'], 1, 2)).toEqual(7);
    });
    test('no brackets, addition, iterations: 2-3', () => {
      expect(bigOperators.sigma([2, '+', 'i'], 2, 3)).toEqual(9);
    });
    test('no brackets, addition, iterations: 1-3', () => {
      expect(bigOperators.sigma([2, '+', 'i'], 1, 3)).toEqual(12);
    });
    test('no brackets, addition, with negative', () => {
      expect(bigOperators.sigma([-2, '+', 'i'], 1, 2)).toEqual(-1);
    });
    test('brackets, addition, iteration 1-2', () => {
      expect(bigOperators.sigma(['(', 'i', '+', 2, ')'], 1, 2)).toEqual(7);
    });
    test('right nested brackets, addition, iteration 1-2', () => {
      expect(bigOperators.sigma(['(', 'i', '+', '(', 2, '+', 2, ')', ')'], 1, 2)).toEqual(11);
    });
    test('left nested brackets, addition, iteration 1-2', () => {
      expect(bigOperators.sigma(['(', 'i', '+', 2, ')', '+', 2, ')'], 1, 2)).toEqual(11);
    });
  });
});

describe('sigma notation: correctly throws errors for invalid inputs', () => {
  test('operator surplus', () => {
    expect(bigOperators.sigma([2, '+', '÷', 2], 1, 2)).toBeNaN();
    expect(bigOperators.sigma([2, '×', '÷', 2], 1, 2)).toBeNaN();
    expect(bigOperators.sigma([2, '−', '÷', 2], 1, 2)).toBeNaN();
    expect(bigOperators.sigma([2, '+', '−', '÷', 2], 1, 2)).toBeNaN();
    expect(bigOperators.sigma([2, '+', '÷', '−', 2], 1, 2)).toBeNaN();
    expect(bigOperators.sigma([2, '+', '÷', 2, '÷'], 1, 2)).toBeNaN();
  });
  test('incorrectly placed brackets', () => {
    expect(bigOperators.sigma([2, '+', '(', 2], 1, 2)).toBeNaN();
    expect(bigOperators.sigma([2, ')', '÷', 2], 1, 2)).toBeNaN();
    expect(bigOperators.sigma(['(', '(', 2, '−', '÷', 2], 1, 2)).toBeNaN();
    expect(bigOperators.sigma([2, '+', '−', '÷', 2, ')', ')'], 1, 2)).toBeNaN();
    expect(bigOperators.sigma([2, '+', ')', 2], 1, 2)).toBeNaN();
    expect(bigOperators.sigma([2, '(', ')', 2], 1, 2)).toBeNaN();
    expect(bigOperators.sigma(['(', '(', 2, '−', '÷', 2], 1, 2)).toBeNaN();
    expect(bigOperators.sigma([2, '+', '−', '÷', 2, ')', ')'], 1, 2)).toBeNaN();
    expect(bigOperators.sigma([2, '+', ')', 2], 1, 2)).toBeNaN();
    expect(bigOperators.sigma([2, '(', 5, ')', 2], 1, 2)).toBeNaN();
    expect(bigOperators.sigma([')', 5, '+', 2, '('], 1, 2)).toBeNaN();
  });
});

describe('pi notation: correctly returns formula sum', () => {
  describe('without i values', () => {
    test('no brackets, addition, iterations: 1-2', () => {
      expect(bigOperators.pi([2, '+', 2], 1, 2)).toEqual(16);
    });
    test('no brackets, addition, iterations: 2-3', () => {
      expect(bigOperators.pi([2, '+', 2], 2, 3)).toEqual(16);
    });
    test('no brackets, addition, iterations: 1-3', () => {
      expect(bigOperators.pi([2, '+', 2], 1, 3)).toEqual(64);
    });
    test('no brackets, addition, with negative', () => {
      expect(bigOperators.pi([1, '+', -2], 1, 2)).toEqual(1);
    });
  });

  describe('with i values', () => {
    test('no brackets, addition, iterations: 1-2', () => {
      expect(bigOperators.pi([2, '+', 'i'], 1, 2)).toEqual(12);
    });
    test('no brackets, addition, iterations: 2-3', () => {
      expect(bigOperators.pi([2, '+', 'i'], 2, 3)).toEqual(20);
    });
    test('no brackets, addition, iterations: 1-3', () => {
      expect(bigOperators.pi([2, '+', 'i'], 1, 3)).toEqual(60);
    });
    test('no brackets, addition, with negative', () => {
      expect(bigOperators.pi([-2, '+', 'i'], 1, 2)).toEqual(0);
    });
  });
});

describe('pi notation: correctly throws errors for invalid inputs', () => {
  test('operator surplus', () => {
    expect(bigOperators.pi([2, '+', '÷', 2], 1, 2)).toBeNaN();
    expect(bigOperators.pi([2, '×', '÷', 2], 1, 2)).toBeNaN();
    expect(bigOperators.pi([2, '−', '÷', 2], 1, 2)).toBeNaN();
    expect(bigOperators.pi([2, '+', '−', '÷', 2], 1, 2)).toBeNaN();
    expect(bigOperators.pi([2, '+', '÷', '−', 2], 1, 2)).toBeNaN();
    expect(bigOperators.pi([2, '+', '÷', 2, '÷'], 1, 2)).toBeNaN();
  });
  test('incorrectly placed brackets', () => {
    expect(bigOperators.pi([2, '+', '(', 2], 1, 2)).toBeNaN();
    expect(bigOperators.pi([2, ')', '÷', 2], 1, 2)).toBeNaN();
    expect(bigOperators.pi(['(', '(', 2, '−', '÷', 2], 1, 2)).toBeNaN();
    expect(bigOperators.pi([2, '+', '−', '÷', 2, ')', ')'], 1, 2)).toBeNaN();
    expect(bigOperators.pi([2, '+', ')', 2], 1, 2)).toBeNaN();
    expect(bigOperators.pi([2, '(', ')', 2], 1, 2)).toBeNaN();
    expect(bigOperators.pi(['(', '(', 2, '−', '÷', 2], 1, 2)).toBeNaN();
    expect(bigOperators.pi([2, '+', '−', '÷', 2, ')', ')'], 1, 2)).toBeNaN();
    expect(bigOperators.pi([2, '+', ')', 2], 1, 2)).toBeNaN();
    expect(bigOperators.pi([2, '(', 5, ')', 2], 1, 2)).toBeNaN();
    expect(bigOperators.pi([')', 5, '+', 2, '('], 1, 2)).toBeNaN();
  });
});
