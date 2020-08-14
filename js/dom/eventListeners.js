import elements from './elements.js';
import bigNotation from '../bigNotation/index.js';
import parseInput from '../parser/parseInput.js';
import highlightButton from './highlightButton.js';

const { solveEquation } = bigNotation;

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
      formulaInput.value = solveEquation(
        activeBigOperator.textContent,
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
