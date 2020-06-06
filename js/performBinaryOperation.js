const performBinaryOperation = {
  '+': (leftOperand, rightOperand) => leftOperand + rightOperand,
  '−': (leftOperand, rightOperand) => leftOperand - rightOperand,
  '×': (leftOperand, rightOperand) => leftOperand * rightOperand,
  '÷': (leftOperand, rightOperand) => leftOperand / rightOperand,
};

export { performBinaryOperation as default };
