import elements from './elements.js';
import calculateResult from './calculateResult.js';
import joinMultiDigitNumerals from './joinMultiDigitNumerals.js';
import parseInputStringNumerals from './parseInputStringNumerals.js';

const addEventListeners = {
  toNumeralBtns() {
    elements.numerals.forEach((button) => {
      button.addEventListener('click', () => {
        elements.formulaInput.textContent += button.textContent;
      });
    });
    return this;
  },
  toOperatorBtns() {
    elements.operators.forEach((button) => {
      button.addEventListener('click', () => {
        elements.formulaInput.textContent += button.textContent;
      });
    });
    return this;
  },
  toBrackets() {
    elements.brackets.forEach((button) => {
      button.addEventListener('click', () => {
        elements.formulaInput.textContent += button.textContent;
      });
    });
    return this;
  },
  toPeriod() {
    elements.period.addEventListener('click', () => {
      elements.formulaInput.textContent += '.';
    });
    return this;
  },
  toEquals() {
    elements.equals.addEventListener('click', () => {
      const multiDigitNumeralStringsJoined = joinMultiDigitNumerals(
        elements.formulaInput.textContent.split('')
      );
      const parsedFormula = parseInputStringNumerals(multiDigitNumeralStringsJoined);
      elements.formulaInput.textContent = calculateResult(parsedFormula);
    });
    return this;
  },
  toACdelete() {
    elements.ACdelete.addEventListener('click', () => {
      elements.formulaInput.textContent = '';
    });
    return this;
  },
  toDelete() {
    elements.delete.addEventListener('click', () => {
      elements.formulaInput.textContent = elements.formulaInput.textContent.slice(0, -1);
    });
    return this;
  },
};

export default addEventListeners;
