const operators = {
  '+': (leftOperand, rightOperand) => leftOperand + rightOperand,
  '−': (leftOperand, rightOperand) => leftOperand - rightOperand,
  '×': (leftOperand, rightOperand) => leftOperand * rightOperand,
  '÷': (leftOperand, rightOperand) => leftOperand / rightOperand,
  '∗∗': (leftOperand, rightOperand) => leftOperand ** rightOperand,
  '√': (leftOperand, rightOperand) => Math.sqrt(rightOperand),
};

export default operators;
