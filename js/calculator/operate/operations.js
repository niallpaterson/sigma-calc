const operations = {
  '+': (leftOperand, rightOperand) => leftOperand + rightOperand,
  '−': (leftOperand, rightOperand) => leftOperand - rightOperand,
  '×': (leftOperand, rightOperand) => leftOperand * rightOperand,
  '÷': (leftOperand, rightOperand) => leftOperand / rightOperand,
  '∗∗': (leftOperand, rightOperand) => leftOperand ** rightOperand,
  '√': (leftOperand, rightOperand) => Math.sqrt(rightOperand),
};

export default operations;
