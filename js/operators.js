const operators = {
  '+': (leftOperand, rightOperand) => leftOperand + rightOperand,
  '−': (leftOperand, rightOperand) => leftOperand - rightOperand,
  '×': (leftOperand, rightOperand) => leftOperand * rightOperand,
  '÷': (leftOperand, rightOperand) => leftOperand / rightOperand,
  '∗∗': (leftOperand, rightOperand) => leftOperand ** rightOperand,
  '√': (operand) => Math.sqrt(operand),
};

export default operators;
