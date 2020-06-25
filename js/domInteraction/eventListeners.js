import elements from './elements.js';
import equation from '../performCalculation/solveEquation.js';
import parseInputFormula from '../parseInputFormula/parseInputFormula.js';

const addEventListeners = {
  toNumeralBtns() {
    elements.numerals.forEach((button) => {
      button.addEventListener('click', () => {
        elements.formulaInput.value += button.textContent;
      });
    });
    return this;
  },
  toOperatorBtns() {
    elements.operators.forEach((button) => {
      button.addEventListener('click', () => {
        elements.formulaInput.value += button.textContent;
      });
    });
    return this;
  },
  toBigOperatorBtns() {
    elements.bigOperators.forEach((button) => {
      button.addEventListener('click', () => {
        equation.activeBigOperator = button.textContent;
        elements.activeBigOperator.textContent = button.textContent;
      });
    });
    return this;
  },
  toBrackets() {
    elements.brackets.forEach((button) => {
      button.addEventListener('click', () => {
        elements.formulaInput.value += button.textContent;
      });
    });
    return this;
  },
  toPeriod() {
    elements.period.addEventListener('click', () => {
      elements.formulaInput.value += '.';
    });
    return this;
  },
  toEquals() {
    elements.equals.addEventListener('click', () => {
      elements.formulaInput.value = equation.solve(
        parseInputFormula(elements.formulaInput.value),
        parseInt(elements.lowerLimit.value, 10),
        parseInt(elements.upperLimit.value, 10)
      );
    });
    return this;
  },
  toACdelete() {
    elements.ACdelete.addEventListener('click', () => {
      elements.formulaInput.value = '';
    });
    return this;
  },
};

export default addEventListeners;
