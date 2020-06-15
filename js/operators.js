const operators = {
  '+': (leftOperand, rightOperand) => leftOperand + rightOperand,
  '−': (leftOperand, rightOperand) => leftOperand - rightOperand,
  '×': (leftOperand, rightOperand) => leftOperand * rightOperand,
  '÷': (leftOperand, rightOperand) => leftOperand / rightOperand,
  '∗∗': (leftOperand, rightOperand) => leftOperand ** rightOperand,
  '√': (rightOperand) => Math.sqrt(rightOperand),
};

export default operators;
