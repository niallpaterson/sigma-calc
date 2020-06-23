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
      const multiDigitNumeralStringsJoined = joinMultiDigitNumerals(
        elements.formulaInput.value.split('')
      );
      const parsedFormula = parseInputStringNumerals(multiDigitNumeralStringsJoined);
      if (bigNotation.activeBigOperator === 'Σ') {
        elements.formulaInput.value = bigNotation.sigma(
          parsedFormula, parseInt(elements.lowerLimit.value, 10), parseInt(elements.upperLimit.value, 10)
        );
      } else if (bigNotation.activeBigOperator === 'Π') {
        elements.formulaInput.value = bigNotation.pi(
          parsedFormula, parseInt(elements.lowerLimit.value, 10), parseInt(elements.upperLimit.value, 10)
        );
      } else {
        elements.formulaInput.value = calculateResult(parsedFormula);
      }
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
