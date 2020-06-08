import calculateResult from '../../js/calculateResult';

describe('correctly returns formula sum', () => {
  test('no brackets, addition', () => {
    expect(calculateResult([2, '+', 2])).toEqual(4);
  });
  test('no brackets, addition, with negative', () => {
    expect(calculateResult([2, '+', -2])).toEqual(0);
  });
  test('no brackets, subtraction', () => {
    expect(calculateResult([2, '−', 2])).toEqual(0);
  });
  test('no brackets, division', () => {
    expect(calculateResult([2, '÷', 2])).toEqual(1);
  });
  test('no brackets, multiplication', () => {
    expect(calculateResult([2, '×', 2])).toEqual(4);
  });
  test('left nested brackets, addition', () => {
    expect(calculateResult(['(', 2, '+', 2, ')', '+', 2, ')'])).toEqual(6);
  });
  test('left brackets, subtraction', () => {
    expect(calculateResult(['(', 2, '−', 2, ')', '−', 2, ')'])).toEqual(-2);
  });
  test('left nested brackets, division', () => {
    expect(calculateResult(['(', 8, '÷', 2, ')', '÷', 2, ')'])).toEqual(2);
  });
  test('left nested, multiplication', () => {
    expect(calculateResult(['(', 2, '×', 2, ')', '×', 2, ')'])).toEqual(8);
  });
  test('right nested brackets, addition', () => {
    expect(calculateResult(['(', 2, '+', '(', 2, '+', 2, ')', ')'])).toEqual(6);
  });
  test('right brackets, subtraction', () => {
    expect(calculateResult(['(', 2, '−', '(', 2, '−', 2, ')', ')'])).toEqual(2);
  });
  test('right nested brackets, division', () => {
    expect(calculateResult(['(', 8, '÷', '(', 4, '÷', 2, ')', ')'])).toEqual(4);
  });
  test('right nested, multiplication', () => {
    expect(calculateResult(['(', 2, '×', '(', 2, '×', 2, ')', ')'])).toEqual(8);
  });
});

describe('correctly throws errors for invalid inputs', () => {
  test('operator surplus', () => {
    expect(calculateResult([2, '+', '÷', 2])).toBeNaN();
    expect(calculateResult([2, '×', '÷', 2])).toBeNaN();
    expect(calculateResult([2, '−', '÷', 2])).toBeNaN();
    expect(calculateResult([2, '+', '−', '÷', 2])).toBeNaN();
    expect(calculateResult([2, '+', '÷', '−', 2])).toBeNaN();
    expect(calculateResult([2, '+', '÷', 2, '÷'])).toBeNaN();
  });
  test('incorrectly placed brackets', () => {
    expect(calculateResult([2, '+', '(', 2])).toBeNaN();
    expect(calculateResult([2, ')', '÷', 2])).toBeNaN();
    expect(calculateResult(['(', '(', 2, '−', '÷', 2])).toBeNaN();
    expect(calculateResult([2, '+', '−', '÷', 2, ')', ')'])).toBeNaN();
    expect(calculateResult([2, '+', ')', 2])).toBeNaN();
    expect(calculateResult([2, '(', ')', 2])).toBeNaN();
    expect(calculateResult(['(', '(', 2, '−', '÷', 2])).toBeNaN();
    expect(calculateResult([2, '+', '−', '÷', 2, ')', ')'])).toBeNaN();
    expect(calculateResult([2, '+', ')', 2])).toBeNaN();
    expect(calculateResult([2, '(', 5, ')', 2])).toBeNaN();
    expect(calculateResult([')', 5, '+', 2, '('])).toBeNaN();
  });
});
