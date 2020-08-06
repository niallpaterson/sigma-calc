import elements from './elements.js';
import equation from '../calculate/solveEquation.js';
import parseInput from '../parse_input/parseInput.js';
import highlightButton from './highlightButton.js';

const {
  formulaInput, activeBigOperator, upperLimit,
  lowerLimit, numerals, operators, bigOperators,
  brackets, ACdelete, period, equals, allButtons,
} = elements;

const addEventListeners = {
  toNumeralBtns() {
    numerals.forEach((button) => {
      button.addEventListener('click', () => {
        formulaInput.value += button.textContent;
      });
    });
    return this;
  },
  toOperatorBtns() {
    operators.forEach((button) => {
      button.addEventListener('click', () => {
        formulaInput.value += button.textContent;
      });
    });
    return this;
  },
  toBigOperatorBtns() {
    bigOperators.forEach((button) => {
      button.addEventListener('click', () => {
        equation.activeBigOperator = button.textContent;
        activeBigOperator.textContent = button.textContent;
      });
    });
    return this;
  },
  toBrackets() {
    brackets.forEach((button) => {
      button.addEventListener('click', () => {
        formulaInput.value += button.textContent;
      });
    });
    return this;
  },
  toPeriod() {
    period.addEventListener('click', () => {
      formulaInput.value += '.';
    });
    return this;
  },
  toEquals() {
    equals.addEventListener('click', () => {
      formulaInput.value = equation.solve(
        parseInput(formulaInput.value.split('')),
        parseInt(lowerLimit.value, 10),
        parseInt(upperLimit.value, 10),
      );
    });
    return this;
  },
  toACdelete() {
    ACdelete.addEventListener('click', () => {
      formulaInput.value = '';
    });
    return this;
  },
  forButtonHighlights() {
    allButtons.forEach((button) => {
      button.addEventListener('click', () => {
        highlightButton(button);
      });
      return this;
    });
  },
};


export default addEventListeners;
