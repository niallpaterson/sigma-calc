import elements from './elements.js';
import calculateResult from './calculateResult.js';
import joinMultiDigitNumerals from './joinMultiDigitNumerals.js';
import parseInputStringNumerals from './parseInputStringNumerals.js';
import bigNotation from './bigNotation.js';


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
        bigNotation.activeBigOperator = button.textContent;
        elements.activeBigOperator.value += button.textContent;
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
      const multiDigitNumeralStringsJoined = joinMultiDigitNumerals(
        elements.formulaInput.textContent.split('')
      );
      const parsedFormula = parseInputStringNumerals(multiDigitNumeralStringsJoined);
      elements.formulaInput.value = calculateResult(parsedFormula);
    });
    return this;
  },
  toACdelete() {
    elements.ACdelete.addEventListener('click', () => {
      elements.formulaInput.value = '';
    });
    return this;
  },
  toDelete() {
    elements.delete.addEventListener('click', () => {
      elements.formulaInput.value = elements.formulaInput.value.slice(0, -1);
    });
    return this;
  },
};

export default addEventListeners;
